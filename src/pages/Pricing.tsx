const Pricing = () => {
  return (
    <div className="font-jura bg-white text-black py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl font-bold mb-4">Pricing Enquiry</p>
        <p className="text-lg mb-6">
          Have questions about our pricing? We're here to help! Contact our team
          for more details and get personalized assistance.
        </p>

        <div className="bg-blue-100 p-8 rounded-lg shadow-lg space-y-6">
          <p className="text-xl font-semibold text-black">
            Reach out to us for the best pricing options!
          </p>
          <p className="text-lg">
            <span className="font-bold">Contact Number:</span>{" "}
            <span>+1 800-123-4567</span>
          </p>
          <p className="text-lg">
            <span className="font-bold">Email Address:</span>{" "}
            <span>pricing@orchestratorai.com</span>
          </p>

          <button className="bg-blue-500 text-white font-bold rounded-md px-6 py-3 mt-4 hover:bg-blue-600 transition-colors">
            <a href="mailto:pricing@orchestratorai.com" className="text-white">
              Send an Email
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
