import { types } from 'mobx-state-tree';
import { Controller } from './Controller';
import { SubjectStore } from './SubjectStore';
import { QuestionStore } from './QuestionStore';
import { ExamStore } from './ExamStore';
import { QuestionExamStore } from './QuestionExamStore';

export const Store = types.model('store', {
  subjectStore: types.optional(SubjectStore, {}),
  questionStore: types.optional(QuestionStore, {}),
  examStore: types.optional(ExamStore, {}),
  questionExamStore: types.optional(QuestionExamStore, {}),
  controller: types.optional(Controller, {})
});