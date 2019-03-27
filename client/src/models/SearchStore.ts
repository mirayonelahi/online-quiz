import { types } from 'mobx-state-tree';

export const SearchStore = types
  .model('searchStore', {
    searchQuery: types.optional(types.string, ''),
    searchField: types.optional(types.string, 'title')
  })
  .actions(self => ({
    setsearchQuery(searchQuery: string) {
      self.searchQuery = searchQuery;
    },
    setsearchField(searchField: string) {
      self.searchField = searchField;
    }
  }));
