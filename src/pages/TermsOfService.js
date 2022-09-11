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

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
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

export default ({ headingText = "Impressum" }) => {
  return (
    <AnimationRevealPage>
      <Header useLinks={false} logoLink={Logo} />
      <Container>
        <ContentWithPaddingXl>
          {/* TODO: Add back button here */}
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            {/* <h1>Impressum</h1> */}
            <h2>Momot Consulting</h2>
            <p>Lukasz Momot</p>
            <p>Stauffenbergallee 40 <br /> 56410 Montabaur</p>
            <p>E-Mail: lukasz@momot-consulting</p>
            <p><strong>Vertretungsberechtigt:</strong></p>
            <p>LukaszMomot</p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:DE346922021</p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};


