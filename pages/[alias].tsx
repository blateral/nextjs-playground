import * as React from 'react';

import { CMSifyPage, getDataFromCMSify } from '../utils/cmsify';

import ArticleSlice from './slices/Article';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { NextPage } from 'next';

const renderSlices = (sections: CMSifyPage['sections']) => {
    return sections.map((section, index) => {
        switch (section.name) {
            case 'article':
                return <ArticleSlice key={index} {...section} />;
        }
    });
};

const IndexPage: NextPage<{
    page: CMSifyPage | undefined;
}> = ({ page }) => {
    if (!page) return <ErrorPage statusCode={404} />;

    return (
        <>
            <Head>
                <title>{page.title}</title>
            </Head>

            {renderSlices(page.sections)}
        </>
    );
};

IndexPage.getInitialProps = async ({ query }) => {
    const page = getDataFromCMSify(query.alias as string);

    return {
        page,
    };
};

export default IndexPage;
