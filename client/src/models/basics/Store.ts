import { types } from 'mobx-state-tree';
import { Controller } from './Controller';
import { SubjectStore } from '../subject/SubjectStore';
import { QuestionStore } from '../question/QuestionStore';
import { ExamStore } from '../exam/ExamStore';
import { QuestionExamStore } from '../questionExam/QuestionExamStore';
import { ResultStore } from '../result/ResultStore';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';

export const Store = types.model('store', {
  subjectStore: types.optional(SubjectStore, {}),
  questionStore: types.optional(QuestionStore, {}),
  examStore: types.optional(ExamStore, {}),
  questionExamStore: types.optional(QuestionExamStore, {}),
  resultStore: types.optional(ResultStore, {}),
  controller: types.optional(Controller, {}),
  login: types.optional(Login, {}),
  register: types.optional(Register, {})
});