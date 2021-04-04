import React, { useState , useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartLine = () => {
    
    const [chartdata, setchartdata] = useState({});
    const chart = () => {
        setchartdata({
            labels:["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sept","Oct","Nov","Dec"],
            datasets:[
                {   
                    label:"2020",
                    data:[400,430,670,345,576,675,567,634,754,234,543,498],
                    fill:false,
                    borderColor:["rgba(255,255,255,1)"],
                    borderWidth:3,
                    pointBackgroundColor:"rgba(0,0,0,.8)",
                    pointBorderWidth:1
                },
                {
                    label:"2021",
                    data:[300,450,567,385,476,575,590,434,509,634,393,528],
                    fill:false,
                    borderColor:["rgba(46, 85, 255, 0.8)"],
                    borderWidth:3,
                    pointBackgroundColor:"rgba(0,0,0,.8)",
                    pointBorderWidth:1
                }
            ]
        },)
    }

    useEffect(() => {
        chart()
    },[])

    return(
            <Line className="w-100" data={chartdata} options={{
                responsive:1,
                maintainAspectRatio:true,
                responsiveAnimationDuration:2,
                
                legend: {
                    display:true,
                    position:'bottom',
                    align:'end',
                    labels: {
                        fontColor: 'rgb(255, 255, 255)'
                    }
                },
                tooltips: {
                    bodySpacing: 1,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                },
                layout: {
                    padding: {top: 10, bottom: 0, left:10, right:10 },
                },
                scales: {
                    yAxes: [
                    {
                        display: 1,
                        ticks: {
                            display: true,
                            maxTicksLimit: 7,
                            fontColor: 'rgb(255, 255, 255)'
                        },
                        gridLines: {
                            display: true,
                            color:'rgba(255, 255, 255,.3)'
                        },
                    },
                    ],
                    xAxes: [
                    {
                        display: 0,
                        ticks: {
                        display: false,
                        },
                        gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false,
                        },
                    },
                    ],
                },
            }} />
    )
}

export default ChartLine;