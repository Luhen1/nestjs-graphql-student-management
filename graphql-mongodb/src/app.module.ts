import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { Student } from './student/student.entity';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson, Student]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}


//In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.
// code first = autoSchemaFile: true
//In the schema first approach, the source of truth is GraphQL SDL (Schema Definition Language) files. SDL is a language-agnostic way to share schema files between different platforms. Nest automatically generates your TypeScript definitions (using either classes or interfaces) based on the GraphQL schemas to reduce the need to write redundant boilerplate code.

