import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CityDetails from './pages/CityDetails'
import CityGridPage from './pages/CityGridPage'

function App() {

  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityGridPage />} />
        <Route path="/city/:name" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
