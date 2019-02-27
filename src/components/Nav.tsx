import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export function Nav({ model, page }) {
  const site = page.site;
  const lang = 'ru';
  let result;

  const slugger = {
    slug: function(a) { return a.slice(0, 10) }
  }

  return (
    <ul>
      {
        model.filter(function (page) {
          if (!new RegExp('^' + site).test(page.url) || page.nav === false) { return false; }

          const levelPage = page.url.split('/').length;
          const levelSite = site.split('/').length;

          if ((page.site === site || page.url === page.site) &&
            levelPage >= levelSite + 1) {
            page.level = levelPage - levelSite;

            return true;
          }

          return false;
        }).map(function (item) {
          var isCurrent = page.url === item.url,
            title = typeof item.title === 'string' ? item.title : item.title[lang],
            contents = item.contents || [];
            // slugger = new (require('github-slugger'))();

          return <li className="Nav-Item">
            <h3 className="Nav-Title">
              {isCurrent ?
                title :
                <Link to={item.url}>{title}</Link>
              }
            </h3>
          </li>

          return {
            elem: 'item',
            elemMods: { current: isCurrent },
            content: [
              {
                elem: 'title',
                attrs: {
                  style: `margin-left:${item.level * 16}px`
                },
                content: isCurrent ? title : {
                  elem: 'link',
                  attrs: { href: data.root + item.url },
                  content: title
                }
              },
              contents.length > 0 && {
                elem: 'content',
                elemMods: { visible: isCurrent },
                attrs: {
                  style: `margin-left:${item.level * 16}px`
                },
                content: contents.map(unit => ({
                  elem: 'link',
                  mix: { block: 'nav', elem: 'chapter' },
                  attrs: { href: data.root + item.url + '#' + slugger.slug(unit.content) },
                  content: unit.content
                }))
              }
            ]
          };
        })
      }
    </ul>
  )
}
