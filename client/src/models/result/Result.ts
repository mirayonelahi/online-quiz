import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';
import { QuestionExam } from '../questionExam/QuestionExam';
import { Exam } from '../exam/Exam';

export const Result = types.model('result', {
  id: types.maybe(types.number),
  givenAnswer: types.maybeNull(types.string),
  marks: types.optional(types.number, 0),
  questionExamId: types.optional(types.number, 0),
  question_exam: types.maybe(QuestionExam), // foreign key hishebe question_exam ashe. as table er nam question_exams
  examId: types.optional(types.number, 0),
  exam: types.maybe(Exam),
  created_at: types.maybe(types.string),
  updated_at: types.maybe(types.string)
})
.actions(self => ({
  setId(id: number) {
    self.id = id;
  },
  setGivenAnswer(givenAnswer: string) {
    self.givenAnswer = givenAnswer;
  },
  setMarks(marks: number) {
    self.marks = marks;
  },
  setQuestionExamId(questionExamId: number) {
    self.questionExamId = questionExamId;
  },
  setQuestionExam(questionExam: any) {
    let tempQuestionExam = {...questionExam};
    self.question_exam = tempQuestionExam;
  },
  setExamId(examId: number) {
    self.examId = examId;
  },
  setExam(exam: any) {
    let tempExam = {...exam};
    self.exam = tempExam;
  }
})).actions(self => ({
  setIdGivenAnswerMarksQuestionExamIdExamId(
    id: number, givenAnswer: string, marks: number, questionExamId: number, examId: number) {
    self.setId(id);
    self.setGivenAnswer(givenAnswer);
    self.setMarks(marks);
    self.setQuestionExamId(questionExamId);
    self.setExamId(examId);
  }
})).actions(self => ({
  save() {
    axios
      .post('/api/results', getSnapshot(self), {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log('data saved(Result)');
        self.setIdGivenAnswerMarksQuestionExamIdExamId(0, '', 0, 0, 0);
      })
      .catch(err => {
        console.log(err);
      });
  },
  onDelete(id: number) {
    axios
      .delete(`/api/results/${id}`, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log('data deleted(Result)');
      })
      .catch(err => {
        console.log(err);
      });
  },
  onUpdate(id: number) {
    axios
      .put(`/api/results/${id}`, getSnapshot(self), {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log('data updated(Exam)=>');
        self.setIdGivenAnswerMarksQuestionExamIdExamId(0, '', 0, 0, 0);
      })
      .catch(err => {
        console.log(err);
      });
  }
}));
