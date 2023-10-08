import React, { useState, useMemo } from 'react';

// Dummy data: Number of visitors for each day of the year
const dailyVisitors = Array.from({ length: 365 }, () => Math.floor(Math.random() * 1000) + 100);

function computeWeeklyAverages(dailyData) {
  const weeklyAverages = [];
  let sum = 0;

  for (let i = 0; i < dailyData.length; i++) {
    sum += dailyData[i];
    if (i % 7 === 6) {
      weeklyAverages.push(sum / 7);
      sum = 0;
    }
  }

  return weeklyAverages;
}

function Dashboard() {
  const [showWeeklyAverage, setShowWeeklyAverage] = useState(false);

  const weeklyAverages = useMemo(() => {
    return computeWeeklyAverages(dailyVisitors);
  }, []);
  const buildContent = ()=>{
    console.log("building content");
    return(
      <ul>
      {(showWeeklyAverage ? weeklyAverages : dailyVisitors).map((value, index) => (
        <li key={index}>
          {showWeeklyAverage ? `Week ${index + 1}` : `Day ${index + 1}`}: {value}
        </li>
      ))}
    </ul>
    )
  }

  return (
    <div>
      <h1>Website Visitors Analytics</h1>
      <button onClick={() => setShowWeeklyAverage(!showWeeklyAverage)}>
        {showWeeklyAverage ? "Show Daily Data" : "Show Weekly Averages"}
      </button>
    {buildContent()}
     
    </div>
  );
}

export default Dashboard;
