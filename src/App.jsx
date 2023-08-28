import React, { useState } from "react";
import "./App.css";
import {
  FaBars,
  FaCheck,
  FaCheckCircle,
  FaCloud,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTimes,
  
} from "react-icons/fa";
import Dash from "./assets/images/Dash.png";
import Mobile from "./assets/images/mobile.png";
import Mobile2 from "./assets/images/mobile2.png";
import Port from "./assets/images/port.png";
const App = () => {
  const [navOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!navOpen)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className="Main">
        <div className="Hero-Section ">
          <div className="text-white flex p-[20px] justify-between items-center">
            <div>
              <h1 className="text-4xl">D'task</h1>
            </div>
            <div className="pt-[10px] hidden md:block">
              <a className="m-[20px] border-r-2 border-white px-[20px]">Home</a>
              <a className="m-[20px] border-r-2 border-white px-[20px]">
                How it works
              </a>
              <a className="m-[20px] border-r-2 border-white px-[20px]">
                About us
              </a>
              <a className="m-[20px] border-r-2 border-white px-[20px]">
                Contact Us
              </a>
            </div>
            <div className="pt-[10px] hidden md:block">
              <button>Login</button>
              <button className="mx-[10px] bg-slate-50 text-black p-[4px] rounded-xl">
                Register
              </button>
            </div>
            <div className="md:hidden pt-[10px]" >
              <button onClick={openMenu}>
                {navOpen ? <FaTimes/> : <FaBars/> }
              </button>
            </div>
            {
              navOpen && (
                <>
                 <div className="absolute bg-cyan-900 mt-[200px] w-[90%] h-[100px] flex justify-center p-[10px]">
                  <li onClick={handleClose} style={{cursor:"pointer"}}>About</li>
                 </div>
                </>
              )
            }
          </div>

          {/* Navbar Ends here  */}
          <div className="flex justify-center pt-[100px]">
            <h1
              className="text-white md:text-6xl text-center font-bold text-5xl"
              id="demo"
            >
              Make Your Business
            </h1>
          </div>
          <div className="flex justify-center pt-[50px]">
            <h1
              className="text-white md:text-6xl text-center font-bold text-5xl"
              id="demo"
            >
              More Powerful
            </h1>
          </div>
          <div className="flex items-center justify-center pt-[40px] flex-wrap text-center">
            <div className="flex items-center">
              <p className="text-white tracking-[2px]">
                {" "}
                <FaCheckCircle />
              </p>
              <p className="m-[10px] text-white tracking-[2px]">
                Lifetime Support
              </p>
            </div>
            <div className="flex items-center m-[20px]">
              <p className="text-white tracking-[2px]">
                {" "}
                <FaCheckCircle />
              </p>
              <p className="m-[10px] text-white tracking-[2px]">
                No CC Register
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-[30px]">
            <input
              type="email"
              placeholder="Input Your Email..."
              className="placeholder:text-white-950 p-[10px] w-[300px] rounded-3xl"
              id="demo2"
            ></input>
            <button className="bg-white p-[10px] rounded-3xl absolute ml-[196px] mt-[1px]">
              Try For Frees
            </button>
          </div>
          <div className="flex justify-center pt-[30px] items-center">
            <img src={Dash} className="w-[700px] "></img>
          </div>
          {/* Hero Section  end  */}
          <div className="pt-[30px] flex md:justify-center flex-wrap justify-center w-[100%]  ">
            <div className="w-full md:w-[50%] pt-[20px] justify-center text-center ">
              <h1 className="text-4xl font-bold text-cyan-950 ">
                Okay, Let's see
              </h1>
              <h1 className="text-4xl font-bold text-cyan-950 ">
                D'task in numbers{" "}
              </h1>
              <p className="pt-[20px] text-slate-600">
                Powering a productive team means using a powerful tool From
                <br />
                meetings and project to events and goal seeting , D'task
                <br />
                inuitive feautures give any team and ability to quicly set up
                <br />
                and customize workflows just about anything
                <br />
              </p>
              <div className="flex justify-center pt-[50px] flex-wrap">
                <div className="ml-[10px]">
                  <div className=" h-[100px] w-[100px] flex items-center justify-center shadow-2xl rounded-xl">
                    <h1 className="text-3xl font-bold" id="demo3">
                      12M
                    </h1>
                  </div>
                  <p className="pt-[20px] font-bold">Active users</p>
                </div>
                <div className="ml-[10px]">
                  <div className=" h-[100px] w-[100px] flex items-center justify-center shadow-2xl rounded-xl bg-slate-300">
                    <h1 className="text-3xl font-bold ">16M</h1>
                  </div>
                  <p className="pt-[20px] font-bold">Languages</p>
                </div>
                <div className="ml-[10px] ">
                  <div className=" h-[100px] w-[100px] flex items-center justify-center shadow-2xl rounded-xl bg-slate-300 ">
                    <h1 className="text-3xl font-bold">24/7</h1>
                  </div>
                  <p className="pt-[20px] font-bold">Support</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]  flex justify-center md:flex-wrap">
              <img src={Mobile} className="" alt="Mobile" />
            </div>
          </div>
          {/* Hero Section 2 end */}
          <div className="pt-[100px] " id="demo4">
            <div className="flex   justify-center flex-wrap">
              <div className="w-full md:w-[50%] flex justify-center">
                <img src={Port} alt="Portfolio" />
              </div>
              <div className="w-full md:w-[50%] ">
                <h1 className="flex md:justify-start md:text-6xl font-bold text-white justify-center text-4xl">
                  Features to help
                </h1>
                <h1 className="flex md:justify-start md:text-6xl font-bold text-white justify-center text-4xl pt-[20px]">
                  Your team succeed
                </h1>
                <p className="pt-[20px] text-white font-medium text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ipsa autem,
                  <br /> fuga modi alias voluptatem dignissimos dolorum
                  expedita! Earum, at! Aliquid quod
                  <br /> maiores, ipsam quos iure neque nemo pariatur quae
                  repellat obcaecati, tempore
                  <br /> assumenda tempora quasi, quo corrupti deleniti
                  explicabo.
                </p>
                <div className="flex md:justify-between pt-[20px] flex-wrap m-[10px] justify-center">
                  <div className="flex items-center">
                    <p className="" id="p">
                      <FaCheckCircle />
                    </p>
                    <p className="m-[10px] text-white font-bold">
                      Choose a View
                    </p>
                  </div>
                  <div className="flex items-center" id="p">
                    <p>
                      <FaCheckCircle />
                    </p>
                    <p className="m-[10px] text-white font-bold mr-[30px]">
                      Choose a make
                    </p>
                  </div>
                </div>
                <div className="flex md:justify-between pt-[20px] flex-wrap m-[10px] justify-center">
                  <div className="flex items-center ">
                    <p className="" id="p">
                      <FaCheckCircle />
                    </p>
                    <p className="m-[10px] text-white font-bold">
                      Choose a View
                    </p>
                  </div>
                  <div className="flex items-center mr-[20px]">
                    <p className="" id="p">
                      <FaCheckCircle />
                    </p>
                    <p className="m-[10px] text-white font-bold">
                      Grow Businees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative	">
            <div className=" md:w-[80%]  w-[100%] absolute	md:top-[-20px] shadow-2xl rounded-xl bg-white	">
              <div className="flex justify-center pt-[70px]">
                <h1 className="text-5xl font-bold text-cyan-900	text-center">
                  Control in one place
                </h1>
              </div>
              <div className="flex justify-center pt-[70px]">
                <p className="text-center text-gray-400 font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br></br>. Molestias sint ea labore deleniti quidem
                  necessitatibus<br></br>
                  pariatur ipsum debitis alias voluptate!
                </p>
              </div>
              <div className="flex justify-center pt-[70px]">
                <button className="bg-cyan-900 p-[10px] px-[20px] text-white rounded-2xl">
                  Start 14 days trial
                </button>
              </div>
              <div className=" flex md:justify-around pt-[40px] justify-center flex-wrap ">
                <div className=" w-[300px]   m-[10px] bg-cyan-800 rounded-3xl">
                  <p className="flex justify-center pt-[40px] text-6xl">
                    <p className=" border-2 p-[10px] px-[10px] rounded-full bg-cyan-600 text-white">
                      {" "}
                      <FaCheck />
                    </p>
                  </p>
                  <div className="flex justify-center pt-[20px] ">
                    <h1 className="text-2xl font-bold text-white">
                      Structured Reports
                    </h1>
                  </div>
                  <div className="flex justify-center pt-[20px]  ">
                    <p className=" font-bold text-center p-[10px] text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, ad!
                    </p>
                  </div>
                </div>
                <div className=" w-[300px]   m-[10px] bg-cyan-800 rounded-3xl">
                  <p className="flex justify-center pt-[40px] text-6xl">
                    <p className=" border-2 p-[10px] px-[10px] rounded-full bg-cyan-600 text-white">
                      {" "}
                      <FaCloud />
                    </p>
                  </p>
                  <div className="flex justify-center pt-[20px] ">
                    <h1 className="text-2xl font-bold text-white">
                      Cloud System
                    </h1>
                  </div>
                  <div className="flex justify-center pt-[20px]  ">
                    <p className=" font-bold text-center p-[10px] text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, ad!
                    </p>
                  </div>
                </div>
                <div className=" w-[300px]   m-[10px] bg-cyan-800 rounded-3xl">
                  <p className="flex justify-center pt-[40px] text-6xl">
                    <p className=" border-2 p-[10px] px-[10px] rounded-full bg-cyan-600 text-white">
                      {" "}
                      <FaClock />
                    </p>
                  </p>
                  <div className="flex justify-center pt-[20px] ">
                    <h1 className="text-2xl font-bold text-white">
                      24/7 Support
                    </h1>
                  </div>
                  <div className="flex justify-center pt-[20px]  ">
                    <p className=" font-bold text-center p-[10px] text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, ad!
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="pt-[30px] flex md:justify-center flex-wrap justify-center w-[100%] lg:mt-[1000px]  mt-[1400px]">
            <div className="w-full md:w-[50%] pt-[20px] justify-center text-center ">
              <h1 className="text-4xl font-bold text-cyan-950 ">
                D'not Task also works
              </h1>
              <h1 className="text-4xl font-bold text-cyan-950 ">
                on Your Phone{" "}
              </h1>
              <p className="pt-[20px] text-slate-600">
                Powering a productive team means using a powerful tool From
                <br />
                meetings and project to events and goal seeting , D'task
                <br />
                inuitive feautures give any team and ability to quicly set up
                <br />
                and customize workflows just about anything
                <br />
              </p>
              <div className="flex justify-center pt-[50px] flex-wrap">
                <div className="ml-[10px]">
                  <div className=" flex  justify-center ">
                    <button className="bg-cyan-950 p-[10px] m-[10px] text-white rounded-lg">
                      Downlaod in App Store
                    </button>
                  </div>
                </div>
                <div className="ml-[10px]">
                  <div className="  flex  justify-center">
                    <button className="bg-cyan-950 p-[10px] m-[10px] text-white rounded-lg">
                      Download in PlayStore
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]  flex justify-center md:flex-wrap">
              <img src={Mobile2} className="" alt="Mobile" />
            </div>
          </div>
          <div className="bg-cyan-900 w-[100%] ">
            <div className="flex justify-center flex-wrap md:justify-between">
              <div className="p-[30px]">
                <h1 className="text-5xl text-white font-medium">D'task</h1>
              </div>
              <div className="p-[30px] flex flex-wrap justify-center">
                <h1 className="text-4xl text-white font-medium m-[10px] text-center">Ready to get Started?</h1>
                <button className="m-[10px] bg-cyan-500 p-[10px] pl-[10px] rounded-full text-white">Get Started</button>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="w-[96%] text-gray-200 border-gray-500 border-1"></hr>
            </div>

            {/* Ends D'task */}

            <div className="flex flex-wrap">
              <div>
                <h1 className="text-4xl m-[10px] pl-[20px] text-white font-medium text-center md:text-left">Subscribe to Our</h1>
                <h1 className="text-4xl text-4xl m-[10px] pl-[20px] text-white font-medium text-center md:text-left">newsletter</h1>
                <div className="flex flex-wrap">

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="placeholder:text-white-950  w-[300px] m-[30px] "
                    id="dem2"
                  ></input>
                  <button id="btn" className="bg-cyan-600 text-white">Submit</button>
                </div>
              </div>
              <div className="flex ml-[auto] mr-[auto] justify-evenly md:w-[50%] p-[10px] w-[100%]" id="service">
                <div>
                  <h1 className="text-white font-medium m-[10px]" >Services</h1>
                  <p className=" text-white m-[10px]">Email Marketing</p>
                  <p className=" text-white  m-[10px]">Campaigns</p>
                  <p className=" text-white  m-[10px]">Branding</p>
                  <p className=" text-white  m-[10px]">Offline</p>



                </div>
                <div>
                  <h1 className="text-white font-medium m-[10px]">About</h1>
                  <p className=" text-white m-[10px]">Email Marketing</p>
                  <p className=" text-white  m-[10px]">Campaigns</p>
                  <p className=" text-white  m-[10px]">Branding</p>
                  <p className=" text-white  m-[10px]">Offline</p>
                </div>
                <div>
                  <h1 className="text-white font-medium m-[10px]">Help</h1>
                  <p className=" text-white m-[10px]">Email Marketing</p>
                  <p className=" text-white  m-[10px]">Campaigns</p>
                  <p className=" text-white  m-[10px]">Branding</p>
                  <p className=" text-white  m-[10px]">Offline</p>
                </div>
              </div>

            </div>
            <div className="flex items-center flex-wrap">
              <div className="p-[10px] pl-[30px] flex">
                <h1 className="text-white font-medium">Terms and Conditions</h1>
                <h1 className="text-white font-medium ml-[40px]">Privacy Policy</h1>
              </div>

              <div className="flex ml-[auto] mr-[50px]">
                <p className="m-[10px] text-white"><FaInstagram /></p>
                <p className="m-[10px] text-white"><FaFacebook /></p>
                <p className="m-[10px] text-white"><FaTwitter /></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
