import React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import { FormGroup, InputGroup, NumericInput } from '@blueprintjs/core';
// import { TimePrecision } from '@blueprintjs/datetime';
import Datetime from 'react-datetime';
import moment from 'moment';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ExamSettingsForm = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore, subjectStore } = props.store!;
    return (
      <form className="w-25 examSettingsForm">
        <div className="w-100 pr3">
          <FormGroup label="Title" labelFor="title">
            <InputGroup
              id="title"
              placeholder="ct03"
              leftIcon="clipboard"
              value={examStore.exam.title}
              onChange={(e: any) => {
                e.preventDefault();
                examStore.exam.setTitle(e.target.value);
              }}
            />
          </FormGroup>
        </div>
        <div className="w-100 pr3">
          <FormGroup label="Subject" labelFor="subject">
            <div className="bp3-select bp3-fill">
              <select
                value={examStore.exam.subjectId}
                onChange={(e: any) => {
                  e.preventDefault();
                  examStore.exam.setSubjectId(parseInt(e.target.value, 10));
                }}
              >
                <option value={0}>Click to Choose</option>
                {subjectStore.subjects.map(
                  (subject: any, subjectIndex: number) => (
                    <option key={subjectIndex} value={subject.id}>
                      {subject.title}
                    </option>
                  )
                )}
              </select>
            </div>
          </FormGroup>
        </div>
        <div className="w-100 pr3 dib">
          <FormGroup label="Negative Mark" labelFor="negativeMark">
            <NumericInput
              id="negativeMark"
              max={0.0}
              min={-5.0}
              fill={true}
              leftIcon="remove"
              stepSize={0.2}
              value={examStore.exam.negativeMark}
              onValueChange={(valueAsNumber: number) => {
                examStore.exam.setNegativeMark(valueAsNumber);
              }}
            />
          </FormGroup>
        </div>
        <div className="w-100 pr3">
          <FormGroup
            label="Duration"
            labelFor="duration"
            labelInfo="(In minute)"
          >
            <InputGroup
              id="duration"
              placeholder="30"
              leftIcon="time"
              value={examStore.exam.duration}
              onChange={(e: any) => {
                e.preventDefault();
                examStore.exam.setDuration(e.target.value);
              }}
            />
            {/* <TimePicker
              precision={TimePrecision.SECOND}
              showArrowButtons={true}
              value={examStore.exam.duration}
            /> */}
          </FormGroup>
        </div>
        <div className="w-100 pr3">
          <FormGroup label="Date">
            {/* <DateInput
              formatDate={date => date.toLocaleString()}
              onChange={e => e}
              parseDate={str => new Date(str)}
              placeholder={'M/D/YYYY'}
              className="w-100"
              // value={examStore.exam.date}
              onChange={(e: any) => {
                e.preventDefault();
                examStore.exam.setDate(e.target.value);
              }}
            /> */}
            <Datetime
              dateFormat="YYYY-MM-DD"
              timeFormat={false}
              value={examStore.exam.date}
              onChange={(e: any) => {
                // console.log('event', moment(e._d).format('YYYY-MM-DD HH:mm:ss'));
                // e.preventDefault();
                examStore.exam.setDate(moment(e._d).format('YYYY-MM-DD'));
              }}
            />
          </FormGroup>
        </div>
      </form>
    );
  })
);
