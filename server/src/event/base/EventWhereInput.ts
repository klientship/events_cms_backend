/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BranchWhereUniqueInput } from "../../branch/base/BranchWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventRegistrationListRelationFilter } from "../../eventRegistration/base/EventRegistrationListRelationFilter";
import { EnumEventEventType } from "./EnumEventEventType";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class EventWhereInput {
  @ApiProperty({
    required: false,
    type: () => BranchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BranchWhereUniqueInput)
  @IsOptional()
  @Field(() => BranchWhereUniqueInput, {
    nullable: true,
  })
  branch?: BranchWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EventRegistrationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventRegistrationListRelationFilter)
  @IsOptional()
  @Field(() => EventRegistrationListRelationFilter, {
    nullable: true,
  })
  eventRegistrations?: EventRegistrationListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @IsOptional()
  @Field(() => EnumEventEventType, {
    nullable: true,
  })
  eventType?: "Individual" | "Team";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  img?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  venue?: StringNullableFilter;
}

export { EventWhereInput as EventWhereInput };
