import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import clsx from 'clsx'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'

const BACKGROUNDS = [styles.backgroundOrange, styles.backgroundRed]

function PoleStarChat({ position }) {
  return (
    <a className={clsx(styles.container, styles.backgroundPurple)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>
          <Translate>Tired of complex AI?</Translate>
        </strong>
        <Translate>Try our simple, user-friendly product:</Translate>
        <a
          href={`https://github.com/thinkingjimmy/PoleStarChat`}
          target="_blank"
          className={styles.sidebarad}
        >
          <u> PoleStar Chat</u>
        </a>
        <Translate>
          . Our product brings AI to the masses - no tech skills required.
        </Translate>
      </p>
    </a>
  )
}

export default React.memo(function SidebarAd({ position }) {
  return (
    <BrowserOnly>
      {() => {
        const path = window.location.pathname
        return <PoleStarChat position={position} />
      }}
    </BrowserOnly>
  )
})
