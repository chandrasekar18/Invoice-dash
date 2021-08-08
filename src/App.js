import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Barchart from './Components/Barchart';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import { useState } from 'react'
import {data} from './Components/Data'

function App() {
  
  //filter the distinct date from dataset and stored it in Descending order
  const options = new Set()
  data.map((data1) => {
    options.add(data1.Date)
  })
  const array = Array.from(options);
  array.reverse()

  //react usestate function
  const [currentMonth, setcurrentMonth] = useState(array[0].toString())
  //filter the current month and previous month data if user select the current 
  const currentdata = data.filter((data) => data.Date === parseInt(currentMonth))
  let previousdata=[];
  if (currentMonth.slice(4, 6) === '01')
  {
    previousdata = data.filter((data) => data.Date === parseInt(currentMonth) - 89)
  }
  else {
    previousdata = data.filter((data) => data.Date === parseInt(currentMonth) - 1)
  }
  
  console.log(currentdata);
  console.log(previousdata);

 
  return (
    <div className="App">
      <Header selectMonth={setcurrentMonth} array={array}></Header>
      {/* <Barchart></Barchart> */}
      <Dashboard previousdata={previousdata} currentdata={currentdata}></Dashboard>
    </div>
  );
}

export default App;
