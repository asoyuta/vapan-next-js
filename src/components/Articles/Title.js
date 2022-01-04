function Title({ title, author, createDate }) {
  return (
    <div className="flex flex-col items-center mb-8 mx-3">
      <h1 className="text-2xl text-gray-900 font-bold">{title}</h1>
      <h2 className="text-base text-gray-500">{author}</h2>
      <h2 className="text-sm text-gray-500">{createDate}</h2>
    </div>
  )
}

export default Title
