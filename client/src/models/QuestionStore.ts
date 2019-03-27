import { Question } from './Question';
import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';
import { SearchStore } from './SearchStore';

export const QuestionStore = types
  .model('questiostore', {
    question: types.optional(Question, {}),
    tempQuestions: types.optional(types.array(Question), [{}]),
    questions: types.optional(types.array(Question), []),
    searchStore: types.optional(SearchStore, {})
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
    }
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
    }
  }))
  .actions(self => ({
    save() {
      self.tempQuestions.map((tempQuestion: any, index: number) => {
        if (index < self.tempQuestions.length - 1) {
          axios
            .post('/api/questions', getSnapshot(tempQuestion), {
              headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
              console.log('Questions saved: ', res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
      self.resetTempQuestions();
      self.getAll();
    }
  }))
  .actions(self => ({
    afterCreate() {
      self.getAll();
    },
    onSearch(field: string, query: string) {
      if (query === '') {
        console.log('empty query');
        self.getAll();
      } else {
        axios
          .get(`/api/search/questions/${field}/${query}`, {
            headers: { 'Content-Type': 'application/json' }
          })
          .then(res => {
            console.log('from search', res.data);
            self.setQuestions(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        // self.getAll();
      }
    }
  }));
