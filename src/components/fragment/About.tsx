const About = () => {
  return (
    <section id="about" className="py-20 xl:px-80 container text-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-black border-b-4 border-black inline-block">
        About Us
      </h2>
      <div className="flex flex-col text-sm xl:text-base gap-5 rounded-lg text-black bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <p className="text-center">
          We are a team of developers dedicated to providing a powerful platform
          for{" "}
          <span className="text-main font-semibold">
            code visualization and analysis
          </span>
          . <br />
          Our solution enables developers to seamlessly generate and explore{" "}
          <span className="text-main font-semibold">
            Control Flow Graphs (CFG)
          </span>
          , helping them understand program structure with greater clarity.
        </p>
        <p className="text-center">
          Our mission is to simplify the process of analyzing code logic and
          execution paths. We offer intuitive tools for{" "}
          <span className="text-main font-semibold">
            visualizing control flow graphs
          </span>
          ,{" "}
          <span className="text-main font-semibold">
            generating execution paths
          </span>
          , and{" "}
          <span className="text-main font-semibold">evaluating test cases</span>
          , empowering developers to ensure reliable and efficient code.
        </p>
      </div>
    </section>
  );
}

export default About