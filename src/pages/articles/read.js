import { Article, Header } from '../../components'
import noIconUrl from '../../public/img/blank-profile.png'

const characters = [
  {
    name: 'Lize Helesta',
    headshotUrl: 'https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rize_Heruesta_hp.png',
    YouTubeUrl: 'https://www.youtube.com/channel/UCZ1xuCK1kNmn5RzPYIZop3w',
    color: '#42FFFF',
  },
  {
    name: 'Ange Katrina',
    headshotUrl: 'https://liver-icons.s3.ap-northeast-1.amazonaws.com/400x400/Ange_Katrina_210830.png',
    YouTubeUrl: 'https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw',
    color: '#C83C35',
  },
  {
    name: 'NO NAME',
    headshotUrl: noIconUrl,
    YouTubeUrl: '',
    color: '',
  },
  {
    name: '',
    headshotUrl: '',
    YouTubeUrl: '',
    color: '',
  },
]

const lines = [
  {
    name: '',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'NO NAME',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: '',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'NO NAME',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'Lize Helesta',
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
      '',
      'しがつ',
      'なのか',
      '',
      'ひづけ',
      'か',
      '',
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
    name: 'Lize Helesta',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['終', 'わりかぁ…やばぁ…'],
    furigana: ['お', ''],
    freeEN: "It's ending... Ah...",
    details: {
      literalEN: '',
      description: 'English has no equivalent to やばい.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['もうリゼアンウィーク', '終', 'わりだって…'],
    furigana: ['', 'お', ''],
    freeEN: 'LizeAn Week is already ending...',
    details: {},
  },
  {
    name: 'Lize Helesta',
    nihongo: ['終', 'わりだってさ…'],
    furigana: ['お', ''],
    freeEN: "It's ending...",
    details: {
      literalEN: '',
      description: '',
    },
  },
  {
    name: 'Lize Helesta',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['終', 'わりかぁ…やばぁ…'],
    furigana: ['お', ''],
    freeEN: "It's ending... Ah...",
    details: {
      literalEN: '',
      description: 'English has no equivalent to やばい.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['もうリゼアンウィーク', '終', 'わりだって…'],
    furigana: ['', 'お', ''],
    freeEN: 'LizeAn Week is already ending...',
    details: {},
  },
  {
    name: 'Lize Helesta',
    nihongo: ['終', 'わりだってさ…'],
    furigana: ['お', ''],
    freeEN: "It's ending...",
    details: {
      literalEN: '',
      description: '',
    },
  },
  {
    name: 'Lize Helesta',
    nihongo: ['じゃあこれで', '今度', 'こそ', '本当', 'にお', '別', 'れだ'],
    furigana: ['', 'こんど', '', 'ほんとう', '', 'わか', ''],
    freeEN: "Well, it's time to say goodbye.",
    details: {
      literalEN: "Well then, this time, it's time to say goodbye, really.",
      description: 'She pronounce ほんと but ほんとう is correct.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['終', 'わりかぁ…やばぁ…'],
    furigana: ['お', ''],
    freeEN: "It's ending... Ah...",
    details: {
      literalEN: '',
      description: 'English has no equivalent to やばい.',
    },
  },
  {
    name: 'Ange Katrina',
    nihongo: ['もうリゼアンウィーク', '終', 'わりだって…'],
    furigana: ['', 'お', ''],
    freeEN: 'LizeAn Week is already ending...',
    details: {},
  },
  {
    name: 'Lize Helesta',
    nihongo: ['終', 'わりだってさ…'],
    furigana: ['お', ''],
    freeEN: "It's ending...",
    details: {
      literalEN: '',
      description: '',
    },
  },
]

const dialogue = {
  streamUrl: 'https://youtu.be/uvs93XVfK4U',
  streamDate: '2019-07-08',
  clipUrl: 'https://youtu.be/_7nfBKrzTZ4',
  characters: characters,
  lines: lines,
}

const contents = [
  {
    type: 'sectionTitle',
    sectionTitle: '1. This is Small Title!'
  },
  {
    type: 'text',
    text: '25 years later, she still regretted that specific moment. Facing his greatest fear, he ate his first marshmallow. The river stole the gods. Erin accidentally created a new universe.',
  },
  {
    type: 'dialogue',
    dialogue: dialogue,
  },
  {
    type: 'text',
    text: "This isn't a book, it's a case to hide illicit substances. When one considers the issue from a different perspective, the answer seems to change. I'm absolutely sure. We need a car big enough for the whole family. The giraffe licked the tree and spat at the gorilla. You look really sharp today. Problem solving is important. There is a big park near my school. Please, take pity on me! Are you opening the door? How was I supposed to know he hated salami?",
  },
]

const article = {
  title: 'End of LizeAn Week',
  author: 'Enji',
  createDate: '2021-12-31',
  updateDate: '2022-01-11',
  contents: contents,
}

function Read() {
  const { title, author, createDate, updateDate, contents } = article

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="flex">
        <Article title={title} author={author} createDate={createDate} updateDate={updateDate} contents={contents} />
      </main>
    </div>
  )
}

export default Read
