/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXSkeletonText from 'carbon-custom-elements/es/components-react/skeleton-text/skeleton-text';
import { defaultStory as baseDefaultStory } from './skeleton-text-story';

export { default } from './skeleton-text-story';

export const defaultStory = () => <BXSkeletonText />;

export const lines = () => (
  <>
    <BXSkeletonText type="line" />
    <BXSkeletonText type="line" />
    <BXSkeletonText type="line" />
  </>
);

lines.story = {
  decorators: [story => <div style={{ width: '300px' }}>{story()}</div>],
};

defaultStory.story = baseDefaultStory.story;
