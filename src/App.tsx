import { Button } from './components';
import { useEffect, useState } from 'react';
import { getQuiz, Question } from './utils';


function App() {
  const [q, setQ] = useState<Question>();
  const [answer, setAnswer] = useState<string | undefined>();
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setQ(getQuiz());
  }, []);


  return (
    <>
      <div className="h-dvh max-w-screen-sm m-auto p-5 flex flex-col gap-10 justify-center">
        <div className="flex justify-center items-center p-10 pt-0 -mt-20 text-6xl">
          {q?.question}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {q?.options.map(i => {
            return <Button
              disabled={answered}
              className={`${answered && i === q?.answer ? 'bg-green-700' : ''} ${i === answer ? i === q?.answer ? 'bg-green-700' : 'bg-red-700' : ''}`}
              key={i}
              onClick={() => {
                setAnswer(i);
                setAnswered(true);

                // next
                setTimeout(() => {
                  setAnswer(undefined);
                  setAnswered(false);
                  setQ(getQuiz);
                }, 1000);
              }}>{i}</Button>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
