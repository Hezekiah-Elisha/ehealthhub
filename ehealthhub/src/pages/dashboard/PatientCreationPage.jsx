import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { instance } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function PatientCreationPage() {
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
        instance.post('/patient/create', formData, config)
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
          <input type="text" placeholder="Phone Number" id="phone_number" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
          <input type="text" placeholder="Address" id="address" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
          <select name="gender" id="gender" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select id="status" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <input type="date" onChange={handleChange} placeholder="Date of Birth" id="date_of_birth" className="bg-slate-100 p-3 rounded-lg" />
          <input type="password" onChange={handleChange} placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />
          <button className="bg-blue-950 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
            {loading ? 'Creating...' : 'Create Patient'}          
                      
          </button>
          <p className='text-orange-600 mt-5'>{info}</p>
        </form>
    )
}
