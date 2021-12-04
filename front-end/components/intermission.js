import MatchupComponent from './matchupComponent'
export default function Intermission(props) {
    return (
        <div className="bg-green-400">
                <div className="grid grid-cols-7 grid-rows-5 h-screen">
                    {/* I'd like to be able to slide this in or out based on what state I have set */}
                    <div className="row-start-1 row-end-6 col-span-2">
                        <div className="grid grid-rows-5 h-screen">
                            <div className="row-start-2 row-span-1 p-8">
                                <h1 className="text-center text-xl italic text-white">SAN DIEGO FIRST TECH CHALLENGE</h1>
                                <h1 className="text-center text-xl italic text-white">COMPETITION NAME</h1>
                                <h1 className="text-center text-lg italic text-white">COMPETITION DATE</h1>
                            </div>
                            <div className="row-start-3 bg-green-300 p-8">
                                <h1 className="text-center text-8xl italic text-white animate-pulse">04:20</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-end-8 row-start-1 row-span-4 col-span-5 bg-blue-300">
                        
                        <div className="flex flex-col p-16 space-y-2">
                            <h1 className="text-center text-2xl italic text-white">Schedule of Events</h1>
                            <h1 className="text-white italic text-lg">On The Field</h1>
                            <MatchupComponent/>
                            <h1 className="text-white italic text-lg">Queuing area</h1>
                            <MatchupComponent/>
                            </div>
                        </div>
                    <div className="col-end-8 row-start-5 row-span-1 col-span-5 bg-blue-400 flex flex-row p-8 items-center ">
                    <img src="raytheon.svg" className="h-24 w-auto"></img>
                    <img src="Qualcomm.svg" className="h-16 w-auto"></img>
                    <img src="ptc.svg" className="h-28 w-auto"></img></div>
                    
                </div>
        </div>
    )
}