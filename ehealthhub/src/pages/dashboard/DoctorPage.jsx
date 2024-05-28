import React from 'react'
import { useParams } from 'react-router-dom';

export default function DoctorPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>DoctorPage</div>
  )
}
