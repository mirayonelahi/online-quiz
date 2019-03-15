import { types } from 'mobx-state-tree';

export const Subject = types
  .model('subject', {
    subjects: types.optional(types.array(types.string), [])
  })
  .actions(self => ({
    setSubjects(subjects: any) {
      self.subjects = subjects;
    },
  }));
