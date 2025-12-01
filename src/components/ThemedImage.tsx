import React, {CSSProperties} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function ThemedImage(
    {light, dark, style, alt}: { dark: string, light: string, style?: CSSProperties, alt?: string}){
    const {colorMode} = useColorMode();
    return (
        <img
            src={colorMode === 'dark' ? dark : light}
            alt={alt}
            style={style}
        />
    )
}
