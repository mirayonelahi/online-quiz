import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const Exam = types
  .model('exam', {
    id: types.maybe(types.number),
    title: types.optional(types.string, ''),
    duration: types.optional(types.string, ''),
    subject: types.optional(types.string, ''),
    date: types.optional(types.string, ''),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string)
  }).actions(self => ({
    setId(id: number) {
      self.id = id;
    },
    setTitle(title: string) {
      self.title = title;
    },
    setDuration(duration: string) {
      self.duration = duration;
    },
    setSubject(subject: string) {
      self.subject = subject;
    },
    setDate(date: string) {
      self.date = date;
    }
  })).actions(self => ({
    setIdTitleDurationSubjectDate(id: number, title: string, duration: string, subject: string, date: string) {
      self.setId(id);
      self.setTitle(title);
      self.setDuration(duration);
      self.setSubject(subject);
      self.setDate(date);
    }
  })).actions(self => ({
    save() {
      axios
        .post('/api/exams', getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log('data saved(Exam)');
          self.setIdTitleDurationSubjectDate(0, '', '', '', '');
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(id: number) {
      axios
        .delete(`/api/exams/${id}`, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log(res);
          console.log('data deleted(Exam)');
        })
        .catch(err => {
          console.log(err);
        });
    },
    onUpdate(id: number) {
      axios
        .put(`/api/exams/${id}`, getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log('data updated(Exam)');
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
