import { types, getSnapshot } from 'mobx-state-tree';
import { QuestionExam } from './QuestionExam';
import axios from 'axios';

export const QuestionExamStore = types.model('questiostore', {
  questionExam: types.optional(QuestionExam, {}),
  tempQuestionExams: types.optional(types.array(QuestionExam), [{}]),
  questionExams: types.optional(types.array(QuestionExam), [])
})
  .actions(self => ({
    setQuestionExams(questionExams: any) {
      self.questionExams = questionExams;
    },
    resetTempQuestionExams() {
      self.tempQuestionExams.splice(0, self.tempQuestionExams.length);
      self.tempQuestionExams.push({});
    },
  }))
  .actions(self => ({
    pushInTempQuestionExams() {
      self.tempQuestionExams.push({});
    },
    deleteFromTempQuestionExams(index: number) {
      self.tempQuestionExams.splice(index, 1);
    }
  }))
  .actions(self => ({
    getAll() {
      axios
        .get('/api/questionExams', {
          headers: { 'content-Type': 'application/json' }
        })
        .then(res => {
          // console.log('getAll() response->', typeof(res.data[0]));
          console.log('getAll(questionExams)->', res.data);
          self.setQuestionExams(res.data);
        })
        .catch(err => {
          console.log('getAll(questionExams->', err);
        });
    },
  }))
  .actions(self => ({
    save() {
      self.tempQuestionExams.map((tempQuestionExam: any, index: number) => {
        if (index < self.tempQuestionExams.length - 1) {
          axios.post('/api/questionExams', getSnapshot(tempQuestionExam), {
            headers: { 'Content-Type': 'application/json' }
          }).then(res => {
            console.log('questionExams saved: ', res.data);
            self.resetTempQuestionExams();
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