import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Form from './pages/form';
import ThankYou from './pages/thankyou';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
