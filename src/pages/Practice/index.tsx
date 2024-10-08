import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../components';
import { getPracticeMode, getSelectedKeys, getSelectedWords, Word } from '../../utils';
import BackHome from '../../components/BackHome';

type Types = ['hiragana', 'katakana', 'romaji'];

const Practice: React.FC = () => {
  const selectedKeys = useRef<string[]>([]);
  const practiceMode = useRef<string>('all');
  const words = useRef<Word[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Word | null>(null);
  const [questionType, setQuestionType] = useState<'hiragana' | 'katakana' | 'romaji'>('hiragana');
  const [options, setOptions] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState<string | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const recentWordsRef = useRef<Word[]>([]);

  const getRandomWord = (): Word => {
    if (words.current.length === 0) {
      throw new Error('没有可用的单词');
    }

    let availableWords = words.current.filter((word) => !recentWordsRef.current.includes(word));
    if (availableWords.length === 0) {
      availableWords = words.current;
      recentWordsRef.current = [];
    }

    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];

    recentWordsRef.current = [...recentWordsRef.current, randomWord].slice(-4); // 保留最近4个单词，确保5次内不重复

    return randomWord;
  };

  const getQuestionAndOptions = () => {
    const questionWord = getRandomWord();

    const types: Types = ['hiragana', 'katakana', 'romaji'];
    let questionType: Types[number], answerType: Types[number];

    if (practiceMode.current === 'all') {
      [questionType, answerType] = types.sort(() => Math.random() - 0.5).slice(0, 2);
    } else {
      questionType = (Math.random() < 0.5 ? practiceMode.current : 'romaji') as Types[number];
      answerType = (questionType === 'romaji' ? practiceMode.current : 'romaji') as Types[number];
    }

    const correctAnswer = questionWord[answerType];

    const incorrectOptions = words.current
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
    selectedKeys.current = getSelectedKeys();
    practiceMode.current = getPracticeMode();
    words.current = getSelectedWords(selectedKeys.current);
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
      <BackHome />
    </>
  );
};

export default Practice;
