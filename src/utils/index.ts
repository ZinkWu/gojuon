export type Word = { hiragana: string; katakana: string; romaji: string }

export const words: Record<string, Word[]> = {
  vowel: [
    { hiragana: 'あ', katakana: 'ア', romaji: 'a' },
    { hiragana: 'い', katakana: 'イ', romaji: 'i' },
    { hiragana: 'う', katakana: 'ウ', romaji: 'u' },
    { hiragana: 'え', katakana: 'エ', romaji: 'e' },
    { hiragana: 'お', katakana: 'オ', romaji: 'o' }
  ],
  k: [
    { hiragana: 'か', katakana: 'カ', romaji: 'ka' },
    { hiragana: 'き', katakana: 'キ', romaji: 'ki' },
    { hiragana: 'く', katakana: 'ク', romaji: 'ku' },
    { hiragana: 'け', katakana: 'ケ', romaji: 'ke' },
    { hiragana: 'こ', katakana: 'コ', romaji: 'ko' }
  ],
  s: [
    { hiragana: 'さ', katakana: 'サ', romaji: 'sa' },
    { hiragana: 'し', katakana: 'シ', romaji: 'shi' },
    { hiragana: 'す', katakana: 'ス', romaji: 'su' },
    { hiragana: 'せ', katakana: 'セ', romaji: 'se' },
    { hiragana: 'そ', katakana: 'ソ', romaji: 'so' }
  ],
  t: [
    { hiragana: 'た', katakana: 'タ', romaji: 'ta' },
    { hiragana: 'ち', katakana: 'チ', romaji: 'chi' },
    { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu' },
    { hiragana: 'て', katakana: 'テ', romaji: 'te' },
    { hiragana: 'と', katakana: 'ト', romaji: 'to' }
  ],
  n: [
    { hiragana: 'な', katakana: 'ナ', romaji: 'na' },
    { hiragana: 'に', katakana: 'ニ', romaji: 'ni' },
    { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu' },
    { hiragana: 'ね', katakana: 'ネ', romaji: 'ne' },
    { hiragana: 'の', katakana: 'ノ', romaji: 'no' }
  ],
  h: [
    { hiragana: 'は', katakana: 'ハ', romaji: 'ha' },
    { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi' },
    { hiragana: 'ふ', katakana: 'フ', romaji: 'fu' },
    { hiragana: 'へ', katakana: 'ヘ', romaji: 'he' },
    { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho' }
  ],
  m: [
    { hiragana: 'ま', katakana: 'マ', romaji: 'ma' },
    { hiragana: 'み', katakana: 'ミ', romaji: 'mi' },
    { hiragana: 'む', katakana: 'ム', romaji: 'mu' },
    { hiragana: 'め', katakana: 'メ', romaji: 'me' },
    { hiragana: 'も', katakana: 'モ', romaji: 'mo' }
  ],
  y: [
    { hiragana: 'や', katakana: 'ヤ', romaji: 'ya' },
    { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu' },
    { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo' }
  ],
  r: [
    { hiragana: 'ら', katakana: 'ラ', romaji: 'ra' },
    { hiragana: 'り', katakana: 'リ', romaji: 'ri' },
    { hiragana: 'る', katakana: 'ル', romaji: 'ru' },
    { hiragana: 'れ', katakana: 'レ', romaji: 're' },
    { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro' }
  ],
  w: [
    { hiragana: 'わ', katakana: 'ワ', romaji: 'wa' },
    { hiragana: 'を', katakana: 'ヲ', romaji: 'wo' }
  ],
  // 浊音
  g: [
    { hiragana: 'が', katakana: 'ガ', romaji: 'ga' },
    { hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi' },
    { hiragana: 'ぐ', katakana: 'グ', romaji: 'gu' },
    { hiragana: 'げ', katakana: 'ゲ', romaji: 'ge' },
    { hiragana: 'ご', katakana: 'ゴ', romaji: 'go' }
  ],
  z: [
    { hiragana: 'ざ', katakana: 'ザ', romaji: 'za' },
    { hiragana: 'じ', katakana: 'ジ', romaji: 'ji' },
    { hiragana: 'ず', katakana: 'ズ', romaji: 'zu' },
    { hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze' },
    { hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo' }
  ],
  d: [
    { hiragana: 'だ', katakana: 'ダ', romaji: 'da' },
    { hiragana: 'ぢ', katakana: 'ヂ', romaji: 'ji' },
    { hiragana: 'づ', katakana: 'ヅ', romaji: 'zu' },
    { hiragana: 'で', katakana: 'デ', romaji: 'de' },
    { hiragana: 'ど', katakana: 'ド', romaji: 'do' }
  ],
  b: [
    { hiragana: 'ば', katakana: 'バ', romaji: 'ba' },
    { hiragana: 'び', katakana: 'ビ', romaji: 'bi' },
    { hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu' },
    { hiragana: 'べ', katakana: 'ベ', romaji: 'be' },
    { hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo' }
  ],
  p: [
    { hiragana: 'ぱ', katakana: 'パ', romaji: 'pa' },
    { hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi' },
    { hiragana: 'ぷ', katakana: 'プ', romaji: 'pu' },
    { hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe' },
    { hiragana: 'ぽ', katakana: 'ポ', romaji: 'po' }
  ],
  // 拗音
  ky: [
    { hiragana: 'きゃ', katakana: 'キャ', romaji: 'kya' },
    { hiragana: 'きゅ', katakana: 'キュ', romaji: 'kyu' },
    { hiragana: 'きょ', katakana: 'キョ', romaji: 'kyo' }
  ],
  sy: [
    { hiragana: 'しゃ', katakana: 'シャ', romaji: 'sha' },
    { hiragana: 'しゅ', katakana: 'シュ', romaji: 'shu' },
    { hiragana: 'しょ', katakana: 'ショ', romaji: 'sho' }
  ],
  ty: [
    { hiragana: 'ちゃ', katakana: 'チャ', romaji: 'cha' },
    { hiragana: 'ちゅ', katakana: 'チュ', romaji: 'chu' },
    { hiragana: 'ちょ', katakana: 'チョ', romaji: 'cho' }
  ],
  ny: [
    { hiragana: 'にゃ', katakana: 'ニャ', romaji: 'nya' },
    { hiragana: 'にゅ', katakana: 'ニュ', romaji: 'nyu' },
    { hiragana: 'にょ', katakana: 'ニョ', romaji: 'nyo' }
  ],
  hy: [
    { hiragana: 'ひゃ', katakana: 'ヒャ', romaji: 'hya' },
    { hiragana: 'ひゅ', katakana: 'ヒュ', romaji: 'hyu' },
    { hiragana: 'ひょ', katakana: 'ヒョ', romaji: 'hyo' }
  ],
  my: [
    { hiragana: 'みゃ', katakana: 'ミャ', romaji: 'mya' },
    { hiragana: 'みゅ', katakana: 'ミュ', romaji: 'myu' },
    { hiragana: 'みょ', katakana: 'ミョ', romaji: 'myo' }
  ],
  ry: [
    { hiragana: 'りゃ', katakana: 'リャ', romaji: 'rya' },
    { hiragana: 'りゅ', katakana: 'リュ', romaji: 'ryu' },
    { hiragana: 'りょ', katakana: 'リョ', romaji: 'ryo' }
  ],
  gy: [
    { hiragana: 'ぎゃ', katakana: 'ギャ', romaji: 'gya' },
    { hiragana: 'ぎゅ', katakana: 'ギュ', romaji: 'gyu' },
    { hiragana: 'ぎょ', katakana: 'ギョ', romaji: 'gyo' }
  ],
  zy: [
    { hiragana: 'じゃ', katakana: 'ジャ', romaji: 'ja' },
    { hiragana: 'じゅ', katakana: 'ジュ', romaji: 'ju' },
    { hiragana: 'じょ', katakana: 'ジョ', romaji: 'jo' }
  ],
  dy: [
    { hiragana: 'ぢゃ', katakana: 'ヂャ', romaji: 'ja' },
    { hiragana: 'ぢゅ', katakana: 'ヂュ', romaji: 'ju' },
    { hiragana: 'ぢょ', katakana: 'ヂョ', romaji: 'jo' }
  ],
  by: [
    { hiragana: 'びゃ', katakana: 'ビャ', romaji: 'bya' },
    { hiragana: 'びゅ', katakana: 'ビュ', romaji: 'byu' },
    { hiragana: 'びょ', katakana: 'ビョ', romaji: 'byo' }
  ],
  py: [
    { hiragana: 'ぴゃ', katakana: 'ピャ', romaji: 'pya' },
    { hiragana: 'ぴゅ', katakana: 'ピュ', romaji: 'pyu' },
    { hiragana: 'ぴょ', katakana: 'ピョ', romaji: 'pyo' }
  ]
}

export const getSelectedWords = (selectedKeys: string[]): Word[] => {
  return selectedKeys.reduce((acc, key) => {
    if (key in words) {
      acc.push(...words[key as keyof typeof words]);
    }
    return acc;
  }, [] as { hiragana: string; katakana: string; romaji: string }[]);
};


export const getSelectedKeys = (): string[] => {
  const savedRows = localStorage.getItem('selectedRows');
  if (savedRows) {
    try {
      const parsedRows = JSON.parse(savedRows);
      console.log('已从本地存储加载配置');
      return parsedRows;
    } catch (error) {
      console.error('解析保存的配置时出错:', error);
      return [];
    }
  } else {
    return [];
  }
};

export const getPracticeMode = (): string => {
  const savedMode = localStorage.getItem('practiceMode');
  if (savedMode) {
    console.log('已从本地存储加载练习模式');
    return savedMode;
  } else {
    console.log('未找到保存的练习模式，使用默认值 "all"');
    return 'all';
  }
};


export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

