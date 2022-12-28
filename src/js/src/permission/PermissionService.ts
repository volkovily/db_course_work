import {Injectable} from "@nestjs/common";
import {PrismaService} from "../database/PrismaService";
import {OperationDTO} from "./dto/OperationDTO";
import { OperationType } from '@prisma/client'
@Injectable()
export class PermissionService {
  constructor(
      private prisma: PrismaService,
  ) {}

  async create(name: string) {
    const operation: OperationType = await this.prisma.operationType.create({
      data: {
        name
      }
    })
    return new OperationDTO(this.getStringFromBuffer(operation.id), operation.name);
  }

  async delete(id: string) {
    const operation: OperationType = await this.prisma.operationType.delete({
      where: {
        id: this.getBufferFromString(id),
      }
    })
    return new OperationDTO(this.getStringFromBuffer(operation.id), operation.name);
  }

  async get(id: string) {
    const operation: OperationType = await this.prisma.operationType.findUnique({
      where: {
        id: this.getBufferFromString(id),
      }
    });
    return new OperationDTO(this.getStringFromBuffer(operation.id), operation.name);
  }

  async update({ id, name }: OperationDTO) {
    const operation: OperationType = await this.prisma.operationType.update({
      where: {
        id: this.getBufferFromString(id),
      },
      data: {
        name,
      }
    });
    return new OperationDTO(this.getStringFromBuffer(operation.id), operation.name);
  }

  getBufferFromString(id: string): Buffer {
    if (!id) {
      return Buffer.alloc(16);
    }
    return Buffer.from(id.replace(/-/g, ''), 'hex');
  }

  getStringFromBuffer(id: Buffer): string {
    const str = id.toString('hex');
    return `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(12, 16)}-${str.slice(16, 20)}-${str.slice(20)}`;
  }
}