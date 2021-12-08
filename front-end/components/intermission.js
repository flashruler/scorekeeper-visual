import MatchupComponent from './matchupComponent'
export default function Intermission(props) {
    return (
        <div className="bg-green-500">
            <div className="grid grid-cols-7 grid-rows-5 h-screen">
                {/* I'd like to be able to slide this in or out based on what state I have set */}
                {/* <div className="row-start-1 row-end-6 col-span-2 bg-first-black gap-y-0">
                    <div className="grid grid-rows-5 h-screen items-center">
                        <div className="row-start-1 row-span-2 w-auto h-full items-center p-12">
                            <img className="" src="freightfrenzy.png"></img>
                        </div>

                        <div className="row-start-3 row-span-1 p-8 bg-first-orange">
                            <h1 className="text-center text-3xl italic text-white">SAN DIEGO FIRST TECH CHALLENGE</h1>
                            <h1 className="text-center text-2xl italic text-white">COMPETITION NAME</h1>
                            <h1 className="text-center text-lg italic text-white">COMPETITION DATE</h1>
                        </div>
                        <div className="row-start-4 row-span-1 p-5 bg-first-blue">
                            <h1 className="text-center text-9xl text-white">04:20</h1>
                        </div>
                        
                    </div>
                </div> */}
                <div className="col-end-7 col-span-5 row-start-1 row-span-3 self-center">
                <h1 className="text-center text-10xl text-black">04:20</h1>
                </div>
                <div className="col-end-7 row-start-3 row-span-4 col-span-5">
                    <div className="flex flex-col p-12 space-y-2">
                        <h1 className="text-center text-5xl italic text-black">Up Next</h1>
                        <h1 className="text-black italic text-3xl">On The Field</h1>
                        <MatchupComponent />
                        <h1 className="text-black italic text-3xl pt-3">Queuing area</h1>
                        <MatchupComponent />
                    </div>
                </div>

                <div className="col-end-8 row-start-5 row-span-1 col-span-8 bg-blue-400 flex flex-row p-8 items-center justify-center self-end h-2/4">
                    <img src="raytheon.svg" className="h-24 w-auto"></img>
                    <img src="Qualcomm.svg" className="h-16 w-auto"></img>
                    <img src="ptc.svg" className="h-28 w-auto"></img></div>

            </div>
        </div>
    )
}