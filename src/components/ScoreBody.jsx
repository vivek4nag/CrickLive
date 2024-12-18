/* eslint-disable no-undef */
import "react";
import { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import Footer from "./Footer";
import Error from "./Error";
import SearchBar from "./SearchBar";

const ScoreBody = () => {
    const [scoreData, setScoreData] = useState([]);
    const [inputVal, setInputVal] = useState();
    const [searchVal, setSearchVal] = useState("");
    // const [filteredResultsArr, setFilteredResultsArr] = useState([])
    const apikey = import.meta.env.VITE_CRICKET_API_KEY;

    const getScoreData = async () => {
        try {
            const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${apikey}`);
            
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
        setSearchVal(inputVal.toLowerCase());
        setInputVal("")
        // getScoreData();
    };

    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-[70vh]">
                {/* upar wala search bar */}
                <SearchBar handleInput={handleInput} handleSearch={handleSearch} inputVal={inputVal} />

                <div className="flex flex-wrap justify-center p-3">
                    {/* yahn score card aayga */}
                    {
                        scoreData ? (
                            scoreData
                                .filter((item) => {
                                    if (searchVal === "") return true;
                                    if (item.series.toLowerCase().includes(searchVal)) return true;
                                    if (item.t1.toLowerCase().includes(searchVal)) return true;
                                    if (item.t2.toLowerCase().includes(searchVal)) return true;
                                    return false;
                                })
                                .map((item) => {
                                    if (item.status !== "Match not started") {
                                        return <ScoreCard key={item.id} {...item} />;
                                    }
                                })
                        ) : (
                            <Error />
                        )
                    }


                </div>
            </div>
            <Footer />
        </>
    );
};

export default ScoreBody;

// {
//     scoreData ? (
//         scoreData
//             .filter((item) => {
//                 if (searchVal === "") return true;
//                 if (item.series.toLowerCase().includes(searchVal)) return true;
//                 if (item.t1.toLowerCase().includes(searchVal)) return true;
//                 if (item.t2.toLowerCase().includes(searchVal)) return true;
//                 return false;
//             })
//             .map((item) => {
//                 if (item.status !== "Match not started") {
//                     return <ScoreCard key={item.id} {...item} />;
//                 }
//             })
//     ) : (
//         <Error />
//     );
// }
