type Service = {
  title: string;
  description: string;
};

const ServiceCard = (props: Service) => {
  return (
    <div className="bg-white border-2 rounded-lg border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 text-center hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all ease-in-out">
      <h3 className="text-xl font-semibold mb-4">{props.title}</h3>
      <p className="text-gray-600 mb-4">{props.description}</p>
    </div>
  );
};

export default ServiceCard;
