function Toggle({ toggled, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer m-auto h-6 w-12 bg-gray-400 rounded-full ${toggled && 'bg-lime-500'}`}
    >
      <div className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${toggled && 'translate-x-6'}`} />
    </div>
  )
}

export default Toggle
