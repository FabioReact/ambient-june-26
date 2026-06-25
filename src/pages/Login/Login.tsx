import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import fr from 'zod/v4/locales/fr.js'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/api/users'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router'
import { useAppDispatch } from '@/redux/app/hooks'
import { loginUserRedux } from '@/redux/features/auth/authSlice'

z.config(fr())
const schema = z.object({
  email: z.email(),
  password: z.string().min(4).max(64),
})

type Inputs = z.infer<typeof schema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: Inputs) => loginUser(data),
    onSuccess: (data) => {
      const nextRoute = location.state?.from ?? '/profile'
      dispatch(
        loginUserRedux({ email: data.user.email, id: data.user.id, accessToken: data.accessToken }),
      )
      // dispatch({ type: "loginUserRedux", payload: { email: data.user.email, ... } })
      navigate(nextRoute, { replace: true })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data.email)
    console.log(data.password)
    mutate(data)
  }

  console.log(errors)

  return (
    <section className='flex min-h-[calc(100vh-12rem)] items-center justify-center'>
      <Card className='w-full max-w-md shadow-lg'>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl'>Welcome back</CardTitle>
          <CardDescription>Sign in to access your personal hero roster.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='space-y-5' onSubmit={handleSubmit(onSubmitHandler)}>
            <fieldset className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='text'
                {...register('email', { required: true, minLength: 8 })}
              />
              {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
            </fieldset>
            <fieldset className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='text' {...register('password')} />
              {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
            </fieldset>
            <Button type='submit' className='w-full'>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Login
