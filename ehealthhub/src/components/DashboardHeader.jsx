import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/user/userSlice'
import { instance } from '../api';
import { useEffect, useState } from 'react';

export default function DashboardHeader() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [user, setuser] = useState({})


  useEffect(() => {
    if(currentUser == null){
      navigate('/signin')
    }
    
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application',
    //       'Authorization': `Bearer ${currentUser.accessToken}`
    //     }
    //   }
    //   instance.get('/user', config)
    //     .then((response) => {
    //         setuser(response.data)
    //       }
    //     )
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // } catch (error) {
    //   console.log(error)
    // }
    console.log(currentUser.user);
    setuser(currentUser.user);

  },[]);

  const handleLogout = () => {
    try{
      const config = {
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${currentUser.accessToken}`
        }
      }
      instance.get('/auth/logout', config)
      dispatch(logout())
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <nav className='w-full bg-blue-950 font-poppins static'>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-green-500 text-2xl font-bold font-ams hover:underline">The Rental Hub</Link>
          <a href="/dashboard" className="text-white">Dashboard</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/dashboard/profile" className="text-white">Hi, <span className='capitalize'>{user.name}</span></a>
          <p className="text-white hover:text-red-600 cursor-pointer" onClick={handleLogout}>Logout</p>
        </div>
      </div>
    </nav>
  )
}
