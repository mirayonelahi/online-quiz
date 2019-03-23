import { types, getSnapshot } from 'mobx-state-tree';
import { Exam } from './Exam';
import { Question } from './Question';
import axios from 'axios';

export const QuestionExam = types
  .model('questiostore', {
    id: types.maybe(types.number),
    questionId: types.optional(types.number, 0),
    option1: types.optional(types.string, ''),
    option2: types.optional(types.string, ''),
    option3: types.optional(types.string, ''),
    option4: types.optional(types.string, ''),
    examId: types.optional(types.number, 1),
    question: types.maybe(Question),
    exam: types.maybe(Exam),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string)
  })
  .actions(self => ({
    setId(id: number) {
      self.id = id;
    },
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
    },
    setExamIdPlus1(examId: number) {
      self.examId = examId + 1;
    }
  }))
  .actions(self => ({
    setIdQuestionIdOption1Option2Option3Option4ExamId(
      id: number,
      questionId: number,
      option1: string,
      option2: string,
      option3: string,
      option4: string,
      examId: number
    ) {
      self.setId(id);
      self.setQuestionId(questionId);
      self.setOption1(option1);
      self.setOption2(option2);
      self.setOption3(option3);
      self.setOption4(option4);
      self.setExamId(examId);
    }
  }))
  .actions(self => ({
    onUpdate(id: number) {
      axios
        .put(`/api/questionExams/${id}`, getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(id: number) {
      axios
        .delete(`/api/questionExams/${id}`, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
