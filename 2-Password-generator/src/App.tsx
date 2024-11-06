import { useEffect, useState } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

export default function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState("");

  const passwordObjects = {
    capitalLetter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    smallLetter: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    symbol: ["!", "@", "#", "$", "%", "^", "&", "*"]
  }

  const generatePassword = () =>{
    let charList: any = []
    if(includeLowercase){
      charList = charList.concat(passwordObjects.smallLetter)
    }
    if(includeUppercase){
      charList = charList.concat(passwordObjects.capitalLetter)
    }
    if(includeNumber){
      charList = charList.concat(passwordObjects.number)
    }
    if(includeSymbols){
      charList = charList.concat(passwordObjects.symbol)
    }

    if(charList.length === 0){
      charList = [...passwordObjects.smallLetter, ...passwordObjects.capitalLetter, ...passwordObjects.number, ...passwordObjects.symbol]
    }
    
    let passwordGen = ""
    for(let i = 0; i < passwordLength; i++){
      passwordGen += charList[Math.floor(Math.random() * charList.length)]
    }
    setPassword(passwordGen)
  }
  useEffect(() =>{
    generatePassword()
  }, [])
  return (
    <main className="min-h-screen w-full flex item-center justify-center bg-gray-600">
      <div className="p-4 rounded-lg bg-gray-200 h-fit">
        {/* Title */}
        <h1 className="font-semibold text-xl">Password Generator</h1>
        {/* Input Box */}
        <div className="flex items-center gap-2 my-3">
          <div className="relative px-3 py-4 rounded-md border border-gray-600 w-[300px]">
            <p>{password}</p>
            <SlArrowRightCircle className="absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5" onClick={() => generatePassword()}/>
          </div>
          <button className="px-3 py-[6px] bg-gray-800 text-white rounded-md" onClick={() => navigator.clipboard.writeText(password)}>
            Copy
          </button>
        </div>
        {/* Password length */}
        <div className="flex justify-between items-center">
          <div>
            <p>Password Length</p>
            <input
              type="range"
              max={"20"}
              min={"4"}
              className="w-[300px]"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            />
          </div>
          <p className="font-semibold text-lg">{passwordLength}</p>
        </div>

        {/* Options */}
        <div className="my-4 flex flex-col gap-4">
          {/* Upper Letter */}
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">Include Uppercase Letters</p>
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check"
                  onChange={() => {setIncludeUppercase(!includeUppercase)}}
                  checked={includeUppercase}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          {/* Lower Letter */}
          <div className="flex items-center justify-between ">
            <p className="font-semibold text-lg">Include Lower Letters</p>
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check"
                  onChange={() => {setIncludeLowercase(!includeLowercase)}}
                  checked={includeLowercase}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          {/* Numbers */}
          <div className="flex items-center justify-between ">
            <p className="font-semibold text-lg">Include Numbers</p>
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check"
                  onChange={() => {setIncludeNumber(!includeNumber)}}
                  checked={includeNumber}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          {/* Symbols */}
          <div className="flex items-center justify-between ">
            <p className="font-semibold text-lg">Include Symbols</p>
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check"
                  onChange={() => {setIncludeSymbols(!includeSymbols)}}
                  checked={includeSymbols}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
