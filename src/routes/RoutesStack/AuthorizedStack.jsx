import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
      <Route path="/training" element={<div>sdfssad1111</div>} />
      <Route path="/account" element={<div />} />
    </Routes>
  );
}
export default AuthorizedStack;
