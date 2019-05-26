import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'

const cls = cn('Nav');

export function Nav({ className }) {
  const page = useContext(Context);
  const site = page.site;
  const lang = page.lang;
  let result;

  const slugger = {
    slug: function(a) { return a.slice(0, 10) }
  }

  return (
    <ul className={cls(null, [className])} style={{ float: 'left' }}>
      {
        page.model.filter(function (page) {
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

          return <li className={cls('Item')}>
            <h3 className={cls('Title')}>
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
