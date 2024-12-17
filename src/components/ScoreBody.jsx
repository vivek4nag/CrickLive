/* eslint-disable no-undef */
import "react";
import { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import Footer from "./Footer";
import Error from "./Error";

const ScoreBody = () => {
    const [scoreData, setScoreData] = useState([]);
    const [inputVal, setInputVal] = useState();
    const [searchVal, setSearchVal] = useState("")
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

    const handleInput = (e) => {
        console.log(e.target.value);

        setInputVal(e.target.value);
    };

    const handleSearch = () => {
        setSearchVal(inputVal)
        getScoreData()
    }

    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
                {/* upar wala search bar */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 pt-10">
                    <input
                        onChange={handleInput}
                        type="text"
                        placeholder="Search for a team, match or series"
                        className="w-3/5 md:w-2/5 p-3 text-sm md:text-lg rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg md:font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-pink-700 transition duration-300">
                        {" "}
                        Search Now🏏
                    </button>
                </div>

                <div className="flex flex-wrap justify-center p-3">
                    {/* yahn score card aayga */}

                    {scoreData ? (
                        scoreData.map((item) => {
                            if (item.status !== "Match not started") {
                                if (searchVal == "" || item.series.includes(searchVal) || item.t1.includes(searchVal) || item.t2.includes(searchVal))
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
                        <Error/>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ScoreBody;
