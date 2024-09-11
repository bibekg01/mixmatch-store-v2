import { useForm } from 'react-hook-form'
import PropsTypes from 'prop-types'


const SignUpPage = ({onClick}) => {
    const { register, handleSubmit } = useForm();

    const SignupData = async (data) => {
        console.log(data);
    }


  return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className=''>
                        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                        <h2 className='absolute size-10 ml-[370px] mt-[-60px] hover:bg-red-500 text-center text-3xl font-semibold cursor-pointer' onClick={onClick}>X</h2>
                        {/* <MdCancelPresentation className='absolute size-10 ml-[370px] mt-[-60px] bg-red-400'/> */}
                </div>
                <form action="" onSubmit={handleSubmit(SignupData)} className='grid grid-cols-1 gap-4' >
                        <div className='flex gap-2'>
                            <input 
                            type="text"
                            name='fname'
                            placeholder='Enter First Name'
                            className="border rounded py-2 pl-1"
                            {...register('fname', {required : true})}
                            />
                            <input 
                            type="text"
                            name='lname'
                            placeholder='Enter Last Name'
                            className="border rounded py-2 pl-1"
                            {...register('lname', {required : true})}
                            />
                        </div>
                        <input 
                        type="number"
                        name='contact'
                        placeholder='Enter Phone Number'
                        className="border rounded p-2"
                        {...register('contact', {required : true})}
                        />
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
                        <input 
                        type="password"
                        name='confirmPass'
                        placeholder='Confirm  Password'
                        className="border rounded p-2"
                        {...register('confirmPasss', {required : true})}
                        />

                    <div className="grid gap-5">
                        <button 
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit(SignupData)}
                        >
                        Sign Up
                        </button>                    
                    </div>
                    </form>
                    <div className='mt-3'>
                        <h3>Already have an account? <button onClick={onClick} className='ml-2 font-bold hover:scale-110 duration-200'> Log In</button>
                        </h3>
                    </div>
            </div>
        </div>
    </>

  )
}

SignUpPage.propTypes = {
    onClick: PropsTypes.func,
}

export default SignUpPage