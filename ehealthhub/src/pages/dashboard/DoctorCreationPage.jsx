import { useEffect, useState } from 'react'
import { instance } from '../../api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DoctorCreationPage() {
    const [formData , setFormData] = useState({});
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState("")
    const navigate = useNavigate();
  
    const { currentUser } = useSelector(state => state.user);
  
    useEffect(() => {
  
      if(currentUser == null){
        navigate('/signin')
      }
    }, [currentUser])
  
  
    const handleChange = async (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      try{
        const config = {
          headers: {
            'Content-Type': 'application/json',
          }
        }
        instance.post('/doctor/create', formData, config)
        .then((res) => {
          console.log(res)
          if(res.status === 200){
            setInfo("Patient created successfully")
            setFormData({})
          }
          setLoading(false)
        }) 
      } catch (error) {
        setLoading(false)
        setInfo("Error creating patient")
        console.log(error)
      }
    }

    return (
        <form className="flex flex-col gap-4 md:w-4/5 m-auto" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" id="email" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" placeholder="First Name" id="first_name" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" placeholder="Last Name" id="last_name" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" placeholder="Phone Number" id="phone" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" placeholder="License Number" id="license_number" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" onChange={handleChange} placeholder="bio" id="bio" className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" onChange={handleChange} placeholder="Specialization" id="specialization" className="bg-slate-100 p-3 rounded-lg" />
            <input type="text" onChange={handleChange} placeholder="Profile Picture" id="profile_picture" className="bg-slate-100 p-3 rounded-lg" />
            <select id="status" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg">
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
          <button className="bg-blue-950 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
            {loading ? 'Creating...' : 'Create Doctor'}          
                      
          </button>
          <p className='text-orange-600 mt-5'>{info}</p>
        </form>
    )
}
