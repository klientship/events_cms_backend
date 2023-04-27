/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Feedback, Event } from "@prisma/client";

export class FeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackFindManyArgs>
  ): Promise<number> {
    return this.prisma.feedback.count(args);
  }

  async findMany<T extends Prisma.FeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackFindManyArgs>
  ): Promise<Feedback[]> {
    return this.prisma.feedback.findMany(args);
  }
  async findOne<T extends Prisma.FeedbackFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackFindUniqueArgs>
  ): Promise<Feedback | null> {
    return this.prisma.feedback.findUnique(args);
  }
  async create<T extends Prisma.FeedbackCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackCreateArgs>
  ): Promise<Feedback> {
    return this.prisma.feedback.create<T>(args);
  }
  async update<T extends Prisma.FeedbackUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackUpdateArgs>
  ): Promise<Feedback> {
    return this.prisma.feedback.update<T>(args);
  }
  async delete<T extends Prisma.FeedbackDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackDeleteArgs>
  ): Promise<Feedback> {
    return this.prisma.feedback.delete(args);
  }

  async getEvent(parentId: string): Promise<Event | null> {
    return this.prisma.feedback
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }
}
