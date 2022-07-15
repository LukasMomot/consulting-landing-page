import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import Contact from "components/features/TwoColWithButton.js";
import Facts from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Services from "components/features/DashedBorderSixFeatures";
import contactLogoSrc from "./images/consultant_contact.jpeg";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import HeroImage from "./images/hero_image.jpeg";

import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lead Developer & Software Architect</>}
        headingSecond={<HighlightedText>Lukasz Momot</HighlightedText>}
        description="Seit mehr als 10 Jahren unterstütze ich namenhaften Kunden aus den diversen Branchen bei der Umsetzung von anspruchsvollen IT-Projekten. Meine Expertise liegt vor allem im Bereich: Webentwicklung und Softwarearchitektur."
        subDescription=".NET ⦁ NodeJS ⦁ Angular ⦁ React ⦁ Azure"
        imageSrc={HeroImage}
        // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonUrl="#contact"
        // watchVideoButtonText="Meet The Chefs"
      />
      <section id="services">
        <Services></Services>
      </section>

      {/* <Features
        heading={
          <>
            Technische <HighlightedText>Skills.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}

      <section id="values">
        <Features
          subheading={<Subheading>Our Values</Subheading>}
          heading="We follow these."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          cards={[
            {
              ImageSvg: PriceIcon,
              title: "Pragmatismus",
              description:
                "alle Aufgaben gehe ich lösungsorientiert und professionell an",
            },
            {
              ImageSvg: PriceIcon,
              title: "Innovation",
              description:
                "mit den neusten Standards der Technik und Methodik entwickle ich qualitative Software",
            },
            {
              ImageSvg: PriceIcon,
              title: "Transparenz",
              description:
                "durch offenes und transparentes Handeln, baue ich das Vertrauen meiner Kunden auf",
            },
          ]}
          linkText=""
        />
      </section>
      <section id="facts">
        <Facts></Facts>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Kontaktanfrage"
          // https://mailtolink.me/
          primaryButtonUrl="mailto:lukasz@momot-consulting.de?subject=Kontaktanfrage%20%C3%BCber%20Website"
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
