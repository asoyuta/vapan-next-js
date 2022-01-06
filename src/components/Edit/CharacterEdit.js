import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import noIconUrl from '../../public/img/blank-profile.png'
import { collection, addDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase/clientApp'

function CharacterEdit() {
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
  const [icon, setIcon] = useState(null)

  const saveCharacter = (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    addDoc(collection(db, 'characters'), {
      name: inputRef.current.value,
    })

    inputRef.current.value = ''
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

  return (
    <div className="bg-white border-2 p-3 m-3 rounded-md shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <div onClick={() => filepickerRef.current.click()}>
          <Image
            className="rounded-full cursor-pointer hover:opacity-80"
            src={icon ? icon : noIconUrl}
            width={120}
            height={120}
            layout="fixed"
            objectFit='cover'
          />
          <input ref={filepickerRef} onChange={addIcon} type="file" hidden />
        </div>
        <form>
          <input
            className="rounded-full px-3 py-2 w-36 bg-gray-100 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder="Character Name"
          />
          <button hidden type="submit" onClick={saveCharacter}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CharacterEdit
