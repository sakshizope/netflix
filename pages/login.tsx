import Head from "next/head"
import Image from "next/image"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
    email: string,
    password: string
}

function login() {
    const [login, setLogin] = useState(false);
    const {signIn, signUp} = useAuth();

    const { 
        register,
        handleSubmit,  
        formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);
        if(login){
            await signIn(data.email, data.password);
        }else{
            await signUp(data.email, data.password);
        }
    }

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image 
                src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
            />

            <img 
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-4"
                width={150}
                height={150} 
            />

            <form
                onSubmit={handleSubmit(onSubmit)}  
                className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input 
                            type="email" 
                            placeholder="E-Mail" 
                            className="input"
                            {...register("email", {required: true})}
                        />
                        {errors.email && (
                            <p className="p-1 text-[13px] text-orange-500 font-light">Please enter a valid email address</p>
                        )}
                    </label>
                    <label className="inline-block w-full">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input"
                            {...register("password", {required: true})}
                        />
                        {errors.email && (
                            <p className="p-1 text-[13px] text-orange-500 font-light">Your password must contain between 4 and 60 characters.</p>
                        )}
                    </label>
                </div>

                <button
                    onClick={() => setLogin(true)} 
                    className="w-full rounded bg-[#e50914] py-3 font-semibold"
                >
                    Sign In
                </button>

                <div className="text-[gray]">
                    New to Netflix? {' '}
                    <button 
                        onClick={() => setLogin(false)}
                        type="submit" 
                        className="cursor-pointer text-white hover:underline"
                    >
                        Sign Up Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default login