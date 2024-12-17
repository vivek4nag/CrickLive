/* eslint-disable no-undef */
import "react";
import { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";

const ScoreBody = () => {
  const [scoreData, setScoreData] = useState([]);
  const APIKEY = import.meta.env.VITE_CRICKET_API_KEY;

  const getScoreData = async () => {
    try {
      const response = await fetch(
        `https://api.cricapi.com/v1/cricScore?apikey=${APIKEY}`
      );
      const data = await response.json();
      console.log(data.data);
      setScoreData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getScoreData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* upar wala search bar */}
      <div className="flex justify-center items-center gap-2 pt-10">
        <input
          type="text"
          placeholder="Search for a team, match or series"
          className="w-3/5 md:w-2/5 p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
        />
        <button className="px-6 py-2 text-xs md:px-7 md:py-3 md:text-lg md:font-semibold bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 transition duration-500">
          {" "}
          Search Now
        </button>
      </div>

      <div className="flex flex-wrap justify-center p-3">
        {/* yahn score card aayga */}

        {scoreData ? (
          scoreData.map((item) => {
            if (item.status !== "Match not started") {
              return (
                <ScoreCard
                  key={item.id}
                  matchType={item.matchType}
                  status={item.status}
                  series={item.series}
                  t1={item.t1}
                  t1img={item.t1img}
                  t2={item.t2}
                  t2img={item.t2img}
                  t1s={item.t1s}
                  t2s={item.t2s}
                />
              );
            }
          })
        ) : (
          <p>Data not found</p>
        )}
      </div>
    </div>
  );
};

export default ScoreBody;
