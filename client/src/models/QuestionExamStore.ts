import { types } from 'mobx-state-tree';
import { QuestionExam } from './QuestionExam';

export const QuestionExamStore = types.model('questiostore', {
  tempQuestionExams: types.optional(types.array(QuestionExam), [{}]),
  questionExams: types.optional(types.array(QuestionExam), [])
})
  .actions(self => ({
    setQuestionExams(questionExams: any) {
      self.questionExams = questionExams;
    }
  }))
  .actions(self => ({
    pushInTempQuestionExams() {
      self.tempQuestionExams.push({});
    },
    deleteFromTempQuestionExams(index: number) {
      self.tempQuestionExams.splice(index, 1);
    }
  }));