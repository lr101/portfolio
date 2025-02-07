import React from "react";

import Timeline, { TimelineItem } from "./Timeline";

const timelineData: TimelineItem[] = [
    {
      date: "2015",
      title: "Started My Coding Journey",
      description: "First projects building websites, a mobile app and using raspberry pis."
    },
    {
      date: "2017 - 2019",
      title: "Computer Science in High School",
      description: "Learned Java and cs fundamentals in school. My final project was a 3D flappy birds game in Gloop haha."
    },
    {
      date: "2020 - 2024",
      title: "Computer Science Bachelor",
      description: "My thesis was about the feasability of using black box fuzzing to test REST APIs."
    },
    {
      date: "2023 - 2024",
      title: "Part-time backend developer",
      description: "I was working as a part-time backend developer for a small company, using spring boot and kotlin, MySQL, and more."
    },
    {
      date: "2024 - Present",
      title: "Computer Science Master",
      description: "I'm currently pursuing a Master's degree in Computer Science, as well as going on an exchange semester to Malaysia."
    }
  ];

const AboutSection = () => (
    <section className="w-full max-w-5xl" id="about-me">
        <h2 className="mb-6 text-3xl font-bold text-[hsl(280,100%,70%)]">
            About Me
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
            I’m a passionate computer science student from Germany.
            I’ve worked on a bunch of projects in <span className="italic">backend web development</span> and love tinkering with <span className="italic">Raspberry Pis</span> and my <span className="italic">homelab setup</span>.  
            I like talking about the projects I have been working on over the years a lot more, but here is my <span className="italic">academic journey</span> so far: 
        </p>

        <Timeline items={timelineData} />
    </section>
);

export default AboutSection;
