// src/components/Layout.jsx
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'

export default function Layout() {
  return (
    <main>
      <Nav />
      <div>
        <Outlet />
      </div>
    </main>
  )
}
