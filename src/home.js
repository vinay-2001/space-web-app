import './home.css';
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import img1 from './components/images/main.gif';
import planetsimg from './components/images/ourplanets.jpg';
import dwaftplanetsimg from './components/images/Dwarf-Planets.jpg';
import exoplanetsimg from './components/images/exoplanets.jpg';
import {Route,Routes,Link} from 'react-router-dom';
import Planets from './planets';


function Home() {
   return (
      <div>
          <img src={img1} className='w-100 rounded'></img>
          <h1 className='tracking-in-expand'>INFOSPACE</h1>
          <h1 className='planet'>PLANETS</h1>
          <div className='d-flex'>
          <div className="card card-body p-0 m-3  bg-info rounded text-center w-25">
                <div className="d-flex">
                   <div>
                   <Link to="Planets"><img src={planetsimg} className="w-100 rounded" /></Link>
                   </div>
                </div>
          </div>
          <div className="card card-body p-0 m-3  bg-info rounded text-center w-25">
                <div className="d-flex">
                   <div>
                   <Link to="Dwarfplanets"><img src={dwaftplanetsimg} className="w-100 rounded"/></Link>
                   </div>
                </div>
          </div>
          <div className="card card-body p-0 m-3  bg-info rounded text-center w-25">
                <div className="d-flex">
                   <div>
                   <Link to="Exoplanets"><img src={exoplanetsimg} className="w-100 rounded"/></Link>
                   </div>
                </div>
          </div>
          </div>
          <h1>Below</h1>
          
      </div>
     );
  }
  
  export default Home;