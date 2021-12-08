export default function MatchupComponent(props) {
    return (
        <div className="grid grid-cols-5 grid-rows-2 h-24 w-full space-y-1">
            <div className="col-span-2 bg-blue-500 p-3 rounded-md"><h1 className="text-left text-3xl text-white">1 - 4216 Rise of Hephaestus</h1></div>
            <div className="p-4 col-start-3 rounded-md"><h1 className="text-center text-4xl italic ">VS</h1></div>
            <div className="col-start-4 col-span-2 bg-red-500 p-3 rounded-md"><h1 className="text-left text-3xl text-white">2 - 11115 Gluten Free</h1></div>
            <div className="col-span-2 bg-blue-500 p-3 rounded-md"><h1 className="text-left text-3xl text-white">3 - 11212 The Clueless</h1></div>
            <div className="col-start-4 col-span-2 bg-red-500 p-3 rounded-md"><h1 className="text-left text-3xl text-white truncate">4 - 5135 Team Uncopyrightable</h1></div>
        </div>
    )
}
