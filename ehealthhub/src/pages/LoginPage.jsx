import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginFailure, loginSuccess } from '../redux/user/userSlice'
import { instance } from '../api'

export default function LoginPage() {
  const [formData , setFormData] = useState({});
  const { loading, error } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try{
      const reponse = await instance.post('/auth/login', formData)
      dispatch(loginSuccess(reponse.data))
      navigate('/dashboard')
    } catch (error) {
      dispatch(loginFailure(error))
      console.log(error)
    }
  }


  return (
    <div className='font-poppins flex flex-col-reverse md:flex-row'>
      <div className="p-3 mx-auto md:w-1/2 flex flex-col">
        <h1 className="text-3xl text-center font-semibold my-7 uppercase">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-4/5 m-auto">
          <input onChange={handleChange} type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />
          <input onChange={handleChange} type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />
          <button className="bg-blue-950 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
            {loading ? 'Loading...' : 'Sign In'}          
          </button>
        </form>
        <p className='text-red-500 mt-5"'>
          {error ? error.message: 'Something Went Wrong!, try again!'}
        </p>
        <div className='flex items-center justify-center gap-2 mt-5 text-center'>
          <p>Don&apos;t have an account yet?</p>
          <Link to="/signup" className="text-slate-700 font-semibold">
            <span className='text-blue-500'>
              Sign Up
            </span>
          </Link>
        </div>
        <p className='text-red-700 mt-5'></p>
      </div>
      <div className='bg-blue-950 h-full md:h-screen md:w-1/2'>
        <div className="w-full text-center flex flex-col justify-center align-middle h-full">
          <div className='p-10 md:p-0'>
            <Link to="/" className='font-ams text-green-500 text-center text-4xl hover:underline font-raleway font-thin'>eHealthHub</Link>
            <h1 className="text-3xl text-center font-semibold my-7 text-white">Welcome Back</h1>
            <p className='text-white text-center'>To keep connected with us please login with your personal info</p>
          </div>
        </div>
      </div>
    </div>

  )
}
