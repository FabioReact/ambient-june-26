import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import fr from 'zod/v4/locales/fr.js'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
  // const emailRef = useRef<HTMLInputElement>(null) // Non controllé
  //   const [password, setPassword] = useState('secret') // Controllé

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data.email)
    console.log(data.password)
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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='text'
              {...register('email', { required: true, minLength: 8 })}
            />
            {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
            {/* <p className='text-sm text-red-500'>Error: {JSON.stringify(errors.email)}</p> */}
            <label htmlFor='password'>Password</label>
            <input id='password' type='text' {...register('password')} />
            <button>Sign In</button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Login
