import { types, getSnapshot } from 'mobx-state-tree';
import { Subject } from './Subject';
import axios from 'axios';

export const SubjectStore = types
  .model('subjectStore', {
    Subject: types.optional(Subject, {}),
    tempSubjects: types.optional(types.array(Subject), [{}]),
    subjects: types.optional(types.array(Subject), [])
  })
  .actions(self => ({
    resetTempSubjects() {
      self.tempSubjects.splice(0, self.tempSubjects.length);
      self.tempSubjects.push({});
    },
    setSubjects(subjects: any) {
      self.subjects = subjects;
    },
    pushInTempSubjects() {
      self.tempSubjects.push({});
    },
    deleteFromTempSubjects(index: number) {
      self.tempSubjects.splice(index, 1);
    },
  }))
  .actions(self => ({
    getAll() {
      axios
        .get('/api/subjects', {
          headers: { 'content-Type': 'application/json' }
        })
        .then(res => {
          // console.log('getAll() response->', typeof(res.data[0]));
          console.log('getAll(subjects)->', res.data);
          self.setSubjects(res.data);
        })
        .catch(err => {
          console.log('getAll(subjects)->', err);
        });
    },
  }))
  .actions(self => ({
    save() {
      self.tempSubjects.map((tempSubject: any, index: number) => {
        if (index < self.tempSubjects.length - 1) {
          axios.post('/api/subjects', getSnapshot(tempSubject), {
            headers: { 'Content-Type': 'application/json' }
          }).then(res => {
            console.log('Subject saved: ', res.data);
          }).catch(err => {
            console.log(err);
          });
        }
      });
      self.resetTempSubjects();
      self.getAll();
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.getAll();
    },
  }));