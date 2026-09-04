import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Bold Headline & Index */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 02
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-[1.1]">
              Design-minded. <br />
              Technically grounded.
            </h2>

            <div className="pt-4 font-mono text-xs text-[#737373] space-y-2">
              <p>LOCATION: TIRUVALLUR, TAMIL NADU, INDIA</p>
              <p>INSTITUTION: DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE</p>
              <p>PROGRAM: B.SC. COMPUTER SCIENCE (2024–2027)</p>
            </div>
          </div>

          {/* Right Column: Narrative & Minimalist Pipeline */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6 text-base sm:text-lg text-[#525252] leading-relaxed font-normal">
              <p>
                I am a third-year B.Sc. Computer Science student interested in designing and building digital
                products that solve meaningful problems.
              </p>
              <p>
                My work sits at the intersection of UI/UX design, frontend development, and emerging technologies.
                I enjoy understanding how users interact with products and translating ideas into structured,
                intuitive digital experiences.
              </p>
              <p>
                My technical background helps me understand how products move from design concepts to working
                interfaces—ensuring what is conceived on a canvas translates faithfully into responsive, performant code.
              </p>
            </div>

            {/* Typography-Based Pipeline */}
            <div className="pt-8 border-t border-[#E5E5E5] space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-bold block">
                PRODUCT CREATION FLOW
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
                <div className="p-5 border border-[#E5E5E5] space-y-2">
                  <span className="text-[10px] text-[#737373] block">PHASE 01</span>
                  <h4 className="text-sm font-bold text-[#0A0A0A] uppercase">DESIGN</h4>
                  <p className="text-xs text-[#525252] font-sans">
                    Information hierarchy, user flows, and wireframes in Figma focused on clarity and utility.
                  </p>
                </div>

                <div className="p-5 border border-[#E5E5E5] space-y-2">
                  <span className="text-[10px] text-[#737373] block">PHASE 02</span>
                  <h4 className="text-sm font-bold text-[#0A0A0A] uppercase">DEVELOPMENT</h4>
                  <p className="text-xs text-[#525252] font-sans">
                    Semantic HTML, CSS architectures, and component-driven React.js interfaces.
                  </p>
                </div>

                <div className="p-5 border border-[#E5E5E5] space-y-2">
                  <span className="text-[10px] text-[#737373] block">PHASE 03</span>
                  <h4 className="text-sm font-bold text-[#0A0A0A] uppercase">PRODUCT</h4>
                  <p className="text-xs text-[#525252] font-sans">
                    Real-world data integration, machine learning reasoning, and production deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
