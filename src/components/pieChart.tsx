import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const options: ApexOptions = {
    colors:['#1b5e20','#4caf50','#a5d6a7', '#e0e0e0','#757575'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]

  };
  const series = [44, 55, 13, 43, 22];

  return (
    <>
      <Chart options={options} series={series} type="pie" />
    </>
  );
};

export default PieChart;
