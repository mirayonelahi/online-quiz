import { types } from 'mobx-state-tree';
import { Controller } from './Controller';
import { SubjectStore } from './SubjectStore';
import { QuestionStore } from './QuestionStore';
import { ExamStore } from './ExamStore';
import { QuestionExamStore } from './QuestionExamStore';
import { ResultStore } from './ResultStore';
import { Login } from './Login';
import { Register } from './Register';

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