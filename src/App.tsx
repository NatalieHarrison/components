import './App.css';
import { useEffect, useState } from 'react';

import Legend from './components/Legend';
import MathInput from './components/MathInput';
import Chart from './componentSets/Chart';
import ChartAndBoxChecks from './componentSets/ChartAndBoxChecks';
import ChartAndBoxes from './componentSets/ChartAndBoxes';
import ChartsBoxButtonsBar from './componentSets/ChartsBoxButtonsBar';
import HeaderBoxesAndChart from './componentSets/HeaderBoxesAndChart';
import MultiChartsBoxesBar from './componentSets/MultiChartsBoxesBar';
import UserInfoSet from './componentSets/UserInfoSet';
import { tmpdir } from 'os';

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
  {
    SDE1: 100,
    SDE2: 25,
    SDE3: 36,
    SDE4: 4,
    SDE5: 10,
    SDE6: 98,
    SDE7: 16,
    SDE8: 42,
    SDE9: 87,
    SDE10: 3,
    date: '2021-02-06T11:21:33Z',
  },
];

function App() {
  const [sdes, setSdes] = useState([]); //[{}] //pass legend sde array into this state
  //map through Mock array/sdes and get their values and then set that to data
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const test = (a) => {
    setSdes(a);
  };
  useEffect(() => {
    let temp = 0; //array of objects with labels value
      const sdesKeys = Object.keys(sdes)

      const secondScopeData = Mock.map(item =>{
        temp = Object.fromEntries(sdesKeys.map(key => [sdes[key], item[key], item.date]))
        temp['date'] = item.date
        return temp
      })  
      console.log(secondScopeData)

      setData2(secondScopeData);
 
  }, [sdes]);

  return (
    <div className="App">
      <Legend sdes={test}></Legend>

      <b> Math input</b>
      <MathInput selections={data2}  ></MathInput>
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
