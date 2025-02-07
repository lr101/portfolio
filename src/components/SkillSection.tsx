"use client";

import React from "react";

const skills: string[] = [
  "Java", "JavaScript", "Kotlin", "Markdown", "C++", "Dart", "Python",
  "Bash Script", "OpenCV", "Nginx", "InfluxDB", "Postgres", "Redis",
  "OpenAPI Specification", "Docker", "Bitwarden", "Arduino", "Cisco",
  "Kubernetes", "Git", "Cloudflare", "Flutter", "NPM", "EJS", "Express.js",
  "Node.js", "Thymeleaf", "Apache Maven", "Adobe Lightroom Classic",
  "Adobe Photoshop", "Canva", "GitHub Actions", "Pi-Hole", "Raspberry Pi",
  "Postman", "Swagger", "Mosquitto", "Spring"
];

// Stable color assignment using a hash function
const colors = [
  "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
  "bg-purple-500", "bg-pink-500", "bg-teal-500"
];

const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getColorForSkill = (skill: string) => colors[hashCode(skill) % colors.length];

const SkillSection = () => {
  return (
    <section className="w-full max-w-5xl" id="skills">
      <h2 className="mb-4 text-3xl font-bold text-[hsl(280,100%,70%)]">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-white text-sm ${getColorForSkill(skill)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
