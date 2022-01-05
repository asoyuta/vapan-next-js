function Toggle({ toggled, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer m-auto h-4 w-8 sm:h-6 sm:w-12 bg-gray-400 rounded-full ${toggled && 'bg-lime-500'}`}
    >
      <div className={`absolute top-0.5 left-0.5 h-3 w-3 sm:top-0.5 sm:left-0.5 sm:h-5 sm:w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${toggled && 'translate-x-4 sm:translate-x-6'}`} />
    </div>
  )
}

export default Toggle
