import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home.tsx";
import Profile from "./components/Profile.tsx";
import ClientLayout from "./layout/react.tsx";
import LoginPage from "./components/login.tsx";

export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<ClientLayout />}>
        <Route element={<HomePage />} />

        </Route>
    </Routes>
  </BrowserRouter>
  );
}