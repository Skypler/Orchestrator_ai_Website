const Blogs = () => {
  return (
    <div className="min-h-screen text-black">
     

      {/* Blog List */}
      <div className="max-w-3xl mx-auto px-12 py-20 space-y-16">
        {/* Blog Item 1 */}
        <article className="space-y-4">
          <p className="text-xs text-black/70">Dec 10, 2025</p>

          <h2 className="text-2xl font-semibold leading-snug">
            Building Orchestrator AI setbacks and challenges
          </h2>

          <p className="text-sm text-black/80 max-w-2xl">
            Now we explain how we distilled and finetuned some model and output
            we got, and also explain how this helped us in getting products
            completed.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <img
  src="https://picsum.photos/64"
  alt="avatar"
  className="w-8 h-8 rounded-full object-cover"
/>




            <div className="text-sm">
              <p className="font-medium">Sriram Rajan</p>
              <p className="text-xs text-black/60">Founder / CEO</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Start Reading <span>→</span>
          </a>
        </article>

        <hr className="border-black/40" />

        {/* Blog Item 2 */}
        <article className="space-y-4">
          <p className="text-xs text-black/70">Oct 10, 2025</p>

          <h2 className="text-2xl font-semibold leading-snug">
            How to distill and finetune model without knowledge loss
          </h2>

          <p className="text-sm text-black/80 max-w-2xl">
            Now we explain how we distilled and finetuned some model and output
            we got, and also explain how this helped us in getting products
            completed.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <img
  src="https://picsum.photos/44"
  alt="avatar"
  className="w-8 h-8 rounded-full object-cover"
/>
            <div className="text-sm">
              <p className="font-medium">Abinayaskankar M</p>
              <p className="text-xs text-black/60">ML Engineer</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Start Reading <span>→</span>
          </a>
        </article>

        <hr className="border-black/40" />
      </div>
    </div>
  );
};

export default Blogs;
