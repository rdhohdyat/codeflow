type Step = {
  icon: string;
  title: string;
  description: string;
};

const StepCard = (props : Step) => {
  return (
    <div className="flex items-center gap-5 border-2  border-border  shadow-light p-2 rounded-lg px-4">
      <div className="flex justify-center items-center p-2 text-2xl font-bold rounded-full border-2  border-border  shadow-light h-12 w-12">
        {props.icon}
      </div>
      <div>
        <h1 className="font-semibold text-lg xl:text-xl">{props.title}</h1>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default StepCard;
