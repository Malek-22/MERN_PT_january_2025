import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PeoplePage from './pages/PeoplePage'
import PlanetPage from './pages/PlanetPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people/:id" element={<PeoplePage />} />
                <Route path="/planets/:id" element={<PlanetPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
