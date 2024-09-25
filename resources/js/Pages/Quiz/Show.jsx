import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Show({ quiz }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerChange = (questionId, answerId) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const handleSubmit = () => {
        let score = 0;

        quiz.questions.forEach(question => {
            const selectedAnswerId = selectedAnswers[question.id];
            const correctAnswer = question.answers.find(answer => answer.is_correct);

            if (selectedAnswerId === correctAnswer?.id) {
                score++;
            }
        });

        alert(`You got ${score} out of ${quiz.questions.length} correct!`);
    };

    return (
        <Layout>
            <Head title={quiz.title} />

            <div className="container mx-auto mt-10 py-8">
                <h1 className="text-4xl font-bold text-center mb-6">{quiz.title}</h1>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    {quiz.questions && quiz.questions.length > 0 ? (
                        quiz.questions.map(question => (
                            <div key={question.id} className="mb-4">
                                <h2 className="text-xl font-semibold">{question.title}</h2>
                                <div className="mt-2">
                                    {question.answers && question.answers.length > 0 ? (
                                        question.answers.map(answer => (
                                            <div key={answer.id} className="flex items-center mb-2">
                                                <input
                                                    type="radio"
                                                    name={`question_${question.id}`}
                                                    id={`answer_${answer.id}`}
                                                    value={answer.id}
                                                    checked={selectedAnswers[question.id] === answer.id}
                                                    onChange={() => handleAnswerChange(question.id, answer.id)}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={`answer_${answer.id}`} className="text-gray-700">
                                                    {answer.title} {/* or {answer.content} */}
                                                </label>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No answer options available for this question.</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No questions available for this quiz.</p>
                    )}
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                        disabled={quiz.questions.length === 0}
                    >
                        Submit Answers
                    </button>
                </div>
            </div>
        </Layout>
    );
}
