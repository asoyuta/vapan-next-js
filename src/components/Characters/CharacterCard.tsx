import Image from 'next/image'
import noIcon from '../../public/img/blank-profile.png'

type Props = {
  name: string
  icon?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

function CharacterCard({ name, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-sky-400 shadow-md rounded-md flex flex-col p-2 m-1 sm:p-4 sm:m-2 lg:p-4 items-center space-y-3 cursor-pointer"
    >
      <div className="relative h-[25vw] w-[25vw] sm:h-[18vw] sm:w-[18vw] lg:h-36 lg:w-36">
        <Image className="rounded-md bg-white" src={icon ? icon : noIcon} layout="fill" objectFit="cover" />
      </div>
      <p className=" text-sm sm:text-base lg:text-lg text-white w-[25vw] sm:w-[18vw] lg:w-36 truncate">{name}</p>
    </div>
  )
}

export default CharacterCard
