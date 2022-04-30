import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TesfdaService } from "./tesfda.service";
import { TesfdaControllerBase } from "./base/tesfda.controller.base";

@swagger.ApiTags("tesfdas")
@common.Controller("tesfdas")
export class TesfdaController extends TesfdaControllerBase {
  constructor(
    protected readonly service: TesfdaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
