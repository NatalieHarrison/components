import './App.css';
import { useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import Legend from './components/Legend';
import MathInput from './components/MathInput';
import Chart from './componentSets/Chart';
import ChartAndBoxChecks from './componentSets/ChartAndBoxChecks';
import ChartAndBoxes from './componentSets/ChartAndBoxes';
import ChartsBoxButtonsBar from './componentSets/ChartsBoxButtonsBar';
import HeaderBoxesAndChart from './componentSets/HeaderBoxesAndChart';
import MultiChartsBoxesBar from './componentSets/MultiChartsBoxesBar';
import UserInfoSet from './componentSets/UserInfoSet';

const Mock = [
  {
    SDE1: 43,
    SDE2: 5,
    SDE3: 6,
    SDE4: 10,
    SDE5: 11,
    SDE6: 22,
    SDE7: 19,
    SDE8: 2,
    SDE9: 99,
    SDE10: 67,
    date: '2021-09-07T12:51:33Z',
  },
];
function App() {
  const [sdes, setSdes] = useState([]); //[{}] //pass legend sde array into this state
  //map through Mock array/sdes and get their values and then set that to data
  const [data, setData] = useState([]);
  const test = (a) => {
    setSdes(a);
  };
  useEffect(() => {
    const temp = []; //array of objects with labels value
    Mock.map(function (element) {
      //element = {SDE1:43, SDE2:5...}
      Object.keys(element).map(function (key) {
        //key = SDE1 new line SDE2..
        sdes.map(function (item) {
          if (key == item.label) {
            const variable = item.var;
            const label = item.label;
            const value = element[key]; //gets value of key
            const scopeData = value ;
            temp.push(scopeData);
            // console.log(temp);
          }
        });
      });
    });
    setData(temp);
  }, [sdes]);

  // console.log(data);
  return (
    <div className="App">
      <Legend sdes={test}></Legend>

      <b> Math input</b>
      <MathInput selections={data}></MathInput>
      <b>Slide 1</b>
      <ChartAndBoxes></ChartAndBoxes>

      <b>Slide 3</b>
      <Chart></Chart>

      <b>Slide 5</b>
      <ChartAndBoxChecks></ChartAndBoxChecks>

      <b>Slide 7</b>
      <HeaderBoxesAndChart></HeaderBoxesAndChart>

      <b> Slide 15</b>
      <UserInfoSet></UserInfoSet>

      <b>Slide 16</b>
      <MultiChartsBoxesBar></MultiChartsBoxesBar>

      <b> Slide 17</b>
      <ChartsBoxButtonsBar></ChartsBoxButtonsBar>
    </div>
  );
}

export default App;
