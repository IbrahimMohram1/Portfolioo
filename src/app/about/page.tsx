import { SiMaterialdesign } from "react-icons/si";

function About() {
  return (
    <>
      <div className="">
        <div className=" flex gap-y-4 flex-col">
          <div className="capitalize  md:text-4xl text-xl font-bold flex flex-col relative lg:top-[-20px] top-2  w-1/3">
            <h1 className="pb-4">My About</h1>
            <div className=" bg-yellow-400 w-14 h-[4px] rounded-full "></div>
          </div>
          <div className="gap-y-4 flex flex-col  ">
            <p>
              Hi, I’m a Frontend Developer from Egypt، specialized in building
              fast, modern, and user-focused web applications. With a strong
              grip on React.js, Redux Toolkit, React Query, and Tailwind CSS, I
              craft clean, scalable, and responsive interfaces that don’t just
              function — they feel right. I turn complex features into elegant
              UIs with clear logic, smooth interactions, and real performance.
              Whether it’s managing state with Redux Toolkit or optimizing data
              fetching with React Query, I always aim for code that’s both
              efficient and maintainable.
            </p>
            <div className="relative ">
              <div className="absolute  top-0 h-full w-px bg-gray-300"></div>

              <ul className="space-y-6">
                <li className="relative pl-4">
                  <span className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Make your product fast and responsive
                </li>

                <li className="relative pl-4">
                  <span className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Keep the codebase clean and modular
                </li>

                <li className="relative pl-4">
                  <span className="absolute left-[-6px] top-1  flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></span>
                  Deliver an experience that feels intuitive and professional
                </li>
              </ul>
            </div>

            <p>
              I’ve helped brands and teams translate their vision into modern
              web interfaces that users enjoy — and remember.
              <br />
              Let’s build something people love to use.
            </p>
          </div>
          <div className="">
            <h2 className="capitalize  text-3xl font-bold">What i'm doing</h2>
          </div>
          <div className="  grid lg:grid-cols-2 gap-2 lg:grid-rows-2 grid-cols-1 mb-8 ">
            <div className="   rounded-md bg-1 ">
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
            </div>
            <div className="   rounded-md bg-1 ">
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
            </div>

            <div className="   rounded-md bg-1 ">
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
            </div>

            <div className="   rounded-md bg-1 ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
