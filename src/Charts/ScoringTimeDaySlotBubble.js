import React from "react";
import PropTypes from "prop-types";
import { Bubble } from "react-chartjs-2";

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

const ScoringTimeDaySlotBubble = ({ data }) => {
  const datasets = [];
  for (const [key, value] of Object.entries(data)) {
    const rand_color = random_rgba();
    let datum = [];
    for (const [time, occurance] of Object.entries(value)) {
      datum.push({
        x: key,
        y: `${parseInt(time)}:00:00`,
        r: occurance,
      });
    }
    const dataset = {
      label: `${key}`,
      data: datum,
      backgroundColor: rand_color,
      borderColor: rand_color,
    };
    datasets.push(dataset);
  }
  console.log(datasets[0]);
  const chartData = {
    // labels: Array(24)
    //   .fill(0)
    //   .map((_, i) => i + 1),
    datasets: datasets,
  };

  const options = {
    aspectRatio: 1,
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
            parser: "HH:mm:ss",
            unit: "hour",
            distribution: "linear",
          },
        },
      ],
    },
  };
  return (
    <div>
      Timing
      <Bubble data={chartData} options={options} />
    </div>
  );
};

ScoringTimeDaySlotBubble.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScoringTimeDaySlotBubble;
