import {useState} from 'react'
import Modal from '../../components/Modal'



export default function AmbulancePage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  
  return (
    <div>
        <h1>Available Ambulances</h1>
        <div className='flex flex-row gap-2 justify-evenly'>
            <div className='w-1/4'>
                <img src="https://via.placeholder.com/250" alt="" className='w-full' />
                <p>
                    Ruai Family Hospital
                </p>

                <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Open Modal
                </button>

                <Modal title="Call Ambulance" content="Are you sure you want to call ambulance" isVisible={isModalVisible} onClose={closeModal} />
            </div>
            <div className='w-1/4'>
                <img src="https://via.placeholder.com/250" alt="" className='w-full' />
                <p>
                    Ruai Family Hospital
                </p>
                <button className='bg-blue-950 text-white rounded-lg p-2'>
                    call now
                </button>
            </div>
        </div>
    </div>
  )
}
