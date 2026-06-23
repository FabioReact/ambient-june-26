import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@base-ui/react/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type Inputs, schema } from './schema'

// Créer un page Register, lui donner une route, l'ajouter à la barre de navigation
// Sur la page Register, je dois pouvoir renseigner mon email, un password et un input qui vérifie le password (confirmation afin de vérifier que les deux correspondent)
// Le mdp doit avoir au moins une majuscule, une minuscule et un nombre

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData)
  }

  return (
    <section className='flex min-h-[calc(100vh-12rem)] items-center justify-center'>
      <Card className='w-full max-w-md shadow-lg'>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl'>Create your account</CardTitle>
          <CardDescription>Save your favorite heroes and keep your roster close.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' {...register('email')} />
              {errors.email && (
                <p className='text-red-500 text-xs italic'>{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' {...register('password')} />
              {errors.password && (
                <p className='text-red-500 text-xs italic'>{errors.password.message}</p>
              )}
            </fieldset>
            <fieldset className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Input id='confirmPassword' type='password' {...register('confirmPassword')} />
              {errors.confirmPassword && (
                <p className='text-red-500 text-xs italic'>{errors.confirmPassword.message}</p>
              )}
            </fieldset>
            <div>
              <Button className='w-full' type='submit'>
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Register
