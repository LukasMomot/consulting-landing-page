import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import Contact from "components/features/TwoColWithButton.js";
import Facts from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Services from "components/features/DashedBorderSixFeatures";
import contactLogoSrc from "./images/consultant_contact.jpeg";

import HeroImage from "./images/hero_image.jpeg";

import { ReactComponent as TargetIcon } from "feather-icons/dist/icons/target.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as SearchIcon } from "feather-icons/dist/icons/search.svg";



export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`; //eslint-disable-line
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  const yearsOfExp = new Date().getFullYear() - 2011;
  const descriptionText = `Seit mehr als ${yearsOfExp} Jahren unterstütze ich namenhaften Kunden aus den diversen Branchen bei der Umsetzung von anspruchsvollen IT-Projekten. Meine Expertise liegt vor allem im Bereich: Webentwicklung und Softwarearchitektur.`

  // TODO: Calculate number of projects
  // const numberOfProjects = 
  const stats = [
    {
      key: "Realisierte Projekte",
      value: "10+",
    },
    {
      key: "Jahre Erfahrung",
      value: `${yearsOfExp}`,
    },
    {
      key: "IT Zertifikate",
      value: "7+",
    },
  ]
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lead Developer & Software Architect</>}
        headingSecond={<HighlightedText>Lukasz Momot</HighlightedText>}
        description={
          <>
            {descriptionText}
          </>
        }
        subDescription=".NET ⦁ NodeJS ⦁ Azure Cloud ⦁ Angular ⦁ React"
        imageSrc={HeroImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonUrl="#contact"

      />
      <section id="services">
        <Services></Services>
      </section>

      <section id="values">
        <Features
          subheading={<Subheading>Werte</Subheading>}
          heading="We follow these."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          cards={[
            {
              ImageSvg: TargetIcon,
              title: "Pragmatismus",
              description:
                "alle Aufgaben gehe ich lösungsorientiert und professionell an",
            },
            {
              ImageSvg: StarIcon,
              title: "Innovation",
              description:
                "mit den neusten Standards der Technik und Methodik entwickle ich qualitative Software",
            },
            {
              ImageSvg: SearchIcon,
              title: "Transparenz",
              description:
                "durch offenes und transparentes Handeln, baue ich das Vertrauen meiner Kunden auf",
            },
          ]}
          linkText=""
        />
      </section>
      <section id="facts">
        <Facts heading="Die Zahlen, die für mich sprechen" stats={stats}></Facts>
      </section>
      <section id="contact">
        <Contact
          subheading={<Subheading>Kontakt</Subheading>}
          heading={
            <>
              Intresse
              <wbr /> <HighlightedText>geweckt?</HighlightedText>
            </>
          }
          description={
            <Description>
              Möchten Sie mich als <strong>Technologiepartner</strong> and Ihrer Seite haben oder brauchen Sie Beratung, wie Sie Ihr Unternehmen digitaler machen?
              <br />
              <br />
              Dann freue ich mich auf Ihre E-Mail.
              Gemeinsam erschaffen wir moderne und innovative digitale Produkte.
              <br />
              <br />
              Eine vollständige Liste meiner Kompetenzen und Referenzen (Freelancermap.de Profil) finden Sie unter dem Link "Beraterprofil"
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Kontaktanfrage"
          // https://mailtolink.me/
          primaryButtonUrl="mailto:lukasz@momot-consulting.de?subject=Kontaktanfrage%20%C3%BCber%20Website"
          secondaryButtonUrl="https://www.freelancermap.de/freelancer-verzeichnis/profile/entwicklung/205415-profil-lukasz-momot-senior-full-stack-entwickler-software-architekt-net-nodejs-angular-react-typescript-c-.html"
          imageSrc={
            contactLogoSrc
          }
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        />
      </section>
      <Footer />
    </AnimationRevealPage>
  );
};
