import RatesStyled from "./RatesStyled";
import Location from "../../components/Location /Location";
import Rates from "../../components/Rates/Rates";
import Requirements from "../../components/Requirements/Requirements";

const RatesPage = (): React.ReactElement => {
  return (
    <RatesStyled>
      <Rates />
      <Requirements />
      <Location />
    </RatesStyled>
  );
};

export default RatesPage;
