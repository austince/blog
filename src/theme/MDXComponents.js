import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Discussion from '@site/src/components/Discussion';
import Admonition from '@theme/Admonition';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map tags to each of our custom components to make them available in the global scope
  Discussion,
  Admonition,
};
