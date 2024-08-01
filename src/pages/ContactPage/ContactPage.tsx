import ReservationForm from "../../components/ReservationForm/ReservationForm";
import ContactStyled from "./ContactStyled";
import Location from "../../components/Location /Location";

const ContactPage = (): React.ReactElement => {
  return (
    <ContactStyled>
      <ReservationForm />
      <Location />
    </ContactStyled>
  );
};

export default ContactPage;
