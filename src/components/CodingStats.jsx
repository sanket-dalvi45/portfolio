import React, { useEffect, useState } from "react";
import "./CodingStats.css";

const stats = [
  {
    platform: "LeetCode",
    logo: "https://tse4.mm.bing.net/th/id/OIP.Krkb-t8Wx1wlzRv9AfXj6QAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    solved: 75,
    link: "https://leetcode.com/yourusername/"
  },
  {
    platform: "CodeStudio",
    logo: "https://ik.imagekit.io/c1suzwh62ew/images/store/coding-ninja-coupon-promo-code.png", // You can replace with real link
    solved: 30,
    link: "https://ik.imagekit.io/c1suzwh62ew/images/store/coding-ninja-coupon-promo-code.png"
  }
];

function CodingStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.solved / 100);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.solved) {
            newCounts[index] += increment;
          } else {
            newCounts[index] = stat.solved;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="coding-stats-section">
      <h2 className="coding-stats-title">My Coding Stats</h2>
      <div className="coding-stats-grid">
        {stats.map((stat, idx) => (
          <a
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-stat-card-circle"
            key={stat.platform}
          >
            <div className="coding-card-logo">
              <img src={stat.logo} alt={stat.platform} />
            </div>
            <h3>{stat.platform}</h3>
            <p className="coding-count">{counts[idx]} Solved</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CodingStats;
