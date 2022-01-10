import Image from 'next/image'
import noIcon from '../../public/img/blank-profile.png'

function CharacterCard({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-sky-400 shadow-md rounded-md flex flex-col p-3 m-3 items-center space-y-2 cursor-pointer"
    >
      <div className="relative h-36 w-36">
        <Image className="rounded-md bg-white" src={icon ? icon : noIcon} layout="fill" objectFit="cover" />
      </div>
      <p className="text-lg text-white py-1">{name}</p>
    </div>
  )
}

export default CharacterCard
