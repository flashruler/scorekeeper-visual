export default function TopOverlay(props) {
    return (
        <div className="bg-green-500 w-screen">
            <div className="grid grid-cols-6 grid-rows-5 h-screen gap-x-3">
                <div className=" col-start-2 col-span-4 row-span-1 self-center">
                    {/* <div className="h-20 bg-dark-gray grid grid-cols-3 items-center bg-gradient-to-r from-blue-500 to-red-500 gap-x-10 p-4">
                        <h1 className="text-center text-white text-5xl italic">100</h1>
                        <h1 className="text-center text-white text-6xl">2:30</h1>
                        <h1 className="text-center text-white text-5xl italic">256</h1>
                    </div> */}
                    <div className="h-40 grid grid-cols-9 grid-rows-2">
                        <div className=" col-span-9 items-center bg-gradient-to-r from-blue-500 to-red-500 gap-x-10 grid grid-cols-9 h-20">
                            <h1 className="text-center text-white text-2xl">-</h1>
                            <h1 className="text-center text-white text-3xl">5135</h1>
                            <h1 className="text-center text-white text-3xl">4216</h1>
                            <h1 className="text-center text-white text-5xl italic">100</h1>
                            <h1 className="text-center text-white text-6xl">2:30</h1>
                            <h1 className="text-center text-white text-5xl italic">256</h1>
                            <h1 className="text-center text-white text-3xl">11128</h1>
                            <h1 className="text-center text-white text-3xl">11285</h1>
                            <h1 className="text-center text-white text-2xl">-</h1>
                        </div>
                        <div className="col-span-7 items-center bg-blue-500 col-start-2 h-16">
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}