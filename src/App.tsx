import './App.css';
import { ThemeProvider } from '@mui/material/styles';

import Chart from './componentSets/Chart';
import ChartAndBoxChecks from './componentSets/ChartAndBoxChecks';
import ChartAndBoxes from './componentSets/ChartAndBoxes';
import ChartsBoxButtonsBar from './componentSets/ChartsBoxButtonsBar';
import HeaderBoxesAndChart from './componentSets/HeaderBoxesAndChart';
import MultiChartsBoxesBar from './componentSets/MultiChartsBoxesBar';
import UserInfoSet from './componentSets/UserInfoSet';
function App() {
  return (
    <div className="App">
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
