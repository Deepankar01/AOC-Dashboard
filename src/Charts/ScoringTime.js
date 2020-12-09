import React from "react";
import PropTypes from "prop-types";
import { Bubble } from "react-chartjs-2";

const Part1ScoreTimes = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "user completion time",
        data,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        radius: 5,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: "YYYY-MM-DD",
            unit: "day",
          },
        },
      ],
      yAxes: [
        {
          type: "time",
          time: {
            parser: "HH:mm:SS",
          },
        },
      ],
    },
  };
  return <Bubble data={chartData} options={options} />;
};

Part1ScoreTimes.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Part1ScoreTimes;
