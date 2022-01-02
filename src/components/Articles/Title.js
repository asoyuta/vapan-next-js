function Title({ title, createDate, updateDate }) {
  return (
    <div className="m-3">
      <h1 className="flex justify-center text-2xl font-medium mb-1">{title}</h1>
      <div className="flex flex-col items-end">
        <h2 className=" text-sm text-gray-500">Created: {createDate}</h2>
        <h2 className=" text-sm text-gray-500">Updated: {updateDate}</h2>
      </div>
    </div>
  )
}

export default Title
