import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Question1 from './components/survey/Question1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/survey" element={<Question1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
