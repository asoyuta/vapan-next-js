import { Line } from '..'

function Article({ title, createDate, updateDate, description, lines }) {
  return (
    <div className="">
      {/* Title */}
      <div className="m-3">
        <h1 className="flex justify-center text-2xl font-medium mb-1">{title}</h1>
        <div className="flex flex-col items-end">
          <h2 className=" text-sm text-gray-500">Created: {createDate}</h2>
          <h2 className=" text-sm text-gray-500">Updated: {updateDate}</h2>
        </div>
      </div>

      <div className="m-3">
        <p className="text-gray-800 text-sm">{description}</p>
      </div>

      {/* Device */}
      <div className="">
        {/* Background */}
        <div className="h-screen bg-blue-200 max-w-3xl p-2 overflow-scroll">
          {lines.map(({ displayName, icon, nihongo, freeEN }, i) => (
            <Line key={i} displayName={displayName} icon={icon} nihongo={nihongo} freeEN={freeEN} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article
