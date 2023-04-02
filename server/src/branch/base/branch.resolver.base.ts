/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBranchArgs } from "./CreateBranchArgs";
import { UpdateBranchArgs } from "./UpdateBranchArgs";
import { DeleteBranchArgs } from "./DeleteBranchArgs";
import { BranchFindManyArgs } from "./BranchFindManyArgs";
import { BranchFindUniqueArgs } from "./BranchFindUniqueArgs";
import { Branch } from "./Branch";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { BranchService } from "../branch.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Branch)
export class BranchResolverBase {
  constructor(
    protected readonly service: BranchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "read",
    possession: "any",
  })
  async _branchesMeta(
    @graphql.Args() args: BranchFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Branch])
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "read",
    possession: "any",
  })
  async branches(@graphql.Args() args: BranchFindManyArgs): Promise<Branch[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Branch, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "read",
    possession: "own",
  })
  async branch(
    @graphql.Args() args: BranchFindUniqueArgs
  ): Promise<Branch | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Branch)
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "create",
    possession: "any",
  })
  async createBranch(@graphql.Args() args: CreateBranchArgs): Promise<Branch> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Branch)
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "update",
    possession: "any",
  })
  async updateBranch(
    @graphql.Args() args: UpdateBranchArgs
  ): Promise<Branch | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Branch)
  @nestAccessControl.UseRoles({
    resource: "Branch",
    action: "delete",
    possession: "any",
  })
  async deleteBranch(
    @graphql.Args() args: DeleteBranchArgs
  ): Promise<Branch | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async events(
    @graphql.Parent() parent: Branch,
    @graphql.Args() args: EventFindManyArgs
  ): Promise<Event[]> {
    const results = await this.service.findEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}