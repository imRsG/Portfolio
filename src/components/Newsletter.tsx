// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

// export const Newsletter = () => {
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log("Subscribed!");
//   };

//   return (
//     <section id="newsletter">
//       <hr className="w-11/12 mx-auto" />
//       <div className="container py-24 sm:py-32">
//         <h3 className="text-center text-4xl md:text-5xl font-bold">
//           Join Our Daily{" "}
//           <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//             Newsletter
//           </span>
//         </h3>
//         <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
//           Lorem ipsum dolor sit amet consectetur.
//         </p>
//         <form
//           className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
//           onSubmit={handleSubmit}
//         >
//           <div className="shadow"></div>
//           <Input
//             placeholder="leomirandadev@gmail.com"
//             className="bg-muted/50 dark:bg-muted/80 "
//             aria-label="email"
//           />
//           <Button>Subscribe</Button>
//         </form>
//       </div>
//       <hr className="w-11/12 mx-auto" />
//     </section>
//   );
// };
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AnimateOnScreen from "./ui/AnimateOnScreen";
import profilepic from "..//assets/img12.png"

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Message Sent!");
  };

  return (
    // <section id="contact-us">
    //   <hr className="w-11/12 mx-auto" />
    //   <div className="container py-24 sm:py-32">
    //     <h3 className="text-center text-4xl md:text-5xl font-bold">
    //       Contact <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Us</span>
    //     </h3>
    //     <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
    //       We're here to help! Send us your queries.
    //     </p>
    //     <form
    //       className=" w-3/6 flex-row md:w-8/12 lg:w-6/12 mx-auto gap-4"
    //       onSubmit={handleSubmit}
    //     >
    //       <Input
    //         placeholder="Your Name"
    //         className="bg-muted/50  mb-4 dark:bg-muted/80"
    //         aria-label="name"
    //         required
    //       />
    //       <Input
    //         placeholder="Your Email"
    //         className="bg-muted/50  mb-4 dark:bg-muted/80"
    //         aria-label="email"
    //         type="email"
    //         required
    //       />
    //       <textarea
    //         placeholder="Your Message"
    //         className="bg-muted/50 mb-4 dark:bg-muted/80 w-full h-32 md:h-40 lg:h-48 p-4 resize-none rounded-md"
    //         aria-label="message"
    //         required
    //       />
    //       <br></br>
    //       <Button className="mt-4">Send Message</Button>
    //     </form>
    //   </div>
    //   <hr className="w-11/12 mx-auto" />
    // </section>
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
              className="w"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="Your Name"
                className="bg-muted/50  mb-4 dark:bg-muted/80"
                aria-label="name"
                required
              />
              <Input
                placeholder="Your Email"
                className="bg-muted/50  mb-4 dark:bg-muted/80"
                aria-label="email"
                type="email"
                required
              />
              <textarea
                placeholder="Your Message"
                className="bg-muted/50 mb-4 dark:bg-muted/80 w-full h-32 md:h-40 lg:h-48 p-4 resize-none rounded-md"
                aria-label="message"
                required
              />
              <br></br>
              <Button className="mt-4">Send Message</Button>
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
