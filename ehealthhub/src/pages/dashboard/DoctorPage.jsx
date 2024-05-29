import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { instance } from '../../api';

export default function DoctorPage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get(`/doctor/${id}`)
      .then(res => {
        setDoctor(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  // console.log(id);
  return (
    <div className='flex flex-col gap-2'>
      <div>
        Name: Dr. John Doe
      </div>
      <div>
        Specialization: Cardiologist
      </div>
      <div>
        short Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div>
        <button>Book</button>
      </div>
    </div>
  )
}
