import './home.css';
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import  Carousel  from "react-elastic-carousel";
import img1 from './images/Spacebackground2.jpg';
import planetsimg from './images/8planets1.jpg';
import draftplanetsimg from './images/draftplanets.jpg';
import exoplanetsimg from './images/exoplanets.jpg';
import render from '@testing-library/react';
/*
const breakpoints = [
   {width: 1, itemstoShow: 2},
   {width: 550, itemstoShow: 2},
   {width: 768, itemstoShow: 3},
   {width: 1200, itemstoShow: 4},
]

class home extends Component{
   state={
      items:[
         {id: 1, title: 'mg1'},
      ]
   }
}
*/
function Home() {
      //const {items}=this.state;
    return (
     <div>
         <img src={img1} className='w-100 rounded'></img>
         <h1 className='tracking-in-expand'>INFOSPACE</h1>
         <h1 className='planet'>PLANETS</h1>
         <div>
          <div className="row text-center border">
             <div className="col col-lg-4 col-md-3 col-sm-12 bg-info p-3 border">
                <img src={planetsimg} className="w-100"/>
             </div>
             <div className="col col-lg-4 col-md-3 col-sm-12 bg-info p-2 border">
             <img src={draftplanetsimg} className="w-100"/>
             </div>
             <div className="col col-lg-4 col-md-3 col-sm-12 bg-info p-2 border">
             <img src={exoplanetsimg} className="w-100"/>
             </div>
          </div>
      </div>
     </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Home />,rootElement);
  export default Home;