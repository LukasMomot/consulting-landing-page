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
import Funnel from "Funnel";



export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const BuzzwordText = tw.span`text-primary-500 font-semibold`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`; //eslint-disable-line
  const Description = tw.span`inline-block mt-8`;
  const HighlightedInHeading = tw.span`text-primary-500`;
  const imageCss = tw`rounded-4xl`;
  const yearsOfExp = new Date().getFullYear() - 2011;
  const descriptionText = `Seit mehr als ${yearsOfExp} Jahren unterstütze ich namenhaften Kunden aus den diversen Branchen bei der Umsetzung von anspruchsvollen IT-Projekten. Meine Expertise liegt vor allem im Bereich: Webentwicklung und Softwarearchitektur.`

  function calculateCurrentProjects() {
    const projectNumber = 13;
    const projectYear = 2021;
    const projectsPerYear = 1;
    const projectBuffer = 1;
    const offeset = 1;

    return projectNumber + ((new Date().getFullYear() - projectYear) * projectsPerYear) + projectBuffer - offeset;
  }

  const currentProjects = calculateCurrentProjects();

  const stats = [
    {
      key: "Erfolgreiche Kundenprojekte",
      value: `${currentProjects}+`,
    },
    {
      key: "Jahre Erfahrung",
      value: `${yearsOfExp}+`,
    },
    {
      key: "IT Zertifikate",
      value: "7+",
    },
  ]
  return (
    <AnimationRevealPage omitFirstAnimation={true} omitLastAnimation={true} >
      <Hero
        heading={<>Lead Developer & Software Architekt</>}
        headingSecond={<HighlightedText>Lukasz Momot</HighlightedText>}
        description={
          <>
            {descriptionText}
          </>
        }
        subDescription=".NET ⦁ Azure Cloud ⦁ Angular ⦁  NodeJS"
        imageSrc={HeroImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonUrl="#contact"

      />
      <section id="services">
        <Services></Services>
      </section>
      <Funnel />

      <section id="values">
        <Features
          heading={<>Meine Werte für  <HighlightedInHeading>Ihren Erfolg</HighlightedInHeading></>}
          description="Ich stehe für technisches Know-How und Professionalität. Sie erhalten mit mir die besten Leistungen. Um diesen großen Qualitätsansprüchen gerecht zu werden, lebe ich folgende Werte: "
          cards={[
            {
              ImageSvg: TargetIcon,
              title: "Pragmatismus",
              description:
                "Alle Aufgaben gehe ich lösungsorientiert und professionell an.",
            },
            {
              ImageSvg: StarIcon,
              title: "Innovation",
              description:
                "Mit den neusten Standards der Technik und Methodik entwickle ich qualitative Software.",
            },
            {
              ImageSvg: SearchIcon,
              title: "Transparenz",
              description:
                "Durch offenes und transparentes Handeln, baue ich das Vertrauen meiner Kunden auf.",
            },
          ]}
          linkText=""
        />
      </section>
      <section id="facts">
        <Facts heading="Zahlen, die für mich sprechen"
          description="Seit mehreren Jahren schaffe ich durch professionelle Beratung und Entwicklung innovativer Softwarelösungen Mehrwert für meine Kunden. Folgende Fakten sprechen für eine langfristige und erfolgreiche Zusammenarbeit mit mir."
          stats={stats}></Facts>
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
              Möchten Sie mich als <BuzzwordText>Technologiepartner</BuzzwordText> an Ihrer Seite haben oder benötigen Sie Beratung bezüglich der <BuzzwordText>Digitalisierung</BuzzwordText> Ihres Unternehmens?
              <br />
              <br />
              Dann freue ich mich auf Ihre Nachricht. Gemeinsam erschaffen wir moderne sowie innovative digitale Produkte.
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Kontaktanfrage"
          // https://mailtolink.me/
          primaryButtonUrl="mailto:lukasz@momot-consulting.de?subject=Kontaktanfrage%20%C3%BCber%20Website"
          secondaryButtonUrl="https://www.freelancermap.de/profil/lukasz-momot"
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
