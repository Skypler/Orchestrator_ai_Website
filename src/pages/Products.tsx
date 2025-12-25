import Image from "../assets/images/productsImage.svg"

const Products = () => {
  const orchestratorFeatures = [
    { title: "Visual to functions", desc: "Translate visual designs into working code and front-end components." },
    { title: "Powered by Blueprints", desc: "Utilize pre-made templates and logic structures for faster building." },
    { title: "Serverless by Default", desc: "No infrastructure to manage. Deployment is automated and scalable." },
    { title: "Connected Workflows", desc: "Sync your designs with API endpoints and external databases." },
    { title: "One-Click Deploy", desc: "Push your prototype to production with a single button press." },
    { title: "Universal Export", desc: "Export your project to APK, Web, or native source code." }
  ];

  return (
    <div className="bg-[#F8EAE0] min-h-screen font-space text-black px-8 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Orchestrator AI Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-8">1. Orchestrator AI</h2>
          
          {/* Solution Highlight Box */}
         <div className="flex-1 bg-[#FFD9C0] rounded-[40px] 
                flex flex-col justify-center items-center 
                text-center p-10 mb-12 border border-black/5">
  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">
    SOLUTION: Orchestrator removes those barriers.
  </h3>

  <p className="text-lg font-semibold leading-relaxed opacity-80 max-w-2xl">
    Agentic Coding Platform for non-developer and Entrepreneurs.
    To take their mobile design to working prototype in minutes.
  </p>

  <p className="text-lg leading-relaxed opacity-80 max-w-2xl mt-2">
    It understands designs, builds the trustless prototype, code,
    and <br />
    brings your product to life.
  </p>
</div>

<img src={Image} alt="" />


          {/* Flow Indicator */}
          <div className="flex justify-center items-center gap-4 text-md font-medium mb-12 overflow-x-auto whitespace-nowrap py-2">
            <span>Figma</span> <span>→</span> <span>Extraction</span> <span>→</span> 
            <span>Front end</span> <span>→</span> <span>Preview</span> <span>→</span> 
            <span>Back end</span> <span>→</span> <span>APK</span>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orchestratorFeatures.map((f, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-sm border border-black/10 p-8 rounded-2xl hover:bg-white/60 transition-all group">
                <h4 className="font-bold text-lg mb-3">{f.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Sentinel AI Section */}
        <section className="mb-32 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 self-start">2. Sentinel AI</h2>
          <div className="max-w-3xl">
             <h4 className="font-bold mb-4">Operational Efficiency Monitoring by an Agentic System.</h4>
             <p className="text-gray-700 leading-relaxed mb-8">
               Sentinel watches how a team or company truly operates, spots bottlenecks early, and coordinates work without constant supervision. 
It streamlines operations, predicts failures before they surface, and keeps every workflow running at peak efficiency. 
Sentinel transforms scattered processes into one coherent system that continuously improves itself.
             </p>
             <p className="text-gray-700 leading-relaxed mb-8">
               It streamlines operations, predicts failures before they surface, and keeps every workflow running at peak efficiency. 
Sentinel transforms scattered processes into one coherent system that continuously improves itself.
             </p>
             <p className="text-gray-700 leading-relaxed mb-8">
               Sentinel watches how a team or company truly operates, spots bottlenecks early, and coordinates work without constant supervision. 
It streamlines operations, predicts failures before they surface, and keeps every workflow running at peak efficiency. 
Sentinel transforms scattered processes into one coherent system that continuously improves itself.
             </p>
             <button className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
               Coming Soon ...
             </button>
          </div>
        </section>

        {/* 3. Simulate Section */}
        <section className="pb-20 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 self-start">3. Simulate</h2>
          <div className="max-w-3xl">
             <h4 className="font-bold mb-4">VS code for Science and Research</h4>
             <p className="text-gray-700 leading-relaxed mb-8">
              Simulate is a thinking environment built for deep exploration and problem-solving.  It assists researchers and engineers by analyzing hypotheses, generating structured insights, and running agentic reasoning loops on complex questions.
             </p>
             
             <p className="text-gray-700 leading-relaxed mb-8">
                Instead of a text editor, Simulate becomes a partner that helps you test ideas, model problems, and accelerate breakthroughs.
             </p>
             <button className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
               Coming Soon ...
             </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Products;