import React from "react";
import PropTypes from "prop-types";
import { Radar } from "react-chartjs-2";

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

const ScoringTimeDaySlot = ({ data }) => {
  // console.log("datata", data);
  const datasets = [];
  for (const [key, value] of Object.entries(data)) {
    const rand_color = random_rgba();
    const dataset = {
      label: `Day ${key}`,
      data: Object.values(value),
      backgroundColor: rand_color,
      borderColor: rand_color,
    };
    datasets.push(dataset);
  }
  const chartData = {
    labels: Array(24)
      .fill(0)
      .map((_, i) => i + 1),
    datasets: datasets,
  };

  const options = {
    // scales: {
    //   xAxes: [
    //     {
    //       type: "time",
    //       time: {
    //         parser: "YYYY-MM-DD",
    //         unit: "day",
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       type: "time",
    //       time: {
    //         parser: "HH:mm:SS",
    //       },
    //     },
    //   ],
    // },
  };
  // console.log(data);
  return <Radar data={chartData} options={options} />;
};

ScoringTimeDaySlot.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScoringTimeDaySlot;
