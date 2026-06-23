import { BrowserRouter, Route, Routes } from 'react-router'
import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layouts/MainLayout'
import LearnUseState from './learning/LearnUseState'
import LearnUseEffect from './learning/LearnUseEffect'
import LearnUseRef from './learning/LearnUseRef'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Squad from './pages/Squad/Squad'
import Home from './pages/Home/Home'
import CounterContextProvider from './providers/CounterContextProvider'

function App() {
  return (
    <CounterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/heroes' element={<HeroesList />} />
            <Route path='/squad' element={<Squad />} />
            <Route path='/learning'>
              <Route path='useState' element={<LearnUseState />} />
              <Route path='useEffect' element={<LearnUseEffect />} />
              <Route path='useRef' element={<LearnUseRef />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  )
}

export default App
