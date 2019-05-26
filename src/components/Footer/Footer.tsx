import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'

const cls = cn('Footer');

export function Footer({ className }) {
  const page = useContext(Context);

  return (
    <footer className={cls(null, [className])}>
      FOOTER
    </footer>
  )
}
