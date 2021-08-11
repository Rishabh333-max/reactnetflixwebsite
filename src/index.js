import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata"


ReactDOM.render(
  <><h1 className="heading_style">List of Top 5 netflix series in 2020</h1>
  
 { Sdata.map(function netflixcard(val,index,arr){
return(
  <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname}
  link={val.link}/>
)
 })};
 </>,
  document.getElementById('root')
);


