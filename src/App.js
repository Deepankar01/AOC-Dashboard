import { GlobalScore, ScoringTimeDaySlotBubble } from "./Charts";
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
  padding-top: 0.9rem;
  font-family: "Press Start 2P", cursive;
`;

const ChartContainer = styled.div`
  padding: 1rem;
  justify-content: center;
`;

const Charts = styled.div``;
function App() {
  return (
    <Container>
      <Header>
        <div>AOC</div>
      </Header>
      <Charts>
        <ChartContainer>
          <GlobalScore data={utils.get_global_score_data()} />
        </ChartContainer>
        {/* <ScoringTime data={utils.get_part1_times()} />
        <ScoringTimeDaySlot
          data={utils.get_day_group(utils.get_part1_times())}
        /> */}
        <ChartContainer
          style={{ position: "relative", height: "40vh", width: "80vw" }}
        >
          <ScoringTimeDaySlotBubble
            data={utils.get_day_group(utils.get_part1_times())}
          />
        </ChartContainer>
      </Charts>
    </Container>
  );
}

export default App;
