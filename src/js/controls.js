const { v4: uuid } = require("uuid");
const { Router } = require("express");
const connection = require("./database");

const router = Router();

const decodeId = (bufferArray) => {
  return Buffer.from(bufferArray).toString("hex");
};

const ERRORS = {
  SERVER_ERROR: "Error on server. Try later",
  ALL_FIELDS_REQUIRED: "Required fields are missing",
  NOT_FOUND: "Board was not found. Check the id",
};

const sql = {
  getAllBoards: "SELECT * FROM board",
  createBoard: `INSERT INTO board(id, name, description, project_id) VALUES (unhex(?), ?, ?, unhex(?))`,
  getBoard: `SELECT * FROM board WHERE id = unhex(?)`,
  updateBoard: `UPDATE board SET name = ?, description = ?, project_id = unhex(?) WHERE id = unhex(?)`,
  deleteBoard: `DELETE FROM board WHERE id = unhex(?)`,
};

router.get("/boards", (req, res) => {
  connection.query(sql.getAllBoards, (err, boards) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = boards.map(
      ({ id, name, description, project_id }) => ({
        name,
        description,
        id: decodeId(id),
        project_id: decodeId(project_id),
      })
    );

    res.status(200).json({
      data: convertedData,
    });
  });
});

router.get("/board/:id", (req, res) => {
  const { id } = req.params;
  connection.query(sql.getBoard, [id], (err, [board]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!board) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    res.status(200).json({
      data: {
        ...board,
        id: decodeId(board.id),
        project_id: decodeId(board.project_id),
      },
    });
  });
});

router.post("/board", (req, res) => {
  const { name, description, project_id } = req.body;

  if (!(name && description && project_id)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    });
    return;
  }
  const id = uuid().replaceAll("-", "");

  connection.query(
    sql.createBoard,
    [id, name, description, project_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      res.status(200).json({
        message: "Successfully created board - " + name,
      });
    }
  );
});

router.put("/board/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `select * from board where id = unhex("${id}")`,
    (err, [board]) => {
      if (err) {
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      if (!board) {
        res.status(404).json({
          message: ERRORS.NOT_FOUND,
        });
        return;
      }

      const { name, description, project_id } = {
        ...board,
        project_id: decodeId(board.project_id),
        ...req.body,
      };

      connection.query(
        sql.updateBoard,
        [name, description, project_id, id],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              message: ERRORS.SERVER_ERROR,
            });
            return;
          }

          res.status(200).json({
            message: "Successfully updated board " + name,
          });
        }
      );
    }
  );
});

router.delete("/board/:id", (req, res) => {
  const { id } = req.params;

  connection.query(sql.deleteBoard, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      message: "Successfully deleted board",
    });
  });
});

module.exports = router;
