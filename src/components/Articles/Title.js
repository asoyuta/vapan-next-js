function Title({ title, author, createDate }) {
  return (
    <div className="flex flex-col items-center mb-8 sm:mb-12 mx-3 sm:mx-8">
      <h1 className="text-2xl sm:text-4xl text-gray-900 font-bold">{title}</h1>
      <h2 className="text-base sm:text-xl text-gray-500">@{author}</h2>
      <h2 className="text-sm sm:text-lg text-gray-500">{createDate}</h2>
    </div>
  )
}

export default Title
