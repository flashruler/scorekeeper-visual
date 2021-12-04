import TopOverlay from '../components/topOverlay.js'
import Intermission from '../components/intermission.js'
export default function overlay(props) {
    return (
        <div className=" w-screen h-screen">
            <Intermission/>
            <div className="flex flex-row justify-center">
                {/* <TopOverlay/> */}
                
            </div>
            

        </div>
    )
}