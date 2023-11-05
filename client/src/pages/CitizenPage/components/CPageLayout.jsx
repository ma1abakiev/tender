import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const CPageLayout = () => {
  return (
    <div className='content'>
    <Sidebar/>
    <div className="info">
    <Outlet/>
    </div>
    </div>
  )
}

export default CPageLayout