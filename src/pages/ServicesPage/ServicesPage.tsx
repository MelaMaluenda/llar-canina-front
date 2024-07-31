import ServicesPageStyled from "./ServicesPageStyled";
import Work from "../../components/Work/Work";
import Shop from "../../components/Shop/Shop";
import Walks from "../../components/Walks/Walks";

const ServicesPage = (): React.ReactElement => {
  return (
    <ServicesPageStyled>
      <Work />
      <Shop />
      <Walks />
    </ServicesPageStyled>
  );
};

export default ServicesPage;
