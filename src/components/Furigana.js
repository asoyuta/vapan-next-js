import React from 'react'

function Furigana({ nihongo, furigana, furiOn }) {
  return (
    <>
      {furiOn ? (
        <ruby className="text-base">
          {nihongo.map((_, i) => (
            <React.Fragment key={i}>
              {nihongo[i]} <rt>{furigana[i]}</rt>
            </React.Fragment>
          ))}
        </ruby>
      ) : (
        <>{nihongo.join('')}</>
      )}
    </>
  )
}

export default Furigana
