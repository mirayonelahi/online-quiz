import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const Subject = types
  .model('subject', {
    id: types.maybe(types.number),
    title: types.optional(types.string, ''),
    code: types.optional(types.string, ''),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string)
  })
  .actions(self => ({
    setId(id: number) {
      self.id = id;
    },
    setTitle(title: string) {
      self.title = title;
    },
    setCode(code: string) {
      self.code = code;
    },
  }))
  .actions(self => ({
    setIdTitleCode(id: number, title: string, code: string) {
      self.setId(id);
      self.setTitle(title);
      self.setCode(code);
    },
    onUpdate(id: number) {
      axios.put(
        `/api/subjects/${id}`, getSnapshot(self),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      ).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
    onDelete(id: number) {
      axios.delete(`/api/subjects/${id}`, {
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
  }));
