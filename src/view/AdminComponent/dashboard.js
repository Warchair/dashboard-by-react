import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ChartLine from '../../Component/chart/ChartLine';
import ChartDoughnut from '../../Component/chart/ChartDoughnut';
import ChartBar from '../../Component/chart/chartBar';
import StarsIcon from '@material-ui/icons/Stars';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PublicIcon from '@material-ui/icons/Public';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';



class dashboard extends Component {
    render() {

        const data = [
            {
                logo:<StarsIcon fontSize="large" className="iconItem" />,
                title: "Ratings",
                note:"Last Minute ago",
                persentase:"-4.38%",
                color:"#006CE6",
                traffic:<ArrowDownwardIcon/>,
                total:"65.700"
            },
            {
                logo:<MonetizationOnIcon  fontSize="large" className="iconItem" />,
                title: "Income",
                note:"Last Minute ago",
                persentase:"+8.34%",
                color:"#FCB305",
                traffic:<ArrowUpwardIcon/>,
                total:"$41.000"
            },
            {
                logo:<PublicIcon  fontSize="large" className="iconItem" />,
                title: "Target",
                note:"Last Week ago",
                persentase:"+56%",
                color:"#04D94A",
                traffic:<ArrowUpwardIcon/>,
                total:"75.56%"
            },
            {
                logo:<TrendingUpIcon  fontSize="large" className="iconItem" />,
                title: "Sales",
                note:"Last Minute ago",
                persentase:"-9.65%",
                color:"#D90720",
                traffic:<ArrowDownwardIcon/>,
                total:"2.000"
            },
        ]
        return(
            <div className="dashboard">
                    <div class="part-header">
                        {data.map((val,key) => {
                            return (
                                <div class="kotak" key={key} >
                                    <div class="part-kotak w-100 h-75" >    
                                        <div class="icon text-center my-auto" style={{backgroundColor:val.color }}>
                                            {val.logo}
                                        </div>
                                        <div class="word my-auto ">    
                                            <h5 className="mt-2">{val.title}</h5>
                                                <h6>{val.total}</h6>
                                        </div>
                                    </div>
                                    <div className="footer d-flex justify-content-around" >
                                        <p className="pl-2">
                                            {val.traffic}
                                            <span>
                                                <Badge className="mt-1" color="dark">{val.persentase}</Badge>
                                            </span>
                                        </p>
                                        <p className="since">{val.note}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="part-chart pt-3 d-flex flex-wrap row ">
                        <div class="col-lg-8">    
                            <div className="chart-line w-full mb-3">
                                <div class="header-chart p-3 d-flex justify-content-between">
                                    <h4>Performance Sales</h4>
                                    <ErrorOutlineIcon/>
                                </div>
                                <ChartLine/>
                                <p className="p-3"><ScheduleIcon/>   Just Updated</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div className="chart-doughnut w-full mb-3">
                                <div class="header-chart p-3 d-flex justify-content-between">
                                    <h4>Traffic Sales</h4>
                                    <ErrorOutlineIcon/>
                                </div>
                                <ChartDoughnut/>
                                <p className="p-3"><ScheduleIcon/>   Just Updated</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default dashboard;