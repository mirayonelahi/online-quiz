import { types } from 'mobx-state-tree';
// import axios from 'axios';

export const SubjectStore = types
  .model('subjectStore', {
    subjects: types.optional(types.array(types.string), [])
  })
  .actions(self => ({
    setSubjects(subjects: any) {
      self.subjects = subjects;
    }
  }));
