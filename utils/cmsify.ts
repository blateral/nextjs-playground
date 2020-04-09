export interface CMSifyArticle {
    heading: string;
    super: string;
    text: string;
    darkmode: 'ja' | 'nein';
    name: 'article';
}

export interface CMSifyPage {
    title: string;
    description: string;
    id: string;
    sections: Array<CMSifyArticle>;
    alias: string;
}

const database: CMSifyPage[] = [
    {
        alias: 'index',
        description: '',
        id: '1',
        sections: [
            {
                darkmode: 'ja',
                heading: 'Welcome',
                name: 'article',
                super: 'Coole Page',
                text:
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque, temporibus tempore error harum ea nostrum. Molestiae tempora odio quo cumque ratione, velit veniam sint deserunt ex eveniet magni perspiciatis.</p><ul><li>Lorem ipsum dolor sit.</li><li>Sunt sit, hic soluta.</li><li>Adipisci voluptatibus distinctio omnis.</li><li>Perspiciatis sit eum laudantium.</li><li>Eius molestias, aspernatur maiores.</li></ul>',
            },
            {
                darkmode: 'nein',
                heading: 'Information',
                name: 'article',
                super: '',
                text:
                    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque, temporibus tempore error harum ea nostrum. Molestiae tempora odio quo cumque ratione, velit veniam sint deserunt ex eveniet magni perspiciatis.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque, temporibus tempore error harum ea nostrum. Molestiae tempora odio quo cumque ratione, velit veniam sint deserunt ex eveniet magni perspiciatis.</p>',
            },
        ],
        title: 'Home',
    },
    {
        alias: 'about',
        description: '',
        id: '1',
        sections: [],
        title: 'Über uns',
    },
];

export const getDataFromCMSify = (alias: string) => {
    const page = database.find((p) => p.alias === alias);
    return page;
};
