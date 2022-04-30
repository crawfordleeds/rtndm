import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TesfdaServiceBase } from "./base/tesfda.service.base";

@Injectable()
export class TesfdaService extends TesfdaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
