export default function overlay(props) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center">
                <div className="my-5 grid grid-cols-3 gap-4 w-2/5">
                    {/* red alliance */}
                    <div className="grid grid-row-3">
                        <h1 className="text-xl text-center rounded-lg my-1 bg-orange-red "> 4216 - Rise of Hephaestus</h1>
                        <h1 className="text-xl text-center rounded-lg my-1 bg-orange-red ">11128 - Team Inspiration</h1>
                        <h1 className="text-xl text-center rounded-lg my-1 bg-orange-red ">11212 - The Clueless</h1>
                    </div>
                    {/* scoreboard */}
                    <div className="grid grid-cols-3 grid-row-3">
                        <div className="col-span-3 bg-gradient-to-r from-orange-red via-neutral-gray to-sky-blue rounded-md">
                            <div className="grid grid-cols-3 place-content-center">
                                <h1 className="text-4xl text-center">01</h1>
                                <h1 className="text-3xl text-center">2:30</h1>
                                <h1 className="text-4xl text-center">01</h1>
                            </div>
                        </div>
                        {/* <div className="col-span-3 bg-gradient-to-r from-orange-red via-neutral-gray to-sky-blue rounded-md my-1"></div> */}
                        <div></div>
                        <div className="row-span-2 bg-neutral-gray rounded-md my-1"></div>
                        <div></div>
                    </div>
                    {/* blue alliance */}
                    <div className="grid grid-row-3">
                        <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
                        <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
                        <h1 className="text-xl text-center rounded-lg my-1 bg-sky-blue">11285</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}