// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import AnimateOnScreen from "./ui/AnimateOnScreen";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <AnimateOnScreen direction="fade">
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src={pilot}
              alt=""
              className="w-[200px] object-contain rounded-lg hover-image"
            />
            <div className="bg-green-0 flex flex-col justify-between hover-text">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    About{" "}
                  </span>
                  Me
                </h2>
                <div className="shadow"></div>
                <p className="text-xl text-muted-foreground mt-4">
                  I’m a creative professional specializing in crafting modern
                  landing pages, video & logo animations, and digital solutions
                  that help businesses thrive. With a strong focus on user experience,
                  accessibility, and visual storytelling, I transform your ideas into engaging digital experiences.<br />
                  With years of expertise and a passion for innovative design, I’ve had the pleasure of working
                  with clients worldwide, creating solutions that not only look great but also drive results.
                </p>
              </div>
              {/* <Statistics /> */}
            </div>
          </div>
        </div>
      </AnimateOnScreen>
    </section>
  );
};
