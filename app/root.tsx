import { InputMask } from '@react-input/mask'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styled from '@emotion/styled'
import styles from './tailwind.css'
import { LinksFunction } from '@remix-run/node'
import { useEffect } from 'react'

const JSX = () => {
  return (
    <div className="oops">
      <span>hello</span>
    </div>
  )
}
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]
export default function App() {
  useEffect(() => {
    console.log('JSX', JSX().props)
  }, [])
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
