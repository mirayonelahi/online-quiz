import { types } from 'mobx-state-tree';
import { Controller } from './Controller';
import { SubjectStore } from './SubjectStore';
import { QuestionStore } from './QuestionStore';

export const Store = types.model('store', {
  subjectStore: types.optional(SubjectStore, {}),
  questionStore: types.optional(QuestionStore, {}),
  controller: types.optional(Controller, {})
});