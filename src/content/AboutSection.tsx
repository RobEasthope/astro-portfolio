import { LineBreak } from "@/components/decoration/LineBreak/LineBreak";
import { Box } from "@/components/ui/Box/Box";
import { EmailLink } from "@/components/ui/EmailLink/EmailLink";
import { ExternalLink } from "@/components/ui/ExternalLink/ExternalLink";
import { Type } from "@/components/ui/Type/Type";

export function AboutSection() {
  return (
    <>
      <Type as="h1" className="mb-0.5 text-center text-3xl leading-none">
        About
      </Type>

      <LineBreak className="my-2" />
      <Box as="section" className="prose text-base">
        <p>
          I'm a senior front end developer based in Cumbria, England.
          specialising in building (and occasionally designing) digital
          experiences for the web.
        </p>
        <p>
          I'm currently freelancing and working on a number of personal
          projects.
        </p>

        <p>
          I recently returned from a month in Nepal where I summitted{" "}
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
          With over twelve years of industry experience, I have worked for some
          of London's leading agencies, consulted for start ups, and worked with
          clients including the United Nations, NASA, and global
          multi-nationals.
        </p>
        <p>
          Interested in working together?{" "}
          <EmailLink emailAddress="hello@robeasthope.com">Lets talk.</EmailLink>
        </p>
      </Box>
    </>
  );
}
