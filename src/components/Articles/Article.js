import React from 'react'
import { Dialogue, Title } from '..'

function Article({ title, author, createDate, contents }) {
  return (
    <div className="max-w-5xl bg-white shadow-xl pt-6 sm:pt-14 my-5 lg:my-10">
      <Title title={title} author={author} createDate={createDate} />

      {contents.map((content, i) => {
        switch (content.type) {
          case 'sectionTitle':
            return (
              <h2 key={i} className="mx-3 sm:mx-8 lg:mx-20 mb-2 sm:mb-3 text-lg sm:text-2xl font-medium">
                {content.sectionTitle}
              </h2>
            )

          case 'text':
            return (
              <p key={i} className="mx-3 sm:mx-8 lg:mx-20 mb-5 text-gray-600 text-base sm:text-lg">
                {content.text}
              </p>
            )

          case 'dialogue':
            // const { streamUrl, streamDate, clipUrl, characters, lines } = content.dialogue

            return (
              <></>
              // <Dialogue
              //   key={i}
              //   streamUrl={streamUrl}
              //   streamDate={streamDate}
              //   clipUrl={clipUrl}
              //   characters={characters}
              //   lines={lines}
              // />
            )
        }
      })}
    </div>
  )
}

export default Article
