import { useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import styled from "styled-components";
const range = (num) => {
  const initial = new Array(num);
  const result = Array.from(initial, (elem, index) => index + 1);
  return result;
};

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  /* flex-shrink: 1; */
  /* cursor: pointer; */
`;

const LeftGraph = () => {
  const data = {
    labels: range(28),
    datasets: [
      {
        label: "Current Month",
        data: [
          500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420,
          1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200,
          3200, 3400, 2910, 3100, 4250,
        ],
        fill: true,
        backgroundColor: "rgba(180, 220, 230, 0.4)",
        borderColor: "rgb(180, 220, 230)",
        lineTension: 0.2,
      },
      {
        label: "Past Month",
        data: [
          380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380,
          291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720,
          780, 1200,
        ],
        fill: true,
        borderDash: [5, 5],
        backgroundColor: "rgba(248,185,230, 0.4)",
        borderColor: "rgb(248,185,230)",
        lineTension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "index",
        intersect: false,
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
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5.5,
          beginAtZero: true,
        },
      },
      y: {
        ticks: {
          callback: (label) => {
            if (label >= 1000) {
              return `${(label / 1000).toFixed(1)}k`;
            } else {
              return label;
            }
          },
        },
      },
    },
  };

  const plugins = [
    {
      afterDraw: (chart) => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const activePoint = chart.tooltip._active[0];
          const { ctx } = chart;
          const { x } = activePoint.element;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = "lightgray";
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ];

  return (
    <Wrapper>
      <Line data={data} options={options} plugins={plugins} />
    </Wrapper>
  );
};

export default LeftGraph;
