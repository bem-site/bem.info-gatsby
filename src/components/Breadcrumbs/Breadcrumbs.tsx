import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'gatsby'

import { Context } from '../Context/Context'
import './Breadcrumbs.css'

const cls = cn('Breadcrumbs');

export function Breadcrumbs({ className }) {
  const page = useContext(Context);
  const site = page.site;
  const result = [];

  page.model.filter(item => {
    if (item.url === '/') { return false; }

    if (!new RegExp('^' + item.url).test(site)) { return false; }

    return item.url.split('/').length <= site.split('/').length;
  }).forEach(item => {
    result.push(
      <li className={cls('Item')}>
        {
          page.url === item.url ?
            item.title :
            <Link className={cls('Link')} to={item.url}>{item.title}</Link>
        }
      </li>
    );
  }, this);

  // result.push(apply('dropdown'));

  return (
    <ul className={cls(null, [className])}>
      {result}
    </ul>
  )
}
