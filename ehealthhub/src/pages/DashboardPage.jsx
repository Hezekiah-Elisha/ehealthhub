import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import homeImage from '../assets/HomeImage.jpg'
import DashboardHeader from '../components/DashboardHeader'
import { BookmarkSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'

export default function DashboardPage() {

  const [user, setuser] = useState(null);
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser == null){
      navigate('/signin')
    }

    setuser(currentUser.user);
    console.log(currentUser.user.role)

  },[]);

  return (
    <>
      <DashboardHeader />
      <div className="flex h-screen bg-gray-200 w-full font-poppins">
        <div className="w-64 fixed h-full bg-blue-950 text-white flex flex-col justify-between">
          <div className=''>
            <h2 className=" h-2/6 font-semibold bg-[url('/src/assets/HomeImage.jpg')] bg-cover bg-center bg-no-repeat">
              <div className='flex flex-col justify-end h-full w-full backdrop-blur-sm px-5' >
                <img src={homeImage} alt="" className=' rounded-full h-20 w-20' />
                <h2 className=' text-green-700'>Hi, User</h2>
                <p className=' text-sm'>Welcome back</p>
              </div>
            </h2>

            {user && user.role === 'patient' && (
              <div className='p-2'>
                <ul className="mt-5">
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard" className='block'>Home</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/doctor/1" className='block'>Patient</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/create-patient" className='block'>Create Patient</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/all-doctors" className='block'>All Doctors</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/create-doctor" className='block'>Create Doctor</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/ambulance" className='block'>Ambulance</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to='/dashboard/appointment' className='block'>Book Appointment</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/profile" className='flex flex-row gap-2'>
                      <BookmarkSquareIcon className='h-5 w-5' />
                      Appointements
                    </Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/doctor" className='block'>Chat</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to='' className='block'>
                      Medical Reports
                    </Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link className='block'>
                      Prescriptions
                    </Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link className='block'>
                      Payment
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {user && user.role === 'doctor' && (
              <div className='p-2'>
                <ul className="mt-5">
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard" className='block'>Home</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/ambulance" className='block'>Ambulance</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to='/dashboard/appointment' className='block'>Book Appointment</Link>
                  </li>
                  <li className='hover:bg-green-700 p-2 rounded-lg'>
                    <Link to="/dashboard/profile" className='flex flex-row gap-2'>
                      <BookmarkSquareIcon className='h-5 w-5' />
                      Appointements
                    </Link>
                  </li>
                </ul>
              </div>
            )}  
          </div>

          <div className='p-2'>
            <ul className="mt-5">
              <li className='hover:bg-green-700 p-2 rounded-lg'>
                <Link to="/signin" className='block'>Support</Link>
              </li>
              <li className='hover:bg-green-700 p-2 rounded-lg'>
                <Link to="/dashboard/settings" className='block'>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-64 bg-white p-4 h-full overflow-auto w-full">
        <Outlet />
        </div>
      </div>
    </>
  )
}
