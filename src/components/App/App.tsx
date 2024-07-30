import ContactPage from "../../pages/ContactPage/ContactPage";
import HomePage from "../../pages/HomePage/HomePage";
import RatesPage from "../../pages/RatesPage/RatesPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
