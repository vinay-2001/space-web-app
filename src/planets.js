import './planets.css'
import p0 from './components/images/mainplanets.gif'
import p1 from './components/images/mercury.gif'
import p2 from './components/images/venus.gif'
import p3 from './components/images/earth.gif'
import p4 from './components/images/mars.gif'
import p5 from './components/images/jupiter.gif'
import p6 from './components/images/saturn.gif'
import p7 from './components/images/uranus.gif'
import p8 from './components/images/neptune.gif'
function Planets() {
  
    return (
     <div>
         <img src={p0} className='w-100 rounded'></img>
         <h1 className='head'>INNER PLANETS</h1>
         <div className='d-flex'>
         <div className="card card-body p-2 m-4  bg-info  rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>MERCURY</h4>
                  <img src={p1} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0 rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         <div className="card card-body p-2 m-4  bg-white rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded bg-info text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>VENUS</h4>
                  <img src={p2} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0  bg-info rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         </div>
         <div className='d-flex bg-dark'>
         <div className="card card-body p-2 m-4  bg-white rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded bg-info text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>EARTH</h4>
                  <img src={p3} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0  bg-info rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         <div className="card card-body p-2 m-4  bg-info rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>MARS</h4>
                  <img src={p4} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0  rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         </div>
         <h1 className='head'>OUTER PLANETS</h1>
         <div className='d-flex'>
         <div className="card card-body p-2 m-4  bg-info rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>JUPITER</h4>
                  <img src={p5} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0 rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         <div className="card card-body p-2 m-4   rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 bg-info rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>SATURN</h4>
                  <img src={p6} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0 bg-info rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         </div>
         <div className='d-flex bg-dark'>
         <div className="card card-body p-2 m-4  bg-white rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 bg-info rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>URANUS</h4>
                  <img src={p7} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0  bg-info rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         <div className="card card-body p-2 m-4  bg-info rounded text-center w-50">
               <div className="d-flex">
               <div className="card card-body p-0 m-4 rounded text-center w-20" height="50">
               <div >
                  <div>
                  <h4 className='p-2'>NEPTUNE</h4>
                  <img src={p8} className="p-2" width="140" height="150"></img>
                  </div>
               </div>
                </div>
                <div className="card card-body p-0 m-0 rounded text-center w-80">
               <div >
                  <div>
                  <p>Radius (Mean)          :2,439.7 km</p>
                  <p>Mass (Appox)           :3.30 ×10^23 kg</p>
                  <p>Eccentricity of orbit  :0.2056</p>
                  <p>Surface Gravity        :370 cm/sec^2</p>
                  <p>Surface Area           :74,797,000 sq.km</p>
                  <p>Mercurian Year         :87.97 Earth days</p>
                  <p>Mean orbit velocity    :47.36 km/sec</p>
                  <p>Rotation Period        :58.646 Earth days</p>
                  <p>Revolution Period      :175.9 Earth days</p>
                  <p>Mean distance from Sun :0.39 AU</p>
                  {/*<img src={p1data} className="p-0"></img>*/}
                  </div>
               </div>
                </div>
               </div>
         </div>
         </div>
     </div>
    );
  }
  
  export default Planets;