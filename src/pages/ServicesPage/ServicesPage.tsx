import ServicesPageStyled from "./ServicesPageStyled";
import Work from "../../components/Work/Work";
import Shop from "../../components/Shop/Shop";

const ServicesPage = (): React.ReactElement => {
  return (
    <ServicesPageStyled>
      <Work />
      <Shop />
    </ServicesPageStyled>
  );
};

export default ServicesPage;
