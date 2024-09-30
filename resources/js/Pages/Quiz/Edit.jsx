import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import { useState } from "react";

export default function Edit({ auth, quiz }) {
    const { data, setData, patch, processing, errors } = useForm({
        title: quiz.title,
        questions: quiz.questions.map((question) => ({
            title: question.title,
            answers: question.answers.map((answer) => ({
                title: answer.title,
                is_correct: answer.is_correct,
            })),
        })),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("quizzes.update", { id: quiz.id }));
    };

    const addQuestion = () => {
        setData("questions", [
            ...data.questions,
            {
                title: "",
                answers: [
                    { title: "", is_correct: false },
                    { title: "", is_correct: false },
                    { title: "", is_correct: false },
                    { title: "", is_correct: false },
                ],
            },
        ]);
    };

    const deleteQuestion = (index) => {
        const newQuestions = data.questions.filter(
            (_, qIndex) => qIndex !== index
        );
        setData("questions", newQuestions);
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...data.questions];
        newQuestions[index].title = value;
        setData("questions", newQuestions);
    };

    const handleAnswerChange = (questionIndex, answerIndex, value) => {
        const newQuestions = [...data.questions];
        newQuestions[questionIndex].answers[answerIndex].title = value;
        setData("questions", newQuestions);
    };

    const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
        const newQuestions = [...data.questions];
        newQuestions[questionIndex].answers.forEach((answer, idx) => {
            answer.is_correct = idx === answerIndex;
        });
        setData("questions", newQuestions);
    };

    return (
        <Layout auth={auth}>
            <div className="w-full container mx-auto flex flex-col items-center justify-center mt-10 py-8">
                <div className="w-[90%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                            Edit Quiz
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-8">
                            <input
                                type="text"
                                className="text-xl font-semibold rounded-lg w-full"
                                placeholder="Quiz title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <div className="text-red-500 mt-2">
                                    {errors.title}
                                </div>
                            )}
                        </div>

                        {data.questions.map((question, qIndex) => (
                            <div key={qIndex} className="mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <input
                                        type="text"
                                        className="text-xl font-semibold rounded-lg w-full"
                                        placeholder={`Question ${
                                            qIndex + 1
                                        } title`}
                                        value={question.title}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                qIndex,
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button
                                        type="button"
                                        className="ml-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                        onClick={() => deleteQuestion(qIndex)}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    {question.answers.map((answer, aIndex) => (
                                        <input
                                            key={aIndex}
                                            className={`bg-gray-100 border-2 focus:ring-gray-200 focus:border-gray-200 rounded-lg p-6 m-2 ${
                                                answer.is_correct
                                                    ? "focus:ring-green-500 focus:border-green-500 border-green-500"
                                                    : "border-gray-200"
                                            }`}
                                            placeholder={`Answer ${aIndex + 1}`}
                                            value={answer.title}
                                            onChange={(e) =>
                                                handleAnswerChange(
                                                    qIndex,
                                                    aIndex,
                                                    e.target.value
                                                )
                                            }
                                            onClick={() =>
                                                handleCorrectAnswerChange(
                                                    qIndex,
                                                    aIndex
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-4"
                            onClick={addQuestion}
                        >
                            Add Question
                        </button>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                disabled={processing}
                            >
                                Update Quiz
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
