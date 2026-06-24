import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getErrorMessage } from '@/api/api'

type ErrorStateProps = {
  error: unknown
  title?: string
  onRetry?: () => void
}

const ErrorState = ({ error, title = 'Something went wrong', onRetry }: ErrorStateProps) => {
  return (
    <div className='flex min-h-40 flex-col items-center justify-center rounded-xl border border-destructive/25 bg-destructive/5 p-6 text-center'>
      <div className='grid size-10 place-items-center rounded-full bg-destructive/10 text-destructive'>
        <AlertCircle className='size-5' />
      </div>
      <h2 className='mt-3 font-semibold'>{title}</h2>
      <p className='mt-1 max-w-md text-sm text-muted-foreground'>{getErrorMessage(error)}</p>
      {onRetry && (
        <Button className='mt-4' variant='outline' onClick={onRetry}>
          <RefreshCw />
          Retry
        </Button>
      )}
    </div>
  )
}

export default ErrorState
