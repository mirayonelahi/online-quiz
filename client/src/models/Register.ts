import { types } from 'mobx-state-tree';
import axios from 'axios';

export const Register = types
  .model('register', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    role: types.optional(types.string, ''),
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
    },
    setRole(role: string) {
      self.role = role;
    }
  }))
  .actions(self => ({
    register(newUser: any) {
      return axios
        .post('/api/register', newUser, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          console.log('register()->', res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
