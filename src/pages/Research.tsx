import Image1 from "../assets/images/Research/image1.png"
import Image2 from "../assets/images/Research/image2.png"
import Image3 from "../assets/images/Research/image3.png"
import Image4 from "../assets/images/Research/image4.png"
const Research = () => {
  return (
    <div className="min-h-screen text-black">
      

      {/* Content Wrapper */}
      <div className="px-12 py-16 space-y-20 max-w-6xl mx-auto">
        {/* Front-end Model */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">Front-end Model</h2>

            <p className="text-sm">
              Transforms UI specifications into working React Native code.
            </p>

            <p className="text-sm font-semibold">
              A highly specialized code-generation model optimized for front-end
              structure, layout reasoning, and component generation.
            </p>

            <p className="text-sm">
              Instead of producing general-purpose code, it focuses on one task:
              <br />
              <span className="font-semibold">
                turn any design or instruction into clean, production-ready
                React Native output with minimal tokens.
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <img src={Image1} alt="" />
            </div>
          </div>
        </section>

        <hr className="border-black/40" />

        {/* Back-end Model */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">
              Back-end and Logic Reasoning Model
            </h2>

            <p className="text-sm">
              This Model analyzes the UI code produced by the Front-end Model,
              infers required state, logic flows, data structures, and backend
              endpoints, then structures the entire logic layer automatically.
            </p>

            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>detect what functionality the app needs</li>
              <li>generate backend scaffolding</li>
              <li>create logic glue code</li>
              <li>
                and coordinate agents that implement full functionality
              </li>
            </ul>

            <p className="text-sm font-semibold">
              This is the “brain” that makes apps truly work, not just render.
            </p>
          </div>

          <div className="flex justify-center items-center">
           
              <img src={Image2} alt="" />
            
          </div>
        </section>

        <hr className="border-black/40" />

        {/* Statistical Simulation */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">
              Statistical Simulation Model
            </h2>

            <p className="text-sm">
              Expands datasets by understanding distributional patterns without
              losing quality.
            </p>

            <p className="text-sm">
              When users upload limited data, this model analyzes its statistical
              structure and simulates additional realistic samples while
              preserving meaning, distribution, and variance.
            </p>

            <p className="text-sm">
              Useful for low-resource training, testing, personalization, and
              agent simulations.
            </p>

            <p className="text-sm">
              This allows teams with small datasets to achieve results previously
              possible only with huge corpora.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img src={Image3} alt="" />
          </div>
        </section>

        <hr className="border-black/40" />

        {/* Agent Splitter */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">Agent Splitter Model</h2>

            <p className="text-sm">
              Determines how to break a large task into specialized agents. This
              model learns to understand complex goals, decompose them into
              subproblems, and assign each part to the appropriate agent.
            </p>

            <p className="text-sm">
              It acts as the “coordinator model” inside your agentic ecosystem.
            </p>

            <p className="text-sm font-semibold">Capabilities include:</p>

            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>task decomposition</li>
              <li>skill detection</li>
              <li>agent assignment</li>
              <li>dependency and ordering</li>
              <li>merging results into a final output</li>
            </ul>

            <p className="text-sm">
              It is the backbone of any autonomous multi-agent system.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img src={Image4} alt="" />
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Research;
