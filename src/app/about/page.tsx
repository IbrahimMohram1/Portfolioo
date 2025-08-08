'use client'
import { SiMaterialdesign } from "react-icons/si";
import { delay, motion } from "framer-motion";

function About() {
const slideLeft={
      initial: { x: 100, opacity: 0 },
  viewport:{ once: true },
      whileInView:{ x: 0, opacity: 1 },
  transition:{ duration: 0.8 , delay:0.2 }
}
const slideRight={
      initial: { x: -100, opacity: 0 },
      whileInView:{ x: 0, opacity: 1 },
  viewport:{ once: true },
  transition:{ duration: 0.8  , delay:0.2 }
}
const slideDown={
      initial: { y: -100, opacity: 0 },
    whileInView:{ y: 0, opacity: 1 },
  viewport:{ once: true },
  transition:{ duration: 0.8, delay:0.2 }
}
const slideUp={
      initial: { y: 100, opacity: 0 },
    whileInView:{ y: 0, opacity: 1 },
  viewport:{ once: true },
  transition:{ duration: 0.8, delay:0.2 }
}
  return (
    <>
      <div className="">
        <div className=" flex gap-y-4 flex-col">
          <div className="capitalize  md:text-4xl text-xl font-bold flex flex-col relative  top-4  w-1/3">
            <h1 className="pb-4">My About</h1>
            <div className=" bg-yellow-400 w-14 h-[4px] rounded-full "></div>
          </div>
          <div className="gap-y-4 flex flex-col mt-3 ">
            <motion.div
            initial= {{ x: 100, opacity: 0 }}
  animate= {{ x: 0, opacity: 1 }}
  transition= {{ duration: 0.5 }}
            >

              Hi, I’m a Frontend Developer from Egypt، specialized in building
              fast, modern, and user-focused web applications. With a strong
              grip on React.js, Redux Toolkit, React Query, and Tailwind CSS, I
              craft clean, scalable, and responsive interfaces that don’t just
              function — they feel right. I turn complex features into elegant
              UIs with clear logic, smooth interactions, and real performance.
              Whether it’s managing state with Redux Toolkit or optimizing data
              fetching with React Query, I always aim for code that’s both
              efficient and maintainable.
                        </motion.div>

            <div className="relative ">
              <div className="absolute  top-0 h-full w-px bg-gray-300"></div>

              <ul className="space-y-6">
                <motion.li {...slideRight} className="relative pl-4">
                  <span className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Make your product fast and responsive
                </motion.li>
               
    <motion.li {...slideLeft} className="relative pl-4">
  <span  className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Keep the codebase clean and modular

    </motion.li>
                
 <motion.li {...slideRight} className="relative pl-4">
       <span className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Deliver an experience that feels intuitive and professional
    </motion.li>
                 
              </ul>
            </div>
    <motion.p {...slideDown} >
   I’ve helped brands and teams translate their vision into modern
              web interfaces that users enjoy — and remember.
              <br />
              Let’s build something people love to use.
    </motion.p>
           
          </div>
          <div className="">
            <motion.h2 {...slideLeft} className="capitalize  text-3xl font-bold">
What i'm doing
            </motion.h2>
          </div>
          
          <div className="  grid lg:grid-cols-2 gap-2 lg:grid-rows-2 grid-cols-1 mb-8 ">
            <motion.div {...slideDown} className="   rounded-md bg-1 shadow-[0px_4px_12px_rgba(0,0,0,0.3)]  ">
              <div className="p-3 flex items-center">
                <div className="w-[10%]">
                  <SiMaterialdesign className="text-3xl w-full text-yellow-400" />
                </div>
                <div className="px-3 w-[90%] ">
                  <h3 className="py-2">Frontend Development</h3>
                  <p>
                    Building modern, responsive websites using React.js, Redux
                    Toolkit, and React Query — with clean code and fast
                    performance.
                  </p>
                </div>
              </div>
            </motion.div>
           <motion.div  {...slideLeft} className="   rounded-md bg-1 shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
    <div className="p-3 flex items-center">
                <div className="w-[10%]">
                  <SiMaterialdesign className="text-3xl w-full text-yellow-400" />
                </div>
                <div className="px-3 w-[90%] ">
                  <h3 className="py-2"> UI/UX Implementation</h3>
                  <p>
                    Translating Figma and design systems into pixel-perfect,
                    responsive interfaces using Tailwind CSS.
                  </p>
                </div>
              </div>
           </motion.div>
          
 <motion.div {...slideRight} className="   rounded-md bg-1 shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
    <div className="p-3 flex items-center">
                <div className="w-[10%]">
                  <SiMaterialdesign className="text-3xl w-full text-yellow-400" />
                </div>
                <div className="px-3 w-[90%] ">
                  <h3 className="py-2">Performance Optimization</h3>
                  <p>
                    Optimizing load time, lazy loading, and minimizing
                    re-renders to ensure smooth and efficient user experience.
                  </p>
                </div>
              </div>
           </motion.div>
          
 <motion.div  {...slideUp} className="   rounded-md bg-1 shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
      <div className="p-3 flex items-center">
                <div className="w-[10%]">
                  <SiMaterialdesign className="text-3xl w-full text-yellow-400" />
                </div>
                <div className="px-3 w-[90%] ">
                  <h3 className="py-2"> Component-Based Architecture</h3>
                  <p>
                    Developing scalable React components that are reusable,
                    maintainable, and easy to test.
                  </p>
                </div>
              </div>
           </motion.div>
        
            </div>
          </div>
        </div>
    </>
  );
}
export default About;
