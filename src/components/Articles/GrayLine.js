import { Furigana } from '..'

function GrayLine({ nihongo, furigana, freeEN, details }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-sky-500 text-white px-4 py-2 mx-5 mt-5 rounded-xl">
        <Furigana nihongo={nihongo} furigana={furigana} furiOn={true} />
        <p className=" text-sm">{freeEN}</p>
      </div>
    </div>
  )
}

export default GrayLine
