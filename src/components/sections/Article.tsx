import * as React from 'react';

const Article: React.FC<{
    superTitle?: string;
    title: string;
    body: string;
    mainButton?: {
        text: string;
        link: string;
    };
    secondaryButton?: {
        text: string;
        link: string;
    };
    image: {
        small: string;
        big: string;
        alt?: string;
    };
    isDark?: boolean;
}> = ({
    body,
    image,
    title,
    mainButton,
    secondaryButton,
    superTitle,
    isDark,
}) => {
    return (
        <article className={isDark ? 'article article--dark' : 'article'}>
            <div className="article__wrapper">
                <div className="article__grid">
                    <aside className="article__aside">
                        <picture>
                            <source
                                srcSet={image.big}
                                media="(min-width: 64em)"
                            />
                            <img
                                srcSet={image.small}
                                className="article__img"
                                alt={image.alt || ''}
                            />
                        </picture>
                    </aside>
                    <main className="article__main">
                        {superTitle && (
                            <h2
                                className={`article__super${
                                    isDark ? '--dark' : ''
                                }`}
                            >
                                {superTitle}
                            </h2>
                        )}
                        <h1
                            className={`article__title${
                                isDark ? '--dark' : ''
                            }`}
                        >
                            {title}
                        </h1>

                        <div
                            className={`article__body${isDark ? '--dark' : ''}`}
                            dangerouslySetInnerHTML={{
                                __html: body,
                            }}
                        />
                        {(mainButton || secondaryButton) && (
                            <div className="article__actions">
                                {mainButton && (
                                    <a
                                        href={mainButton.link}
                                        className="article__action"
                                    >
                                        {mainButton.text}
                                    </a>
                                )}
                                {secondaryButton && (
                                    <a
                                        href={secondaryButton.link}
                                        className="article__action  article__action--secondary"
                                    >
                                        {secondaryButton.text}
                                    </a>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </article>
    );
};

export default Article;
