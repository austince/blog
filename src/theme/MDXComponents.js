import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import Discussion from '@site/src/components/Discussion';
import ThemedImage from '@site/src/components/ThemedImage';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Make available in the global scope
    Admonition,
    Discussion,
    ThemedImage,
};
