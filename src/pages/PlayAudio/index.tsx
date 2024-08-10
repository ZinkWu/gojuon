import React, { useEffect, useRef, useState } from 'react';
import { words, generateRandomNumber, getSelectedKeys } from '../../utils';
import BackHome from '../../components/BackHome';

interface AudioQuestion {
  path: string;
  answer: string;
}

const REPEAT_COUNT = 5;

const PlayAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioList, setAudioList] = useState<AudioQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<AudioQuestion | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const playCount = useRef(0);
  const [answerList, setAnswerList] = useState<string[]>([]);
  const selectedKeys = useRef<string[]>([]);

  const initializeAudioList = () => {
    const combinedWords = selectedKeys.current.flatMap((key) =>
      words[key].map((word) => ({ path: `audio/${word.romaji}.mp3`, answer: word.hiragana })),
    );
    setAudioList(combinedWords);
    const randomIndex = generateRandomNumber(0, combinedWords.length - 1);
    setCurrentQuestion(combinedWords[randomIndex]);
  };

  useEffect(() => {
    selectedKeys.current = getSelectedKeys();
    initializeAudioList();
  }, []);

  const playAudio = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentQuestion, isPlaying]);

  const handleAudioEnd = () => {
    playCount.current += 1;
    if (playCount.current === REPEAT_COUNT) {
      if (currentQuestion) {
        setAnswerList((prevList) => [...prevList, currentQuestion.answer]);
      }
      audioRef.current?.pause();
      setAudioList((prevList) => prevList.filter((q) => q.path !== currentQuestion?.path));
      if (audioList.length > 1) {
        const remainingAudios = audioList.filter((q) => q.path !== currentQuestion?.path);
        const randomIndex = generateRandomNumber(0, remainingAudios.length - 1);
        setCurrentQuestion(remainingAudios[randomIndex]);
      } else {
        setIsPlaying(false);
        setIsFinished(true);
      }
      playCount.current = 0;
    } else {
      audioRef.current?.play();
    }
  };

  const handleRestart = () => {
    initializeAudioList();
    setIsFinished(false);
    setAnswerList([]);
    setTimeout(playAudio, 0);
  };

  return (
    <div className="flex flex-col gap-2 items-center mt-48">
      <audio ref={audioRef} src={currentQuestion?.path} controls className="hidden" onEnded={handleAudioEnd} />
      <h1 className="text-3xl font-bold mb-8">听力练习</h1>
      {!isFinished && <p className="text-xl mb-4">剩余单词数: {audioList.length}</p>}
      {isFinished && (
        <>
          <p className="text-2xl font-semibold text-green-600">练习完成！</p>
          <p>答案：{answerList.join(' ')}</p>
        </>
      )}
      {isPlaying ? (
        <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
          正在播放...
        </button>
      ) : isFinished ? (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRestart}
        >
          重新播放
        </button>
      ) : (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={playAudio}>
          开始播放
        </button>
      )}
      <BackHome />
    </div>
  );
};

export default PlayAudio;
