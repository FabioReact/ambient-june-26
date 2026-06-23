import { BrowserRouter, Route, Routes } from 'react-router'
import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layouts/MainLayout'
import LearnUseState from './learning/LearnUseState'
import LearnUseEffect from './learning/LearnUseEffect'
import LearnUseRef from './learning/LearnUseRef'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/heroes' element={<HeroesList />} />
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
  )
}

export default App
