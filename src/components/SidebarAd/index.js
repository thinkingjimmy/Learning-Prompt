import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import clsx from 'clsx'
import styles from './styles.module.css'

const BACKGROUNDS = [styles.backgroundOrange, styles.backgroundRed]

function PoleStarChat({ position }) {
  return (
    <a className={clsx(styles.container, styles.backgroundPurple)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>无法使用 ChatGPT ?</strong>
        可以试试我们开发的产品{' '}
        <a
          href={`https://github.com/thinkingjimmy/PoleStarChat`}
          target="_blank"
          className={styles.sidebarad}
        >
          <u>PoleStar Chat</u>
        </a>
        。我们除了解决了一些网络问题外，还支持文生图功能，欢迎试用。
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
