import { Question } from './Question';
import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const QuestionStore = types.model('questiostore', {
 Question: types.optional(Question, {}),
 tempQuestions: types.optional(types.array(Question), [{}]),
 questions: types.optional(types.array(Question), [])
})
.actions(self => ({
  resetTempQuestions() {
    self.tempQuestions.splice(0, self.tempQuestions.length);
    self.tempQuestions.push({});
  },
  setQuestions(questions: any) {
    self.questions = questions;
  },
  pushInTempQuestions() {
    self.tempQuestions.push({});
  },
  deleteFromTempQuestions(index: number) {
    self.tempQuestions.splice(index, 1);
  },
}))
.actions(self => ({
  getAll() {
    axios
      .get('/api/questions', {
        headers: { 'content-Type': 'application/json' }
      })
      .then(res => {
        // console.log('getAll() response->', typeof(res.data[0]));
        console.log('getAll(Questions)->', res.data);
        self.setQuestions(res.data);
      })
      .catch(err => {
        console.log('getAll(Questions->', err);
      });
  },
}))
.actions(self => ({
  save() {
    self.tempQuestions.map((tempQuestions: any, index: number) => {
      if (index < self.tempQuestions.length - 1) {
        axios.post('/api/questions', getSnapshot(tempQuestions), {
          headers: { 'Content-Type': 'application/json' }
        }).then(res => {
          console.log('Questions saved: ', res.data);
          self.resetTempQuestions();
          self.getAll();
        }).catch(err => {
          console.log(err);
        });
      }
    });
  },
}))
.actions(self => ({
  afterCreate() {
    self.getAll();
  },
}));