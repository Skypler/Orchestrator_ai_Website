import { NavLink } from "react-router";
import MainImg from "../assets/images/FirstSecImage.svg";
import DesignSecImg from "../assets/images/DesignAgentsSec.svg";
import FigmatoJson from "../assets/images/DesignAgentsSection/FigmaToJson.svg";
import ReactLogo from "../assets/images/DesignAgentsSection/React.svg";
import BluePrintFromJson from "../assets/images/DesignAgentsSection/BlueprintFromJSON.svg";
import AgentPreview from "../assets/images/DesignAgentsSection/PriviewAgent.svg";
import FrontEndAgentImg from "../assets/images/FrontEndAgentSec.svg";
import ReactRouterImg from "../assets/images/FrontEndAgentSection/ReactRouter.svg";
import StateManagementImg from "../assets/images/FrontEndAgentSection/StateManagement.svg";
import TestingImg from "../assets/images/FrontEndAgentSection/Testing.svg";
import BackEndAgentImg from "../assets/images/BackendAgentSec.svg";
import APIImg from "../assets/images/BackendAgentSection/API.svg";
import DatabaseImg from "../assets/images/BackendAgentSection/Database.svg";
import JenkinImg from "../assets/images/BackendAgentSection/Jenkins.svg";
import ExpoAppImg from "../assets/images/BackendAgentSection/ExpoApp.svg";
import DeploySectionImg from "../assets/images/DeployAgentSecImg.svg";
import FirebaseImg from "../assets/images/DeployAgentSection/FireBase.svg";
import VercelImg from "../assets/images/DeployAgentSection/Vercel.svg";
import AWSImg from "../assets/images/DeployAgentSection/AWS.svg";
import DataDogImg from "../assets/images/DeployAgentSection/DataDog.svg";

const Home = () => {
  return (
    <>
      <div className="font-jura ">
        {/* Section One */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20 gap-6">
          <p className="text-2xl md:text-3xl text-center font-extrabold mx-3">
            "Figma Designs to Live Apps: Built by AI Agents Team, Directed by
            You."
          </p>
          <p className="text-lg md:text-xl text-center  font-semibold">
            "AI Agents: Building, Hosting, and Growing Your App While You Focus
            on Your Goals."
          </p>
          <button className="bg-blue-500 font-bold rounded-md px-6 py-2 md:text-2xl md:px-10">
            <NavLink to="/joinlist" className="transition-colors text-white">
              Join Waitlist
            </NavLink>
          </button>
          <img
            src={MainImg}
            alt="Main Visual"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Section Two */}
        <div className="flex flex-col items-center justify-center mx-4 md:mx-20 gap-6 min-h-screen">
          <div className="text-center space-y-10">
            <p className="text-2xl md:text-3xl font-semibold mb-10">
              Design Agents
            </p>
            <p className="text-lg md:text-xl text-justify mx-4">
              From any Inputs like Figma or Screenshots to DESIGN AGENTS will
              extract JSON to create proper Components from the Design.
            </p>
            <img
              src={DesignSecImg}
              alt="Design Agents Image"
              className="mx-auto my-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-3">
            <div className="p-4 text-center space-y-3">
              <img src={FigmatoJson} alt="Figma to JSON" className="mx-auto" />
              <p className="font-bold">Figma to JSON</p>
              <p>Convert Figma files to JSON for all of pages.</p>
            </div>
            <div className="p-4 text-center space-y-3">
              <img src={ReactLogo} alt="React Components" className="mx-auto" />
              <p className="font-bold">Detect React Components</p>
              <p>Detect all the components from JSON and align properly.</p>
            </div>
            <div className="p-4 text-center space-y-3">
              <img
                src={BluePrintFromJson}
                alt="Blueprint from JSON"
                className="mx-auto"
              />
              <p className="font-bold">Build Full Blueprint from JSON</p>
              <p>
                Build Full Blueprint from JSON for all the rest of the Tasks as
                well.
              </p>
            </div>
            <div className="p-4 text-center space-y-3">
              <img src={AgentPreview} alt="Preview Agent" className="mx-auto" />
              <p className="font-bold">Preview Agent show Preview</p>
              <p>
                Now, the Preview agent will show Preview of the Frontend you can
                edit it just by saying what you want.
              </p>
            </div>
          </div>
        </div>

        {/* Section Three */}
        <div className="min-h-screen flex flex-col items-center justify-center mx-4 md:mx-20 gap-6">
          <div className="text-center space-y-10">
            <p className="text-2xl md:text-3xl font-semibold mb-10">
              Frontend Agents
            </p>
            <p className="text-lg md:text-xl text-justify mx-4">
              This will take the Components and start writing Code for
              Components, Navigation and State Management and test all in Monaco
              Editor integrated in Product.
            </p>
            <img
              src={FrontEndAgentImg}
              alt="Frontend Agents Image"
              className="mx-auto my-4 w-full max-w-lg md:max-w-xl lg:max-w-3xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
            <div className="p-4 text-center space-y-4">
              <img src={ReactLogo} alt="" className="mx-auto" />
              <p className="font-semibold">
                React Native Code for All the Pages
              </p>
              <p>Write code to all the Pages of the Design Pages.</p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={ReactRouterImg} alt="" className="mx-auto" />
              <p className="font-semibold">React Router Navigation Code</p>
              <p>
                Make the flow for all the pages and add External API as well.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={StateManagementImg} alt="" className="mx-auto" />
              <p className="font-semibold">
                State Management Code to all the Pages
              </p>
              <p>
                Write all the State Management code for all the pages and
                actions.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={TestingImg} alt="" className="mx-auto" />
              <p className="font-semibold">Testing Full Frontend</p>
              <p>Test all the pages full complete the full entire Frontend.</p>
            </div>
          </div>
        </div>

        {/* Section Four */}
        <div className="min-h-screen flex flex-col items-center justify-center mx-4 md:mx-20 gap-6">
          <div className="text-center space-y-10">
            <p className="text-2xl md:text-3xl font-semibold mb-10">
              Backend Agents
            </p>
            <p className="text-lg md:text-xl text-justify mx-4">
              This will take the Components and start writing Code for API
              calls, Database Integration, and Testing. The entire process is
              streamlined using Monaco Editor integrated into the Product.
            </p>
            <img
              src={BackEndAgentImg}
              alt="Backend Agents Image"
              className="mx-auto my-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 space-y-3">
            <div className="p-4 text-center space-y-4">
              <img src={APIImg} alt="API Logo" className="mx-auto" />
              <p className="font-semibold">API Development</p>
              <p>
                Create API calls for the Frontend and integrate them seamlessly.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={DatabaseImg} alt="Database Logo" className="mx-auto" />
              <p className="font-semibold">Database Integration</p>
              <p>
                Connect to SQL or NoSQL databases like MongoDB for backend data
                management.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={JenkinImg} alt="Jest Logo" className="mx-auto" />
              <p className="font-semibold">Backend Testing</p>
              <p>
                Test API calls with tools like Jest and ensure seamless
                functionality.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={ExpoAppImg} alt="Expo Logo" className="mx-auto" />
              <p className="font-semibold">App Packaging</p>
              <p>
                Package the backend code and integrate it into a full Expo App.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={TestingImg} alt="Testing Logo" className="mx-auto" />
              <p className="font-semibold">Comprehensive Testing</p>
              <p>
                Run complete backend tests with AI-driven suggestions for
                optimization and fixes.
              </p>
            </div>
          </div>
        </div>

        {/* Section Five */}
        <div className="min-h-screen flex flex-col items-center justify-center mx-4 md:mx-20 gap-6">
          <div className="text-center space-y-10">
            <p className="text-2xl md:text-3xl font-semibold mb-10">
              Deploy Agents.
            </p>
            <p className="text-lg md:text-xl text-justify mx-4">
              Move the fully built app from Development to Production with
              agents working collaboratively to ensure all components are ready
              for deployment.
            </p>
            <img
              src={DeploySectionImg}
              alt="Deploy Agents Image"
              className="mx-auto my-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
            <div className="p-4 text-center space-y-4">
              <img src={FirebaseImg} alt="Firebase Logo" className="mx-auto" />
              <p className="font-semibold">Firebase Integration</p>
              <p>
                Seamlessly deploy your app to Firebase, ensuring scalability and
                reliability.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={VercelImg} alt="Vercel Logo" className="mx-auto" />
              <p className="font-semibold">Vercel Deployment</p>
              <p>
                Deploy your web application effortlessly to Vercel with
                optimized configurations.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={AWSImg} alt="AWS Logo" className="mx-auto" />
              <p className="font-semibold">AWS Hosting</p>
              <p>
                Utilize AWS for hosting and deploying your backend and frontend
                services with reliability.
              </p>
            </div>
            <div className="p-4 text-center space-y-4">
              <img src={DataDogImg} alt="Datadog Logo" className="mx-auto" />
              <p className="font-semibold">Monitoring with Datadog</p>
              <p>
                Monitor the deployed application with Datadog to ensure
                performance and detect issues in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
