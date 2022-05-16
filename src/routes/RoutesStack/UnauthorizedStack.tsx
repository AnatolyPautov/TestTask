import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Registartion from "../../pages/Registartion";

export default function UnauthorizedStack() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registartion" element={<Registartion />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
