import { BrowserRouter } from 'react-router'
import CounterContextProvider from './providers/CounterContextProvider'
import SquadContextProvider from './providers/SquadContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './providers/AuthContextProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppRoutes from './routes'
import { Suspense } from 'react'
import Spinner from './components/IsLoading/Spinner'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <SquadContextProvider>
            <CounterContextProvider>
              <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                  <AppRoutes />
                </Suspense>
              </BrowserRouter>
            </CounterContextProvider>
          </SquadContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </Provider>
  )
}

export default App
