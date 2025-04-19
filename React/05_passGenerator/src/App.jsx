import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(true);
  const [charallowed, setcharallowed] = useState(true);
  const [password, setpassword] = useState("");
  const [uppercase, setuppercase] = useState(true);
  const [lowercase, setlowercase] = useState(true);

  // useRef
  const passwordRef = useRef(null);
  const copypastetoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (uppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*-_+={}[]~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberallowed, charallowed, uppercase, lowercase, setpassword]);

  useEffect(() => {
    passwordgenerator();
  }, [
    length,
    numberallowed,
    charallowed,
    uppercase,
    lowercase,
    passwordgenerator,
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copypastetoclipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-x-2">
            <label className="text-xl">Length: </label>
            <input
              type="number"
              min={1}
              max={100}
              value={length}
              className="cursor-pointer hover:bg-slate-500 text-center"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={uppercase}
              id="uppercaseInput"
              onChange={() => {
                setuppercase((prev) => !prev);
              }}
            />
            <label htmlFor="uppercaseInput">Uppercase</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={lowercase}
              id="lowercaseInput"
              onChange={() => {
                setlowercase((prev) => !prev);
              }}
            />
            <label htmlFor="lowercaseInput">Lowercase</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
