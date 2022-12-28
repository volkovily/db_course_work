import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {OperationDTO} from "./dto/OperationDTO";
import {PermissionService} from "./PermissionService";

@Controller('permissions')
export class PermissionController {
  constructor(
      private permissionService: PermissionService,
  ) {}

  @Get('/:id')
  async get(@Param('id') id: string) {
    return this.permissionService.get(id);
  }

  @Post()
  async create(@Body() body: { name: string }) {
    return this.permissionService.create(body.name);
  }

  @Delete()
  async delete(@Body() body: { id: string }) {
    return this.permissionService.delete(body.id);
  }

  @Patch()
  async update(@Body() body: OperationDTO) {
    return this.permissionService.update(body);
  }
}