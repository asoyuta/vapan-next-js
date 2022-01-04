import React, { useState } from 'react'
import { Dialogue, GrayLine, Line, Title } from '..'

function Article({ title, author, createDate, updateDate, contents }) {
  return (
    <div className="mt-8">
      {/* Title */}
      <Title title={title} author={author} createDate={createDate} />

      {contents.map((content, i) => {
        switch (content.type) {
          case 'sectionTitle':
            return (
              <h2 key={i} className="mx-3 mb-5 text-lg font-medium">
                {content.sectionTitle}
              </h2>
            )

          case 'text':
            return (
              <p key={i} className="mx-3 mb-5 text-gray-700 text-base">
                {content.text}
              </p>
            )

          case 'dialogue':
            const { streamUrl, streamDate, clipUrl, characters, lines } = content.dialogue

            return (
              <Dialogue
                key={i}
                streamUrl={streamUrl}
                streamDate={streamDate}
                clipUrl={clipUrl}
                characters={characters}
                lines={lines}
              />
            )
        }
      })}
    </div>
  )
}

export default Article
