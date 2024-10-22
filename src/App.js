// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OwnerLogin from './pages/OwnerLogin';
import SalespersonLogin from './pages/SalespersonLogin';
import OwnerDashboard from './components/OwnerDashboard';
import SalespersonDashboard from './components/SalespersonDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/salesperson-login" element={<SalespersonLogin />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import OwnerLogin from './pages/OwnerLogin';
// import OwnerRegister from './pages/OwnerRegister';
// import SalespersonLogin from './pages/SalespersonLogin';
// import OwnerDashboard from './components/OwnerDashboard';
// import SalespersonDashboard from './components/SalespersonDashboard';
// import Navbar from './components/Navbar'; // If you have a navbar component
// import './App.css'; // Ensure you have this line to include styles

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Include Navbar if you have it */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/owner-login" element={<OwnerLogin />} />
//         <Route path="/owner-register" element={<OwnerRegister />} />
//         <Route path="/salesperson-login" element={<SalespersonLogin />} />
//         <Route path="/owner-dashboard" element={<OwnerDashboard />} />
//         <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import OwnerLogin from './pages/OwnerLogin';
// import OwnerRegister from './pages/OwnerRegister';
// import SalespersonLogin from './pages/SalespersonLogin';
// import OwnerDashboard from './components/OwnerDashboard';
// import SalespersonDashboard from './components/SalespersonDashboard';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/owner-login" element={<OwnerLogin />} />
//         <Route path="/owner-register" element={<OwnerRegister />} />
//         <Route path="/salesperson-login" element={<SalespersonLogin />} />
//         <Route path="/owner-dashboard" element={<OwnerDashboard />} />
//         <Route path="/salesperson-dashboard" element={<SalespersonDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
