import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function HomePage() {

    const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap bg-gray-200 rounded-lg text-blue-950">
            <div className="rounded-lg border-solid border-blue-950 p-2 w-1/4 gap-3 flex flex-col">
                <h3>Upcoming appointment</h3>
                <em className="text-center w-full">
                * No Appointment yet
                </em>

            </div>
            <div className="rounded-lg border-solid border-blue-950 p-2 w-1/4 gap-3 flex flex-col">
                <h3>Recent Chats</h3>
                <em className="text-center w-full">
                    * No Chats yet
                </em>
            </div>
            <div className="rounded-lg border-solid border-blue-950 p-2 w-1/4 gap-3 flex flex-col">
                <h3>pending Prescriptions</h3>
                <em className="text-center w-full">
                * No Prescriptions yet
                </em>
            </div>
            <div className="rounded-lg border-solid border-blue-950 p-2 w-1/4 gap-3 flex flex-col">
                <h3>billing overview</h3>
                <em className="text-center w-full">
                * No Billing yet
                </em>
            </div>
        </div>
        <div className="flex flex-row justify-around flex-wrap bg-gray-200 rounded-lg text-blue-950">
            <div>
                <h2>Appointments Calender</h2>
                <div>
                    {/* <Calendar onChange={onChange} value={value} /> */}
                </div>
            </div>
            <div>
                <h2>Patient Queue</h2>
                <p>
                    * No Patient in Queue
                </p>
            </div>
        </div>
        <div className="flex flex-row justify-around flex-wrap bg-gray-200 rounded-lg text-blue-950">
            <div>
                <h2>Message Inbox</h2>
            </div>
            <div>
                <h2>Quick Actions</h2>
            </div>
        </div>
        <div className="flex flex-row justify-around flex-wrap bg-gray-200 rounded-lg text-blue-950">
            <div>
                <h2>Consultation Statistics</h2>
            </div>
            <div>
                <h2>Patient Feedback</h2>
            </div>
        </div>
        <div className="flex flex-col bg-gray-200 rounded-lg text-blue-950">
            <h1 className="text-center">System alerts</h1>
            <div className="flex flex-row justify-around flex-wrap">
                <div>
                    <h2>Consultation Statistics</h2>
                </div>
                <div>
                    <h2>Patient Feedback</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
