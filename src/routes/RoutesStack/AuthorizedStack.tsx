import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../pages/Home";
import Training from "../../pages/Training";

function AuthorizedStack() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/training"
        element={
          <>
            <Header />
            <Training />
            <Footer />
          </>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
export default AuthorizedStack;
