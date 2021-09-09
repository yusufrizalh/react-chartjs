import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    console.log("data", data);

    return (
      <Line
        data={data}
        options={{
          responsive: true,
          height: "600px",
          width: "600px",
          indexAxis: "x",
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    );
}
 
export default LineChart;