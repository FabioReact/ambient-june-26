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

// Créer un page battle
// Créer un composant qui nous permet de chercher un héro et le sélectionner
// Si j'ai plusieurs résultats, afficher les différents résultats pour que l'utilisateur choississe le hero voulu
// Si un seul résultat afficher directement la card
// Si deux heros ont été sélectionnés, afficher un bouton Battle
// Après avoir cliqué sur le bouton battle, donner un héro victorieux. Je dois avoir un moyen de reset pour revenir à la page initiale

function App() {
  return (
    <SquadContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/heroes' element={<HeroesList />} />
              <Route path='/squad' element={<Squad />} />
              <Route path='/battle' element={<Battle />} />
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
    </SquadContextProvider>
  )
}

export default App
