

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AnimateOnScreen from "./ui/AnimateOnScreen";
import profilepic from "..//assets/img12.png"
import { useForm, ValidationError } from '@formspree/react';

export const Newsletter = () => {

  const [state, handleSubmit] = useForm("xyzygnzd");
  if (state.succeeded) {
    return (console.log("thanks for submitting response"))
  }
  return (
    <section id="contact-us" className="container grid lg:grid-cols-2 place-items-center  gap-10">
      <AnimateOnScreen direction="left" >
        <div className="text-center lg:text-start space-y-6 hover-text">
          <h3 className="text-center text-4xl md:text-5xl font-bold">
            Contact <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Us</span>
          </h3>
          <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
            We're here to help! Send us your queries.
          </p>
          <form
            action="https://formspree.io/f/xyzygnzd"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Input
              id="name"
              type="name"
              name="name"
              placeholder="Your Name"
              className="bg-muted/50  mb-4 dark:bg-muted/80"
              aria-label="name"
              required
            />
            <Input
              placeholder="Your Email"
              className="bg-muted/50  mb-4 dark:bg-muted/80"
              aria-label="email"
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              placeholder="Your Message"
              className="bg-muted/50 mb-4 dark:bg-muted/80 w-full h-32 md:h-40 lg:h-48 p-4 resize-none rounded-md"
              aria-label="message"
              id="message"
              name="message"
              required
            />
            <br></br>
            <Button className="mt-4" type="submit" disabled={state.submitting}>Send Message</Button>
          </form>
        </div>
      </AnimateOnScreen>
      <div className="z-10">
        <AnimateOnScreen direction="right">
          <img
            src={profilepic}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain hover-image"
            alt="About services"
          />
        </AnimateOnScreen>
      </div>
    </section>
  );
};
