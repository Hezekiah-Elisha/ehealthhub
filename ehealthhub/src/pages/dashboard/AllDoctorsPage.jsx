import {useEffect, useState } from 'react'
import { instance } from '../../api';


export default function AllDoctorsPage() {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        instance.get('/doctor/index')
            .then(res => {
                setDoctors(res.data.doctors)
                console.log(res.data.doctors)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    
    }, []);
    
    return (
        <div className="flex flex-col gap-4">
            <h3>All Doctors</h3>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error fetching doctors</h1>}
            {doctors.map((doctor, index) => (
                <div key={index} className="flex flex-col gap-4 bg-gray-400 p-2 rounded-lg">
                    <h1>{doctor.first_name} {doctor.last_name}</h1>
                    <h1>{doctor.email}</h1>
                    <h1>{doctor.phone}</h1>
                    <h1>{doctor.specialization}</h1>
                    <h1>{doctor.bio}</h1>
                    <h1>{doctor.license_number}</h1>
                    {/* <img src={doctor.profile_picture} alt="doctor" className="w-20 h-20 rounded-full" /> */}
                </div>
            ))}
        </div>
    )
}
