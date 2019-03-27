import { types } from 'mobx-state-tree';

export const Controller = types
  .model('controller', {
    sidebarClose: types.optional(types.boolean, true),
    examSettingDisplayTable: types.optional(types.boolean, false),
    toggleTrial: types.optional(types.boolean, false),
    examStartTime: types.optional(types.number, Date.parse(localStorage.examStartTime))
  })
  .actions(self => ({
    toggleSidebarClose(sidebarClose: boolean) {
      self.sidebarClose = !sidebarClose;
    },
    toggleExamSettingDisplayTable(examSettingDisplayTable: boolean) {
      self.examSettingDisplayTable = !examSettingDisplayTable;
    },
    toggleButton(toggleTrial: Boolean) {
      self.toggleTrial = !toggleTrial;
    },
    // setTimesave(examStartTime: any) {
    //   self.examStartTime = examStartTime; 
    // }
  }));
