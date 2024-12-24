import React from "react";
import userFriendly from "../../assets/images/user-friendly.svg";
import collabrative from "../../assets/images/collabrative.svg";
import effortless from "../../assets/images/effortless.svg";
import seamless from "../../assets/images/seamless.svg";

export const Features = () => {
  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "Our platform offers seamless task management to boost your efficiency.",
      icon: userFriendly,
    },
    {
      title: "Collaborate & Share Effortlessly",
      description:
        "Invite team members to work together and achieve your goals faster.",
      icon: collabrative,
    },
    {
      title: "Effortless Collaboration",
      description:
        "Invite team members to work together and achieve your goals faster.",
      icon: effortless,
    },
    {
      title: "Seamless Access",
      description: "Stay connected and manage your tasks on the go with ease.",
      icon: seamless,
    },
  ];

  return (
    <div className="w-full h-full py-14 lg:px-48 md:px-36 px-5">
      <div className="text-center">
        <h1 className="text-5xl md:text-4xl lg:text-6xl text-[#170f49] font-semibold lg:leading-snug leading-snug">
          Transform Your Productivity with Our
          <br />
          Innovative To-Do List Features
        </h1>
      </div>
      <div className="w-full h-full grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, number }) => {
  return (
    <div className="w-full h-[30rem]">
      <div className="w-full h-full flex flex-col gap-4 py-12 px-12 bg-gray-50 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-32 h-32 flex justify-center bg-white rounded-2xl shadow-sm">
            <img src={icon} className="w-20" alt="" />
          </div>
          <div className="text-gray-300 text-5xl font-bold">0{number}</div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <div className="mt-4 flex space-x-2">
          <div className="w-10 h-1 bg-red-500 rounded"></div>
          <div className="w-4 h-1 bg-red-500 rounded"></div>
        </div>
        <p className="mt-2 text-2xl text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
