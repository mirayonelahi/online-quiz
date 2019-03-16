import { Subject } from './Subject';
import { types } from 'mobx-state-tree';
import { ExamStore } from './ExamStore';
import { Controller } from './Controller';

export const Store = types.model('store', {
  examStore: types.optional(ExamStore, {}),
  Subject: types.optional(Subject, {}),
  controller: types.optional(Controller, {})
});