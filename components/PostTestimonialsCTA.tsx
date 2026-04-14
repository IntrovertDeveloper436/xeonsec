import React from "react";

const PostTestimonialsCTA = () => {
  return (
    <section
      id="post-testimonials-cta"
      className="w-full bg-black text-white !text-center !px-4 sm:!px-6 md:!px-8 !pt-14 sm:!pt-16 md:!pt-20 !pb-20 sm:!pb-20 md:!pb-24"
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 to-transparent !px-6 sm:!px-10 md:!px-14 !py-10 sm:!py-12 md:!py-14 !text-center">
          <div className="w-full px-1 sm:px-2 md:px-3 py-1 sm:py-2 flex flex-col items-center">
            <p className="w-full text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mb-4 !text-center">
              Next Step
            </p>

            <h2 className="w-full text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6 !text-center">
              Ready to build what comes next?
            </h2>

            <p className="w-full text-neutral-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 !text-center">
              Partner with a team that can move from strategy to launch without losing speed,
              quality, or technical depth.
            </p>

            <div className="flex items-center justify-center w-full py-2 sm:py-3">
              <button className="inline-flex items-center justify-center rounded-full bg-cyan-400 text-black font-semibold !px-8 sm:!px-10 !py-3.5 sm:!py-4 min-h-12 leading-none transition-transform duration-200 hover:scale-[1.03] active:scale-100">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostTestimonialsCTA;
