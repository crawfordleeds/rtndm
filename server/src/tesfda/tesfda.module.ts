import { Module } from "@nestjs/common";
import { TesfdaModuleBase } from "./base/tesfda.module.base";
import { TesfdaService } from "./tesfda.service";
import { TesfdaController } from "./tesfda.controller";
import { TesfdaResolver } from "./tesfda.resolver";

@Module({
  imports: [TesfdaModuleBase],
  controllers: [TesfdaController],
  providers: [TesfdaService, TesfdaResolver],
  exports: [TesfdaService],
})
export class TesfdaModule {}
