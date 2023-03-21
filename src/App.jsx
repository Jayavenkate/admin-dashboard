import "./App.css";
import { Earnings } from "./Earnings";
import {LineChart} from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import { LinearIndeterminate } from "./LinearIndeterminate";
import { ColorBar } from "./ColorBar";

export default function App(){
  return(
    <div className="admin-dashboard">
 <div>
<h1>Dashboard</h1>
  </div>
  <Earnings />
  <LineChart />
  <DoughnutChart />
  <LinearIndeterminate />
  <ColorBar />
  
  {/* <CustomColor /> */}

</div>
 
  )
}
