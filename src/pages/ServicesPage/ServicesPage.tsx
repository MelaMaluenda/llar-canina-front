import ServicesPageStyled from "./ServicesPageStyled";
import Work from "../../components/Work/Work";
import Shop from "../../components/Shop/Shop";
import Walks from "../../components/Walks/Walks";
import Location from "../../components/Location /Location";

const ServicesPage = (): React.ReactElement => {
  return (
    <ServicesPageStyled>
      <Work />
      <Shop />
      <Walks />
      <Location />
    </ServicesPageStyled>
  );
};

export default ServicesPage;
