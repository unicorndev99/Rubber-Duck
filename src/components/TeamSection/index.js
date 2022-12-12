import React, { Component } from 'react'
import './index.css'

class TeamSection extends Component {
    render() {
        return (
            <div className="teamsection wf-section">
                <div className="" style={{margin: "0 10%"}}>
                    <h2 id="teamSection" className="section-heading">The Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="teamcardcol">
                            <div className="teamcardblock">
                                <img src="/images/teamimage1.png"loading="lazy" sizes="120px" alt="" className="teamimage" />
                                <div className="div-block-23">
                                    <h4 className="teamname">Greg</h4>
                                    <p className="teamdetail"><strong>RubberDuck Visionary<br /></strong>Had a vision. No-one got it.</p>
                                </div>
                            </div>
                        </div>
                         <div className="teamcardcol">
                            <div className="teamcardblock">
                                <img src="images/teamimage2.png" loading="lazy" sizes="120px" alt="" className="teamimage" />
                                <div className="div-block-23">
                                    <h4 className="teamname">Mehdi</h4>
                                    <p className="teamdetail"><strong>RubberDuck Co-Founder <br/></strong>Had an opinion on everything,<br /> but who does nothing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="teamcardcol">
                            <div className="teamcardblock">
                                <img src="images/teamimage3.png" loading="lazy" sizes="120px" alt="" className="teamimage" />
                                <div className="div-block-23">
                                    <h4 className="teamname">Vitaliy</h4>
                                    <p className="teamdetail"><strong>RubberDuck Developer <br/></strong>Had a passion, Do not stop!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    </div>


                
                <div className="d-block mt-10">
                    <hr />
                </div>
            </div>
        )
    }
}

export default TeamSection