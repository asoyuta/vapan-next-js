import { Line, Title } from '..'

function Article({ title, createDate, updateDate, description, lines }) {
  return (
    <div className="">
      {/* Title */}
      <Title title={title} createDate={createDate} updateDate={updateDate} />

      <div className="m-3">
        <p className="text-gray-800 text-sm">{description}</p>
      </div>

      {/* Device */}
      <div className="">
        {/* Display */}
        <div className=" max-w-3xl">
          {/* Option / Character Details / Stream Details */}
          <div className=" bg-sky-900 h-14 top-0 z-50"></div>
          {/* Chat */}
          <div className="bg-blue-200 h-[calc(100vh-96px)] overflow-scroll scrollbar-hide px-2 py-3">
            {lines.map(({ displayName, icon, nihongo, furigana, freeEN }, i) => (
              <Line key={i} displayName={displayName} icon={icon} nihongo={nihongo} freeEN={freeEN} furigana={furigana} />
            ))}
          </div>
          {/* Decolation */}
          <div className="bg-slate-500 h-10 top-0 z-50"></div>
        </div>
      </div>
    </div>
  )
}

export default Article
