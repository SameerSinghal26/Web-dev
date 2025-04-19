import { useState } from "react"


function App() {

  const [color, setcolor] = useState("lightblue");

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center gap-4 bottom-12 -inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl bg-white gap-3 px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("red")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "red"}}>red</button>
          <button onClick={() => setcolor("blue")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={() => setcolor("black")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "black"}}>black</button>
          <button onClick={() => setcolor("purple")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={() => setcolor("olive")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "olive"}}>olive</button>
          <button onClick={() => setcolor("grey")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "grey"}}>grey</button>
          <button onClick={() => setcolor("pink")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "pink"}}>pink</button>
          <button onClick={() => setcolor("lavender")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "lavender"}}>lavender</button>
          <button onClick={() => setcolor("orange")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "orange"}}>orange</button>
          <button onClick={() => setcolor("green")} className="outline-none px-4 py-2 shadow-lg rounded-full text-white " style={{backgroundColor: "green"}}>green</button>
        </div>
      </div>
    </div>
  )
}

export default App
