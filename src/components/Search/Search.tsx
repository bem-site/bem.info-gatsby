import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'
import './Search.css'

const cls = cn('Search');

export function Search({ className }) {
  const page = useContext(Context);

  return (
    <div className={cls(null, [className])}>
    </div>
  )
}
