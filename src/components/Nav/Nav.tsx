import React from 'react'
import { Link } from 'gatsby'

export function Nav({ model, page }) {
  const site = page.site;
  const lang = 'ru';
  let result;

  const slugger = {
    slug: function(a) { return a.slice(0, 10) }
  }

  return (
    <ul style={{ float: 'left' }}>
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
        })
      }
    </ul>
  )
}
