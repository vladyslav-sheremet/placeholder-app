import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'
import PhotoPage from './pages/PhotoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:photoId' element={<PhotoPage />} />
    </Routes>
  )
}

export default App
