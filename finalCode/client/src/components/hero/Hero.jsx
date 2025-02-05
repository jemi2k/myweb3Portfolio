import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/jebi.webp'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    useEffect(()=>{
      const {contract}=state;
      const description=async()=>{
        const descriptionText = await contract.methods.description().call();
        setDescription(descriptionText);
      }
      contract && description();
    },[state])
    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
          const cid = await contract.methods.imageLink().call();
          setCid(cid);
        }
        contract && cidOfImage();
      },[state])
    return (
        <>
      
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Ermias B. </span>
                    is a Blockchain Developer.</p>
                <h1>I specialize in crafting decentralized apps on the web3 platform as a 
                   Blockchain Engineer</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    <p>Email - jermijwll@gmail.com</p>
                                    <p>Phone No - +251-949-428-860</p>
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                    {/* <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" /> */}
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Hero
