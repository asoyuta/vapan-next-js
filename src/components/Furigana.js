function Furigana({ nihongo, furigana, furiOn }) {
  return (
    <>
      {furiOn ? (
        <ruby className="text-base">
          {nihongo.map((_, i) => (
            <>
              {nihongo[i]} <rt>{furigana[i]}</rt>
            </>
          ))}
        </ruby>
      ) : (
        <>{nihongo.join('')}</>
      )}
    </>
  )
}

export default Furigana
