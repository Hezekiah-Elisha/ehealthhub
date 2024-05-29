import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ProfilePage() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const { currentUser } = useSelector(state => state.user)
  
  useEffect(() => {
    setUser(currentUser.user)
    console.log(currentUser.user)
    setLoading(false)
  }, [currentUser])
  
  return (
    <div className='w-full h-full'>
      <div className='w-full h-1/4 bg-blue-950 flex justify-center items-center'>
        <h1 className='text-white text-4xl font-bold'>Profile</h1>
      </div>
      <div className='w-full h-3/4 bg-blue-950 flex justify-center items-center'>
        <div className='w-1/2 h-3/4 bg-white rounded-lg p-4'>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <h1 className='text-2xl font-bold'>Name: {user.name}</h1>
              <h1 className='text-2xl font-bold'>Email: {user.email}</h1>
              <h1 className='text-2xl font-bold'>Role: {user.role}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
