const path = require('path');
const processModel = require('./src/model/index.js');

module.exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const langs = ['ru', 'en']; // TODO: there store and how to pass languages here?
    const lang = 'ru'; // TODO: how to pass current language here?

    const processedModel = processModel.expand(require('./model/model'), lang);
    const model = processedModel.model;

    model.forEach(page => {
        let template;

        switch (page.type) {
            default:
                template = path.resolve(`src/components/ArticlePage/ArticlePage.tsx`);
        }

        return createPage({
            path: page.url,
            component: template,
            context: {
                model,
                page,
                langs,
                lang
            },
        });
    });
}
