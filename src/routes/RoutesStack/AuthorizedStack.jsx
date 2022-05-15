import { Route, Routes } from "react-router-dom";
import Footer from "../../comonents/Footer";
import Header from "../../comonents/Header";
import Home from "../../pages/Home";

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
      <Route path="/training" element={<div />} />
      <Route path="/account" element={<div />} />
    </Routes>
  );
}
export default AuthorizedStack;
