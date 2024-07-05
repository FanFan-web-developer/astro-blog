import React, { useState, useRef } from 'react';
import freeQuiz from '../content/quiz/free.json';
import { MBTI_DIMENSIONS } from '../constants/dimension';

const Quiz: React.FC = () => {
  const questionIndex = useRef(0);
  const dimensions = useRef({
    [MBTI_DIMENSIONS.E_I]: 0,
    [MBTI_DIMENSIONS.S_N]: 0,
    [MBTI_DIMENSIONS.T_F]: 0,
    [MBTI_DIMENSIONS.J_P]: 0,
  })
  const [currentQuestion, setCurrentQuestion] = useState(freeQuiz.questions[questionIndex.current]);
  const moveOnNextQuestion = (point: number) => {
    dimensions.current[currentQuestion.dimension as MBTI_DIMENSIONS] += point;
    questionIndex.current++;
    if (questionIndex.current >= freeQuiz.questions.length) {
      // 拼接url地址跳转到对应MBTI人格类型页面, 如 /mbti/intj
      location.href = '/mbti/' + Object.keys(dimensions.current).reduce((prev, key) => {
        const traits = key.split('-');
        return prev + (dimensions.current[key as MBTI_DIMENSIONS] > 0 ? traits[0] : traits[1]);
      }, '');
    }
    setCurrentQuestion(freeQuiz.questions[questionIndex.current]);
  };

  return <div className="w-full py-6 space-y-8">
    <div>问题 <span className="text-purple-400">{currentQuestion.id}</span> / {freeQuiz.questions.length}</div>
    <div className="flex justify-center items-center h-44 p-3 rounded-xl bg-fuchsia-300 text-white shadow-lg">
      {currentQuestion.question}
    </div>
    <div className='flex flex-col justify-center space-y-3'>
      <span className="flex justify-center items-center w-full h-12 shadow-sm rounded-lg border border-purple-400 bg-white"
        onClick={() => moveOnNextQuestion(1)}
      >
        是
      </span>
      <span className="flex justify-center items-center w-full h-12 shadow-sm rounded-lg border border-red-400 bg-white"
        onClick={() => moveOnNextQuestion(-1)}
      >
        否
      </span>
    </div>
  </div>
}

export default Quiz;