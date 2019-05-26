import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'
import './LangSwitcher.css'

const cls = cn('LangSwitcher');

export function LangSwitcher({ className }) {
  const page = useContext(Context);

  return (
    <div className={cls(null, [className])}>
    </div>
  )
}
