module.exports = function ({ block, elem, mod = {} }) {
  return `import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'

const cls = cn('${block}');

export function ${block}({ className }) {
  const page = useContext(Context);

  return (
    <div className={cls(null, [className])}>
    </div>
  )
}`;
};
