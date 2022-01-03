import Image from 'next/image'
import { Furigana } from '..'

function Line({ name, iconUrl, color, nihongo, furigana, freeEN, details }) {
  return (
    <div className="flex mb-4">
      <div className={`relative border-2 border-[${color}] bg-white h-12 w-12 rounded-full flex-shrink-0`}>
        <Image className="rounded-full" src={iconUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center ml-2 bg-white px-2 py-2 rounded-xl rounded-tl-none mt-5">
        <Furigana nihongo={nihongo} furigana={furigana} furiOn={true} />
        <p className="text-gray-600 text-sm">{freeEN}</p>
      </div>
    </div>
  )
}

export default Line
