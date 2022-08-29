import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import Discussion from '@site/src/components/Discussion';
import TweetEmbed from '@site/src/components/TweetEmbed';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Make available in the global scope
  Admonition,
  Discussion,
  TweetEmbed,
};
