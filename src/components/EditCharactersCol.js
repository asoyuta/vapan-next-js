import Image from 'next/image'

function EditCharactersCol({ name, icon, color }) {
  return (
    <div className="flex flex-col items-center bg-white p-2 m-2 rounded-md">
      <div className="flex rounded-full items-center mb-1 bg-gray-200">
        <Image className="rounded-full" src={icon} height={100} width={100} layout="fixed" />
      </div>
      <h1 className="font-medium">{name}</h1>
    </div>
  )
}

export default EditCharactersCol
