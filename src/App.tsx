import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {theme} from './theme/theme'

import Header from './components/Header'
import NotFoundPage from './pages/NotFoundPage'
import ErrorBoundary from './components/ErrorBoundary'
import Homepage from './pages/Homepage'
import CreateHackathon from './pages/CreateHackathon'
import HackathonDetails from './pages/HackathonDetails'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource-variable/inter'
import {HackathonProvider} from './context/HackathonContext'


const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HackathonProvider>
          <main>
            <Router>
              <Header />

              <Routes>
                <Route path='/' element={<Homepage />} />
                {/* Create New Hackathon */}
                <Route path='/create-hackathon' element={<CreateHackathon />} />
                {/* View Specific Hackathon */}
                <Route path='/hackathon/:id' element={<HackathonDetails />} />
                {/* Edit Existing Hackathon */}
                <Route
                  path='/edit-hackathon/:id'
                  element={<CreateHackathon />}
                />
                {/* 404 Not Found */}
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </Router>
          </main>
        </HackathonProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
