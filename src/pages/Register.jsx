
import { useContext, useEffect } from 'react'
import regBg from '../assets/register.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextComponents'
import { toast } from 'react-toastify'


export default function Register() {
  const navigate = useNavigate()
  const location = useLocation()
  const {user,createUser,userUpdateProfile,setUser, loading} = useContext(AuthContext)
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[navigate, user])
  const from = location.state || '/'
  const handleSubmit = (e) => {
    e.preventDefault()
    const name =  e.target.name.value;
    const email =  e.target.email.value;
    const password =  e.target.password.value;

    createUser(email, password)
    .then((result)=>{
      userUpdateProfile(name)
      .then(()=>{
        setUser({...result?.user, displayName: name})
        toast.success("SuccessFully Registration");
        navigate(from, {replace: true})
      })

    })
    .catch((error)=>{
      console.log(error.message)
    })


  }
  if (user || loading) return
  return (
    <div className='flex justify-center items-center my-12'>
    <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
      <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>


        <p className='mt-3 text-xl text-center text-gray-600 '>
          Get Your Free Account Now.
        </p>
        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b  lg:w-1/4'></span>

          <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
           Registration with email
          </div>

          <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='name'
            >
              Username
            </label>
            <input
              id='name'
              autoComplete='name'
              name='name'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
              type='text'
              required
            />
          </div>
          <div className='mt-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='LoggingEmailAddress'
            >
              Email Address
            </label>
            <input
              id='LoggingEmailAddress'
              autoComplete='email'
              name='email'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
              required
            />
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='loggingPassword'
              >
                Password
              </label>
            </div>

            <input
              id='loggingPassword'
              autoComplete='current-password'
              name='password'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
              required
            />
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
            >
              Register
            </button>
          </div>
        </form>

        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b  md:w-1/4'></span>

          <Link
            to='/login'
            className='text-xs text-gray-500 uppercase  hover:underline'
          >
            or Log in
          </Link>

          <span className='w-1/5 border-b  md:w-1/4'></span>
        </div>
      </div>
      <div
        className='hidden bg-cover bg-center lg:block lg:w-1/2'
        style={{
          backgroundImage: `url(${regBg})`,
        }}
      ></div>
    </div>
  </div>
  )
}
