import { Route, Routes } from 'react-router'
import HeroesList from './pages/HeroesList/HeroesList'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Squad from './pages/Squad/Squad'
import Home from './pages/Home/Home'
import Battle from './pages/Battle/Battle'
import Profile from './pages/Profile/Profile'
import PrivateRoute from './hoc/PrivateRoute'
import Logout from './pages/Logout/Logout'
import HeroDetails from './pages/HeroDetails/HeroDetails'
import { lazy } from 'react'

const Optimisations = lazy(() => import('./learning/Optimisations'))
const LearnUseState = lazy(() => import('./learning/LearnUseState'))
const LearnUseEffect = lazy(() => import('./learning/LearnUseEffect'))
const LearnUseRef = lazy(() => import('./learning/LearnUseRef'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/squad' element={<Squad />} />
        <Route path='/battle' element={<Battle />} />
        <Route path='/learning'>
          <Route path='useState' element={<LearnUseState />} />
          <Route path='useEffect' element={<LearnUseEffect />} />
          <Route path='useRef' element={<LearnUseRef />} />
          <Route path='optimisations' element={<Optimisations />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<section>Page 404</section>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
