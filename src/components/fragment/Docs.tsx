import FlowChart from "../Flowchart";
import StepCard from "../StepCard";

type Steps = {
  title: string;
  description: string;
  icon: string;
};

const Docs = () => {

  const steps: Steps[] = [
    {
      title: "Transform Python Code to AST",
      description:
        "Convert the Python source code into an Abstract Syntax Tree (AST), which represents the syntactic structure of the code.",
      icon: "📜",
    },
    {
      title: "Identify AST Nodes",
      description:
        "Traverse the AST to identify and classify its nodes, which represent various syntactic constructs like loops, conditionals, and assignments.",
      icon: "🔍",
    },
    {
      title: "Separate Blocks Based on Rules",
      description:
        "Identify and group code statements into logical blocks based on control flow rules, such as loops and conditionals.",
      icon: "🔲",
    },
    {
      title: "Create CFG Nodes from AST Nodes",
      description:
        "Convert the identified blocks into nodes in the Control Flow Graph (CFG), each representing a logical unit of execution.",
      icon: "🧩",
    },
    {
      title: "Add Edges Between CFG Nodes",
      description:
        "Add edges between the CFG nodes to represent the flow of control between different blocks in the program.",
      icon: "🔗",
    },
    {
      title: "Visualize the CFG",
      description:
        "Generate a visual representation of the Control Flow Graph (CFG) to easily understand the flow of execution in the code.",
      icon: "📊",
    },
  ];

  return (
    <section id="docs" className="py-20 xl:px-60 container text-center">
      <h2 className="text-3xl text-center font-bold  mb-8 text-black border-b-4 border-black inline-block">
        How CodeFlow Work?
      </h2>
      <div className="xl:flex gap-5 text-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1  gap-5">
          {steps.map((step) => (
            <StepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="border-2  border-border mt-5 xl:mt-0 shadow-light  h-[700px] xl:w-[800px] rounded-lg">
          <FlowChart />
        </div>
      </div>
    </section>
  );
};

export default Docs;
