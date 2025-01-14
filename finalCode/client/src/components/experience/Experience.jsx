import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"
import { GiSkills } from "react-icons/gi";
import { SiSkillshare } from "react-icons/si";


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            {/* <h1 className="edu-title">Education, Experience & Skills</h1> */}

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                       <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> August 2019 - June 2024
                        </p>
                        <h3 className="card-text2">Bachelor's Electrical and Computer Engineering</h3>
                        <p className="card-text3">
                        Some Major Courses: Object Oriented Programming, Data Structures and Algorithm, 
                        Database Systems, Introduction to Machine Learning, Robotics and Computer Vision     

                        <p className="card-text4" >CGPA 3.6</p>
                        

                         </p>
                        <p >
                         <a className="card-text4" href="http://www.aastu.edu.et/">Addis Ababa Science and Technology University</a> 
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> January 2024 - Present
                        </p>
                        <h3 className="card-text2">Road to Web3</h3>
                        <p className="card-text3">
                        This program nurtures developers into Web3 experts through weekly coding sessions and hands-on projects, 
                        enabling them to learn, build and deploy real-world dApps.
                         </p>
                        <p >
                         <a className="card-text4" href="https://metaschool.io/">Metaschool</a> 
                        </p>
                    </div>
                    </div>

                    {/* {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.instutionName}
                        </p>
                    </div>)
                    })}  */}
               
              
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                     <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> July 2024 - 
                        </p>
                        <h3 className="card-text2">Upwork and Remote Plus Web3 Open Source Contributor</h3>
                        <p className="card-text3">
                        Providing top-notch Web3 development and services on Upwork and Remote platforms, with active contributions to 
                            leading open-source Web3 projects like Warden Protocol, Farcaster, and more on GitHub..</p>
                        <p >
                         <a className="card-text4" href="https://www.upwork.com/freelancers/~010c63bf25dbb7c041"> Upwork and Remote </a> 
                        </p>
                    </div>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> July 2023 - October 2023
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">
                        Developed scalable blockchain solution for national 
                        supply chain company, reducing costs by 75% and enhancing transparency.</p>
                        <p >
                         <a className="card-text4" href="https://www.insa.gov.et/web/en"> Information Network Security Agency</a> 
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> December 2022 - July 2023
                        </p>
                        <h3 className="card-text2">Co Founder & Solidity Developer</h3>
                        <p className="card-text3">Co-founded and actively contributed to the design and 
                        implementation of smart contracts, optimizing for security and scalability.</p>
                        <p className="card-text4">
                            Alkebuna
                        </p>
                    </div>
                    {/* card3 */}
                    {/* <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div> */}
                </div>



                 {/* Skills */}

                 <div className="education">
                    <h1 className="edu-title">Skills</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                          
                            <GiSkills className='icon' /> 
                         
                        </p>
                        <h3 className="card-text2">Smart Contracts and Smart Contract Security</h3>
                        <p className="card-text3">Proficiency in writing smart contracts using Solidity language, 
                        including Knowledge of common vulnerabilities in smart contracts such as reentrancy, 
                        overflow, and denial of service attacks, and how to mitigate them. </p>
                        <p className="card-text4">
                            Experienced
                        </p>
                    </div>

                    <div className="edu-card">
                        <p className="card-text1">
                          
                            <GiSkills className='icon' /> 
                         
                        </p>
                        <h3 className="card-text2">DApp Development</h3>
                        <p className="card-text3">Experience in building decentralized applications, DApps, using 
                        blockchain technology, including frontend development with frameworks like Web3.js or ethers.js. </p>
                        <p className="card-text4">
                            Experienced
                        </p>
                    </div>

                    <div className="edu-card">
                        <p className="card-text1">
                          
                            <GiSkills className='icon' /> 
                         
                        </p>
                        <h3 className="card-text2">Ethereum Tooling</h3>
                        <p className="card-text3"> 
                        Proficient in using Ethereum development tools such as Remix IDE, Hardhat, 
                        Ganache, and MetaMask for smart contract development, testing, and deployment.
                        </p> 
                        <p className="card-text4">
                            Experienced
                        </p>
                    </div>
                    </div>

            </div>
        </section>
    )
}

export default Experience
