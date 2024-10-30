// 카드 데이터
const card_data = [
  {
    id: 0,
    name: 'html',
    imgUrl: 'images/html.png',
  },
  {
    id: 1,
    name: 'css',
    imgUrl: 'images/css.png',
  },
  {
    id: 2,
    name: 'js',
    imgUrl: 'images/js.png',
  },
  {
    id: 3,
    name: 'react',
    imgUrl: 'images/react.png',
  },
  {
    id: 4,
    name: 'vue',
    imgUrl: 'images/vue.png',
  },
  {
    id: 5,
    name: 'svelte',
    imgUrl: 'images/svelte.png',
  },
  {
    id: 6,
    name: 'sass',
    imgUrl: 'images/sass.png',
  },
  {
    id: 7,
    name: 'github',
    imgUrl: 'images/github.png',
  },
  {
    id: 8,
    name: 'quest',
    imgUrl: 'images/quest.png',
  },
]

// 카드 목록
// id:카드번호, flipped: 뒤집혀진 상태, matched: 매칭된 상태
let cards = [
  { id: 0, flipped: false, matched: false },
  { id: 0, flipped: false, matched: false },
  { id: 1, flipped: false, matched: false },
  { id: 1, flipped: false, matched: false },
  { id: 2, flipped: false, matched: false },
  { id: 2, flipped: false, matched: false },
  { id: 3, flipped: false, matched: false },
  { id: 3, flipped: false, matched: false },
  { id: 4, flipped: false, matched: false },
  { id: 4, flipped: false, matched: false },
  { id: 5, flipped: false, matched: false },
  { id: 5, flipped: false, matched: false },
  { id: 6, flipped: false, matched: false },
  { id: 6, flipped: false, matched: false },
  { id: 7, flipped: false, matched: false },
  { id: 7, flipped: false, matched: false },
]

export { card_data, cards }
