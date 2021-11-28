import { Field, ObjectType, ID } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType {
    @Field(type => ID) //be sure to describe the type for graphql to understand
    id: string;
    @Field()
    name: string;
    @Field()
    startDate: string;
    @Field()
    endDate: string;
}