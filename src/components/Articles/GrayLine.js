import { Furigana } from '..'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid'
import { useState } from 'react'

function GrayLine({ nihongo, furigana, freeEN, description, furiOn, tranOn }) {
  const [descOpen, setDescOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-sky-500 text-white px-4 py-2 sm:py-4 mx-5 mt-5 rounded-xl">
        <Furigana nihongo={nihongo} furigana={furigana} furiOn={furiOn} />
        {tranOn && <p className="text-sm sm:text-base">{freeEN}</p>}
        {description && (
          <>
            {descOpen ? (
              <div className="mt-2 flex flex-col items-center">
                <div className={`p-1 rounded-full bg-sky-600`}>
                  <ChevronDoubleUpIcon onClick={() => setDescOpen(!descOpen)} className="h-5 w-5 cursor-pointer" />
                </div>
                <p className={`mt-2 p-2 rounded-md bg-sky-600`}>{description}</p>
              </div>
            ) : (
              <div className="mt-2">
                <div className={`p-1 rounded-full bg-sky-600`}>
                  <ChevronDoubleDownIcon onClick={() => setDescOpen(!descOpen)} className="h-5 w-5 cursor-pointer" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default GrayLine
