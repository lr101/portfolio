"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers"

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    postfix: "+",
    metric: "Users",
    value: "600",
  },
  {
    metric: "Apps",
    value: "2",
  },
  {
    metric: "Years",
    value: "10",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 grid grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={"achievement" + index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;