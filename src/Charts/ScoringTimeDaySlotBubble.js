import React from "react";
import PropTypes from "prop-types";
import { Bubble } from "react-chartjs-2";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 2rem;
  padding-bottom: 0.5rem;
`;

function random_rgba() {
  var letters = "012345".split("");
  var color = "#";
  color += letters[Math.round(Math.random() * 5)];
  letters = "0123456789ABCDEF".split("");
  for (var i = 0; i < 5; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const ScoringTimeDaySlotBubble = ({ data }) => {
  const datasets = [];
  for (const [key, value] of Object.entries(data)) {
    const rand_color = random_rgba();
    let datum = [];
    for (const [time, occurance] of Object.entries(value)) {
      datum.push({
        y: key,
        x: `${parseInt(time)}:00:00`,
        r: occurance,
      });
    }
    const dataset = {
      label: `${key}`,
      data: datum,
      backgroundColor: rand_color,
      borderColor: rand_color,
      lineTension: 0.1,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      borderJoinStyle: "miter",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
    };
    datasets.push(dataset);
  }
  const chartData = {
    datasets: datasets,
  };

  const options = {
    aspectRatio: 1,
    scales: {
      yAxes: [
        {
          type: "time",
          time: {
            parser: "YYYY-MM-DD",
            unit: "day",
          },
        },
      ],
      xAxes: [
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
      <Heading>Timings</Heading>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

ScoringTimeDaySlotBubble.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScoringTimeDaySlotBubble;
