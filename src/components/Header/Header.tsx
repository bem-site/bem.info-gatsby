import React, { useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Context } from '../Context/Context'
import { Logo } from '../Logo/Logo'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { LangSwitcher } from '../LangSwitcher/LangSwitcher'
import { Search } from '../Search/Search'
import './Header.css'

const cls = cn('Header');

export function Header({ className }) {
  const page = useContext(Context);

  return (
    <header className={cls(null, [className])}>
      <div className={cls('Layout')}>
        <Logo className={cn('Header')('Logo')} url={page.url !== '/' ? '/' : undefined}/>
        <LangSwitcher className={cn('Header')('Lang')}/>

        <a
          className={cn('Header')('Forum')}
          href={`//${page.lang}.bem.info/forum/`}
        >Форум</a> {/* TODO: i18n */}
      </div>

      <Search className={cn('Header')('Search')}/>
      <Breadcrumbs className={cn('Header')('Breadcrumbs')}/>

      <div className={cls('Toggle')}>
        <div className={cls('ToggleLine')}></div>
      </div>
    </header>
  )
}
