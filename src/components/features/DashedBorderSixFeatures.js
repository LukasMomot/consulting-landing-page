/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import { ReactComponent as CodeIcon } from "feather-icons/dist/icons/code.svg"
import { ReactComponent as CloudIcon } from "feather-icons/dist/icons/cloud.svg"
import { ReactComponent as ArchitectureIcon } from "feather-icons/dist/icons/layers.svg"
import { ReactComponent as MethodikIcon } from "feather-icons/dist/icons/check-square.svg"
import { ReactComponent as AgileIcon } from "feather-icons/dist/icons/users.svg"
import { ReactComponent as KnowhowIcon } from "feather-icons/dist/icons/clipboard.svg"

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
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-relaxed text-left break-words`}
  }
`;

const TextHighlighted = tw.span`font-semibold text-primary-500`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const ListContainer = tw.ul`flex flex-col items-start justify-start mt-2`;
const ListItem = tw.li`mb-0.5`;
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
      description: (
        <>
          Leidenschaftlich implementiere ich komplexe Webprojekte sowohl im <TextHighlighted>Frontend</TextHighlighted> als auch im <TextHighlighted>Backend</TextHighlighted>.
          Ich setze auf qualitative und innovative Softwareentwicklung unter Einhaltung von zahlreichen Best Practices.
          <ListContainer>
            <ListItem>✅ Clean Code</ListItem>
            <ListItem>✅ Automatisierte Tests</ListItem>
            <ListItem>✅ Continous Integration (CI/CD)</ListItem>
            <ListItem>✅ SOLID</ListItem>
            <ListItem>✅ und viel mehr… </ListItem>
          </ListContainer>
        </>
      )
    },
    {
      image: ArchitectureIcon, title: "Architektur", description: (<>
        Eine gute Architektur ist ein wichtiger Erfolgsfaktor jedes Produkts.
        Beim Entwurf der Software lege ich großen Wert darauf, dass die Architektur zukunftsfähig, modern und vor allem gut an die Anforderungen angepasst sein sollte. Nur eine pragmatische und maßgeschneiderte Architektur hilf dem Unternehmen seine Ziele bestens zu erreichen.
        Meine Kompetenzen im diesen Bereich beweist das anerkannte Zertifikat.
        <ListContainer>
          <ListItem><TextHighlighted>🏆 iSAQB Certified Professional for Software Architecture</TextHighlighted></ListItem>
        </ListContainer>
      </>)

    },
    {
      image: MethodikIcon, title: "Methodik", description: (
        <>
          Ein gutes und effizientes Team kann im Projekt viel erreichen. Die gängigen Methoden und Best Practices aus dem Bereich <TextHighlighted>Technical Leadership</TextHighlighted> helfen dabei den Projekterfolg zu sichern.
          Ich unterstütze meinen Kunden folgende Methoden im Projektalltag einzuführen.
          <ListContainer>
            <ListItem>✅ Technische Schulden beseitigen</ListItem>
            <ListItem>✅ Anforderungsmanagements</ListItem>
            <ListItem>✅ Durchführung von Code Reviews</ListItem>
            <ListItem>✅ Pair- und Mob-Programming</ListItem>
            <ListItem>✅ und viel mehr… </ListItem>
          </ListContainer>
        </>)
    },
    {
      image: CloudIcon, title: "Cloud", description: (
        <>
          Moderne Cloud-basierte Systeme gehören der Zukunft an. Die Cloud bietet weitreichende Vorteile im Bereich: Skalierbarkeit, Performanz und "Time to Market". 
          Meine ausgiebige Erfahrung im Bereich <TextHighlighted>Cloud Native</TextHighlighted> und <TextHighlighted>Serverless</TextHighlighted> hilft Ihnen sowohl die bestehende Legacy- Software zu modernisieren als auch neue Projekte erfolgreich umzusetzen.
          <ListContainer>
            <ListItem> <span tw="text-blue-400">☁ Microsoft Azure</span><TextHighlighted></TextHighlighted></ListItem>
          </ListContainer>
        </>
      )
    },
    {
      image: AgileIcon, title: "Agile", description: (
        <>
          Agiles Arbeiten schafft Transparenz und Flexibilität. Für ein modernes Projekt ist heutzutage ein agiles Vorgehen unabdingbar.
          Seit mehreren Jahren arbeite ich also in verschiedenen Rollen nach agilen Methodiken wie SCRUM oder Kanban. Meine Kenntnisse beweisen folgende Zertifikate:
          <br />
          <ListContainer>
            <ListItem>
              <TextHighlighted>🏆 Professional Scrum Master I</TextHighlighted>
            </ListItem>
            <ListItem>
              <TextHighlighted>🏆 Scaled Professional Scrum</TextHighlighted>
            </ListItem>
          </ListContainer>
        </>
      )
    },
    {
      image: KnowhowIcon, title: "Know-How Transfer", description: (
        <>
          Gerne gebe ich mein Wissen and die Mitarbeiter des Kunden weiter. Ich bevorzuge dabei sowohl umfangreiche Formen des Wissenstransfer wie Workshops und Präsentationen, als auch direkte wie Coaching und Mentoring.
          Bei langfristigen Projekten kümmere ich mich als Lead Developer um die Einarbeitung neuer Teammitglieder.
        </>
      )
    }
  ];


  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Meine <span tw="text-primary-500">Dienstleistungen</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                {<card.image></card.image>}
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <div className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </div>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
