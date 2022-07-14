import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const MathInputLineChart = (props) => {
  console.log(props);
  const xArray = [];
  const yArray = [];

  props.XYarray.map(function (element) {
    const xElement = element.x;
    xArray.push(xElement);

    const yElement = element.y;
    yArray.push(yElement);
  });
  console.log(xArray);
  console.log(yArray);

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
      categories: xArray,
    },
  };
  const series = [
    {
      data: yArray,
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="line" />
    </>
  );
};

export default MathInputLineChart;
