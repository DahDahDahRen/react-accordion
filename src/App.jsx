import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const data = [
  {
    id: 1,
    question: "What is your name?",
    content: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam
          obcaecati labore sequi soluta error eius exercitationem eaque quisquam
          sapiente!`,
  },
  {
    id: 2,
    question: "Who is your favorite hero?",
    content: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam
          obcaecati labore sequi soluta error eius exercitationem eaque quisquam
          sapiente!`,
  },
  {
    id: 3,
    question: "Which is the best programming language?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam
          obcaecati labore sequi soluta error eius exercitationem eaque quisquam
          sapiente!`,
  },
];

function Accordian({ question, content }) {
  //* Accordian State
  const [accordianContent, setAccordianContent] = useState(false);

  //* Click event handler
  const onClickHideAccordianContent = (e) => {
    e.preventDefault();

    //* Change state
    setAccordianContent(!accordianContent);
  };

  //* Accoridna JSX
  return (
    <>
      <button
        className="accordian-component"
        onClick={onClickHideAccordianContent}
      >
        <div className="accordian-component-content">
          <p className="accordian-btn-text">{question}</p>
          <FaPlus />
        </div>
      </button>
      <div
        className={
          !accordianContent
            ? "accordian-content accordian-content-hide"
            : "accordian-content"
        }
      >
        <p>{content}</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="accordians">
          {data.map((item) => (
            <Accordian
              key={item.id}
              question={item.question}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
