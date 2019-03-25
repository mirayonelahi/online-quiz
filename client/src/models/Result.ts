import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';
import { QuestionExam } from './QuestionExam';
import { Exam } from './Exam';

export const Result = types.model('result', {
  id: types.maybe(types.number),
  givenAnswer: types.maybeNull(types.string),
  marks: types.optional(types.number, 0),
  questionExamId: types.maybe(types.number),
  questionExam: types.maybe(QuestionExam),
  examId: types.maybe(types.number),
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
    console.log('setQuestionExamId', questionExamId);
  },
  setQuestionExam(questionExam: any) {
    let tempQuestionExam = {...questionExam};
    self.questionExam = tempQuestionExam;
  },
  setExamId(examId: number) {
    self.examId = examId;
    console.log('setExamId', examId);
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
