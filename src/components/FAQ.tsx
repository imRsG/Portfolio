import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you create modern landing pages?",
    answer: "Yes, I specialize in designing sleek, modern landing pages that are optimized for user engagement and conversions.",
    value: "item-1",
  },
  {
    question: "Can you provide video and logo animation services?",
    answer:
      "Absolutely! I offer professional video and logo animations that help brands stand out and communicate their message effectively.",
    value: "item-2",
  },
  {
    question: "What web development services are included?",
    answer:
      "I handle all aspects of web development, from frontend design to backend functionality, creating responsive and scalable websites tailored to your needs.",
    value: "item-3",
  },
  {
    question: "Do you offer video editing services?",
    answer: "Yes, I provide high-quality video editing services to enhance your content and tell your story in a compelling way.",
    value: "item-4",
  },
  {
    question: "Can you assist with game development projects?",
    answer:
      "Yes, I work on game development projects, providing interactive and engaging experiences for your users through custom game solutions.",
    value: "item-5",
  },
  {
    question: "Do you offer mobile app development services?",
    answer:
      "Yes, I develop mobile applications for both iOS and Android, creating seamless, user-friendly experiences tailored to your business goals.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#Contact-us"
          key="Contact-us"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
