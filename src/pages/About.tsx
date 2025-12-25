import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col text-[#1a1a1a]">
      {/* Main Content */}
      <main className="flex-1 flex justify-center px-6 py-16">
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl font-medium text-center mb-12">About us</h1>

          {/* Narrative Section */}
          <div className="space-y-6 text-[15.5px] leading-[1.6] text-justify md:text-left">
            <p>
              Skypler exists to make intelligence accessible and to turn human creativity into working reality. We
              believe the future will be built by people who can think boldly, experiment freely, and create without
              the traditional barriers of cost, expertise, or infrastructure. Our work is driven by a simple conviction:
              everyone deserves tools powerful enough to bring their ideas to life.
            </p>

            <p>
              We design and research systems that transform how humans build, operate, and understand
              technology. Instead of creating general-purpose chatbots, we focus on code-native intelligence, small
              high-performance models, and agentic systems that collaborate with humans to accomplish real tasks.
              Our philosophy is rooted in engineering: intelligence becomes useful when it can build, reason, and
              execute.
            </p>

            <p>
              Skypler's foundational research spans four core model families. Our Front-end Model generates clean
              React Native code directly from designs and written descriptions. The Back-end & Logic Model takes
              that code and determines the necessary logic, state, and backend structure to make the application
              functional. Our Statistical Simulation Model expands limited datasets by understanding their
              underlying distributions, enabling high-quality training and analysis even in low-data environments.
              Finally, the Agent Splitter Model learns to break complex tasks into specialized agents, forming the
              backbone of scalable autonomous systems. Together, these models establish a modular intelligence
              architecture that powers our products.
            </p>

            <p>
              On the product side, we build tools that accelerate creation and amplify capability. Orchestrator AI
              turns mobile designs into working prototypes within minutes, opening the door for non-developers,
              founders, and teams to build apps with exceptional speed. Sentinel AI aims to deliver autonomous
              operational intelligence, optimizing workflows and coordinating work across an organization. Circuit is
              our research workspace, a reasoning environment for scientific thinking, hypothesis exploration, and
              complex problem-solving.
            </p>

            <p>
              Skypler is shaped by a long-term vision: a world where intelligence is not a luxury, but an accessible
              resource available to anyone with an idea. We push toward an ecosystem of small, specialized models
              and agentic systems that scale to millions of creators, students, and innovators. We focus on rigorous
              engineering, practical research, and real-world impact.
            </p>

            <p>
              We are a small, focused team of engineers and researchers committed to building technology that
              empowers people. We value clarity, depth, and accessibility. We believe in engineering over hype, long-
              term progress over shortcuts, and intelligence that amplifies human potential rather than replaces it.
            </p>

            <p>
              Skypler is still at the beginning—but our ambition is clear: to redefine how intelligence is built,
              deployed, and used, and to unlock a world where anyone can create.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="mt-24 space-y-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <h2 className="text-xl font-semibold min-w-[140px]">Our Mission:</h2>
              <p className="text-xl md:text-2xl leading-tight">
                To make intelligence accessible and empower anyone to turn 
                their ideas into real, working products.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <h2 className="text-xl font-semibold min-w-[140px]">Our Vision:</h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl leading-tight">
                  A world where anyone can build, invent, and create using affordable, 
                  high-performance AI.
                </p>
                <p className="text-xl md:text-2xl leading-tight">
                  We aim to develop an ecosystem of small, specialized models and 
                  agentic systems that scale to millions of creators, students, 
                  founders, and teams worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;