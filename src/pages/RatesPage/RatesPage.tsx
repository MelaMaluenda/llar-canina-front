import RatesStyled from "./RatesStyled";
import Location from "../../components/Location /Location";
import Rates from "../../components/Rates/Rates";
import Requirements from "../../components/Requirements/Requirements";
import CallToAction from "../../components/CallToAction/CallToAction";

const RatesPage = (): React.ReactElement => {
  return (
    <RatesStyled>
      <Rates />
      <CallToAction />
      <Requirements />
      <Location />
    </RatesStyled>
  );
};

export default RatesPage;
