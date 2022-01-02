import { EditCharactersCol } from '.'

function EditCharacters({ characters }) {
  return (
    <div className="flex justify-center mx-auto m-5 max-w-md md:max-w-lg lg:max-w-2xl bg-blue-200 md:rounded-xl rounded-none shadow-md">
      <div className=" flex overflow-scroll p-3 scrollbar-hide">
        {characters.map((character, i) => (
          <EditCharactersCol key={i} name={character.name} icon={character.icon} color={character.color} />
        ))}
      </div>
    </div>
  )
}

export default EditCharacters
