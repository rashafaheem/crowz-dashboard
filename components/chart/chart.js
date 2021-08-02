import { Line } from "react-chartjs-2";

const state = {
  labels: ["01", "02", "03", "04", "05", "06", "07"],
  datasets: [
    {
      label: "",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(245, 185, 66, 1)",
      borderColor: "rgba(245, 185, 66,1 )",
      borderWidth: 4,
      data: [18, 30, 16, 11, 33, 23, 37],
    },
  ],
};

function ActChart(props) {
  return (
    <div>
      <img
        className="white"
        src="https://i0.wp.com/novocom.top/image/cnlhbVyLmNmVsbGVyLmNvbQ==/wp-content/uploads/2013/10/plain-white-background-1024x524.jpg"
      />
      <div className="chart">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ActChart;
