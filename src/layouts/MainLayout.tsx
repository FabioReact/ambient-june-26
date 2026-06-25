import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
// import Navigation from '@/components/Nav/Navigation'

const Navigation = lazy(() => import('@/components/Nav/Navigation'))

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <Navigation />
      </Suspense>
      <main className='mx-auto min-h-[calc(100vh-4.5rem)] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <ToastContainer />
        <Outlet />
      </main>
      <footer>Created with React - 2026</footer>
    </>
  )
}

export default MainLayout
