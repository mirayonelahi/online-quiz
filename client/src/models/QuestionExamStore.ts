import { types } from 'mobx-state-tree';
import { QuestionExam } from './QuestionExam';

export const QuestionExamStore = types.model('questiostore', {
    questionExams: types.optional(types.array(QuestionExam), [])
   })
   .actions(self => ({
      setQuestionExams(questionExams: any) {
        self.questionExams = questionExams;
      }
    }));