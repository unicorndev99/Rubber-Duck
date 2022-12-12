import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Minter from './components/Minter';
import Introduction from './components/Introduction';
import Tokenomic from './components/Tokenomic';
import RoadMap from './components/RoadMap';
import TeamSection from './components/TeamSection';
import { useEffect, useState } from 'react';
import { connectWallet, getCurrentWalletConnected } from './util/interact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contractAddress } from './constants/address';
import { ethers, BigNumber } from 'ethers'

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractABI = require("./constants/contract.json")
  const contract = new ethers.Contract(contractAddress, contractABI, signer)
  return contract
}

function App() {

  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleIsActive, setSaleIsActive] = useState(false)
  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected()
    setWalletAddress(address)
    setStatus(status)
  }, [])

  useEffect( async () => {
    if ( !loading && walletAddress ) {
      let contract = getContract()
      let res = await contract.totalSupply()
      setTotalSupply(BigNumber.from(res).toString())
      let res1 = await contract.saleIsActive()
      setSaleIsActive(res1)
    }
  }, [loading, walletAddress])

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])

  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }


  return (
    <div className="App related">

      <NavBar onClickDisconnectWallet={onClickDisconnectWallet} onClickConnectWallet={onClickConnectWallet} walletAddress={walletAddress} />
      <Minter saleIsActive={saleIsActive} loading={loading} walletAddress={walletAddress} totalSupply={totalSupply} setStatus={setStatus} setMintLoading={setMintLoading} />
      <Introduction />
      <Tokenomic />
      <RoadMap />
      <TeamSection />
      <div className="wf-section">
        <div className="container-23 w-container">
          <h4 className="section-heading section-heading-small"> Contract Address</h4>
          <div className="text-block-23 text-white md:text-xl text-xs">soon</div>
        </div>

        <div className="d-block mt-10">
            <hr />
        </div>
      </div>

      <div className="wf-section my-16">
        
                    <div className="container-15 w-container">
                        <a href="https://twitter.com/RubberDuckNFT" className="link-block-6 w-inline-block">
                            <img src="/images/twitter.png" loading="lazy" alt="" className="image-44" />

                            </a>
                        <a href="https://discord.gg/MAga6hTE" className="link-block-6 w-inline-block">
                            <img src="/images/discord.png" loading="lazy" alt="" className="image-45"></img>
                        </a>
                        </div>
                        <h4 className="section-heading section-heading-small">The Rubber Duck</h4>
          <div className="text-block-23 text-white">© 2021 </div>
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
