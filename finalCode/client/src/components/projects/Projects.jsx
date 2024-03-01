import React, { useEffect, useState} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import "./Projects.css"
import web3 from "../../assets/web31.jpg"
import Dmarket from "../../assets/dmarket.jpg"
import reixport from "../../assets/reixport1.jpg"
import cosmos from "../../assets/cosmos.jpg"

const Projects = ({state}) => {
    const [modal, setModal] = useState(false);
    const [projects,setProjects]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const projectDetails =async()=>{
            const projects = await contract.methods.allProjects().call();
            setProjects(projects)
        }
        contract && projectDetails();
    },[state])
    const donateEth=async(event)=>{
        event.preventDefault();
        try{
            const {contract,web3}=state;
            const eth = document.querySelector("#eth").value;
            const weiValue=web3.utils.toWei(eth,"ether");
            const accounts = await web3.eth.getAccounts();
            await contract.methods.donate().send({from:accounts[0],value:weiValue,gas:480000});
            alert("Transaction Succesful");
        }
    catch(error){
       alert("Transaction Not Succesful! Connect Wallet to Send");
    }
}
    return (
        <section className="project-section">
            <h1 className="title">Some Projects, More on <a href= "https://github.com/jemi2k/">github</a> </h1>
           

            <div className="card-wrapper">
                 <a href= "https://github.com/jemi2k/web3wave_web3event" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={web3} alt="" /></div>
                    <div className="card-text">
                        <h3>Web3Wave</h3>
                        <p>Event management platform integrating NFT ticketing</p>
                    </div>
                </a>
                <a href= "https://github.com/jemi2k/dmarket" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={Dmarket} alt="" /></div>
                    <div className="card-text">
                        <h3>DMarket</h3>
                        <p>Decentralized Online Marketplace</p>
                    </div>
                </a>

                <a href= "https://github.com/jemi2k/cosmicweb3" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={cosmos} alt="" /></div>
                    <div className="card-text">
                        <h3>Cosmos</h3>
                        <p>NFT Minting DAPP, It allows you to create and edit NFTs using SVG format, and then mint!</p>
                    </div>
                </a>
              
                
           
            </div>
 {/*  =========popup bootstrap==========  */}

 <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={donateEth}>
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Donate
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Enjoyed the project? Support with ETH donations!</p>
        </section>
    )
}

export default Projects
