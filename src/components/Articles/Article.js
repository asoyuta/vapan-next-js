import { Line, Title } from '..'

function Article({ title, createDate, updateDate, firstText, dialogue, lastText }) {
  const { streamUrl, clipUrl, characters, lines } = dialogue
  const firstPersonName = 'Lize Helesta'

  return (
    <div className="">
      {/* Title */}
      <Title title={title} createDate={createDate} updateDate={updateDate} />

      <div className="mx-3 mb-5">
        <p className="text-gray-700 text-base">{firstText}</p>
      </div>

      {/* Device */}
      <div className="">
        {/* Display */}
        <div className=" max-w-3xl">
          {/* Option / Character Details / Stream Details */}
          <div className=" bg-sky-900 h-12 top-0 z-50"></div>
          {/* Chat */}
          <div className="bg-gradient-to-b from-sky-400 to-sky-200 h-[calc(105vh-96px)] overflow-scroll scrollbar-hide px-2 py-3">
            {lines.map(({ name, nihongo, furigana, freeEN, details }, i) => {
              const character = characters.find((character) => character.name === name)
              const headshotUrl = character.headshotUrl
              const color = character.color

              return (
                <Line
                  key={i}
                  name={name}
                  iconUrl={headshotUrl}
                  color={color}
                  nihongo={nihongo}
                  freeEN={freeEN}
                  furigana={furigana}
                  details={details}
                />
              )
            })}
          </div>
          {/* Decolation */}
          <div className="bg-slate-500 h-12 top-0 z-50"></div>
        </div>
      </div>

      <div className="mx-3 mt-5">
        <p className="text-gray-700 text-base ">{lastText}</p>
      </div>
    </div>
  )
}

export default Article
