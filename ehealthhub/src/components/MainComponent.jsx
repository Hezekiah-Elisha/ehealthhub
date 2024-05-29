import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DashHomePage from '../pages/dashboard/HomePage'
import NotFound from '../pages/NotFound'
// import PropertyPage from '../pages/PropertyPage'
import LoginPage from '../pages/LoginPage'
import Footer from './Footer'
import Header from './Header'
import SignupPage from '../pages/SignupPage'
import DashboardPage from '../pages/DashboardPage'
// import PostPropertyPage from '../pages/PostPropertyPage'
import DoctorPage from '../pages/dashboard/DoctorPage'
import ProfilePage from '../pages/dashboard/ProfilePage'
import AppointmentPage from '../pages/dashboard/AppointmentPage'
import AmbulancePage from '../pages/dashboard/AmbulancePage'
import PatientCreationPage from '../pages/dashboard/PatientCreationPage'
import DoctorCreationPage from '../pages/dashboard/DoctorCreationPage'
import AllDoctorsPage from '../pages/dashboard/AllDoctorsPage'

export default function MainComponent() {
    const location = useLocation()
    // const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/signin');
    const isSignin = location.pathname.startsWith('/signin') || 
        location.pathname.startsWith('/signup') || 
        location.pathname.startsWith('/forgot-password') || 
        location.pathname.startsWith('/reset-password') ||
        location.pathname.startsWith('/verify-email') || 
        location.pathname.startsWith('/dashboard');

    return (
        <>
            {!isSignin && <Header/>}
            <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/' element={<HomePage/>}/>
                {/* <Route path='/property/:id' element={<PropertyPage/>}/> */}
                {/* <Route path='/property/:id/:slug' element={<PropertyPage/>}/> */}
                <Route path='/signin' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}>

                    <Route path='*' element={<h3>Nananaan</h3>}/>
                    <Route path='' element={<DashHomePage/>}/>
                    <Route path='doctor/:id' element={<DoctorPage/>}/>
                    <Route path='appointment' element={<AppointmentPage/>}/>
                    <Route path='profile' element={<ProfilePage/>}/>
                    <Route path='ambulance' element={<AmbulancePage/>}/>
                    <Route path='settings' element={<h3>Settings</h3>}/>
                    <Route path='profile' element={<h3>Profile</h3>}/>
                    <Route path="create-patient" element={<PatientCreationPage/>}/>
                    <Route path="create-patient/:id" element={<PatientCreationPage/>}/>
                    <Route path="create-doctor" element={<DoctorCreationPage/>}/>
                    <Route path="create-doctor/:id" element={<DoctorCreationPage/>}/>
                    <Route path="all-doctors" element={<AllDoctorsPage/>}/>
                    {/* <Route path='/dashboard/postproperty' element={<PostPropertyPage/>}/> */}
                </Route>
            </Routes>
            {!isSignin && <Footer/>}
        </>
    )
}
