import Image from 'next/image'
import { useRef, useState } from 'react'
import { db, storage } from '../../firebase/clientApp'
import noIcon from '../../public/img/blank-profile.png'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function CharacterCardEdit() {
  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
  const [icon, setIcon] = useState(null)

  const saveCharacter = (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    addDoc(collection(db, 'characters'), {
      name: inputRef.current.value,
    }).then((characterDoc) => {
      if (icon) {
        const iconRef = ref(storage, `characters/${characterDoc.id}`)
        const uploadResult = uploadString(iconRef, icon, 'data_url')

        removeIcon()
        inputRef.current.value = ''

        uploadResult
          .then(() => {
            getDownloadURL(iconRef).then((url) => {
              setDoc(
                doc(db, 'characters', characterDoc.id),
                {
                  id: characterDoc.id,
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
    <div className="bg-sky-400 p-3 m-3 rounded-md shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative h-36 w-36" onClick={() => filepickerRef.current.click()}>
          <Image
            className="rounded-md cursor-pointer hover:opacity-80 bg-white"
            src={icon ? icon : noIcon}
            layout="fill"
            objectFit="cover"
          />
          <input ref={filepickerRef} onChange={addIcon} type="file" hidden />
        </div>
        <form>
          <input
            className="rounded-full px-2 py-1 w-40 bg-white focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder="Character Name"
          />
          <button hidden className="button" type="submit" onClick={saveCharacter}>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default CharacterCardEdit
