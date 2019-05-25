const path = require('path');
const model = require('./model/model');

module.exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve(`src/templates/article.tsx`)

    model.forEach(page => createPage({
        path: page.url,
        component: articleTemplate,
        context: {
            model,
            page
        },
    }));
}
