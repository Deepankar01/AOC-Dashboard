import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 2rem;
`;
const Score = styled.div`
  font-size: 1rem;
`;

const GlobalScore = ({ data }) => {
  return (
    <Heading>
      <div>Anyone with global score</div>
      <Score>{typeof data == "number" ? data : data.length} persons</Score>
    </Heading>
  );
};

GlobalScore.propTypes = {
  data: PropTypes.any.isRequired,
};

export default GlobalScore;
