/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EventRegistrationService } from "../eventRegistration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventRegistrationCreateInput } from "./EventRegistrationCreateInput";
import { EventRegistrationWhereInput } from "./EventRegistrationWhereInput";
import { EventRegistrationWhereUniqueInput } from "./EventRegistrationWhereUniqueInput";
import { EventRegistrationFindManyArgs } from "./EventRegistrationFindManyArgs";
import { EventRegistrationUpdateInput } from "./EventRegistrationUpdateInput";
import { EventRegistration } from "./EventRegistration";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventRegistrationControllerBase {
  constructor(
    protected readonly service: EventRegistrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventRegistration })
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: EventRegistrationCreateInput
  ): Promise<EventRegistration> {
    return await this.service.create({
      data: {
        ...data,

        event: {
          connect: data.event,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EventRegistration] })
  @ApiNestedQuery(EventRegistrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<EventRegistration[]> {
    const args = plainToClass(EventRegistrationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EventRegistrationWhereUniqueInput
  ): Promise<EventRegistration | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EventRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EventRegistrationWhereUniqueInput,
    @common.Body() data: EventRegistrationUpdateInput
  ): Promise<EventRegistration | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          event: {
            connect: data.event,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EventRegistration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventRegistration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EventRegistrationWhereUniqueInput
  ): Promise<EventRegistration | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
