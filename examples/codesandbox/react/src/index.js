/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from 'react-dom';
import BXDropdown from 'carbon-custom-elements/es/components-react/dropdown/dropdown';
import BXDropdownItem from 'carbon-custom-elements/es/components-react/dropdown/dropdown-item';

const App = () => (
  <>
    <h1>Hello World! 👋</h1>
    <div id="app">
      <BXDropdown triggerContent="Select an item">
        <BXDropdownItem value="all">Option 1</BXDropdownItem>
        <BXDropdownItem value="cloudFoundry">Option 2</BXDropdownItem>
        <BXDropdownItem value="staging">Option 3</BXDropdownItem>
        <BXDropdownItem value="dea">Option 4</BXDropdownItem>
        <BXDropdownItem value="router">Option 5</BXDropdownItem>
      </BXDropdown>
    </div>
  </>
);

render(<App />, document.getElementById('root'));
