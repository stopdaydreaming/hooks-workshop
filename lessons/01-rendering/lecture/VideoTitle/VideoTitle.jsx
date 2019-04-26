// @flow
import React from 'react';
import classNames from 'classnames';
import type { Theme } from '@cnnprivate/video-toolkit';

import withConfig from '../../hocs/withConfig';
import styles from './VideoTitle.css';
import dark from './VideoTitle.dark.css';
import light from './VideoTitle.light.css';

type Props = {
  title: string,
  theme: Theme
};

const themes: { [Theme]: Object } = { dark, light };

/**
 * Renders title for the currently playing video
 * @param {Object} props - props
 * @param {string} props.title - title of video
 * @param {string} props.theme - current theme (light/dark)
 * @returns {ReactElement} Markup
 */
const VideoTitle = (props: Props) => (
  <h2 className={classNames(styles.videoTitle, themes[props.theme].videoTitle)}>
    {props.title}
  </h2>
);

export default withConfig('theme', config => config.theme)(VideoTitle);
