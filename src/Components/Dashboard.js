import React,{ useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import { data } from './Data';
import Barchart from './Barchart';
Chart.register(...registerables);

console.log("function outer");
function Dashboard(props) {
    const { previousdata, currentdata } = props
    console.log("function inner");

    return (
        <div>
            <div className="main-container">

                
                <div>
                    
                    <Barchart type='bar' id='mychart' previousdata={previousdata} currentdata={currentdata}></Barchart>
                    
                </div>
                <div>
                    <Barchart type='line' id='mychart2' previousdata={previousdata} currentdata={currentdata}></Barchart>
                </div>
                <div>
                    <canvas id="myChart2" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart3" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart4" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart5" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
