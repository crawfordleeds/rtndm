/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TesfdaWhereInput } from "./TesfdaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TesfdaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TesfdaWhereInput,
  })
  @ValidateNested()
  @Type(() => TesfdaWhereInput)
  @IsOptional()
  @Field(() => TesfdaWhereInput, {
    nullable: true,
  })
  every?: TesfdaWhereInput;

  @ApiProperty({
    required: false,
    type: () => TesfdaWhereInput,
  })
  @ValidateNested()
  @Type(() => TesfdaWhereInput)
  @IsOptional()
  @Field(() => TesfdaWhereInput, {
    nullable: true,
  })
  some?: TesfdaWhereInput;

  @ApiProperty({
    required: false,
    type: () => TesfdaWhereInput,
  })
  @ValidateNested()
  @Type(() => TesfdaWhereInput)
  @IsOptional()
  @Field(() => TesfdaWhereInput, {
    nullable: true,
  })
  none?: TesfdaWhereInput;
}
export { TesfdaListRelationFilter };
