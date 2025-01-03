import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-transparent ">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 hover-text">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://avatars.githubusercontent.com/u/55122666?s=400&u=a12926a383ad327d4b634b14f177660a0749627e&v=4"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Rishi Gupta</CardTitle>
            <CardDescription>@imRsG</CardDescription>
          </div>
        </CardHeader>
        {/* <CardContent>This landing page is awesome!</CardContent> */}
      </Card>
      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-transparent ">
        <CardHeader className="mt-8 flex justify-center items-center pb-2 hover-text">
          <img
            src="https://avatars.githubusercontent.com/u/55122666?s=400&u=a12926a383ad327d4b634b14f177660a0749627e&v=4"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center pt-5">Rishi Gupta</CardTitle>
          <CardDescription className="font-normal text-primary">
            Frontend Developer
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p className="hover-text">
            I really enjoy transforming ideas into functional software that
            exceeds expectations
          </p>
        </CardContent>
        <CardFooter>
          <div className="hover-text">
            <a
              rel="noreferrer noopener"
              href="https://github.com/imRsG"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://x.com/RishiGupta17539?t=dlL1L6W2QvtseNoRKNngkw&s=09"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/rishi-gupta-4a7b96215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
      {/* Pricing */}

      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-transparent">
        <CardHeader className="hover-text">
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Sample
            </Badge>
          </CardTitle>
          <CardDescription>
            {/* Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit. */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" > <a
            rel="noreferrer noopener"
            href="#Contact-us"
            key="Contact-us">
            Start Free Sample Trial
          </a>
          </Button>
        </CardContent>
      </Card>
      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-transparent">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4 hover-text">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              {/* Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm. */}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};