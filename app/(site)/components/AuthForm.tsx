'use client'
import {useCallback, useEffect, useState} from 'react'
import { useForm, FieldValues,SubmitHandler } from 'react-hook-form';

import Input from '@/app/components/Inputs/Intput';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs'

import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
// import {BsGoogle} from 'react-icons/bs' 

type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const session = useSession();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(session?.status === 'authenticated'){
            // console.log('Authenticated');
            router.push('/users');
        }
    }, [session?.status]);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN'){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);


        if(variant === 'LOGIN'){
            //NEXTAUTH LOGIN    
            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if(callback?.error){
                    toast.error('Invalid credentials!');
                }
                else if(callback?.ok){
                    toast.success('Logged In!');
                }
            }).finally(() => {
                setIsLoading(false);
            })
            
        } else {
            //NEXTAUTH RIGISTER
            axios.post('/api/register', data);

            signIn('credentials', {
                ...data,
                redirect: false
            }).then((callback) => {
                if(callback?.error){
                    toast.error('Invalid credentials!');
                }
                else if(callback?.ok){
                    toast.success('Logged In!');
                }
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, {redirect:false})
        .then((callback) => {
            if(callback?.error){
                toast.error('Invalid credentials!');
            }
            else if(callback?.ok){
                toast.success('Logged In!');
            }
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return ( 
        <div className='mt-8 sm:max-w-md sm:mx-auto sm:w-full'>
            <div className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
            ">
                <form 
                className=' space-y-6'
                onSubmit={handleSubmit(onSubmit)}
                >
                    {
                        variant === 'REGISTER' && <Input 
                        label="Name"
                        id="name"
                        required
                        errors={errors} 
                        disabled={isLoading}
                        register={register}
                        /> 
                    }
                    <Input 
                    label="Email"
                    id="email"
                    required
                    errors={errors} 
                    disabled={isLoading}
                    register={register}
                    />
                    <Input 
                    label="Password"
                    id="password"
                    type="password"
                    required
                    errors={errors} 
                    disabled={isLoading}
                    register={register}
                    />
                    <div>
                        <Button 
                        disabled={isLoading}
                        fullWidth 
                        type="submit">
                            {
                                variant === 'LOGIN' ? 'Sign in' : 'Register'
                            }
                        </Button>
                    </div>
                </form>
                <div className='mt-6'>
                    <div className=' relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-white px-2 text-gray-500'>Or continue with</span>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                    <AuthSocialButton 
                    icon={BsGithub}
                    onClick={() => socialAction('github')}
                    />
                    <AuthSocialButton 
                    icon={BsGoogle}
                    onClick={() => socialAction('google')}
                    />
                    </div>
                </div>
                <div className='
                flex 
                justify-center 
                gap-2 
                text-sm 
                mt-6 
                px-2 
                text-gray-500'>
                    <div>
                        { variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?' }
                    </div>
                    <div 
                    className='underline cursor-pointer'
                    onClick={toggleVariant}>
                        { variant === 'LOGIN' ? 'Create an account' : 'Login' }
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default AuthForm;