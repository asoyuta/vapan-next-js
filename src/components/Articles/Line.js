import Image from 'next/image'
import { Furigana } from '..'

function Line({ name, person, iconUrl, nihongo, furigana, freeEN, details, showIcon }) {
  const isFirst = person === 'first'

  return (
    <div className={`flex ${isFirst && 'flex-row-reverse'} ${showIcon ? 'mt-5' : 'mt-2'}`}>
      {/* Image */}
      <div className={`relative h-12 w-12 rounded-full flex-shrink-0 ${showIcon && 'bg-white'}`}>
        {showIcon && <Image className="rounded-full" src={iconUrl} layout="fill" objectFit="cover" />}
      </div>

      <div className={`flex flex-col ${isFirst ? 'items-end mr-2' : 'ml-2'}`}>
        {/* Name */}
        {showIcon && <p className={`mt-1 mb-0.5 text-sm ${isFirst ? 'text-lime-300 mr-1' : 'text-white ml-1'}`}>{name}</p>}
        {/* Speech Bubble */}
        <div
          className={`flex flex-col items-center px-4 py-2 rounded-xl ${isFirst ? 'bg-lime-300' : 'bg-white'} ${
            showIcon && (isFirst ? 'rounded-tr-none' : 'rounded-tl-none')
          }`}
        >
          <Furigana nihongo={nihongo} furigana={furigana} furiOn={true} />
          <p className=" text-sm">{freeEN}</p>
        </div>
      </div>
    </div>
  )
}

export default Line
