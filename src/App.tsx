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
import SquadContextProvider from './providers/SquadContextProvider'
import Battle from './pages/Battle/Battle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './providers/AuthContextProvider'
import Profile from './pages/Profile/Profile'
import PrivateRoute from './hoc/PrivateRoute'
import Logout from './pages/Logout/Logout'
import HeroDetails from './pages/HeroDetails/HeroDetails'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <SquadContextProvider>
            <CounterContextProvider>
              <BrowserRouter>
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
              </BrowserRouter>
            </CounterContextProvider>
          </SquadContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </Provider>
  )
}

export default App
