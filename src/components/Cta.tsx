import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1 hover-image">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Transform Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Vision Into Reality{" "}
            </span>
            With Our Expertise
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Whether it's video editing, web development, game development, or WordPress solutions,
            we turn your ideas into stunning digital experiences. Let us handle the technicalities
            while you focus on your passion.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 hover-image">
          <Button className="w-full md:mr-4 md:w-auto">
            <a
              rel="noreferrer noopener"
              href="#Contact-us"
              key="Contact-us">
              Request a Consultation
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};
