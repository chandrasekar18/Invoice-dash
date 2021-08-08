import React,{useEffect} from 'react'
import {Chart} from 'chart.js'
let Firstchart;
function Barchart(props) {
    const { previousdata, currentdata,type,id } = props
    useEffect(() => {
        if (Firstchart) {
            Firstchart.destroy()
        }
        let previous = previousdata.map(data => { return data.Invoice_amount })
        console.log("previous", previous[0]);
        let current = currentdata.map(data => { return data.Invoice_amount })
        console.log("current", current[0]);
        let previousdate = previousdata.map(data => { return data.Date })
        let currentdate = currentdata.map(data => { return data.Date })
        const firstChart = (previousdate, currentdate, previous, current) => {
            var ctx = document.getElementById(id).getContext('2d');
            Firstchart = new Chart(ctx, {

                type: type,
                data: {
                    labels: [previousdate, currentdate],
                    datasets: [{
                        label: '# of Votes',
                        data: [previous[0], current[0]],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    fill:true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            }
            );
            // Firstchart.destroy()
            console.log("firstchart", Firstchart);
        }


        firstChart(previousdate, currentdate, previous, current)
    }, [currentdata, previousdata])
    
    return (<canvas id={id} className="canvasStyle"></canvas>)
}

export default Barchart
