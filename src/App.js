import { GlobalScore, ScoringTimeDaySlotBubble } from "./Charts";
import Heading from "./Header";
import * as utils from "./utils";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 5% 1fr;
`;
const Header = styled.div`
  text-align: center;
  font-size: 2rem;
  font-family: "Press Start 2P", cursive;
`;

const Charts = styled.div``;
function App() {
  return (
    <Container>
      <Header>
        <Heading />
      </Header>
      <Charts>
        <GlobalScore data={utils.get_global_score_data()} />
        {/* <ScoringTime data={utils.get_part1_times()} />
        <ScoringTimeDaySlot
          data={utils.get_day_group(utils.get_part1_times())}
        /> */}
        <ScoringTimeDaySlotBubble
          data={utils.get_day_group(utils.get_part1_times())}
        />
      </Charts>
    </Container>
  );
}

export default App;
