import React from 'react';
import {
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import { MagnifyingGlass } from 'react-loader-spinner'
import {useColorMode} from '@docusaurus/theme-common';

export default function TweetEmbed({tweetId}: { tweetId: string }) {
    const {colorMode} = useColorMode();
    return (
        <TwitterTweetEmbed
            tweetId={tweetId}
            options={{
                theme: colorMode === 'dark' ? 'dark' : 'light',
            }}
            // https://github.com/saurabhnemade/react-twitter-embed/issues/59
            key={colorMode === 'dark' ? '1' : '2'}
            placeholder={
                <MagnifyingGlass width="100%"/>
            }
        />
    )
}
