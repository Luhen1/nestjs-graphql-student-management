import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver{
  constructor(
    private lessonService: LessonService  
  ){}

  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string,
    ) 
  {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons(){
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLesson') assignStudentsToLessonInput: AssignStudentsToLessonInput, 
  ){
    const {lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}