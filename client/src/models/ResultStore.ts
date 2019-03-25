import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';
import { Result } from './Result';

export const ResultStore = types
  .model('resultStore', {
    result: types.optional(Result, {}),
    tempResults: types.optional(types.array(Result), []),
    results: types.optional(types.array(Result), [])
  })
  .actions(self => ({
    setResults(results: any) {
      self.results = results;
    }
  }))
  .actions(self => ({
    resetTempResults() {
      self.setResults([]);
    },
    pushInTempResults(amount: number) {
      for (let i = 0; i < amount; i++) {
        self.tempResults.push({});
      }
    },
  }))
  .actions(self => ({
    getAll() {
      axios
        .get('/api/results', {
          headers: { 'content-Type': 'application/json' }
        })
        .then(res => {
          console.log('getAll(results) response->', res.data);
          self.setResults(res.data);
        })
        .catch(err => {
          console.log('getAll(results) error->', err);
        });
    }
  }))
  .actions(self => ({
    save() {
      self.tempResults.map((tempResult: any) => {
        axios.post('/api/results', getSnapshot(tempResult), {
          headers: { 'Content-Type': 'application/json' }
        }).then(res => {
          console.log('Results saved: ', res.data);
        }).catch(err => {
          console.log(err);
        });
      });
      self.resetTempResults();
      self.getAll();
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.getAll();
    }
  }));
