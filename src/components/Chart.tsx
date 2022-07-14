import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const Charts = () => {
  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="bar" />
    </>
  );
};

export default Charts;
