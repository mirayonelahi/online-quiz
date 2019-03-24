import { types } from 'mobx-state-tree';
import axios from 'axios';
import { Result } from './Result';

export const ResultStore = types
  .model('resultStore', {
    result: types.optional(Result, {}),
    results: types.optional(types.array(Result), [])
  })
  .actions(self => ({
    setResults(results: any) {
      self.results = results;
    }
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
    afterCreate() {
      self.getAll();
    }
  }));
