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
// console.log(Mock[0].SDE1)
function App() {
  const [sdes, setSdes] = useState([]); //[{}] //pass legend sde array into this state
  //map through Mock array/sdes and get their values and then set that to data
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const test = (a) => {
    setSdes(a);
  };
  useEffect(() => {
    const temp = []; //array of objects with labels value
    const firstScopeData = [];
    const secondScopeData = [];
    Mock.map(function (element) {
      //element = {SDE1:43, SDE2:5...}
      Object.keys(Mock[0]).map(function (key) {
        //line 57-66 is for the first scope
        sdes.map(function (item) {
          if (key == item.label) {
            const firstScopeValue = Mock[0][key];
            firstScopeData.push(firstScopeValue);
          }
        });
      });
      for (let i = 0; i < Mock.length; i++){
        Object.keys(Mock[i]).map(function (key) {
          //line 57-66 is for the first scope
          sdes.map(function (item) {
            if (key == item.label) {
              let secondScope = { var: element[key], date: element.date} 
              secondScope[item.var] = secondScope['var']
              delete secondScope['var']
              secondScopeData.push(secondScope)
            }
          });
        });
      }
    });
    // setData(temp);
    setData(firstScopeData);
    setData2(secondScopeData);
  }, [sdes]);

  return (
    <div className="App">
      <Legend sdes={test}></Legend>

      <b> Math input</b>
      <MathInput selections={data} secondScope={data2} ></MathInput>
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
