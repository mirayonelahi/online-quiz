import { types } from 'mobx-state-tree';
import axios from 'axios';

export const Login = types
  .model('login', {
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    errors: types.optional(types.array(types.string), [])
  })
  .actions(self => ({
    setEmail(email: string) {
      self.email = email;
    },
    setPassword(password: string) {
      self.password = password;
    }
  }))
  .actions(self => ({
    login(user: any) {
      return axios
        .post(
          '/api/login',
          {
            email: user.email,
            password: user.password
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => {
          localStorage.setItem('usertoken', res.data.token);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProfile() {
      return axios
        .get(
          '/api/profile',
          {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
          }
        )
        .then(res => {
          console.log('getProfile()->', res);
          // return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }));
