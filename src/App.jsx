import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Mission from './Mission/Mission';
import Sir from './Sir/Sir';
import Crads from './Cards/Crads';

const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <Introduction/>
      <Mission/>
      <Sir/>
      <Crads/>
    </div>
  )
}

export default App
