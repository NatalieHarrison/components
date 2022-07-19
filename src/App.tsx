import './App.css';
import { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import SearchMI from './components/Legend';
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
  //return data
  {
    SDE1: 43,
    SDE2: 5,
    SDE3: 6,
    SDE4: 10,
    SDE5: 11,
    date: '2021-09-07T12:51:33Z',
  },
];
function App() {
  //state variable
  const [sdes, setSdes] = useState([]); //[{}] 
  const [data, setData] = useState([]); 


  
  return (
    <div className="App">
      <Legend></Legend>
      <b> Math input</b>
      <MathInput></MathInput> 
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
