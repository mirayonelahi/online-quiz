import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
} from '@blueprintjs/core';

export const Home = observer(
  () => {
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">This is Home</h2>
      </Card>
    );
  }
);
