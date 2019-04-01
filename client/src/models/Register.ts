import { types } from 'mobx-state-tree';
import axios from 'axios';

export const Register = types
  .model('register', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    password: types.optional(types.string, '')
  })
  .actions(self => ({
    setFirstName(firstName: string) {
      self.firstName = firstName;
    },
    setLastName(lastName: string) {
      self.lastName = lastName;
    },
    setEmail(email: string) {
      self.email = email;
    },
    setPassword(password: string) {
      self.password = password;
    }
  }))
  .actions(self => ({
    register(newUser: any) {
      return axios
        .post('/api/register', newUser, {
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
