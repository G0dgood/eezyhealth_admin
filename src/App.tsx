import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Payment from "./Pages/Payment/Payment";
import Bookings from "./Pages/Bookings/Bookings";
import Doctor from "./Pages/Doctor/Doctor";
import Patient from "./Pages/Doctor/Patient";
import Uploads from "./Pages/Uploads/Uploads";
import Doctordetails from "./Pages/Doctor/Doctordetails";
import Settings from "./Pages/Settings/Settings";


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/doctordetails" element={<Doctordetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;