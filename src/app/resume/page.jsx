function Resume() {
  return (
    <>
      <div className="mx-5 flex gap-y-4 flex-col">
        <div className="capitalize  text-4xl font-bold flex flex-col relative  top-4  w-1/3">
          <h1 className="pb-4">Resume</h1>
          <div className=" bg-yellow-400 w-14 mb-3 h-[4px] rounded-full "></div>
        </div>

        <div>
          <h3 className="text-2xl mt-3">Education</h3>

          <div className="relative   ">
            {/* الخط العمودي */}
            <div className="absolute  top-0 h-full w-px bg-gray-700"></div>

            <ul className="space-y-6 flex items-center mt-3">
              <li className="relative pl-4 ">
                <span className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-yellow-300"></span>
                Faculty of Commerce - Menofuia university
                <span className="text-yellow-300 flex text-sm">
                  2018 - 2022
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl">Experience</h3>

          <div className="relative   ">
            {/* الخط العمودي */}
            <div className="absolute  top-0 h-full w-px bg-gray-700"></div>

            <ul className="space-y-6 flex items-center mt-3">
              <li className="relative pl-4 ">
                <span className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-yellow-300"></span>
                Front - End Diploma at Route Academy
                <span className="text-yellow-300 flex text-sm">
                  2024 - 2025
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
