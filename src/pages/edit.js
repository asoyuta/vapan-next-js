import { Header, EditCharacters, EditDialogue } from '../components'

const characters = [
  {
    name: 'Ange Katrina',
    icon: 'https://liver-icons.s3.ap-northeast-1.amazonaws.com/400x400/Ange_Katrina_210830.png',
  },
  {
    name: 'Lize Helesta',
    icon: 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rize_Heruesta_hp.png',
  },
]

const lines = [
  {
    displayName: 'Lize',
    icon: 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rize_Heruesta_hp.png',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    displayName: 'Ange',
    icon: 'https://liver-icons.s3.ap-northeast-1.amazonaws.com/400x400/Ange_Katrina_210830.png',
    nihongo: ['終', 'わりかぁ…やばぁ…'],
    furigana: ['お', ''],
    freeEN: "It's ending... Ah...",
    details: {
      literalEN: '',
      description: 'English has no equivalent to やばい.',
    },
  },
  {
    displayName: 'Ange',
    icon: 'https://liver-icons.s3.ap-northeast-1.amazonaws.com/400x400/Ange_Katrina_210830.png',
    nihongo: ['もうリゼアンウィーク', '終', 'わりだって…'],
    furigana: ['', 'お', ''],
    freeEN: 'LizeAn Week is already ending...',
    details: {},
  },
  {
    displayName: 'Lize',
    icon: 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rize_Heruesta_hp.png',
    nihongo: ['終', 'わりだってさ…'],
    furigana: ['お', ''],
    freeEN: "It's ending...",
    details: {
      literalEN: '',
      description: '',
    },
  },
]

function Edit() {
  return (
    <div className="h-screen bg-gray-100">
      <Header />

      <main>
        <div className="lg:max-w-2xl mx-auto">
          <EditCharacters characters={characters} />
          <EditDialogue lines={lines} />
          {/* Edit Dialogue */}
        </div>
      </main>
    </div>
  )
}

export default Edit
