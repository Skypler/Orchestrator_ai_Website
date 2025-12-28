import HeroSectionImage from "../assets/images/HeroSectionImage.svg";
import ResearchImage from "../assets/images/ResearchDiagram.svg";
import Image1 from "../assets/images/WhatWeFocusOn/image1.svg";
import Image2 from "../assets/images/WhatWeFocusOn/image2.svg";
import Image3 from "../assets/images/WhatWeFocusOn/image3.svg";
const Home = () => {
  return (
    <div className="min-h-screen  text-black font-sans">
      {/* Hero Section */}
      <section className="px-12 py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
    
    {/* Text */}
    <div className="flex flex-col items-start text-left">
      <h1 className="text-5xl font-semibold leading-tight mb-6">
        Pioneering research. <br />
        Building intelligent <br />
        products
      </h1>
      <p className="text-sm max-w-md text-gray-800">
        Building AI agents and foundational models designed to work together
        that collaborate seamlessly, solve real problems, and empower humans.
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <div className="w-72 h-72 rounded-2xl bg-[#F1E4D8] flex items-center justify-center">
        <img
          src={HeroSectionImage}
          alt="Hero Section Image"
          className="max-w-full max-h-full"
        />
      </div>
    </div>

  </div>
</section>

      {/* How We Build */}
      <section className="flex flex-col items-center py-20 px-6 max-w-4xl mx-auto text-center font-sans text-gray-900">
        {/* Header */}
        <h1 className="text-4xl font-semibold mb-12">How We Build</h1>

        {/* Section 1: Coding */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-2">Coding is the core.</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The strongest LLMs aren’t just chatty. They build.
            <br />
            We focus on models that think in code, reason deeply, and turn
            problems into working systems.
          </p>
        </div>

        {/* Section 2: Small models */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">
            Small models, big capability.
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We distill large models into compact ones with almost no
            intelligence loss.
            <br />
            This makes advanced AI cheap, fast, and accessible to everyone.
          </p>
        </div>

        {/* Diagram Placeholder */}
        <div className="w-full rounded-lg p-8 mb-16 flex flex-col items-center">
          <img
            src={ResearchImage}
            alt="Knowledge Distillation Diagram"
            className="max-w-full h-auto"
          />
        </div>

        {/* Section 3: Ideology */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-2">Our ideology</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Intelligence should be accessible.
            <br />
            We compress frontier-level coding models into tiny, efficient
            systems without losing capability.
            <br />
            This makes advanced reasoning and creation tools available to
            anyone, anywhere.
          </p>
        </div>

        {/* Section 4: Why It Matters */}
        <div>
          <h2 className="text-xl font-bold mb-2">Why It Matters</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            If intelligence stays locked behind huge servers and huge prices,
            only a tiny
            <br />
            fraction of humanity will ever create.
          </p>
        </div>
      </section>

      {/* Focus Section */}
    <section className="px-12 py-24">
  <h2 className="text-center text-xl font-bold mb-20">
    What We Focus On
  </h2>

  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      
      <div>
        <h3 className="font-semibold mb-4">
          Small High-Performance Models
        </h3>
        <p className="text-sm text-gray-800 max-w-md">
          We compress large frontier models into tiny, efficient systems
          without losing their reasoning power. These distilled models run
          fast, cost almost nothing to operate, and bring advanced
          intelligence to devices and teams that could never afford it
          before.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={Image1} alt="" />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Code-Native Intelligence</h3>
        <p className="text-sm text-gray-800 max-w-md">
          Our models think in code. They reason structurally, solve problems
          like engineers, and translate ideas directly into working systems.
          This is the foundation behind Orchestrator AI.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={Image2} alt="" />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Understanding User Intent</h3>
        <p className="text-sm text-gray-800 max-w-md">
          True intelligence begins with understanding what humans actually
          mean.
        </p>
        <p className="text-sm text-gray-800 max-w-md">
          We build models that infer goals, clarify ambiguity, and structure
          tasks so people can focus on creativity, not babysitting the AI.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={Image3} alt="" />
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
