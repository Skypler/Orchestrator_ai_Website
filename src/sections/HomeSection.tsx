const HomeSection = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 text-center">
          <h2 className="jura-header font-extrabold text-4xl px-10 py-6">
            Witness the Magic of Multi Agents working together to finish your
            APP the way you want!
          </h2>
          <p className="jura-body text-2xl px-10 py-6">
            App Development made simpler with Agents working together to build
            the App you have Envisioned!
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-yellow-200 text-black px-6 py-3 rounded-md hover:bg-white">
              <a href="#" className="jura-header">
                Get in Touch!
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
