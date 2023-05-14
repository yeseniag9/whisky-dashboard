import yamazaki from "../assets/images/yamazaki.jpg"
import monkeyShoulder from "../assets/images/monkey-shoulder.jpg"

function Whisky() {
  return (
    <div>
        <div className="flex justify-center pt-14 m-9 text-6xl font-sans">My Whisky Collection</div>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <img className="max-w-md p-14 pt-14" src={yamazaki} alt="Yamazaki 18" />
                <div className="pl-10">
                  <h1 className="pl-14 ml-14 text-2xl">Yamazaki 18</h1>
                </div>
            </div>

            <div className="flex flex-col pl-14">
                <img className="max-w-lg p-14 pt-12 ml-14" src={monkeyShoulder} alt="Monkey Shoulder" />
                <div className="pl-14 ml-14">
                  <h1 className="pl-14 ml-14 text-2xl">Monkey Shoulder</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whisky