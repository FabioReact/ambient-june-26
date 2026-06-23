import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from '@/components/ui/card'

// Créer un page Register, lui donner une route, l'ajouter à la barre de navigation
// Sur la page Register, je dois pouvoir renseigner mon email, un password et un input qui vérifie le password (confirmation afin de vérifier que les deux correspondent)
// Le mdp doit avoir au moins une majuscule, une minuscule et un nombre

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
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' {...register('email', { required: true, minLength: 8 })} />
        {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
        {/* <p className='text-sm text-red-500'>Error: {JSON.stringify(errors.email)}</p> */}
        <label htmlFor='password'>Password</label>
        <input id='password' type='text' {...register('password')} />
        <button>Sign In</button>
      </form>
    </section>
  )
}

export default Login
