import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TesfdaResolverBase } from "./base/tesfda.resolver.base";
import { Tesfda } from "./base/Tesfda";
import { TesfdaService } from "./tesfda.service";

@graphql.Resolver(() => Tesfda)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TesfdaResolver extends TesfdaResolverBase {
  constructor(
    protected readonly service: TesfdaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
