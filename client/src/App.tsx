
import { CalendarDemo } from "./trial/calender"
import { CheckboxDemo } from "./trial/checkbox"
  

const App = () => {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">

    <h1 className="bg-white text-black drop-shadow-2xl	 ">hey i am nirvik</h1>
<CalendarDemo />
<CheckboxDemo/>

    </div>
  )
}

export default App