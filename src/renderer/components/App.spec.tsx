import React from 'react';
import { ipcRenderer } from 'electron';
import TestRenderer from 'react-test-renderer';

import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    spyOn(ipcRenderer, 'send');
  });

  it('should match snapshot', () => {
    const tree = TestRenderer.create(<App />);

    expect(tree).toMatchSnapshot();
  });
});
