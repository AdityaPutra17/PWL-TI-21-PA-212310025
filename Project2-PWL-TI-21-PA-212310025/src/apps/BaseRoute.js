import React from 'react'
import ChapterOne from '../modules/ChapterOne'
import { Route, Routes } from 'react-router-dom'

const BaseRoute = () => {
  return (
    <React.Suspense>
        <Routes>
            <Route index element={<ChapterOne/>}></Route>
            <Route path="home" element={<Home/>}></Route>
        </Routes>
    </React.Suspense>
  )
}

const Home =()=>{
    return <h3 className='text-center'>Ini Home ceritanya</h3>
}

export default BaseRoute