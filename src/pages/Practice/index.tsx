import React, { useState, useEffect } from 'react';
import { Button } from '../../components';
import { getPracticeMode, getSelectedKeys, getSelectedWords, Word } from '../../utils';

const Practice: React.FC = () => {
  const selectedKeys = getSelectedKeys();
  const practiceMode = getPracticeMode();
  const words = getSelectedWords(selectedKeys);
  const [currentQuestion, setCurrentQuestion] = useState<Word | null>(null);
  const [questionType, setQuestionType] = useState<'hiragana' | 'katakana' | 'romaji'>('hiragana');
  const [options, setOptions] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState<string | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const getRandomWord = (): Word => {
    if (selectedKeys.length === 0 || words.length === 0) {
      throw new Error('没有可用的单词');
    }
    const randomKey = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];
    const wordsForKey = words.filter((word) => word.romaji.startsWith(randomKey));
    if (wordsForKey.length === 0) {
      return getRandomWord(); // 递归调用直到找到有效单词
    }
    return wordsForKey[Math.floor(Math.random() * wordsForKey.length)];
  };

  const getQuestionAndOptions = () => {
    const questionWord = getRandomWord();

    const types: ('hiragana' | 'katakana' | 'romaji')[] = ['hiragana', 'katakana', 'romaji'];
    let questionType: (typeof types)[number], answerType: (typeof types)[number];

    if (practiceMode === 'all') {
      [questionType, answerType] = types.sort(() => Math.random() - 0.5).slice(0, 2);
    } else {
      questionType = (Math.random() < 0.5 ? practiceMode : 'romaji') as (typeof types)[number];
      answerType = (questionType === 'romaji' ? practiceMode : 'romaji') as (typeof types)[number];
    }

    const correctAnswer = questionWord[answerType];

    const incorrectOptions = words
      .filter((word) => word !== questionWord)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((word) => word[answerType]);

    const allOptions = [correctAnswer, ...incorrectOptions].sort(() => 0.5 - Math.random());

    return { questionWord, questionType, correctAnswer, options: allOptions };
  };

  const newQuestion = () => {
    try {
      const { questionWord, questionType, correctAnswer, options } = getQuestionAndOptions();
      setCurrentQuestion(questionWord);
      setQuestionType(questionType);
      setOptions(options);
      setAnswer(correctAnswer);
      setAnswered(false);
      setSelectedOption(null);
    } catch (error) {
      console.error('生成新问题时出错：', error);
      // 这里可以添加一些用户友好的错误处理，比如显示一个错误消息
    }
  };

  useEffect(() => {
    newQuestion();
  }, []);

  const handleAnswer = (option: string) => {
    setAnswered(true);
    setSelectedOption(option);
    setTimeout(newQuestion, 1000);
  };

  return (
    <>
      <div className="flex flex-col gap-10 justify-center mt-28">
        <div className="flex justify-center items-center p-10 text-6xl">
          {currentQuestion && currentQuestion[questionType]}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {options.map((option, index) => (
            <Button
              key={index}
              disabled={answered}
              className={`
                ${answered && option === answer ? 'bg-green-800' : ''}
                ${answered && option === selectedOption && option !== answer ? 'bg-red-700' : ''}
              `}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Practice;
