import { Box } from '@/components/ui/Box/Box';
import { HeaderLogo } from '@/components/navigation/Header/components/HeaderLogo/HeaderLogo';
import { NavListing } from '@/components/navigation/Header/components/NavListing/NavListing';

// import { SmallNavigation } from '@/components/navigation/SmallNavigation/SmallNavigation';

// MARKUP
export function Header() {
  return (
      <Box as="header" className="bg-white px-1 md:px-2 py-0.5 sm:py-1">
        <Box
          as="nav"
          className="mx-auto flex w-full flex-row-reverse flex-wrap items-center justify-between leading-4 sm:flex-row"
        >
          <NavListing links={[{
            title: 'Work',
            href: '/work',
            type: 'internal',
          }, {
            title: 'About',
            href: '/About',
            type: 'internal',
          }]} />

          {/* <HeaderLogo logo={logo} homePageSlug={appSettings?.homePageSlug} /> */}

          <NavListing links={[{
            title: 'Github',
            href: 'https://github.com/RobEasthope',
            type: 'external',
          }, {
            title: 'Email',
            href: 'hello@robeasthope.com',
            type: 'email',
          }]} />

          {/* <SmallNavigation
            logo={logo}
            primaryNavigation={primaryNavigation}
            secondaryNavigation={secondaryNavigation}
            appSettings={appSettings}
          /> */}
        </Box>
      </Box>
  );
}
