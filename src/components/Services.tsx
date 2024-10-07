import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import AnimateOnScreen from "./ui/AnimateOnScreen";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Seamless integration and development through collaborative coding techniques, ensuring your web and game projects are both dynamic and scalable.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Efficient project oversight, from initial concept to final execution. I manage timelines, milestones, and deliverables to keep your project on track and aligned with your vision.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Streamlining repetitive tasks to save time and reduce errors, allowing you to focus on what matters most—growing your business and delivering value to your audience.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <AnimateOnScreen direction="left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold hover-image">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text hover-image">
              Client-Centric{" "}
            </span>
            Services
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 hover-image">
            I provide a diverse range of services designed to bring your vision to life with a focus on
            collaboration, efficiency, and innovation. Whether it's creating an immersive website,
            editing professional videos, or developing engaging games, I ensure that every project
            aligns with your goals.
          </p>
          <div className="flex flex-col gap-8 hover-image">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
            <div className="shadow"></div>
          </div>
        </div>
        </AnimateOnScreen>
        <AnimateOnScreen direction="right">
        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain hover-image"
          alt="About services"
        />
        </AnimateOnScreen>
      </div>
    </section>
  );
};
