import { types } from 'mobx-state-tree';

export const Controller = types.model('controller', {
  sidebarClose: types.optional(types.boolean, true),
  examSettingDisplayTable: types.optional(types.boolean, false)
}).actions(self => ({
  toggleSidebarClose(sidebarClose: boolean) {
    self.sidebarClose = !sidebarClose;
  },
  toggleExamSettingDisplayTable(examSettingDisplayTable: boolean) {
    self.examSettingDisplayTable = !examSettingDisplayTable;
  }
}));