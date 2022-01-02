import Image from 'next/image'

function Line({ displayName, icon, nihongo, furigana, freeEN, details }) {
  return (
    <div className="flex mb-4">
      <div className="relative bg-white h-10 w-10 rounded-full flex-shrink-0">
        <Image className="rounded-full" src={icon} layout="fill" objectFit='cover' />
      </div>
      <div className="flex flex-col items-center ml-2 bg-white px-2 py-2 rounded-xl rounded-tl-none mt-5">
        <p className=' text-sm'>{nihongo}</p>
        <p className=' text-xs'>{freeEN}</p>
      </div>
    </div>
  )
}

export default Line
