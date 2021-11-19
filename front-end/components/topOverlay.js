export default function TopOverlay(props) {
    return (
        <div className="w-max">

            <div className="flex flex-col justify-center my-3">
                <div className="flex flex-row divide-x-2">
                    <div className="bg-orange-red rounded-tl-lg rounded-bl-lg">
                        <div className="grid grid-cols-3 place-content-center py-1 gap-5">
                            <h1 className="text-2xl text-center text-white">5135</h1>
                            <h1 className="text-2xl text-center text-white">11285</h1>
                            <h1 className="text-2xl text-center text-white">4216</h1>
                        </div>
                    </div>
                    <div className="col-span-3 bg-gradient-to-r from-orange-red via-neutral-gray to-sky-blue ">
                        <div className="grid grid-cols-3 place-content-center py-1 gap-0">
                            <h1 className="text-5xl text-center text-white">01</h1>
                            <h1 className="text-3xl text-center mx-1">2:30</h1>
                            <h1 className="text-5xl text-center text-white">01</h1>
                        </div>
                    </div>
                    <div className="bg-sky-blue rounded-br-lg rounded-tr-lg">
                        <div className="grid grid-cols-3 place-content-center py-1 gap-5">
                            <h1 className="text-2xl text-center text-white">5135</h1>
                            <h1 className="text-2xl text-center text-white">11285</h1>
                            <h1 className="text-2xl text-center text-white">4216</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="bg-gray-700 my-1 grid grid-row-2 rounded-full w-2/5">
                        <h1 className="text-center text-md text-white ">San Diego Regional</h1>
                        <h1 className="text-center text-md text-white italic ">Match 1</h1>
                    </div>
                </div>
            </div>
            

            {/* blue alliance */}
            {/* <div className="grid grid-row-3">
            <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
            <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
            <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
        </div> */}
        </div>
    )
}