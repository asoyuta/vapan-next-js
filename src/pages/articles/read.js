import { Article, Header } from '../../components'

const lines = [
  {
    displayName: 'Lize',
    icon: 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rize_Heruesta_hp.png',
    nihongo: [
      'じゃあ、これにて',
      '一週間',
      '、',
      '四月',
      '一日',
      'から',
      '四月',
      '七日',
      '、',
      '日付',
      '変',
      'わって',
      '八日',
    ],
    furigana: [
      '',
      'いっしゅうかん',
      '',
      'しがつ',
      'ついたち',
      'から',
      'しがつ',
      'なのか',
      '、',
      'ひづけ',
      'か',
      'わって',
      'ようか',
    ],
    freeEN: 'Then, this whole week, since April 1st, until April 7th, the date has changed, 8th',
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description:
        'She realized the date has changed after saying 7th, so she said 8th. We can read 一日 as いちにち, 七日 as しちにち or ななにち, 八日 as はちにち. But ついたち, なのか, ようか are more appropriate.',
    },
  },
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

const article = {
  title: 'End of LizeAn Week',
  author: 'Enji',
  createDate: '2021-12-31',
  updateDate: '2022-01-11',
  description:
    '25 years later, she still regretted that specific moment. Facing his greatest fear, he ate his first marshmallow. The river stole the gods. Erin accidentally created a new universe.',
  lines: lines,
}

function Read() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex">
        <Article
          title={article.title}
          createDate={article.createDate}
          updateDate={article.updateDate}
          description={article.description}
          lines={article.lines}
        />
      </main>
    </div>
  )
}

export default Read
