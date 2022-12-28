import { Module } from '@nestjs/common';
import {PermissionController} from "./permission/PermissionController";
import {PermissionService} from "./permission/PermissionService";
import {PrismaService} from "./database/PrismaService";

@Module({
  controllers: [PermissionController],
  providers: [PermissionService, PrismaService],
})
export class AppModule {}
