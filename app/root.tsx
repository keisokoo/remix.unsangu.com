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

const Outer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 100px #00000088;
`
const Inside = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const JSX = () => {
  return (
    <div className="oops">
      <span>hello</span>
    </div>
  )
}
export default function App() {
  console.log(JSX().props)
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outer>
          <Inner>
            <Inside>Hello world</Inside>
          </Inner>
        </Outer>
        <InputMask mask="___-____-____" replacement={{ _: /\d/ }} />
        <h1>Hello world</h1>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
