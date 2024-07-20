import CarouselComponent from "./CarouselComponent";
import { visitorsData } from "./visitorsData";
import VisitorsStyled from "./VisitorsStyled";

const Visitors: React.FC = () => {
  return (
    <VisitorsStyled>
      <CarouselComponent items={visitorsData} />
    </VisitorsStyled>
  );
};

export default Visitors;
