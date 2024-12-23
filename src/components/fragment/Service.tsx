import ServiceCard from "../ServiceCard";

type Service = {
  title: string;
  description: string;
};

const Service = () => {
  const services: Service[] = [
    {
      title: "Control Flow Graph Visualization",
      description:
        "Automatically generate Control Flow Graphs (CFG) from your code.Visualize the structure of your program to better understand its execution flow.",
    },
    {
      title: " Path Generation and Analysis",
      description:
        "Identify all possible execution paths in your program. Generate test paths to support effective path-based testing strategies.",
    },
    {
      title: "Test Case Evaluation",
      description:
        "Input your test cases and validate them against the generated paths to ensure optimal code coverage and reliability.",
    },
  ];

  return (
    <section
      id="service"
      className="py-20 xl:px-40 container bg-white border-t-2 border-black text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-black border-b-4 border-black inline-block">
        Our Services
      </h2>
      <p className="text-lg text-center mb-12 text-gray-700">
        Discover powerful tools for visualizing, analyzing, and evaluating your
        program's control flow with ease.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
