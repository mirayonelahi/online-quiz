import { Subject } from './Subject';
import { types } from 'mobx-state-tree';
import { ExamStore } from './ExamStore';

export const Store = types.model('store', {
  examStore: types.optional(ExamStore, {}),
  Subject: types.optional(Subject, {})
});