import axios from 'axios';
import { useState, useEffect } from 'react';
import LineChart from './LineChart';

const App = () => {
  const [chart, setChart] = useState({});

  const fetchData = async () => {
    let country = "USA";
    try {
      const response = await axios.get(`https://corona.lmao.ninja/v2/historical/${country}`);
      setChart({
        labels: Object.keys(response.data.timeline.cases),
        datasets: [
          {
            label: "Data Covid-19",
            data: Object.values(response.data.timeline.cases),
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(98, 0, 0, 0.90)",
            borderColor: "rgba(220, 6, 6, 0.6)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(220, 6, 6, 0.6)",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220, 6, 6, 0.6)",
            pointHoverBorderColor: "#ffffff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            pointStyle: "circle",
            stack: "line",
            cubicInterpolationMode: "monotone",
            interaction: {
              intersect: false,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <LineChart data={chart} />
    </div>
  );
}
 
export default App;