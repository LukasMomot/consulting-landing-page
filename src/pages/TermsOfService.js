import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { SectionHeading } from "components/misc/Headings";
import Logo from "../images/logo_consulting.png";
import { ReactComponent as BackIcon } from "feather-icons/dist/icons/chevron-left.svg";

const BackFeature = styled.span`
  ${tw`flex -ml-2`}
  a {
    ${tw`border-b-2 text-gray-800 border-transparent hocus:text-primary-500 text-lg pb-1 transition duration-300 mt-2`}
  }
  svg {
    ${tw`w-8 h-8 mt-1 stroke-current text-primary-500`}
  `;

const Link = styled.a``;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-2`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const modes = {
  impressum: {
    header: "Impressum",
    text: (
      <>
        <h2>Momot Consulting</h2>
        <p>Lukasz Momot</p>
        <p>
          Stauffenbergallee 40 <br /> 56410 Montabaur
        </p>
        <p>E-Mail: lukasz@momot-consulting.de</p>
        <br />
        <p>
          <strong>Vertretungsberechtigt:</strong>
        </p>
        <p>Lukasz Momot</p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE346922021
        </p>
        <br />
        <p>
          <strong>Berufshaftpflichtversicherung</strong>
        </p>
        <p>
          <a rel="noreferrer" href="https://www.exali.de/siegel/Momot-Consulting" target="_blank" title="Weitere Informationen zur
            IT-Haftpflicht von
            Momot Consulting"><img border="0" src="https://www.exali.de/siegel/siegel_de-1_ecb4d2f0690bafb19be0ed4a4eda9399.png" width="90" height="90" alt="Weitere Informationen zur
            IT-Haftpflicht von
            Momot Consulting" /></a>
        </p>
        <br />
        <p>Externe Links: Die Inhalte externer Links unterliegen der ausschließlichen Haftung der jeweiligen Anbieter.</p>
        <p>Die Webseite wurde auf einer Vorlage gebaut.  
        <a  rel="noreferrer" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">Treact Template</a>
        </p>
        <br />
        <p>
          <strong>Quelle: </strong><a href="https://sos-recht.de/impressums-generator/">SOS Recht Impressum Generator</a>
        </p>
      </>
    )
  },
  datenschutz: {
    header: "Datenschutz",
    text: (
      <>
        <p>Test Datenschutz</p>
      </>
    )
  }
}

export default ({ headingText = "Impressum", mode = "impressum" }) => {
  const { header, text } = modes[mode];
  return (
    <AnimationRevealPage>
      <Header useLinks={false} logoLink={Logo} />
      <Container>
        <ContentWithPaddingXl>
          <BackFeature>
            <BackIcon></BackIcon>
            <Link href="/">Zurück</Link>
          </BackFeature>
          <HeadingRow>
            <Heading>{header}</Heading>
          </HeadingRow>
          <Text>
            {text}
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
