import { types } from 'mobx-state-tree';
import axios from 'axios';
import { Exam } from './Exam';

export const ExamStore = types
  .model('examStore', {
    exam: types.optional(Exam, {}),
    exams: types.optional(types.array(Exam), [])
  })
  .actions(self => ({
    setExams(exams: any) {
      self.exams = exams;
    }
  }))
  .actions(self => ({
    getAll() {
      axios
        .get('/api/exams', {
          headers: { 'content-Type': 'application/json' }
        })
        .then(res => {
          console.log('getAll(examStore) response->', res.data);
          self.setExams(res.data);
        })
        .catch(err => {
          console.log('getAll(examStore) error->', err);
        });
    }
  }))
  .actions(self => ({
    afterCreate() {
      self.getAll();
    }
  }));
