import { types } from 'mobx-state-tree';

export const Controller = types
  .model('controller', {
    sidebarClose: types.optional(types.boolean, true),
    loggedIn: types.optional(types.boolean, false),
    userRole: types.optional(types.string, 'default'),
    examSettingDisplayTable: types.optional(types.boolean, false),
    toggleTrial: types.optional(types.boolean, false),
    examStartTime: types.optional(types.number, Date.parse(localStorage.examStartTime))
  })
  .actions(self => ({
    toggleSidebarClose(sidebarClose: boolean) {
      self.sidebarClose = !sidebarClose;
      console.log('toggleSidebarClose');
    },
    loggedInTrue() {
      self.loggedIn = true;
    },
    loggedInFalse() {
      self.loggedIn = false;
    },
    toggleExamSettingDisplayTable(examSettingDisplayTable: boolean) {
      self.examSettingDisplayTable = !examSettingDisplayTable;
    },
    toggleButton(toggleTrial: Boolean) {
      self.toggleTrial = !toggleTrial;
    },
    setUserRole(userRole: string) {
      self.userRole = userRole;
      console.log('setUserRole()->', userRole);
    }
    // setTimesave(examStartTime: any) {
    //   self.examStartTime = examStartTime; 
    // }
  }))
  .actions(self => ({
    afterCreate() {
      if (localStorage.user) {
        self.loggedInTrue();
        self.setUserRole(JSON.parse(localStorage.user).role);
      } else if (!localStorage.user) {
        self.loggedInFalse();
      }
    }
  }));
