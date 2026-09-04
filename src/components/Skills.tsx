import React from 'react';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: 'DESIGN',
      items: [
        { name: 'Figma', note: 'Design systems, high-fidelity UI, component architectures' },
        { name: 'Wireframing', note: 'Low-to-mid fidelity rapid layout and ergonomic UX' },
        { name: 'Prototyping', note: 'Interactive transitions and state mockups' },
        { name: 'User Flows', note: 'Task mapping and edge-case navigation' },
        { name: 'Responsive Design', note: 'Fluid breakpoints and mobile-first logic' },
        { name: 'User Research', note: 'Needs assessment and problem framing' },
      ],
    },
    {
      category: 'DEVELOPMENT',
      items: [
        { name: 'React.js', note: 'Modular component architecture, hooks, client state' },
        { name: 'JavaScript', note: 'ES6+, async/await, DOM APIs, modern client logic' },
        { name: 'HTML5 & CSS3', note: 'Semantic markup, accessibility, modern grid layouts' },
        { name: 'ASP.NET', note: 'Web application fundamentals and backend integration' },
      ],
    },
    {
      category: 'TECHNOLOGY',
      items: [
        { name: 'Python', note: 'Data processing, scripting, ML model integration' },
        { name: 'Machine Learning Fundamentals', note: 'Random Forest, classification workflows' },
        { name: 'REST APIs', note: 'Endpoint contracts, JSON schemas, client ingestion' },
        { name: 'Geospatial Analysis', note: 'Coordinate layers and spatial overlays' },
        { name: 'GIS Visualization', note: 'Leaflet GIS, custom tiles, polygon bounds' },
      ],
    },
    {
      category: 'DATA',
      items: [
        { name: 'SQL', note: 'Relational schema design, querying, normalization' },
        { name: 'MySQL', note: 'Database administration, tables, views, indexing' },
        { name: 'Oracle', note: 'Enterprise SQL, queries, transaction principles' },
      ],
    },
    {
      category: 'TOOLS',
      items: [
        { name: 'Git', note: 'Branching, commit conventions, version control' },
        { name: 'GitHub', note: 'Repository management, continuous delivery via Vercel' },
        { name: 'VS Code', note: 'Primary IDE, debugging, extension configuration' },
        { name: 'Visual Studio', note: 'Application development, build configurations' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E5E5E5]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 03
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] uppercase">
              Capabilities & Tools
            </h2>
            <p className="text-sm sm:text-base text-[#525252] max-w-xl font-normal">
              A structured overview of design toolchains, frontend frameworks, and programming
              environments applied across production projects.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] uppercase">
            Zero Artificial Metrics · Practical Competency
          </div>
        </div>

        {/* Structured Editorial Skill Rows */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E5]"
            >
              {/* Category Header */}
              <div className="lg:col-span-3 font-mono">
                <span className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wider block">
                  {group.category}
                </span>
                <span className="text-[11px] text-[#737373]">
                  {group.items.length} TECHNOLOGIES
                </span>
              </div>

              {/* Items List */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <span className="font-bold text-[#0A0A0A] text-sm block">
                      {item.name}
                    </span>
                    <p className="text-[11px] text-[#525252] leading-snug font-sans">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
