import { types } from 'mobx-state-tree';

export const QuestionExam = types.model('questiostore', {
    id: types.maybe(types.number),
    questionId: types.optional(types.number, 0),
    option1: types.optional(types.string, ''),
    option2: types.optional(types.string, ''),
    option3: types.optional(types.string, ''),
    option4: types.optional(types.string, ''),
    examId: types.optional(types.number, 0)
   })
   .actions(self => ({
     setQuestionId(questionId: number) {
        self.questionId = questionId;
     },
     setOption1(option1: string) {
        self.option1 = option1;
     },
     setOption2(option2: string) {
        self.option2 = option2;
     },
     setOption3(option3: string) {
        self.option3 = option3;
     },
     setOption4(option4: string) {
        self.option4 = option4;
     },
     setExamId(examId: number) {
        self.examId = examId;
     }
   }));