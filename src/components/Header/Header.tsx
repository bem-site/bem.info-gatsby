import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'

const cls = cn('Header');

export function Header({ className }) {
  const page = useContext(Context);

  return (
    <header className={cls(null, [className])}>
      {page.title}
    </header>
  )
}
