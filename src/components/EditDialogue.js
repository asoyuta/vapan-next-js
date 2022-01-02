import { Line } from '.'

function EditDialogue({ lines }) {
  return (
    <div className=' bg-orange-100'>
      {lines.map((line, i) => (
        <Line
          displayName={line.displayName}
          icon={line.icon}
          nihongo={line.nihongo}
          furigana={line.furigana}
          freeEN={line.freeEN}
          details={line.details}
        />
      ))}
    </div>
  )
}

export default EditDialogue
