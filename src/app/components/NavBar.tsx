"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToogleMode from "../ToogleMode/ToogleMode";

function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className=" flex justify-start w-full ">
        <nav className=" border border-gray-600 rounded-bl-3xl rounded-tr-3xl rounded-sm   bg-1   w-full ">
          <div className="flex "></div>
          <div className="" id="navbar-sticky">
            <ul className="flex p-4  font-medium items-center justify-around flex-row">
              <li>
                <Link href={"/"} className="  dark:text-white text-black " aria-current="page">
                  Home
                </Link>
              </li>

              <li>
                <a href={"/resume"} className="  dark:text-white text-black  ">
                  Resume
                </a>
              </li>
              <li>
                <a href="/portfolio" className="  dark:text-white  text-black">
                  Portfolio
                </a>
              </li>
              <li>
                <ToogleMode/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
