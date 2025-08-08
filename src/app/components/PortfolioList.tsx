'use client'
import { motion } from "framer-motion";
import { ProjectType } from "../types";
import { useEffect, useState } from "react";
import Loading from './Loading'

export default function PortfolioList({ data }: { data: ProjectType[] }) {
const animations = [
    { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } ,   transition:{ duration: 0.8 } ,    whileInView:{ x: 0, opacity: 1 },
  viewport:{ once: true },}, 
    { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } ,   transition:{ duration: 1 } ,    whileInView:{ x: 0, opacity: 1 },
  viewport:{ once: true },},  
    { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } ,   transition:{ duration: 0.5 } ,    whileInView:{ x: 0, opacity: 1 },
  viewport:{ once: true },}, 
      { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } ,   transition:{ duration: 0.8 } ,    whileInView:{ x: 0, opacity: 1 },
  viewport:{ once: true },},
  ];
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
   const timer = setTimeout(() => {
    setLoading(false)

    }, 3000);
            return () => clearTimeout(timer);

  },[])
return <>
    {loading ?  <Loading/> : 
    <div className="flex flex-wrap justify-center items-start my-3 px-4">
      {data.map((project , index ) => {
                const anim = animations[index % animations.length]; // هنا برة JSX

return (
  <motion.a 
       href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="w-full md:w-1/3 p-2 h-full rounded-lg"
            initial={anim.initial}
            whileInView={anim.animate}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
  <div className="h-full  rounded-md p-2">
            <img
              src={project.image}
              alt={project.name}
              className=" w-full h-full object-contain rounded-md"
            />
            <h2 className="text-base font-semibold capitalize  mt-2">
              {project.name}
            </h2>
          </div>
  </motion.a>

      )})      }
     
    </div>

}
</>

}
