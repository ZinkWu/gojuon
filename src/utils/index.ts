const hiragana = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'を', 'ん',
];

const romaji = [
  'a', 'i', 'u', 'e', 'o',
  'ka', 'ki', 'ku', 'ke', 'ko',
  'sa', 'shi', 'su', 'se', 'so',
  'ta', 'chi', 'tsu', 'te', 'to',
  'na', 'ni', 'nu', 'ne', 'no',
  'ha', 'hi', 'fu', 'he', 'ho',
  'ma', 'mi', 'mu', 'me', 'mo',
  'ya', 'yu', 'yo',
  'ra', 'ri', 'ru', 're', 'ro',
  'wa', 'wo', 'n',
];

function getRandomElement(arr: string[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return { element: arr[randomIndex], index: randomIndex };
}

export type Question = {
  question: string;
  answer: string;
  options: string[];
}

export function getQuiz(): Question {
  const fromHiragana = Math.random() < 0.5;
  const { element, index } = getRandomElement(fromHiragana ? hiragana : romaji);
  const correctAnswer = fromHiragana ? romaji[index] : hiragana[index];
  const allOptions = fromHiragana ? romaji : hiragana;

  // 获取三个错误答案
  const incorrectAnswers = new Set<string>();
  while (incorrectAnswers.size < 3) {
    const { element: wrongAnswer } = getRandomElement(allOptions);
    if (wrongAnswer !== correctAnswer) {
      incorrectAnswers.add(wrongAnswer);
    }
  }

  // 将正确答案添加到选项并打乱顺序
  const options = Array.from(incorrectAnswers);
  options.push(correctAnswer);
  options.sort(() => Math.random() - 0.5);

  return {
    question: element,
    answer: correctAnswer,
    options,
  };
}
