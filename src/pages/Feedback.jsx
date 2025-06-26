import React, { useState, useEffect } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [allFeedbacks, setAllFeedbacks] = useState([]);

  useEffect(() => {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setAllFeedbacks(feedbacks);
  }, [submitted]);

  const handleSubmit = () => {
    if (!feedback.trim()) return;

    const newFeedback = { text: feedback, date: new Date().toLocaleString() };
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(newFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    setAllFeedbacks(feedbacks);
    setSubmitted(true);
    setFeedback('');

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">💬 Feedback</h2>
      <p className="mb-2 text-gray-300">We value your thoughts! Submit any suggestions, issues, or feedback below.</p>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full p-3 text-black rounded resize-none h-32"
        placeholder="Enter your feedback"
      />
      <button onClick={handleSubmit} className="mt-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded">
        Submit Feedback
      </button>
      {submitted && <p className="text-green-400 mt-3">✅ Thank you for your feedback!</p>}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">📋 Previous Feedback</h3>
        {allFeedbacks.length === 0 ? (
          <p className="text-gray-400">No feedback submitted yet.</p>
        ) : (
          <ul className="space-y-2">
            {allFeedbacks.map((fb, idx) => (
              <li key={idx} className="bg-gray-700 p-3 rounded">
                <p className="text-sm text-gray-200">{fb.text}</p>
                <p className="text-xs text-gray-400 mt-1">Submitted on: {fb.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Feedback;