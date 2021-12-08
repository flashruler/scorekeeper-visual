import TopOverlay from '../components/topOverlay.js'
import Intermission from '../components/intermission.js'
import Results from '../components/results.js'
export default function overlay(props) {
    return (
        <div className=" w-screen h-screen">
            {/* <Intermission/> */}
            <Results/>
            <div className="flex flex-row justify-center">
                {/* <TopOverlay/> */}
                
            </div>
            

        </div>
    )
}