import { LineBreak } from "@/components/decoration/LineBreak/LineBreak";
import { Box } from "@/components/ui/Box/Box";
import { EmailLink } from "@/components/ui/EmailLink/EmailLink";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";
import { Type } from "@/components/ui/Type/Type";

export function AboutSection() {
  return (
    <Box as="section" id="about" className="mx-auto max-w-prose">
      <Type as="h1" className="text-center text-2xl leading-tight">
        Hello,
        <br /> I'm Rob Easthope.
      </Type>

      <LineBreak className="my-1" align="centre" />
      <Box as="section" className="prose text-base">
        <p>
          I'm a senior front end developer based in Cumbria, England.
          specialising in building (and occasionally designing) digital
          experiences for the web.
        </p>
        <p>
          With over twelve years of industry experience, I have worked for some
          of London's leading agencies, consulted for start ups, and worked with
          clients including the United Nations, NASA, and global
          multi-nationals.
        </p>
        <p>
          Outside of work I can usually by found on the fells, paragliding or
          trail running. I recently returned from a month in Nepal where I
          summitted{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Pokalde">
            Pokalde
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Imja_Tse">
            Island Peak
          </ExternalLink>
          , and{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Lobuche">
            Lobuche East
          </ExternalLink>
          .
        </p>
        <p>
          You can find me on{" "}
          <ExternalLink href="https://github.com/RobEasthope">
            Github
          </ExternalLink>
          , on{" "}
          <ExternalLink href="https://www.linkedin.com/in/rob-easthope/">
            LinkedIn
          </ExternalLink>
          .
        </p>
        <p>
          Want to chat? Feel free to{" "}
          <EmailLink emailAddress="hello@robeasthope.com">email me</EmailLink>.
        </p>
      </Box>
    </Box>
  );
}