
import { Component } from 'react';

import './css-style/styles.css';

class ViewsOverview extends Component {
    
    constructor(props) {

        super(props);

        this.state = { 
            Views: [  6, 12, 15, 11,  23, 21, 26,  20, 24, 47, 17,  15,
                    12, 34, 48, 14, 26, 36, 34, 35,  41, 21, 29,  19],

            IsToolTipChartShowing: false,
            ToolTipChartLocation: [20, 60],
            TimeViews: null
        };

        this.showTooltipInfo = this.showTooltipInfo.bind(this);
        this.renderToolTipChart = this.renderToolTipChart.bind(this);
        this.removeToolTipChart = this.removeToolTipChart.bind(this);
    }

    showTooltipInfo(e, start, end, amount){

        this.setState({
            IsToolTipChartShowing: true,
            ToolTipChartLocation: [e.screenX-300, e.screenY-400],
            TimeViews: amount
        });
        
    }

    renderToolTipChart(views){
        
        let left = this.state.ToolTipChartLocation[0];
        let top = this.state.ToolTipChartLocation[1];

        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        const today = new Date();

        if(this.state.IsToolTipChartShowing){

            return(
                <div style={{left: left+"px", top: top+"px"}} 
                    id="tooltip-chart-lines" >
                    <div>{months[today.getMonth()]+' '+today.getDate()}</div>
                    <div>Visitas: {this.state.TimeViews}</div>
                </div>
            );
        }

        return null;
    }

    removeToolTipChart(){
        this.setState({
            IsToolTipChartShowing: false,
        });
    }

    renderCirclePoints(){

        

    }

    render() { 

        
        return (
            <div className="box-container">
    
                <div className="box box-chart-lines">
                    
                    <div className="box-inside-control">
                        <div className="box-buttons">
                            <label>Visitas del dia</label>
                        </div>
                    </div>
    
                    <div className="chart-lines" >     
                        <svg ref={(elem) => (this.chartLine = elem)}>
                            {/* should be 10 < y <=240 
                            range numbers */}
                            <g fill="#4d4d4d">
                                <text x="0" y="10">180</text>
                                <text x="0" y="40">160</text>		
                                <text x="0" y="70">140</text>
                                <text x="0" y="100">120</text>
                                <text x="0" y="130">100</text>		
                                <text x="0" y="160">80</text>	
                                <text x="0" y="190">60</text>
                                <text x="0" y="220">40</text>
                                <text x="0" y="250">20</text>
                                <text x="0" y="280">0</text>
                            </g>
                            {/* horizontal lines */}
                            <g stroke="#999999" strokeWidth='1' strokeDasharray="0">
                                <line x1="2%" y1="10" x2="99%" y2="10" />
                                <line x1="2%" y1="40" x2="99%" y2="40" />
                                <line x1="2%" y1="70" x2="99%" y2="70" />
                                <line x1="2%" y1="100" x2="99%" y2="100" />
                                <line x1="2%" y1="130" x2="99%" y2="130" />
                                <line x1="2%" y1="160" x2="99%" y2="160" />
                                <line x1="2%" y1="190" x2="99%" y2="190" />
                                <line x1="2%" y1="220" x2="99%" y2="220" />
                                <line x1="2%" y1="250" x2="99%" y2="250" />
                                <line x1="2%" y1="280" x2="99%" y2="280" />
                            </g>
                            {/* vertical lines */}
                            <g stroke="#dddddd" strokeDasharray="0">
                                <line x1="16.5%" y1="10" x2="16.5%" y2="280" />
                                <line x1="33%" y1="10" x2="33%" y2="280" />
                                <line x1="49.5%" y1="10" x2="49.5%" y2="280" />
                                <line x1="66%" y1="10" x2="66%" y2="280" />
                                <line x1="82.5%" y1="10" x2="82.5%" y2="280" />
                                <line x1="99%" y1="10" x2="99%" y2="280" />
                            </g>
                            {/* range days */}
                            <g fill="#4d4d4d">
                                <text x="5%" y="295">12am - 3am</text>	
                                <text x="21%" y="295">4am - 7am</text>	
                                <text x="38%" y="295">8am - 11pm</text>	
                                <text x="54%" y="295">12pm - 2pm</text>	
                                <text x="70%" y="295">3pm - 7pm</text>	
                                <text x="87%" y="295">8pm - 12pm</text>	
                            </g>
                
                            {/* views chart 
                            y values need to be changed, x values stay the same */}

                            <g stroke="#0099CC" strokeWidth="2">
                                <line x1="3%" y1="280" x2="8%" y2="200" /> 
                                <line x1="8%" y1="200" x2="24%" y2="245" /> 
                                <line x1="24%" y1="245" x2="41%" y2="180" /> 
                                <line x1="41%" y1="180" x2="58%" y2="158" /> 
                                <line x1="58%" y1="158" x2="74%" y2="196" /> 
                                <line x1="74%" y1="196" x2="90%" y2="210" />
                                <line x1="90%" y1="210" x2="93%" y2="280"  />  
                            </g>
    
                            <g fill="#0099cc">

                                {this.state.Views.map((val, ind, arr)=> {

                                    if(ind % 4 === 0){
                                        
                                        let formatedAmount = (280-(val+arr[ind+1]+arr[ind+2]+arr[ind+3]))-20;
                                        let amount =(val+arr[ind+1]+arr[ind+2]+arr[ind+3]);
                                        return (
                                            <circle cx={(ind*4+9)+'%'} cy={formatedAmount} r="6" 
                                            onMouseMove={(e)=> this.showTooltipInfo(e, ind, ind+3, amount)}
                                            onMouseOut={this.removeToolTipChart} key={ind} />
                                        )
                                    }

                                    return null;

                                })} 

                            </g>
    
                        Sorry, your browser does not support inline SVG.
                        </svg>
    
                        {this.renderToolTipChart()}
    
                    </div>
    
                </div>
    
            </div>	
        );
    }
}
 
export default ViewsOverview;