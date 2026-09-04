import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Wrench,
  Search,
  Layout,
  Code,
  Terminal,
  Database,
  GitBranch,
  Cpu,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'uiux':
        return <Layout className="w-3.5 h-3.5" />;
      case 'frontend':
        return <Code className="w-3.5 h-3.5" />;
      case 'programming':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'data-backend':
        return <Database className="w-3.5 h-3.5" />;
      case 'tools':
        return <GitBranch className="w-3.5 h-3.5" />;
      case 'emerging':
        return <Cpu className="w-3.5 h-3.5" />;
      default:
        return <Wrench className="w-3.5 h-3.5" />;
    }
  };

  const filteredCategories = useMemo(() => {
    if (selectedCategory === 'all') {
      if (!searchQuery.trim()) return SKILL_CATEGORIES;
      return SKILL_CATEGORIES.map((cat) => ({
        ...cat,
        skills: cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      })).filter((cat) => cat.skills.length > 0);
    }

    const cat = SKILL_CATEGORIES.find((c) => c.id === selectedCategory);
    if (!cat) return [];

    if (!searchQuery.trim()) return [cat];

    return [
      {
        ...cat,
        skills: cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      },
    ].filter((c) => c.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Wrench className="w-3 h-3 text-indigo-500" />
              <span>CAPABILITIES & TOOLCHAIN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Tools and technologies I work with.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              An ecosystem of design, frontend, and engineering tools applied across real interfaces.
              Zero artificial percentage bars.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, e.g. Figma, React..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs font-semibold'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs font-semibold'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-neutral-500">{category.description}</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-neutral-400">
                  {category.skills.length} skills listed
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 group flex flex-col justify-between ${
                      skill.highlight
                        ? 'bg-neutral-50/90 dark:bg-neutral-900/90 border-indigo-200/70 dark:border-indigo-900/50 hover:border-indigo-500/80'
                        : 'bg-white dark:bg-neutral-900/50 border-neutral-200/70 dark:border-neutral-800/70 hover:border-neutral-400 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          Core
                        </span>
                      )}
                    </div>
                    {skill.note && (
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-sans">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 text-neutral-500 text-xs font-mono">
              No skills found matching &ldquo;{searchQuery}&rdquo;. Try another term.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
