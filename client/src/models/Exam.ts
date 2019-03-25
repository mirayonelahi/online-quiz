import { Subject } from './Subject';
import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const Exam = types
  .model('exam', {
    id: types.maybe(types.number),
    title: types.optional(types.string, ''),
    subjectId: types.optional(types.number, 0),
    negativeMark: types.optional(types.number, 0),
    duration: types.optional(types.string, ''),
    date: types.maybeNull(types.string),
    subject: types.maybe(Subject),
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
    setNegativeMark(negativeMark: number) {
      self.negativeMark = negativeMark;
    },
    setDuration(duration: string) {
      self.duration = duration;
    },
    setSubjectId(subjectId: number) {
      self.subjectId = subjectId;
    },
    setDate(date: string) {
      self.date = date;
    },
    setSubject(subject: any) {
      let tempSubject = {...subject};
      self.subject = tempSubject;
    }
  }))
  .actions(self => ({
    setIdTitleDurationSubjectIdDateNegativeMark(
      id: number,
      title: string,
      duration: string,
      subjectId: number,
      date: string,
      negativeMark: number
    ) {
      self.setId(id);
      self.setTitle(title);
      self.setDuration(duration);
      self.setSubjectId(subjectId);
      self.setDate(date);
      self.setNegativeMark(negativeMark);
    },
    setIdTitleDurationSubjectIdDateNegativeMarkSubject(
      id: number,
      title: string,
      duration: string,
      subjectId: number,
      date: string,
      negativeMark: number,
      subject: any
    ) {
      self.setId(id);
      self.setTitle(title);
      self.setDuration(duration);
      self.setSubjectId(subjectId);
      self.setDate(date);
      self.setNegativeMark(negativeMark);
      self.setSubject(subject);
    }
  }))
  .actions(self => ({
    save() {
      axios
        .post('/api/exams', getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log('data saved(Exam)');
          self.setIdTitleDurationSubjectIdDateNegativeMark(0, '', '', 0, '', 0);
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
          console.log('data updated(Exam)=>');
          self.setIdTitleDurationSubjectIdDateNegativeMark(0, '', '', 0, '', 0);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
