import React, { useContext } from 'react'
import Slugger from 'github-slugger'
import { cn } from '@bem-react/classname'
import { Link } from 'gatsby'

import { Context } from '../Context/Context'
import './Nav.css'

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
    <ul className={cls(null, [className])}>
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
            levelStyle = { marginLeft: `${item.level * 16}px`},
            contents = item.contents || [];

          const slugger = new (Slugger)();

          return <li className={cls('Item', { current: isCurrent })}>
            <div className={cls('Title')} style={levelStyle}>
              {
                isCurrent ?
                  title :
                  <Link className={cls('Link')} to={item.url}>{title}</Link>
              }
            </div>

            {
              contents.length > 0 && (
                <div className={cls('content', { visible: isCurrent })} style={levelStyle}>
                  {
                    contents.map(unit => (
                      <Link
                        className={cls('Link') + ' ' + cls('Chapter')}
                        to={item.url + '#' + slugger.slug(unit.content)}
                      >
                        {unit.content}
                      </Link>
                    ))
                  }
                </div>
              )
            }
          </li>
        })
      }
    </ul>
  )
}
