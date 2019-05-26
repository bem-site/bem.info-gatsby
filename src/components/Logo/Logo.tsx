import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'gatsby'

import { Context } from '../Context/Context'
import './Logo.css';
import Svg from './Logo.svg';

const cls = cn('Logo');

export function Logo({ className, url }) {
  const page = useContext(Context);
  const Tag = url ? Link : 'span';

  return (
    <Tag
      className={cls({ site: page.bundle }, [className])} to={url}
    >
      <Svg/>
    </Tag>
  )
}
