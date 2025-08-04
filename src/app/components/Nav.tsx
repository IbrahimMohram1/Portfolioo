"use client";
import Image from "next/image";
import ImageNav from "../assets/Cartoonify.png";
import { MdEmail, MdLocationCity, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { DiGithub } from "react-icons/di";
function Nav() {
  return (
    <>
      <main className="   box border border-zinc-500 rounded-2xl p-5  ">
        <div className=" flex lg:flex-col flex-row lg:justify-around items-center m-2 ">
          <div className="lg:w-1/2 w-36 bg-1 rounded-2xl mr-5 ">
            <Image
              width={300}
              height={300}
              alt="Perosnal Image"
              className="rounded-md object-cover"
              src={ImageNav}
            ></Image>
          </div>
          <div className="">
            <div className="my-2">
              <h1>Ibrahim Mohram </h1>
            </div>
            <div className="bg-1 rounded-md p-2 text-[12px] text-center">
              <p>Frontend Develpoer</p>
            </div>
          </div>
        </div>

        <div className="flex-col max-w-full  lg:flex ">
          <hr></hr>

          <div className="flex my-2  ">
            <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center  border border-1 border-black">
              <MdEmail />
            </div>
            <div className="">
              <span className="lg:text-[11px] ">Email</span>
              <p className="lg:text-[12px] text-[12px]">
                ibrahimmohram7@gmail.com
              </p>
            </div>
          </div>
          <div className="flex my-2  ">
            <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center  border border-1 border-black">
              <MdPhone />
            </div>
            <div className="">
              <span className="lg:text-[11px] ">Phone</span>
              <p className="lg:text-[12px] text-[12px]">01020181248</p>
            </div>
          </div>
          <div className="flex my-2  ">
            <div className="m-2 box text-yellow-300  rounded-md  p-3 text-center border border-1 border-black">
              <MdLocationCity />
            </div>
            <div className="">
              <span className="lg:text-[11px] ">Location</span>
              <p className="lg:text-[12px] text-[12px]">Cairo , Egypt</p>
            </div>
          </div>
          <div className="flex m-2 lg:justify-center gap-5 lg:items-center">
            <FaFacebook></FaFacebook>
            <FaTwitter />
            <FaLinkedin />
            <DiGithub />
          </div>
        </div>
      </main>
    </>
  );
}
export default Nav;
