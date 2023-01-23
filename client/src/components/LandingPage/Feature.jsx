import { React, useState } from "react";
import { InView } from "react-intersection-observer";
import { FaUsers, FaGlobeAsia, FaProjectDiagram, FaUser } from "react-icons/fa";

const Feature = ({ supTitle, TitleHighLight, Title, color, gradient1, gradient2, feature, list, extra }) => {
  const listItems = list?.map((item) => {
    return <li className="mb-3 text-grey2">{item}</li>;
  });
  const colorVariants = {
    accent1: "bg-[#0098FA]",
    easyGreen: "bg-[#19EB48]",
    mediumYellow: "bg-[#E2BC1E]",
    topBlueGradient: "from-[#0098FA]",
    bottomBlueGradient: "to-[#0098FA]",
    topGreenGradient: "from-[#19EB48]",
    bottomGreenGradient: "to-[#19EB48]",
    topYellowGradient: "from-[#E2BC1E]",
    bottomYellowGradient: "to-[#E2BC1E]",
    feature1: "shadow-[0px_0px_54px_45px_#0098FA]",
    feature2: "shadow-[0px_0px_54px_45px_#19EB48]",
    feature3: "shadow-[0px_0px_54px_45px_#E2BC1E]",
  };
  const textVariants = {
    accent1: "text-[#0098FA]",
    easyGreen: "text-[#19EB48]",
    mediumYellow: "text-[#E2BC1E]",
  };
  const [isInView, setIsInView] = useState(false);
  const [listIsInView, setListIsInView] = useState(false);

  return (
    <InView
      as="div"
      threshold={[0.5]}
      onChange={(inView, entry) => {
        if (inView) {
          setIsInView(true);
        }
      }}
    >
      <div className={`flex flex-row h-screen gap-x-3 px-9`}>
        <div>
          <div className={`relative ml-14 w-4 h-4 transition-all duration-300  ${isInView ? colorVariants[color] : ""} ${isInView ? colorVariants[feature] : ""} rounded-full`}>
            {supTitle === "Collaborate" ? <FaUsers className={`${isInView ? "animate-fadeIn" : ""} opacity-0 absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} /> : null}
            {supTitle === "Compete" ? <FaGlobeAsia className={`${isInView ? "animate-fadeIn" : ""} opacity-0 absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} /> : null}
            {supTitle === "Solve" ? <FaProjectDiagram className={`${isInView ? "animate-fadeIn" : ""} opacity-0 absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} /> : null}
            {supTitle === "Sign up for an account" ? <FaUser className={`${isInView ? "animate-fadeIn" : ""} opacity-0 absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} /> : null}
          </div>
          <div className={`${isInView ? "animate-grow" : ""} z-[-1] ml-14 top-full w-3 rounded bg-gradient-to-b ${colorVariants[gradient1]} ${colorVariants[gradient2]}`}></div>
        </div>
        <div className={`flex flex-col ml-32 w-full`}>
          <p className={`${extra === "SignUp" ? "text-5xl" : "text-4xl"} ${isInView ? "animate-slideOutDelayed" : ""} -translate-x-2 origin-top-right opacity-0 font-bold mb-20`}>{supTitle}</p>
          {extra === "SignUp" ? (
            <button className="p-4 w-40 text-3xl transition-all ease-in-out duration-300 hover:cursor-pointer hover:scale-110 hover:shadow hover:shadow-signUp  bg-accent1 text-white font-bold rounded-xl">
              Sign up
            </button>
          ) : (
            <div className="flex flex-col grow">
              <h1 className={`text-5xl font-bold tracking-wide mb-11 ${isInView ? "animate-slideOut" : ""} -translate-x-2 origin-top-right opacity-0`}>
                <span className={`${textVariants[color]}`}>{TitleHighLight}</span>
                {Title}
              </h1>
              <div className="flex flex-row grow gap-x-6 items-center">
                <InView
                  as="div"
                  threshold={[1]}
                  onChange={(listInView, entry) => {
                    if (listInView) {
                      setListIsInView(true);
                    }
                  }}
                >
                  <ul className={`${listIsInView ? "animate-slideOut" : ""} -translate-x-2 origin-top-right opacity-0 list-outside list-disc ml-6 leading-8 text-2xl`}>{listItems}</ul>
                </InView>
                <div className="flex flex-row items-center justify-center w-full h-full">
                  <img className={`${listIsInView ? "animate-slideUp" : ""} opacity-0 -translate-y-2`} src="" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </InView>
  );
};

export default Feature;