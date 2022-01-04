import { GrayLine, Line } from ".."

function Dialogue({ streamUrl, streamDate, clipUrl, characters, lines }) {
  const firstPersonName = 'Lize Helesta'
  var previousPersonName = 'DEFAULT'

  return (
    <div className="mb-5">
      {/* Display */}
      <div className="max-w-3xl">
        {/* Option / Character Details / Stream Details */}
        <div className=" bg-sky-900 h-12 top-0 z-50"></div>
        {/* Chat */}
        <div className="bg-sky-400 h-[calc(105vh-96px)] overflow-scroll scrollbar-hide px-2">
          <div className="flex items-center mt-5">
            <p className="text-base inline-block mx-auto text-center bg-blue-500 text-white p-2 rounded-md">
              {streamDate}
            </p>
          </div>

          {lines.map(({ name, nihongo, furigana, freeEN, details }, i) => {
            const character = characters.find((character) => character.name === name)

            const person = name === firstPersonName ? 'first' : name ? 'second' : 'third'

            if (person === 'third') {
              previousPersonName = 'DEFAULT'
              return <GrayLine key={i} nihongo={nihongo} furigana={furigana} freeEN={freeEN} details={details} />
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
                  furigana={furigana}
                  details={details}
                  showIcon={showIcon}
                />
              )
            }
          })}

          <div className="flex items-center my-5">
            <p className=" text-sm inline-block mx-auto text-center bg-blue-400 text-white p-2 rounded-md">
              Conversation ends here...
            </p>
          </div>
        </div>
        {/* Decolation */}
        <div className="bg-slate-600 h-12 top-0 z-50"></div>
      </div>
    </div>
  )
}

export default Dialogue
