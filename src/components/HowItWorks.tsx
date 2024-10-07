import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Initial Consultation",
    description:
      "We’ll begin with a discussion to understand your project’s vision, goals, and style preferences. Whether it's creating a sleek landing page or an eye-catching animation, we’ll map out the strategy together.",
  },
  {
    icon: <MapIcon />,
    title: "Design Mockups",
    description:
      "I’ll provide you with design concepts, including layout options, color schemes, and animation ideas. You'll have the opportunity to review and provide feedback before we move to the next phase.",
  },
  {
    icon: <PlaneIcon />,
    title: "Development & Animation",
    description:
      "Once the designs are approved, I’ll bring them to life—developing your landing page and animating logos or videos with attention to detail and creativity. Regular updates will keep you in the loop.",
  },
  {
    icon: <GiftIcon />,
    title: "Review & Revisions",
    description:
      "You'll review the completed work, and any necessary adjustments will be made to ensure it perfectly aligns with your brand and goals.",
  },
  {
    icon: <GiftIcon />,
    title: "Final Delivery",
    description:
      "Once you’re happy with the result, I’ll deliver all the necessary files and provide post-project support, ensuring everything runs smoothly after launch.",
  },
];
export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center mt-20 py-24 sm:py-32 hover-text"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Transform your digital presence with cutting-edge landing pages and captivating animations.
       I specialize in crafting visually stunning, high-converting
       landing pages, as well as dynamic video and logo animations that make your brand stand out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
