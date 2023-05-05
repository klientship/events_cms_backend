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
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { EventRegistrationUpdateManyWithoutEventsInput } from "./EventRegistrationUpdateManyWithoutEventsInput";
import { EnumEventEventType } from "./EnumEventEventType";

@InputType()
class EventUpdateInput {
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
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EventRegistrationUpdateManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => EventRegistrationUpdateManyWithoutEventsInput)
  @IsOptional()
  @Field(() => EventRegistrationUpdateManyWithoutEventsInput, {
    nullable: true,
  })
  eventRegistrations?: EventRegistrationUpdateManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @IsOptional()
  @Field(() => EnumEventEventType, {
    nullable: true,
  })
  eventType?: "Individual" | "Team" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  img?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  venue?: string | null;
}

export { EventUpdateInput as EventUpdateInput };
