import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

type FAQ = {
    question : string,
    answer: string,
    index: number
}

const FaQAccordion = (props : FAQ) => {
  return (
    <Accordion className="xl:w-[500px]" type="single" collapsible key={props.index}>
      <AccordionItem value={`item-${props.index}`}>
        <AccordionTrigger className="text-white tex-sm">{props.question}</AccordionTrigger>
        <AccordionContent>{props.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaQAccordion;
