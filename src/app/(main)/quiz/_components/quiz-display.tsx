// import { useState } from "react";

//  const  QuizDisplay=({ quiz }:any)=> {
//   const [answers, setAnswers] = useState<{ [key: number]: string }>({});
//   const [submitted, setSubmitted] = useState(false);

//     console.log("result",quiz);

//   const handleSelect = (qIndex: number, option: string) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [qIndex]: option,
//     }));
//   };

//   const calculateScore = () => {
//     let score = 0;
//     quiz.forEach((q, index) => {
//       if (answers[index] === q.correctAnswer) {
//         score++;
//       }
//     });
//     return score;
//   };

//   return (
//     <div>
//       {quiz.map((q, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>{q.question}</h3>

//           {q.options.map((opt: string) => (
//             <div key={opt}>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value={opt}
//                 onChange={() => handleSelect(index, opt)}
//               />
//               {opt}
//             </div>
//           ))}

//           {/* Show Explanation after submit */}
//           {submitted && (
//             <div>
//               <p>
//                 ✅ Correct: {q.correctAnswer}
//               </p>
//               <p>📘 {q.explanation}</p>
//             </div>
//           )}
//         </div>
//       ))}

//       {!submitted ? (
//         <button onClick={() => setSubmitted(true)}>
//           Submit Quiz
//         </button>
//       ) : (
//         <h2>Score: {calculateScore()} / {quiz.length}</h2>
//       )}
//     </div>
//   );
// }
// export default QuizDisplay