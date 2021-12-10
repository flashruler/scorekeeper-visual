import axios from "axios";
import { useEffect, useState } from "react";

export default function control(props) {
  const [resultsMatchNumber, setResultsMatchNumber] = useState("1");
  const [overlay, setOverlay] = useState("intermission");

  const handleChangeResultsMatchNumber = (event) => {
    setResultsMatchNumber(event);
  };

  const handleChangeOverlay = (event) => {
    setOverlay(event);
  };

  useEffect(() => {
    axios.post('http://localhost:4000/change-overlay', {
      state: overlay,
    })

  }, [overlay]);

  useEffect(() => {
    axios.post('http://localhost:4000/change-results-match-number', {
      resultsMatchNumber: resultsMatchNumber,
    })

  }, [resultsMatchNumber]);

  return (
    <>
      <div className="relative inline-block w-full text-gray-700">
        <select value={resultsMatchNumber} onChange={(e) => handleChangeResultsMatchNumber(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div className="relative inline-block w-full text-gray-700">
        <select value={overlay} onChange={(e) => handleChangeOverlay(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
          <option value="intermission">Intermission</option>
          <option value="match-results">Match Results</option>
          <option value="top-overlay">Top Overlay</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
