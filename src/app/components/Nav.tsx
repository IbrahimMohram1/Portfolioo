"use client";
import Image from "next/image";
import ImageNav from "../assets/3d-cartoon-style-character.png";
import welcomeAnimation  from '../../../public/avatar 1.json'
import { MdEmail, MdLocationCity, MdPhone } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { DiGithub } from "react-icons/di";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { delay, motion } from "framer-motion";

function Nav() {
    const [showWelcome, setShowWelcome] = useState(true);
 const slideLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 , delay:0.5 }
};

 const slideRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 , delay:0.5 }
};
 const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8 , delay:0.5 }
};
 const slideDown = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8 , delay:0.5 }
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // ❌ نخفي الترحيب ونرجع للصورة الأصلية
    }, 11000); // ✅ مدة عرض الـ gif بالمللي ثانية

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <div className="box border border-zinc-500 rounded-2xl p-5 ">

 

        <div className=" flex   flex-col  lg:justify-around items-center m-2 ">
              <motion.div {...slideLeft} className="  bg-1 rounded-2xl mr-5 flex justify-center items-center  ">

          <div >
          {
            showWelcome ? (
              <div className="  ">
              <Lottie 
              animationData={welcomeAnimation}
              className="  "
              loop={false}
              style={{
                width: 300,
                height: 300,
              }}
              

              
              />
              </div>
            ):(
              <Image
              width={400}
              height={400}
              alt="Perosnal Image"
              className="rounded-md object-cover"
              src={ImageNav}
            ></Image>
            )
          }
            
          </div>
              </motion.div>

          <div className="">
            <motion.div {...slideDown} className="my-2">
              <h1>Ibrahim Mohram </h1>

            </motion.div>
            <motion.div {...slideRight}  className="bg-1 rounded-md  text-[12px] text-center">
              <p>Frontend Develpoer</p>

            </motion.div>
            <div >
            </div>
          </div>
        </div>
        <motion.hr {...slideDown}>

        </motion.hr>


        <div className="flex-col w-3/4 mx-auto max-w-full  lg:flex ">
          <motion.div {...slideUp}>
  <div className="flex my-2  ">
            <div className="m-2 box dark:text-yellow-300 text-black  rounded-md  p-3 text-center  border border-1 dark:border-white border-black">
              <MdEmail />
            </div>
            <div className="">
              <span className="lg:text-[13px] ">Email</span>
              <p className="lg:text-[12px] text-[12px]">
                ibrahimmohram7@gmail.com
              </p>
            </div>
          </div>
          </motion.div>
        <motion.div {...slideRight}>
     <div className="flex my-2  ">
            <div className="m-2 box dark:text-yellow-300 text-black  rounded-md  p-3 text-center  border border-1 dark:border-white border-black">
              <MdPhone />
            </div>
            <div className="">
              <span className="lg:text-[13px] ">Phone</span>
              <p className="lg:text-[12px] text-[12px]">01020181248</p>
            </div>
          </div>
        </motion.div>
     
             <motion.div {...slideDown}>
            <div className="flex my-2  ">
            <div className="m-2 box dark:text-yellow-300 text-black   rounded-md  p-3 text-center border border-1 dark:border-white border-black">
              <MdLocationCity />
            </div>
            <div className="">
              <span className="lg:text-[13px]">Location</span>
              <p className="lg:text-[12px] text-[12px]">Cairo , Egypt</p>
            </div>
          </div>
        </motion.div>
        
             <motion.div {...slideLeft}>
          <div className="flex m-2 justify-start gap-5  text-xl">
            <a href="https://x.com/IbrahimMohram3" target="_blank"> 
            <FaTwitter />
            </a>
               <a href="https://www.linkedin.com/in/ibrahim-mohram-99ab40178/" target="_blank">
            <FaLinkedin />
            </a>
                 <a href="https://github.com/IbrahimMohram1/" target="_blank">
            <FaGithub  />
            </a>
          </div>
        </motion.div>
          
        </div>

    </div>

    </>
  );
}
export default Nav;
