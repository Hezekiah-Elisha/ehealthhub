import React from 'react'
import { Link } from 'react-router-dom'

export default function AppointmentPage() {
  return (
    <>
        <div className='text-3xl font-raleway'>Available Doctors</div>
        <div className='flex flex-row'>
            <div className='w-full'>
                <div className='flex flex-row w-full justify-evenly'>
                    <div className='w-1/4'>
                        <div className='bg-white p-2 m-2 rounded-lg'>
                            <img src="https://via.placeholder.com/150" alt="" className='w-full rounded-lg'/>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <h2 className='text-lg'>Dr. John Doe</h2>
                                    <p className='text-sm'>Cardiologist</p>
                                </div>
                                <Link to="/dashboard/doctor/1" className='text-blue-950 hover:bg-blue-950 hover:text-white p-2 rounded-lg'>Book</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='bg-white p-2 m-2 rounded-lg'>
                            <img src="https://via.placeholder.com/150" alt="" className='w-full rounded-lg'/>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <h2 className='text-lg'>Dr. John Doe</h2>
                                    <p className='text-sm'>Cardiologist</p>
                                </div>
                                <button className='text-blue-950 hover:bg-blue-950 hover:text-white p-2 rounded-lg'>Book</button>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4'>
                        <div className='bg-white p-2 m-2 rounded-lg'>
                            <img src="https://via.placeholder.com/150" alt="" className='w-full rounded-lg'/>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <h2 className='text-lg'>Dr. John Doe</h2>
                                    <p className='text-sm'>Cardiologist</p>
                                </div>
                                <button className='text-blue-950 hover:bg-blue-950 hover:text-white p-2 rounded-lg'>Book</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='bg-white p-2 m-2 rounded-lg'>
                            <img src="https://via.placeholder.com/150" alt="" className='w-full rounded-lg'/>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <h2 className='text-lg'>Dr. John Doe</h2>
                                    <p className='text-sm'>Cardiologist</p>
                                </div>
                                <button className='text-blue-950 hover:bg-blue-950 hover:text-white p-2 rounded-lg'>Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    </>
  )
}
