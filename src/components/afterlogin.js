import { useState,useEffect } from 'react';
import {Route,Routes,Link} from 'react-router-dom';
import iss1 from './images/iss.gif';

function Afterlogin() {
    
    return (
        <div>
            <h1>HERE ARE YOUR ADDITIONAL FEATURES</h1>
            <div className="card card-body p-0 m-3  bg-info rounded text-center w-25">
                <div className="d-flex">
                    <div>
                        <img src={iss1} className="w-100 rounded" />
                    </div>
                    <button>CLICK HERE</button>
                </div>
            </div>
        </div>
    );
}
  
  export default Afterlogin;