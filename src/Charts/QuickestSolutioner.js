import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 2rem;
  sup {
    font-size: 0.8rem;
  }
`;

const Score = styled.ol`
  padding-inline-start: 1.2rem;
  font-size: 0.8rem;
  -moz-column-count: 4;
  -moz-column-gap: 20px;
  -webkit-column-count: 4;
  -webkit-column-gap: 20px;
  column-count: 4;
  column-gap: 20px;
  li {
    line-height: 1.2rem;
  }
`;

const QuickestSolutioner = ({ data }) => {
  return (
    <Heading>
      <div>
        Quick{" "}
        <a href="https://www.urbandictionary.com/define.php?term=Solutioner">
          solutioner
        </a>
        <sup>
          <code>Part2-Part1</code>
        </sup>
      </div>
      <Score>
        {data.map((element) => (
          <li>{element}</li>
        ))}
      </Score>
    </Heading>
  );
};

QuickestSolutioner.propTypes = {
  data: PropTypes.array.isRequired,
};

export default QuickestSolutioner;
