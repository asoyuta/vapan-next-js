import { GrayLine, Line, Toggle } from '..'
import { MenuIcon, ChevronLeftIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Image from 'next/image'

function Dialogue({ streamUrl, streamDate, clipUrl, characters, lines }) {
  const [firstPersonId, setFirstPersonId] = useState(0)
  const [settingOpen, setSettingOpen] = useState(false)
  const [furiOn, setFuriOn] = useState(true)
  const [tranOn, setTranOn] = useState(true)

  var previousPersonName = 'DEFAULT'

  return (
    <div className="lg:bg-slate-900 lg:px-14 lg:py-10 lg:mx-10 lg:rounded-3xl mb-5">
      {/* Display */}
      <div className="">
        {/* Option / Character Details / Stream Details */}
        <div className="relative text-white flex justify-between items-center bg-sky-900 py-2 px-2 sm:py-3 sm:px-4 top-0 lg:rounded-t-xl">
          {/* Left */}
          <div>
            <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          {/* Center */}
          <div>
            <UsersIcon className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          {/* Right */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <MenuIcon onClick={() => setSettingOpen(!settingOpen)} className="h-6 w-6 sm:h-8 sm:w-8" />
            <div
              className={`absolute top-12 sm:top-16 right-2 text-black flex flex-col items-end space-y-1 p-3 rounded-md opacity-95 bg-white z-50 ${
                !settingOpen && 'hidden'
              }`}
            >
              <div className="flex space-x-3 items-center flex-shrink-0">
                <p>You →</p>
                <div
                  className="relative h-12 w-12 rounded-full bg-gray-300"
                  onClick={() => setFirstPersonId((prevState) => (prevState + 1) % characters.length)}
                >
                  <Image
                    className="rounded-full"
                    src={characters[firstPersonId].headshotUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="flex space-x-3">
                <p>Translation</p>
                <Toggle toggled={tranOn} onClick={() => setTranOn(!tranOn)} />
              </div>
              <div className="flex space-x-3">
                <p>Furigana</p>
                <Toggle toggled={furiOn} onClick={() => setFuriOn(!furiOn)} />
              </div>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="">
          <div className="bg-sky-400 h-[calc(103vh-96px)] sm:h-[calc(103vh-128px)] lg:h-[70vh] overflow-scroll scrollbar-hide px-3 sm:px-6">
            <div className="flex items-center mt-5">
              <p className="text-base sm:text-lg inline-block mx-auto text-center bg-blue-500 text-white p-2 sm:px-4 rounded-md">
                {streamDate}
              </p>
            </div>

            {lines.map(({ name, nihongo, furigana, freeEN, literalEN, description }, i) => {
              const character = characters.find((character) => character.name === name)

              const person = name === characters[firstPersonId].name ? 'first' : name ? 'second' : 'third'

              if (person === 'third') {
                previousPersonName = 'DEFAULT'
                return (
                  <GrayLine
                    key={i}
                    nihongo={nihongo}
                    furigana={furigana}
                    freeEN={freeEN}
                    literalEN={literalEN}
                    description={description}
                    furiOn={furiOn}
                    tranOn={tranOn}
                  />
                )
              } else {
                const headshotUrl = character.headshotUrl
                const showIcon = !(previousPersonName === name)

                previousPersonName = name

                return (
                  <Line
                    key={i}
                    name={name}
                    person={person}
                    iconUrl={headshotUrl}
                    nihongo={nihongo}
                    freeEN={freeEN}
                    literalEN={literalEN}
                    description={description}
                    furigana={furigana}
                    showIcon={showIcon}
                    furiOn={furiOn}
                    tranOn={tranOn}
                  />
                )
              }
            })}

            <div className="flex items-center my-5">
              <p className="text-sm sm:text-base inline-block mx-auto text-center bg-blue-400 text-white p-2 sm:px-4 rounded-md">
                Conversation ends here...
              </p>
            </div>
          </div>
        </div>
        {/* Decolation */}
        <div className="bg-slate-600 h-12 sm:h-16 top-0 lg:rounded-b-xl"></div>
      </div>
    </div>
  )
}

export default Dialogue
