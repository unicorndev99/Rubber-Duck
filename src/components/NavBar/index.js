import React, { Component } from 'react'
import {  Button } from 'antd';

class NavBar extends Component {

    render() {
        const { onClickConnectWallet, onClickDisconnectWallet, walletAddress } = this.props
        return (
            <div className="absolute top-0 m-auto w-full z-10">
                <nav className="">
                    <div className="flex justify-between mx-10">
                        
                        <div />
                           
                        {
                            walletAddress ? 
                            <div className="flex flex-row md:w-98 w-90 md:pt-4 pt-6">
                                <Button onClick={onClickDisconnectWallet} size={'large'} className="text-xs sm:text-sm" style={{backgroundColor: 'rgba(253, 230, 138, 0.8)', borderColor: 'rgba(253, 230, 138, 1)'}}>
                                    { walletAddress.slice(0, 30) }...
                                </Button> 
                            </div>
                            :
                            <div className="flex flex-row md:w-48 w-40 md:pt-4 pt-6">
                                <Button onClick={onClickConnectWallet} size={'large'} style={{backgroundColor: 'rgba(253, 230, 138, 0.8)', borderColor: 'rgba(253, 230, 138, 1)'}}>
                                    Connect Metamask
                                </Button>
                            </div>
                        }
                       
                    </div>

                </nav>
            </div>
        )
    }
}

export default NavBar