import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'

const cls = cn('Article');

export function Article({ className }) {
  const page = useContext(Context);

  return (
    <div className={cls(null, [className])}>
      {page.source}
    </div>
  )
}
