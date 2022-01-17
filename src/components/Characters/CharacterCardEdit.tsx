import Image from 'next/image'
import { useRef, useState } from 'react'
import { db, storage } from '../../firebase/clientApp'
import noIcon from '../../public/img/blank-profile.png'
import { doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function CharacterCardEdit() {
  const nameRef = useRef(null)
  const iconRef = useRef(null)
  const [icon, setIcon] = useState(null)

  const saveCharacter = (e) => {
    e.preventDefault()

    if (!nameRef.current.value) return

    const characterId = nameRef.current.value.replace(/\s+/g, '')

    setDoc(doc(db, 'characters', characterId), {
      id: characterId,
      name: nameRef.current.value,
    }).then(() => {
      if (icon) {
        const iconRef = ref(storage, `characters/${characterId}`)
        const uploadResult = uploadString(iconRef, icon, 'data_url')

        removeIcon()
        nameRef.current.value = ''

        uploadResult
          .then(() => {
            getDownloadURL(iconRef).then((url) => {
              setDoc(
                doc(db, 'characters', characterId),
                {
                  icon: url,
                },
                { merge: true }
              )
            })
          })
          .catch((error) => console.log(error))
      }
    })
  }

  const addIcon = (e) => {
    const reader = new FileReader()

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setIcon(readerEvent.target.result)
    }
  }

  const removeIcon = () => {
    setIcon(null)
  }

  return (
    <div className="flex flex-col items-center space-y-3 bg-sky-400 p-2 m-1 sm:p-4 sm:m-2 lg:p-4 rounded-md shadow-sm">
      <div
        className="relative h-[25vw] w-[25vw] sm:h-[18vw] sm:w-[18vw] lg:h-36 lg:w-36"
        onClick={() => iconRef.current.click()}
      >
        <Image
          className="rounded-md cursor-pointer hover:opacity-80 bg-white"
          src={icon ? icon : noIcon}
          layout="fill"
          objectFit="cover"
        />
        <input ref={iconRef} onChange={addIcon} type="file" hidden />
      </div>
      <form>
        <input
          className="rounded-md text-sm sm:text-base lg:text-lg px-1 w-[25vw] sm:w-[18vw] lg:w-36 bg-white focus:outline-none"
          type="text"
          ref={nameRef}
        />
        <button hidden className="button" type="submit" onClick={saveCharacter}>
          Save
        </button>
      </form>
    </div>
  )
}

export default CharacterCardEdit
