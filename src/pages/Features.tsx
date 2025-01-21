import { NavLink } from "react-router";
import FullStackImg from "../assets/images/FeaturesPage/1.svg";
import DveloperImg from "../assets/images/FeaturesPage/2.svg";
import EnterPriceImg from "../assets/images/FeaturesPage/3.svg";

const Features = () => {
  return (
    <>
      <div className="font-jura text-center flex flex-col items-center space-y-16 px-4 md:px-10 lg:px-20">
        <p className="font-bold text-3xl mb-6 mt-8">Features</p>

        {/* Section Template */}
        {[
          {
            title: "End to End Full Stack Development",
            description:
              "From Figma to Production Ready app and Launch and monitor the app as well you could just focus on the business.",
            img: FullStackImg,
            alt: "Full Stack Development",
            points: [
              "Takes in Figma as Input.",
              "Design team --> Frontend Team --> Backend Team --> Deploy Team.",
              "Each completes up to 5 important tasks and passes to the next agent, working to finalize the app.",
              "Fully deploy to Play/App Store and maintain even after launching the app.",
              "Perfect for SMALL BUSINESSES, INDIVIDUALS, STARTUPS without Developers or Big Budgets.",
            ],
          },
          {
            title: "Developers",
            description:
              "Perfect for Developers looking for an AI Platform to build one major task like Frontend, Features, or a few pages of their app.",
            img: DveloperImg,
            alt: "Developers",
            points: [
              "Customize all the agents from pre-built templates as per app or developer requirements.",
              "Communicate with the agents using natural language.",
              "Edit the code or integrate more tools, libraries, and pages as per requirements.",
              "Add more developer team members and collaborate with other developers and agents.",
              "Perfect for DEVELOPERS who specialize in one area but want to build the entire app.",
            ],
          },
          {
            title: "Enterprises",
            description:
              "Perfect for Enterprises looking for an AI platform to handle tasks like Frontend, Features, or a few pages of their app with efficiency and scale.",
            img: EnterPriceImg,
            alt: "Enterprises",
            points: [
              "Customize all agents from pre-built templates tailored to enterprise requirements.",
              "Communicate with the agents using natural language for seamless integration.",
              "Edit the code or integrate additional tools, libraries, and pages as per the needs of the enterprise.",
              "Collaborate with developers and agents, scaling the solution for larger teams.",
              "Perfect for ENTERPRISES aiming to automate workflows and build scalable, production-ready applications efficiently.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="w-full max-w-6xl space-y-6 bg-blue-200 rounded-2xl p-6"
          >
            <p className="font-bold text-xl mb-6">{section.title}</p>
            <p className="text-justify md:text-center mx-auto font-semibold">
              {section.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[30%,70%] gap-6 items-center">
              <div className="p-4">
                <img src={section.img} alt={section.alt} className="mx-auto" />
              </div>
              <div className="p-4 text-start font-semibold">
                <ul className="list-disc list-inside space-y-4 mx-auto md:mx-4 text-justify">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="bg-blue-600 font-bold rounded-md px-8 py-3 hover:bg-blue-600">
              <NavLink to="/joinlist" className="transition-colors text-white">
                Join Waitlist
              </NavLink>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
