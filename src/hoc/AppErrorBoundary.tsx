import ErrorState from '@/components/ErrorState/ErrorState'
import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  error: Error | null
}

class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled application error', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return (
        <main className='mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8'>
          <ErrorState
            error={this.state.error}
            title='The application encountered an unexpected error'
            onRetry={() => window.location.reload()}
          />
        </main>
      )
    }

    return this.props.children
  }
}

export default AppErrorBoundary
