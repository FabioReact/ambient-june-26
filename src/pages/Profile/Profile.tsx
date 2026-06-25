import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/context/auth-context'

const Profile = () => {
  const { email, id, accessToken, logoutUserContext } = useAuthContext()

  return (
    <section className='space-y-6'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Profile</p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Personnal info</h1>
          <p className='mt-2 text-muted-foreground break-all'>
            {accessToken} - {email} - {id}
          </p>
          <Button onClick={logoutUserContext}>Logout</Button>
        </div>
      </div>
    </section>
  )
}

export default Profile
