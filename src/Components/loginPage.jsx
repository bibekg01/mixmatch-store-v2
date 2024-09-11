import { useForm } from 'react-hook-form'
import PropsTypes from 'prop-types'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import SignUpPage from './signUpPage';

const LoginPage = ({onClick}) => {
    const { register, handleSubmit } = useForm();
    const LoginData = async (data) => {
        console.log(data);
    }
    const [popups, setPopups] = useState(false)

    return(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-md w-full">
                    <div className=''>
                        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
                        <h2 className='absolute size-10 ml-[370px] mt-[-60px] hover:bg-red-500 text-center text-3xl font-semibold cursor-pointer' onClick={onClick}>X</h2>
                        {/* <MdCancelPresentation className='absolute size-10 ml-[370px] mt-[-60px] bg-red-400'/> */}
                    </div>

                    {/* Login Section  */}

                    <form action="" onSubmit={handleSubmit(LoginData)} className='grid grid-cols-1 gap-4' >
                        <input 
                        type="email"
                        name='email'
                        placeholder='Enter E-mail Address'
                        className="border rounded p-2"
                        {...register('email', {required : true})}
                        />
                        <input 
                        type="password"
                        name='password'
                        placeholder='Enter your password'
                        className="border rounded p-2"
                        {...register('passsword', {required : true})}
                        />
                        <p className='text-right mt-[-15px] text-blue-600 cursor-pointer'>forgot password ?</p>

                    <div className="grid gap-5">
                        <button 
                        type="submit"
                        className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit(LoginData)}
                        >
                        Log In
                        </button>                    
                    </div>
                    </form>

                    <h1 className='text-lg mt-3'>Or, login with</h1>
                    <div className='flex justify-around mt-5'>
                        <button className='flex gap-3 text-xl bg-blue-600 p-2 px-3 rounded-xl text-white'><FaFacebook className='mt-1' />Facebook</button>
                        <button className='flex gap-3 text-xl border-2 border-black px-5 p-2 rounded-xl'><FcGoogle className='mt-1' />Google</button>
                    </div>
                    <div className='mt-3'>
                        <h3>Don&apos;t have an account? <button onClick={()=> setPopups(true)} className='ml-2 font-bold hover:scale-110 duration-200'> Sign Up</button>
                        </h3>
                    </div>
                </div>
            </div>
            {popups && (
            <div className="absolute bg-[gray] bg-opacity-20 w-[200vh] h-[100vh] text-center ">
              <h1 className="text-white text-3xl absolute text-end"> Xsdfcgvhbjniohuigyufty</h1>
              <div>
                <SignUpPage onClick={() => setPopups(false)} />
              </div>
            </div>
        )}
        </>
    )
}

LoginPage.propTypes = {
    onClick: PropsTypes.func,
}

export default LoginPage;