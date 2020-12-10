import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 2rem;
  sup {
    font-size: 0.8rem;
  }
`;

const Score = styled.div`
  font-size: 1rem;
`;

const Winner = ({ data }) => {
  return (
    <Heading>
      <div>
        Winnner
        <sup>
          <code>local_score</code>
        </sup>
      </div>
      <Score>{data}</Score>
    </Heading>
  );
};

Winner.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Winner;
