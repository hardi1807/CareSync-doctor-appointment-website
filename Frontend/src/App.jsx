
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
 import Doctors from './pages/Doctors'
 import Contact from './pages/Contact'
 import About from './pages/About'
 import Login from './pages/Login'
 import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 ms-x-to-10%'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/doctors' element={<Doctors/>}/>
         <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/myappoinments' element={<MyAppointments/>}/>

        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/myprofile' element={<MyProfile />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App