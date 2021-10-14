import { Pie } from "react-chartjs-2";
import { Redirect } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  @media (max-width: 1100px) {
    height: 300px;
  }
`;
const data = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      label: "# of Votes",
      data: [68, 24, 10],
      backgroundColor: [
        "rgba(73,134,247, 1)",
        "rgba(73,134,247, 0.6)",
        "rgba(73,134,247, 0.3)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  hoverBorderColor: "transparent",
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    },
  },
};
const RightGraph = () => {
  return (
    <Wrapper>
      <Pie data={data} options={options} />
    </Wrapper>
  );
};

export default RightGraph;
