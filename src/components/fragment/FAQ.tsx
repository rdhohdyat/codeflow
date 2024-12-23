import FaQAccordion from "../FaQAccordion";

type FAQ = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const faqs: FAQ[] = [
    {
      question: "What is a Control Flow Graph (CFG)?",
      answer:
        "A Control Flow Graph is a representation of all possible paths that might be traversed through a program during its execution.",
    },
    {
      question: "What is CodeFlow?",
      answer:
        "CodeFlow is a feature in our application that visually represents the control flow of a program, helping developers understand and analyze their code.",
    },
    {
      question: "How does the application generate a CFG ?",
      answer:
        "The application parses the source code and identifies control structures like loops, conditions, and function calls to construct the graph.",
    },
    {
      question: "Can I upload my own code to generate a graph?",
      answer:
        "Yes, you can upload your source code files, and the application will generate a corresponding Control Flow Graph.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "Currently, the application supports Python, JavaScript, and Java, with plans to add more languages in the future.",
    },
    {
      question: "How can a Control Flow Graph help in debugging?",
      answer:
        "By visualizing the execution paths, you can identify unreachable code, potential infinite loops, and other issues more easily.",
    },
    {
      question: "Is the Control Flow Graph exportable?",
      answer:
        "Yes, you can export the graph as an image or PDF for documentation purposes.",
    },
    {
      question: "Can I interact with the graph?",
      answer:
        "Yes, the nodes and edges in the graph are interactive, allowing you to explore different parts of your program's flow in detail.",
    },
    {
      question: "What is the difference between Control Flow Graph?",
      answer:
        "A Control Flow Graph focuses on the order of execution, while a Data Flow Graph emphasizes the flow of data between operations.",
    },
    {
      question: "Does the application support static analysis tools?",
      answer:
        "Yes, the application integrates with static analysis tools to enhance the insights provided by the Control Flow Graph.",
    },
  ];
  return (
    <section className="py-20  w-full container flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-black border-b-4 border-black inline-block">
        Frequently Asked Questions
      </h2>
      <div className="grid  sm:grid-cols-2 gap-5">
        {faqs.map((faq, index) => (
          <FaQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
