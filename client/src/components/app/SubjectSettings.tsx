import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  Button,
  TagInput
} from '@blueprintjs/core';
import { Subject } from 'src/models/Subject';

export const SubjectSettings = observer(
  (props: { subject: typeof Subject.Type }) => {
    return (
      <Card elevation={Elevation.THREE} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Subject Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100">
          <form className="w-100 subjectSettingsForm">
            <div className="w-100 ph3">
              <FormGroup
                helperText="Enter Subject Title"
                label="Title"
                labelFor="title"
                labelInfo="(required)"
              >
                <TagInput
                  addOnBlur={true}
                  leftIcon="book"
                  addOnPaste={true}
                  separator=","
                  onChange={(values: string[]) => {
                    props.subject.setSubjects(values);
                  }}
                  placeholder="E.g. Biology, Zoology, Mathmatics"
                  rightElement={
                    <Button
                      icon="cross"
                      minimal={true}
                      onClick={(e: any) => {
                        props.subject.setSubjects([]);
                      }}
                    />
                  }
                  values={props.subject.subjects}
                />
              </FormGroup>
            </div>
            <div className="w-100 ph3">
              <Button icon="add" fill={true} intent="success">
                Add Subject
              </Button>
            </div>
          </form>
        </Card>
      </Card>
    );
  }
);
