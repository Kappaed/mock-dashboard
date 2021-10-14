import styled from "styled-components";
import { Line } from "react-chartjs-2";

const Wrapper = styled.div`
  position: relative;
  height: 55px;
  canvas {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const BackGroundGraph = (props) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        // label: "# of Votes",

        lineTension: 0.3,
        data: props.data,
        fill: true,
        backgroundColor: props.bgColor,
        borderColor: props.color,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    layout: {
      padding: {
        left: -10,
        bottom: -10,
      },
    },

    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 1.5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },

        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Wrapper>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

export default BackGroundGraph;
