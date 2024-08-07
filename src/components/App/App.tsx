import ContactPage from "../../pages/ContactPage/ContactPage";
import HomePage from "../../pages/HomePage/HomePage";
import RatesPage from "../../pages/RatesPage/RatesPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "../../utils/scrollToTopFunction/scrollToTopFunction";
import Cookies from "../../utils/Cookies/Cookies";
import TermsAndConditions from "../../pages/TermsAndConditions/TermsAndConditions";
import CookiesPolicy from "../../pages/CookiesPolicy/CookiesPolicy";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
      <Cookies />
    </>
  );
};

export default App;
