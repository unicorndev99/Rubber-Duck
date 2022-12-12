import React, { Component } from 'react'
import './index.css'

class RoadMap extends Component {
    render() {
        return (
            <div className="stretchgoals">
                <h1 id="goalsSection" className="section-heading">Road map</h1>
                <div className="grid grid-cols-2 sm:mx-8  w-container">
                    <div className="">
                        <ul role="list" className="w-list-unstyled">
                            <li className="stretch-goals">
                                <h4 className="stretchgoalsubheading">10% Sold</h4>
                                <div className="stretchgoalcontent" style={{opacity: 1}}> 5x 1 ETH Giveaway to random RubberDuck holders that minted the first 10% of Ducks.<br /></div>
                            </li>
                            <li className="stretch-goals"><h4 className="stretchgoalsubheading">25% Sold</h4><div className="stretchgoalcontent" style={{opacity: 1}}>10x 1 ETH Giveaway to random RubberDuck holders that minted the first 25% of Ducks.<br/>We will purchase our first metaverse spot to create our first rubber duck sanctuary.</div>
                            </li>
                            <li className="stretch-goals"><h4 className="stretchgoalsubheading">50% Sold</h4><div className="stretchgoalcontent" style={{opacity: 1}}>The Rubber Duck will donate 10 ETH to the unicef ​​foundation. <br/></div>
                            </li>
                            <li className="stretch-goals"><h4 className="stretchgoalsubheading">100% Sold</h4><div className="stretchgoalcontent" style={{opacity: 1}}>A big lottery will be launched for all Rubber Duck holders with a cash prize of 90 ethereum,divided into 60 prizes of 1,5 ethereum.</div>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <img src="/images/tokenomics.png" loading="lazy" width="400" style={{opacity: 2}} data-w-id=""alt="" className="image-22"/>
                    </div>
                </div>

                <div className="d-block mt-10">
                    <hr />
                </div>
                
            </div>
        )
    }
}

export default RoadMap