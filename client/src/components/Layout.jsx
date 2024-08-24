// src/components/Layout.jsx
import { Outlet } from 'react-router-dom'
import NewButton from './NewButton.jsx'

export default function Layout () {
  return (
    <>
      <NewButton />
      <div>
        <Outlet />
      </div>
    </>
  )
}
