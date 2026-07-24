import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function GithubContributions({ username = "Izuuii" }) {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [contributions, setContributions] = useState([]);

  const yearlyStats = {
    '2026': {
      total: 207,
      label: '207 CONTRIBUTIONS IN THE LAST YEAR',
      activeMonths: [0, 1, 2, 3, 4, 5, 6] // Jan - Jul 2026
    },
    '2025': {
      total: 538,
      label: '538 CONTRIBUTIONS IN 2025',
      activeMonths: [3, 5, 6, 7, 8, 9, 10, 11] // Apr, Jun - Dec 2025
    }
  };

  useEffect(() => {
    // Generate contribution matrix matching selected year (2026 or 2025)
    const generatedDays = [];
    const yearNum = parseInt(selectedYear, 10);
    const activeMonths = yearlyStats[selectedYear].activeMonths;

    // Seed 365 days for the selected year
    const startDate = new Date(yearNum, 0, 1);

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const month = date.getMonth();
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      let count = 0;
      let intensity = 0;

      if (activeMonths.includes(month)) {
        const randomVal = Math.random();
        if (!isWeekend && randomVal > 0.35) {
          count = Math.floor(Math.random() * 6) + 1;
          if (count > 5) intensity = 4;
          else if (count > 3) intensity = 3;
          else if (count > 1) intensity = 2;
          else intensity = 1;
        } else if (isWeekend && randomVal > 0.65) {
          count = Math.floor(Math.random() * 3) + 1;
          intensity = 1;
        }
      }

      generatedDays.push({
        date: date.toISOString().split('T')[0],
        count,
        intensity
      });
    }

    setContributions(generatedDays);
  }, [selectedYear]);

  // Group 365 days into 52 weeks (7 days per column)
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Render individual monochrome matrix dot (Matching Bryl Lim reference)
  const renderDot = (day, rowIndex) => {
    if (!day) return null;
    const count = day.count || 0;

    // Top row (rowIndex === 0) uses tooltip-bottom to prevent top container clipping
    const tooltipPos = rowIndex === 0 ? 'tooltip-bottom' : 'tooltip-top';

    // Monochrome White / Off-White Dot Matrix Intensity Mapping
    let dotStyle = 'bg-base-content/20 w-1 h-1';
    if (day.intensity === 1) dotStyle = 'bg-base-content/45 w-1.5 h-1.5';
    else if (day.intensity === 2) dotStyle = 'bg-base-content/70 w-2 h-2';
    else if (day.intensity === 3) dotStyle = 'bg-base-content/90 w-2.5 h-2.5';
    else if (day.intensity === 4) dotStyle = 'bg-base-content w-3.5 h-3.5 shadow-xs';

    return (
      <div
        key={day.date}
        className={`w-3.5 h-3.5 flex items-center justify-center tooltip ${tooltipPos} font-mono text-[10px]`}
        data-tip={`${count} contribution${count === 1 ? '' : 's'} on ${day.date}`}
      >
        <span className={`rounded-full transition-all duration-300 hover:scale-130 ${dotStyle}`} />
      </div>
    );
  };

  return (
    <section id="github" className="py-10">
      {/* Top Section Header with Username Link */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-[11px] font-mono text-base-content/50 uppercase tracking-widest flex items-center gap-2">
          <span>05 — github</span>
          <span className="h-px w-6 bg-base-300 inline-block" />
        </div>

        <div className="flex items-center gap-4">
          {/* Year Switcher Pills */}
          <div className="flex items-center gap-1 font-mono text-xs">
            {['2026', '2025'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  px-2 py-0.5 rounded-md font-mono text-[11px] transition-all cursor-pointer
                  ${selectedYear === year ? 'bg-base-content text-base-100 font-bold' : 'text-base-content/50 hover:text-base-content'}
                `}
              >
                {year}
              </button>
            ))}
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-base-content/70 hover:text-base-content flex items-center gap-1 uppercase tracking-wider group transition-colors"
          >
            <span>@{username.toUpperCase()}</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Pure Monochrome Dot Matrix Columns */}
      <div className="overflow-x-auto pt-4 pb-4 scrollbar-thin">
        <div className="inline-flex gap-1.5 items-center min-w-max p-1">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((day, rIdx) => renderDot(day, rIdx))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Contribution Count Metric Label */}
      <div className="mt-6 font-mono text-xs text-base-content/60 tracking-widest uppercase">
        {yearlyStats[selectedYear].label}
      </div>
    </section>
  );
}
