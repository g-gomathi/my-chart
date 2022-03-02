import React from "react";
import ReactEcharts from "echarts-for-react";

function App() {
  const option={
    xAxis:{
      type:"category",
      data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    },
    yAxix:{
      type:"value",
    },
    series:[{
      data:[120,200,50,70,110,130,170],
      type:"bar"
    },],
  };
  return <ReactEcharts option={option}/>;
}

export default App;
