import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import {
  Card,
  Button,
  FormGroup,
  InputGroup
} from '@blueprintjs/core';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const Register = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { register } = props.store!;
    return (
      <Card className="w-50 mAuto">
        <div className="bp3-control-group pa3 flex flex-column">
          <h2 className="mb2 b tc f2 bg-light-green br3 pa1">Register</h2>
          <div className="bp3-input-group w-100">
            <FormGroup label="First Name" labelFor="firstName">
              <InputGroup
                id="firstName"
                placeholder="Mahmoodun"
                leftIcon="envelope"
                value={register.firstName}
                onChange={(e: any) => {
                  register.setFirstName(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="bp3-input-group w-100">
            <FormGroup label="Last Name" labelFor="lastName">
              <InputGroup
                id="lastName"
                placeholder="Nabi"
                leftIcon="envelope"
                value={register.lastName}
                onChange={(e: any) => {
                  register.setLastName(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="bp3-input-group w-100">
            <FormGroup label="Email Address" labelFor="email">
              <InputGroup
                id="email"
                placeholder="some@xyz.com"
                leftIcon="envelope"
                value={register.email}
                onChange={(e: any) => {
                  register.setEmail(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="bp3-input-group w-100">
            <FormGroup label="Password" labelFor="password">
              <InputGroup
                id="password"
                placeholder="******"
                leftIcon="key"
                value={register.password}
                onChange={(e: any) => {
                  register.setPassword(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="bp3-input-group w-100">
            <FormGroup label="Role" labelFor="role">
              <div className="bp3-select bp3-fill">
                <select
                  value={register.role}
                  onChange={(e: any) => {
                    e.preventDefault();
                    register.setRole(e.target.value);
                  }}
                >
                  <option value="">Click to Choose</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </FormGroup>
          </div>
          <Button
            type="submit"
            className="bp3-button bp3-icon-inbox-update
                                    bp3-intent-success bp3-popover-dismiss pointer
                                    br2Important mv1 bg-animate w-100 noOutline"
            onClick={(e: any) => {
              e.preventDefault();
              const newUSer = {
                name: register.firstName + ' ' + register.lastName,
                email: register.email,
                role: register.role,
                password: register.password,
              };
              register.register(newUSer).then( res => {
                console.log('registered', res);
                // return window.location.href = '/';
              });
            }}
          >
            Register
          </Button>
        </div>
      </Card>
    );
  })
);
