// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import StorybookWrapper, {
  addDecorators
} from '../../../.storybook/components/StorybookWrapper';
import VideoTitle from './VideoTitle';

const stories = storiesOf('video-deck/VideoTitle', module);

addDecorators(stories);

stories.add('renders a video title', () => (
  <StorybookWrapper>
    <VideoTitle
      title={text('Title', 'What Trump supporters think one year later')}
    />
  </StorybookWrapper>
));
