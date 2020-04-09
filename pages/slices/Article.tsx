import * as React from 'react';

import Article from '../../src/components/sections/Article';
import { CMSifyArticle } from '../../utils/cmsify';

export default (props: CMSifyArticle) => {
    return (
        <Article
            body={props.text}
            image={{
                big: '//unsplash.it/600',
                small: '//unsplash.it/400',
            }}
            title={props.heading}
            isDark={props.darkmode === 'ja'}
            superTitle={props.super}
        />
    );
};
