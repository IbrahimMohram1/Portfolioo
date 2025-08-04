import { use } from "react";

type ProjectType = {
  id: number;
  name: string;
  link: string;
  image: string;
};

const projects: Omit<ProjectType, "image">[] = [
  { id: 11, name: "Movies", link: "https://movies-74xg.vercel.app/" },
  { id: 112, name: "Expand", link: "https://www.expand.com.sa/" },
  { id: 1, name: "testbite", link: "https://food-zeta-blush.vercel.app/" },
  { id: 2, name: "freshCart", link: "https://e-commerce-roan-phi.vercel.app/" },
  { id: 3, name: "Yummy", link: "https://ibrahimmohram1.github.io/Yummy/" },
  {
    id: 4,
    name: "Gameover",
    link: "https://ibrahimmohram1.github.io/Gameover/",
  },
  { id: 5, name: "Quiz", link: "https://ibrahimmohram1.github.io/Quiz/" },
  {
    id: 6,
    name: "WeatherApp",
    link: "https://ibrahimmohram1.github.io/WeatherApp/",
  },
  { id: 7, name: "TodoApp", link: "https://ibrahimmohram1.github.io/TodoApp/" },
  {
    id: 8,
    name: "loginSystem",
    link: "https://ibrahimmohram1.github.io/loginSystem/",
  },
  {
    id: 9,
    name: "BookMark",
    link: "https://ibrahimmohram1.github.io/BookMark/",
  },
  { id: 10, name: "Quote", link: "https://ibrahimmohram1.github.io/Quote/" },
];

async function fetchScreenshots(): Promise<ProjectType[]> {
  const results = await Promise.all(
    projects.map(async (project) => {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${project.link}&screenshot=true&meta=false`,
        );
        const data = await res.json();
        return {
          ...project,
          image: data.data?.screenshot?.url || "",
        };
      } catch (err) {
        console.error("Error fetching image for", project.link, err);
        return {
          ...project,
          image: "",
        };
      }
    }),
  );

  return results;
}

export default function PortfolioPage() {
  const data = use(fetchScreenshots());

  return (
    <div className="flex flex-wrap justify-center items-start my-3 px-4">
      {data.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.id}
          className="w-full md:w-1/3 p-2 h-full rounded-lg"
        >
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
        </a>
      ))}
    </div>
  );
}
