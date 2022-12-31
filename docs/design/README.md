# Проєктування бази даних

## Модель бізнес об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

entity Access
entity Grant
entity OperationType.name
entity RequestType.name

object create #ffffff
object read #ffffff
object update #ffffff
object delete #ffffff

RequestType.name -l-* RequestType

RequestType "0.*"---"0.1" OperationType

OperationType.name -r-* OperationType

create .u.> OperationType : instanceOf
read .u.> OperationType : instanceOf
update .u.> OperationType : instanceOf
delete .u.> OperationType : instanceOf

Grant "0.*"---"1.1" RequestType

entity Role
entity Role.name

object ProjectUser #ffffff
object ProjectManager #ffffff
object WorkspaceManager #ffffff
object SystemAdministrator #ffffff

ProjectUser ..> Role : instanceOf
ProjectManager ..> Role : instanceOf
WorkspaceManager ..> Role : instanceOf
SystemAdministrator ..> Role : instanceOf
Role.name -r-* Role

Role "0.1" --- "0.*" Grant

Role "0.1" -r- "0.*" Access

entity User
entity User.username
entity User.password
entity User.email
entity User.avatar

User.username -r-* User
User.password --* User
User.email --* User
User.avatar -l-* User

User "1.1" --- "0.*" Access

entity Workspace
entity Workspace.name
entity Workspace.description
entity Workspace.manager

Workspace.name --* Workspace
Workspace.description -l-* Workspace
Workspace.manager -r-* Workspace

entity Project
entity Project.name
entity Project.description
entity Project.manager

Project.name -l-* Project
Project.description -u-* Project
Project.manager -r-* Project

entity Board
entity Board.name
entity Board.description

Board.name --* Board
Board.description --* Board
Board.projectID --* Board

entity Task
entity Task.title
entity Task.description
entity Task.deadline
entity Task.photos

Task.title --* Task
Task.description --* Task
Task.deadline -l-* Task
Task.photos -r-* Task

Task "0.*" --- "1.1" Board

Board "0.*" --- "1.1" Project

Project "0.*" --- "1.1" Workspace

entity AccessMediator

AccessMediator "0.*" -u- "1.1" Access

AccessMediator "0.*" --- "0.1" Task

AccessMediator "0.*" --- "0.1" Board

AccessMediator "0.*" --- "0.1" Project

AccessMediator "0.*" --- "0.1" Workspace

entity Status
entity Status.name

object BackLog #ffffff
object ToDo #ffffff
object inProgress #ffffff
object InReview #ffffff
object BugFound #ffffff
object Done #ffffff

BackLog .u.> Status : instanceOf
ToDo .u.> Status : instanceOf
inProgress .u.> Status : instanceOf
InReview .u.> Status : instanceOf
BugFound .u.> Status : instanceOf
Done .u.> Status : instanceOf
Status.name -l-* Status

Task "1.1" --- "0.*" Status

@enduml

</center>

## Модель Сутність-Зв'язок

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

namespace AccountManagement {

    entity User <<ENTITY>> {
        email
        password
        name
        avatar
    }

}

namespace SpaceHierarchy {

    entity Workspace <<ENTITY>>{
        name
        description
        manager
    }
    
    entity Project <<ENTITY>> {
        name
        description
        manager
    }
    
    entity Board <<ENTITY>> {
        name    
        description
    }
    
    entity Task <<ENTITY>> {
        title
        description
        photos
        deadline
    }

}

Workspace "1.1" --- "0.*" Project

Project "1.1" --- "0.*" Board

Board "1.1" --- "0.*" Task

namespace TaskManagement {

    entity Status <<ENTITY>> #ffff33{
        name
    }
    
    object BackLog #ffffff
    object ToDo #ffffff
    object inProgress #ffffff
    object InReview #ffffff
    object BugFound #ffffff
    object Done #ffffff

}

BackLog ..> Status : instanceOf
ToDo ..> Status : instanceOf
inProgress ..> Status : instanceOf
InReview ..> Status : instanceOf
BugFound ..> Status : instanceOf
Done ..> Status : instanceOf
namespace AccessPolicy {

    entity Role <<ENTITY>> #ffff00 {
        name: TEXT
    }
    
    object ProjectUser #ffffff 
    object ProjectManager #ffffff 
    object WorkspaceManager #ffffff 
    object SystemAdministrator #ffffff

    entity AccessMediator
    entity Access
    entity Grant
    entity OperationType <<ENTITY>> #ffff33{
        name
    }
    entity RequestType <<ENTITY>> {
        name
    }
    
    object create #ffffff
    object read #ffffff
    object update #ffffff
    object delete #ffffff
}
 
ProjectUser ..> Role : instanceOf 
ProjectManager ..> Role : instanceOf 
WorkspaceManager ..> Role : instanceOf 
SystemAdministrator ..> Role : instanceOf

RequestType "0.*"---"0.1" OperationType

create .u.> OperationType : instanceOf
read .u.> OperationType : instanceOf
update .u.> OperationType : instanceOf
delete .u.> OperationType : instanceOf

Grant "0.*"---"1.1" RequestType

Role "0.1" --- "0.*" Grant

Role "0.1" -r- "0.*" Access

AccessMediator "0.*" -u- "1.1" Access

AccessMediator "0.*" -r- "0.1" Task

AccessMediator "0.*" -r- "0.1" Board

AccessMediator "0.*" -r- "0.1" Project

AccessMediator "0.*" -l- "0.1" Workspace

User "1.1" --- "0.*" Access

Task "1.1" --- "0.*" Status

@enduml

</center>

## Опис ER-моделі

### User (Користувач)

Являє собою обліковий запис в якому зберігаються дані користувача.
Має поля:
- username: VARCHAR - ім'я користувача
- email: VARCHAR - адреса електронної пошти користувача
- password: VARCHAR - пароль користувача
- avatar: VARCHAR - фото, яке можна додати у профіль користувача

### Project (Проєкт)

Власне представляє собою проєкт, над яким працює команда.
Має поля:
- name: VARCHAR - ім'я проєкту
- description: VARCHAR - короткий опис проєкту, який полегшує процес онбоардингу нових членів команди 
- manager: BINARY - менеджер проєкту

Проєкт обов'язково повинен мати менеджера, і може мати лише одного.

### Task (Завдання)

Завдання, яке розташоване на дошці.
Має поля:
- title: VARCHAR - назва завдання
- description: VARCHAR - детальніший опис завдання, яке потрібно виконати
- photos: VARCHAR - додаткові фото, які можна прикріпити до опису завдання
- deadline: DATETIME - термін, до якого потрібно виконати завдання

Завдання повинно мати зв'язок з однією і тільки однією дошкою.

### Board (Дошка)

Дошка, яка створена у проєкті та містить завдання.
Має поля:
- name: VARCHAR - назва дошки
- description: VARCHAR - короткий опис дошки, її призначення 

### Status (Статус)

Статус - це стан завдання.
Має поля:
- name: VARCHAR - назва статусу

Кожне завдяння має тільки один статус. 
З часом завдання можуть переходити із одного статусу в інший.
Існують такі статуси: 
- BackLog - усі завдання, які потрібно виконати у проєкті.
- ToDo - заплановані на найближчий час завдання.
- inProgress - завдання, які виконуються.
- InReview - завдання на перевірці.
- BugFound - завдання, де знайшли помилку.
- Done - виконані завдання.


### Access

Access - це сутність-асоціація, яка зберігає в собі сукупність ролей, які надані користувачу. В таблиці може існувати необмежена кількість сутностей, які стосуються одного користувача і які стосуються однієї ролі (тобто забезпечується зв'язок один до багатьох)

### Role (Роль) 
 
Роль, яка використовується для визначення прав користувача. 
Має поля: 
- name: ENUM - назви ролей 
 
Роль може не мати прав, або може мати скільки завгодно. <br />
Роль може не мати доступів, або може мати скільки завгодно.

### Grant

Grant - це сутність-асоціація, яка зберігає сукупність прав, які має певна роль. В таблиці може існувати необмежена кількість сутностей, які стосуються ролі і які стосуються виконуваної дії над певним об'єктом (тобто забезпечується зв'язок один до багатьох)

### RequestType

RequestType - це сутність, яка містить в собі об'єкт (унікальний id в системі), якому надають певний доступ, і сам доступ, який забезпечується словником OperationType

### OperationType

OperationType - це словник, який зберігає в собі перелік дій, які можуть бути виконані над сутністю системи
- name: VARCHAR - назва дії

## Реляційна схема

![Реляційна схема](https://i.imgur.com/9nDMdXs.png)