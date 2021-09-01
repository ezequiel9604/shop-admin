
import { Component } from 'react';

import './css-style/styles.css';

class ViewsOverview extends Component {
    
    constructor(props) {

        super(props);

        this.state = {  };

        this.showTooltipInfo = this.showTooltipInfo.bind(this);

    }

    showTooltipInfo(e){
        console.log(e);
    }

    render() { 
        return (
            <div className="box-container">
    
                <div className="box box-chart-lines">
                    
                    <div className="box-inside-control">
                        <div className="box-buttons">
                            <label>Visitas</label>
                        </div>
                    </div>
    
                    <div className="chart-lines">
                        
                        <svg>
                            {/* should be 10 < y <=240 
                            range numbers */}
                            <g fill="#4d4d4d">
                                <text x="0" y="10">90</text>		
                                <text x="0" y="40">80</text>	
                                <text x="0" y="70">70</text>
                                <text x="0" y="100">60</text>
                                <text x="0" y="130">50</text>
                                <text x="0" y="160">40</text>
                                <text x="0" y="190">30</text>
                                <text x="0" y="220">20</text>
                                <text x="0" y="250">10</text>
                                <text x="0" y="280">0</text>
                            </g>
                            {/* horizontal lines */}
                            <g stroke="#dddddd" strokeDasharray="0">
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
                                <circle cx="8%" cy="200" r="6" 
                                    onMouseMove={(e)=> this.showTooltipInfo(e)} />
                                <circle cx="24%" cy="245" r="6" />
                                <circle cx="41%" cy="180" r="6" />
                                <circle cx="58%" cy="158" r="6" />
                                <circle cx="74%" cy="196" r="6" />
                                <circle cx="90%" cy="210" r="6" />
                            </g>
    
                        Sorry, your browser does not support inline SVG.
                        </svg>
    
                        <div id="tooltip-chart-lines">
                            <div></div>
                            <div></div>
                        </div>
    
                    </div>
    
                </div>
    
            </div>	
        );
    }
}
 
export default ViewsOverview;