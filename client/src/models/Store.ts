import { types } from 'mobx-state-tree';
import { Controller } from './Controller';
import { SubjectStore } from './SubjectStore';

export const Store = types.model('store', {
  subjectStore: types.optional(SubjectStore, {}),
  controller: types.optional(Controller, {})
});