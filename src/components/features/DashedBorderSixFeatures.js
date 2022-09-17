import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

// import SupportIconImage from "../../images/support-icon.svg";
// import ShieldIconImage from "../../images/shield-icon.svg";
import { ReactComponent as CodeIcon } from "feather-icons/dist/icons/code.svg"
import { ReactComponent as CloudIcon } from "feather-icons/dist/icons/cloud.svg"
import { ReactComponent as ArchitectureIcon } from "feather-icons/dist/icons/layers.svg"
import { ReactComponent as MethodikIcon } from "feather-icons/dist/icons/check-square.svg"
import { ReactComponent as AgileIcon } from "feather-icons/dist/icons/users.svg"
import { ReactComponent as KnowhowIcon } from "feather-icons/dist/icons/clipboard.svg"


// import CustomizeIconImage from "../../images/customize-icon.svg";
// import FastIconImage from "../../images/fast-icon.svg";
// import ReliableIconImage from "../../images/reliable-icon.svg";
// import SimpleIconImage from "../../images/simple-icon.svg";

// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-12`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    svg {
      ${tw`w-8 h-8 stroke-current text-primary-500`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-relaxed text-justify`}
  }
`;

const TextHighlighted = tw.span`font-semibold text-primary-500`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  // const cards = [
  //   {
  //     imageSrc: PriceIcon,
  //     title: "Ads Management",
  //     description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
  //   },
  //   { imageSrc: SupportIconImage, title: "Video Marketing" },
  //   { imageSrc: CustomizeIconImage, title: "Customer Relation" },
  //   { imageSrc: ReliableIconImage, title: "Product Outreach" },
  //   { imageSrc: FastIconImage, title: "PR Campaign" },
  //   { imageSrc: SimpleIconImage, title: "Product Expansion" }
  // ];

  const cards = [
    {
      image: CodeIcon,
      title: "Fullstack Softwareentwicklung",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    {
      image: ArchitectureIcon, title: "Architektur", description: (<>
        Eine gute Architektur ist ein wichtiger Erfolgsfaktor jedes Produkts.
        Beim Entwurf  lege ich großen Wert darauf, dass die Architektur  zukunftsfähig, modern aber vor allem gut an die Anforderungen angepasst sein sollte.
        Nur eine pragmatische und maß-geschnittene hilf dem Unternehmen seine Ziele bestens zu erreichen.
        <br/>
        <br />
        <TextHighlighted>🏆 iSAQB Certified Professional for Software Architecture</TextHighlighted>
      </>)

    },
    {
      image: MethodikIcon, title: "Methodik", description: (
        <>
          We create and manage ads that you need, <br /> from <TextHighlighted> Hello World</TextHighlighted> creation to deployment. Lorem ipsum donor sit amet consicou.
        </>)
    },
    { image: CloudIcon, title: "Cloud" },
    { image: AgileIcon, title: "Agile" },
    { image: KnowhowIcon, title: "Know-How Transfer" }
  ];


  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Meine <span tw="text-primary-500">Dienstleistungen</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                {/* <img src={card.imageSrc || defaultCardImage} alt="" /> */}
                {/* <PriceIcon /> */}
                {<card.image></card.image>}
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
