import React from "react";
import ProjectCard from "./ProjectCard";


export interface ProjectType {
  id: number;
  link: string | null;
  image: string | null;
  title: string;
  description: string[];
  createdAt: Date;
}

const projectCardItems: ProjectType[] = [
  {
    id: 1,
    link: "https://github.com/lr101/stick-it",
    image: "/images/project-stick-it.jpg",
    title: "Stick-It Map - a flutter app",
    description: 
      ["A mobile app for Android and IOS written with Flutter. " + 
      "It is something between google map pins and a social media app for sharing sticker locations and images with your friends. " +
      "This way you can find out where over the world your own stickers are located. ",
      "I personally learned a lot about running a production database, server and app, about images and lots and lots of problem solving" ],
    createdAt: new Date("2022-08-04"),
  },
  {
    id: 2,
    link: "https://github.com/lr101/TempServer",
    image: "/images/project-tempserver.png",
    title: "Temperature Project",
    description:
      ["This is one of my oldest projects, rewritten in different progamming languages. " +
        "It includes reading and displaying sensor data (mostly temperature and humidity) from ds18b20 and dht11 sensors." +
        "The newest version is written with spring boot in kotlin and uses indflux to store the sensor values, as well as aggregating the data for long term storage."
      ], 
    createdAt: new Date("2022-07-06"),
  },
  {
    id: 3,
    link: "https://github.com/lr101/PictureCollage",
    image: "/images/project-picture-collage.jpg",
    title: "Create picture collages",
    description: [
      "This Java application takes multiple images from a selected folder and creates with a selectes width and height a random collage. " +
      "It works with different sized images and different ratio images, so no pre-processing is necessary. " +
      "Additionally, there are two available shapes to choose from: Rectangle and Hexagon",
      "This application was created to create a collage of pictures for a poster. " +
      "At the time, I could not find a program that fitted my needs, especially taking different sized imgages, having no limit on the number of images, on arranging them automatically as 200+ images take to long to fit manually."
    ],
    createdAt: new Date("2020-08-04"),
  },
  {
    id: 4,
    link: "https://github.com/daniel-seiler/BVLab/tree/main/BVProject",
    image: "/images/project-coffee-fill.png",
    title: "Live detection: How full is your coffee cup?",
    description:[
      "This project uses a camera looking from above onto a cup to detect how full it is." +
      "This uni project used c++ and OpenCV to detect the two different circeles and determents by the camera static height, how full the cup is",
      "To be honest, this only worked under very specifc light conditions and was not very accurate, as just beeing a few pixels off can make up to a 50% difference." +
      "It was still much fun to develop and perfect for using all basic computer vision algorithms without relying on pretrained ML models, etc."
      ],
    createdAt: new Date("2022-11-09"),
  },
];


const projectSection = () => {

  return (
    <section className="w-full max-w-5xl py-8" id="projects">
        <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">Projects</h2>
      <div className="relative flex flex-col items-center">
        {projectCardItems.length === 0 ? (
          <p className="text-gray-300 text-center">No projects found</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {projectCardItems.map((project: ProjectType) => (
              <ProjectCard project={project} key={project.id}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default projectSection;
