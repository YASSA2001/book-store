import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { DeleteBooks } from './pages/DeleteBooks'
import { ShowBooks } from './pages/ShowBooks'
import { CreateBooks } from './pages/CreateBooks'
import { EditeBooks } from './pages/EditeBooks'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/create' element={<CreateBooks/>} />
        <Route index path='/about' element={<AboutUs/>} />
        <Route index path='/delete/:id' element={<DeleteBooks/>} />
        <Route index path='/details/:id' element={<ShowBooks/>} />
        <Route index path='/edite/:id' element={<EditeBooks/>} />

      </Routes>
    </div>
  )
}

export default App