import React, { useState } from 'react';

interface QuestionCardProps {
    questionNumber: string;
    question: string;
    choices: string[];
    selectedAnswer: string;
    handleAnswerSelection: (questionNumber: string, answerOption: string) => void;
  }
const QuestionCard = ({ questionNumber, question, choices, selectedAnswer, handleAnswerSelection }: QuestionCardProps) => {
    return (
      <div className="bg-white shadow-md border border-1 border-gray-600 rounded-md p-4">
        <div className="font-semibold mb-2">{question}:  This is a question</div>
        {choices.map((choice, index) => (
          <label key={index} className="flex items-center">
            <input
              id="green-radio"
              type="radio"
              className="w-4 h-4 text-[#00E18F] bg-gray-100 border-gray-600 focus:ring-[#00E18F] dark:focus:ring-[#00E18F] dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              
              name={questionNumber}
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => handleAnswerSelection(questionNumber, choice)}
            />
            <span className="ml-2  ">{choice}</span>
          </label>
        ))}
      </div>
    );
  };
export default function AttendTest  ()  {
  const [selectedAnswers, setSelectedAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  });

  const handleAnswerSelection = (questionNumber: string, answerOption: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionNumber]: answerOption
    });
  };

  const handleSubmit = () => {
    // Perform actions with selectedAnswers
    console.log(selectedAnswers);
  };

  return (
    <><div className="bg-white text-black shadow-md border border-1 border-gray-600 rounded-md p-4">
      <h1 className='text-black'></h1>
      </div><div className="flex flex-col text-black space-y-4">
      <QuestionCard
        questionNumber="question1"
        question="Question 1"
        choices={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        selectedAnswer={selectedAnswers['question1']}
        handleAnswerSelection={handleAnswerSelection} />
      <QuestionCard
        questionNumber="question2"
        question="Question 2"
        choices={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        selectedAnswer={selectedAnswers['question2']}
        handleAnswerSelection={handleAnswerSelection} />
      <QuestionCard
        questionNumber="question3"
        question="Question 3"
        choices={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        selectedAnswer={selectedAnswers['question3']}
        handleAnswerSelection={handleAnswerSelection} />
      <QuestionCard
        questionNumber="question4"
        question="Question 4"
        choices={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        selectedAnswer={selectedAnswers['question4']}
        handleAnswerSelection={handleAnswerSelection} />

      <div className="text-right">
        <button
          className="bg-white text-emerald-400 py-2 px-4 border rounded-md border-emerald-400 hover:bg-emerald-400 hover:text-white"
          onClick={handleSubmit}
          disabled={Object.values(selectedAnswers).some(answer => answer === '')}
        >
          Submit
        </button>
      </div>
    </div></>
  );
};





