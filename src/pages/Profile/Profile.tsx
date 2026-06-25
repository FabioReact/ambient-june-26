import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks'
import { logoutUserRedux } from '@/redux/features/auth/authSlice'

const Profile = () => {
  const { email, id, accessToken } = useAppSelector((state) => state.auth)
  const battleHistory = useAppSelector((state) => state.battleHistory)
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(logoutUserRedux())
  }

  return (
    <section className='space-y-6'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Profile</p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Personnal info</h1>
          <p className='mt-2 text-muted-foreground break-all'>
            {accessToken} - {email} - {id}
          </p>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </div>
      {/* Show list of battle history entries */}
      <div className='space-y-4'>
        <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>
          Battle history
        </p>
        {battleHistory.length === 0 && (
          <p className='text-muted-foreground'>No battle history found</p>
        )}
        {battleHistory.map((entry) => (
          <div
            key={entry.id}
            className='flex items-center justify-between rounded-lg border border-border/70 bg-background/80 p-4 shadow-sm'
          >
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold tracking-tight'>
                Winner: {entry.winner} - Loser: {entry.loser}
              </p>
              <p className='text-xs text-muted-foreground'>{entry.datetime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
