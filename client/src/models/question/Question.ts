import { Subject } from '../subject/Subject';
import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

export const Question = types
  .model('question', {
    id: types.maybe(types.number),
    title: types.optional(types.string, ''),
    answer: types.optional(types.string, ''),
    explanation: types.optional(types.string, ''),
    subjectId: types.optional(types.number, 0),
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
    setAnswer(answer: string) {
      self.answer = answer;
    },
    setExplanation(explanation: string) {
      self.explanation = explanation;
    },
    setSubjectId(subjectId: number) {
      self.subjectId = subjectId;
    }
  }))
  .actions(self => ({
    setIdTitleAnswerExplanationSubjectId(
      id: number,
      title: string,
      answer: string,
      explanation: string,
      subjectId: number
    ) {
      self.setId(id);
      self.setTitle(title);
      self.setAnswer(answer);
      self.setExplanation(explanation);
      self.setSubjectId(subjectId);
    },
    onUpdate(id: number) {
      axios
        .put(`/api/questions/${id}`, getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(id: number) {
      axios
        .delete(`/api/questions/${id}`, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
