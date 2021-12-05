import MatchupComponent from './matchupComponent'
export default function Results(props) {
    return (
        <div className="bg-green-500">
            <div className="grid grid-cols-6 grid-rows-5 h-screen">
                <div className="col-span-8 row-span-1 self-center">
                    <div className="h-20 bg-dark-gray grid grid-cols-9 items-center bg-gradient-to-r from-blue-500 to-red-500">
                        <h1 className="text-center text-white text-2xl">test</h1>
                        <h1 className="text-center text-white text-2xl">5135</h1>
                        <h1 className="text-center text-white text-2xl">4216</h1>
                        <h1 className="text-center text-white text-5xl italic">100</h1>
                        <h1 className="text-center text-white text-2xl">Red Alliance Wins</h1>
                        <h1 className="text-center text-white text-5xl italic">256</h1>
                        <h1 className="text-center text-white text-2xl">11128</h1>
                        <h1 className="text-center text-white text-2xl">11285</h1>
                        <h1 className="text-center text-white text-2xl">test</h1>
                    </div>
                </div>
                <div className="col-start-1 col-span-3 row-start-2 row-span-4 p-10">
                    <div className="grid grid-cols-3 grid-rows-4 h-5/6 items-center">
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white italic text-2xl">AUTONOMOUS</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white italic text-2xl">DRIVER CONTROL</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white italic text-2xl">ENDGAME</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                        <h1 className="text-center text-white italic text-2xl">PENALTIES</h1>
                        <h1 className="text-center text-white text-5xl">12</h1>
                    </div>
                </div>
                
                <div className="col-start-4 col-span-3 row-start-2 row-span-3 p-3 items-center">
                    <h1>test</h1>
                    <div className="bg-black h-full">Video Feed URL</div>
                    
                </div>
                <div className="col-start-4 col-span-3 p-5 text-white text-2xl italic">Upcoming Match<MatchupComponent/></div>
            </div>
        </div>
    )
}