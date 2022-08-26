import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function Discussion({title}: { title: string }) {
    const {colorMode} = useColorMode();
    return (
        <Giscus
            repo="austince/blog"
            repoId="R_kgDOH42f7w"
            mapping="specific"
            term={title}
            strict="1"
            reactions-enabled="1"
            emit-metadata="0"
            inputPosition="top"
            theme={colorMode === 'dark' ? 'dark' : 'light'}
            lang="en"
            loading="lazy"
        ></Giscus>
    )
}
