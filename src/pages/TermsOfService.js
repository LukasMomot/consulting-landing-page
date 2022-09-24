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
          <a rel="noreferrer" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">Treact Template</a>
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
        <div>
          <h1>Datenschutzerklärung</h1>
          <div>
            <p>Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von
              personenbezogenen Daten (im Folgenden auch nur als "Daten" bezeichnet) aufklären. Personenbezogene Daten
              sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name, Adresse, E-Mail-Adresse oder
              Ihr Nutzerverhalten. Die Datenschutzerklärung gilt für alle von uns vorgenommene Daten-Verarbeitungsvorgänge
              sowohl im Rahmen unserer Kerntätigkeit als auch für die von uns vorgehaltenen Online-Medien.</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Wer bei uns für die Datenverarbeitung verantwortlich ist</h2>
            <p>Verantwortlich für die Datenverarbeitung ist:</p>
          </div>
        </div>
        <p>Momot Consulting<br />Lukasz Momot<br />Stauffenbergallee 40<br />56410
          Montabaur<br />Deutschland<br />lukasz@momot-consulting.de<br />
        </p>
        <div>
          <div>
            <h2>Verarbeitung Ihrer Daten im Rahmen der Kerntätigkeit unseres Unternehmens</h2>
            <p>Sofern Sie unser Kunde oder Geschäftspartner sind oder sich für unsere Leistungen interessieren, richtet sich
              Art, Umfang und Zweck der Verarbeitung Ihrer Daten nach dem zwischen uns bestehenden vertraglichen bzw.
              vorvertraglichen Beziehungen. In diesem Sinne gehören zu den von uns verarbeiteten Daten all diejenigen
              Daten, die zum Zwecke der Inanspruchnahme der vertraglichen bzw. vorvertraglichen Leistungen durch Sie
              bereitgestellt werden bzw. wurden und die zur Abwicklung Ihrer Anfrage oder des zwischen uns geschlossenen
              Vertrages benötigt werden. Sofern sich aus den weiteren Hinweisen dieser Datenschutzerklärung nichts anderes
              ergibt, beschränkt sich die Verarbeitung Ihrer Daten sowie deren Weitergabe an Dritte auf diejenigen Daten,
              die zur Beantwortung Ihrer Anfragen und/oder zur Erfüllung des zwischen Ihnen und uns geschlossenen
              Vertrages, zur Wahrung unserer Rechte sowie zur Erfüllung gesetzlicher Pflichten erforderlich und zweckmäßig
              sind. Welche Daten hierfür erforderlich sind, teilen wir Ihnen vor oder im Rahmen der Datenerhebung mit.
              Soweit wir zur Erbringung unserer Leistungen Drittanbieter einsetzen, gelten die Datenschutzhinweise der
              jeweiligen Drittanbieter.</p>
            <p><strong>Betroffene Daten:</strong></p>
            <ul>
              <li>Bestandsdaten (bspw. Namen, Adressen)</li>
              <li>Zahlungsdaten (bspw. Bankverbindungsdaten, Rechnungen)</li>
              <li>Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
              <li>Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
            </ul>
            <p><strong>Betroffene Personen: </strong>Interessenten, Geschäfts- und Vertragspartner</p>
            <p><strong>Verarbeitungszweck: </strong>Abwicklung vertraglicher Leistungen, Kommunikation sowie Beantwortung
              von Kontaktanfragen, Büro und Organisationsverfahren</p>
            <p><strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b DSGVO,
              rechtliche Verpflichtung, Art. 6 Abs. 1 lit. c DSGVO, berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Ihre Rechte nach der DSGVO</h2>
            <p>Nach der DSGVO stehen Ihnen die nachfolgend aufgeführten Rechte zu, die Sie jederzeit bei dem in Ziffer 1.
              dieser Datenschutzerklärung genannten Verantwortlichen geltend machen können:</p>
            <ul>
              <li><strong>Recht auf Auskunft:</strong> Sie haben das Recht, von uns Auskunft darüber zu verlangen, ob und
                welche Daten wir von Ihnen verarbeiten.</li>
              <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung unrichtiger oder
                Vervollständigung unvollständiger Daten zu verlangen.</li>
              <li><strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.</li>
              <li><strong>Recht auf Einschränkung:</strong> Sie haben in bestimmten Fällen das Recht zu verlangen, dass
                wir Ihre Daten nur noch eingeschränkt bearbeiten.</li>
              <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht zu verlangen, dass wir Ihnen oder
                einem anderen Verantwortlichen Ihre Daten in einem strukturierten, gängigen und maschinenlesebaren
                Format übermitteln.</li>
              <li><strong>Beschwerderecht</strong>: Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
                Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres Arbeitsplatzes oder unseres
                Firmensitzes.</li>
            </ul>
            <h3>Widerrufsrecht</h3>
            <p>Sie haben das Recht, die von Ihnen erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.</p>
            <h3>Widerspruchsrecht</h3>
            <p>Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten, die wir auf unser berechtigtes Interesse
              nach Art. 6 Abs. 1 lit. f DSGVO stützen, Widerspruch einzulegen. Sofern Sie von Ihrem Widerspruchsrecht
              Gebrauch machen, bitten wir Sie um die Darlegung der Gründe. Wir werden Ihre personenbezogenen Daten dann
              nicht mehr verarbeiten, es sei denn, wir können Ihnen gegenüber nachweisen, dass zwingende schutzwürdige
              Gründe an der Datenverarbeitung Ihre Interessen und Rechte überwiegen.</p>
            <p><span><strong>Unabhängig vom vorstehend Gesagten, haben Sie das
              jederzeitige Recht, der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und
              Datenanalyse zu widersprechen.</strong></span></p>
            <p>Ihren Widerspruch richten Sie bitte an die oben angegebene Kontaktadresse des Verantwortlichen.</p>
            <h2>Wann löschen wir Ihre Daten?</h2>
            <p>Wir löschen Ihre Daten dann, wenn wir diese nicht mehr brauchen oder Sie uns dies vorgeben. Das bedeutet,
              dass - sofern sich aus den einzelnen Datenschutzhinweisen dieser Datenschutzerklärung nichts anderes ergibt
              - wir Ihre Daten löschen,</p>
            <ul>
              <li>wenn der Zweck der Datenverarbeitung weggefallen ist und damit die jeweilige in den einzelnen
                Datenschutzhinweisen genannte Rechtsgrundlage nicht mehr besteht, also bspw.<ul>
                  <li>nach Beendigung der zwischen uns bestehenden vertraglichen oder mitgliedschaftlichen Beziehungen
                    (Art. 6 Abs. 1 lit. a DSGVO) oder</li>
                  <li>nach Wegfall unseres berechtigten Interesses an der weiteren Verarbeitung oder Speicherung Ihrer
                    Daten (Art. 6 Abs. 1 lit. f DSGVO),</li>
                </ul>
              </li>
              <li>wenn Sie von Ihrem Widerrufsrecht Gebrauch machen und keine anderweitige gesetzliche Rechtsgrundlage für
                die Verarbeitung im Sinne von Art. 6 Abs. 1 lit. b-f DSGVO eingreift,</li>
              <li>wenn Sie vom Ihrem Widerspruchsrecht Gebrauch machen und der Löschung keine zwingenden schutzwürdigen
                Gründe entgegenstehen.</li>
            </ul>
            <p>Sofern wir (bestimmte Teile) Ihre(r) Daten jedoch noch für andere Zwecke vorhalten müssen, weil dies etwa
              steuerliche Aufbewahrungsfristen (in der Regel 6 Jahre für Geschäftskorrespondenz bzw. 10 Jahre für
              Buchungsbelege) oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen aus vertraglichen
              Beziehungen (bis zu vier Jahren) erforderlich machen oder die Daten zum Schutz der Rechte einer anderen
              natürlichen oder juristischen Person gebraucht werden, löschen wir (den Teil) Ihre(r) Daten erst nach Ablauf
              dieser Fristen. Bis zum Ablauf dieser Fristen beschränken wir die Verarbeitung dieser Daten jedoch auf diese
              Zwecke (Erfüllung der Aufbewahrungspflichten).</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Clouddienste</h2>
            <p>Wir nutzen Clouddienste insbesondere</p>
            <ul>
              <li>zur Speicherung und Bearbeitung von Dokumenten,</li>
              <li>zum Versenden von Dokumenten per E-Mail bzw. zum Austausch von Dateien jeglicher Art,</li>
              <li>für unsere kalendarische Terminverwaltung,</li>
              <li>zur Vorbereitung und Ausführung von Präsentationen und Tabellenkalkulationen,</li>
              <li>zur Veröffentlichung von Dateien jeglicher Art,</li>
              <li>für die interne und externe Kommunikation mittels Chats, Audio- und Videokonferenzen.</li>
            </ul>
            <p>Die Softwareanwendungen, die wir zu diesen Zwecken einsetzen, stellen uns der/die unten genannten Anbieter
              auf deren Servern zur Verfügung. Auf diese Server greifen wir über das Internet zu. Soweit Sie uns Ihre
              Daten im Rahmen der Kommunikation mit uns bzw. in anderweitigen von uns mittels dieser Datenschutzerklärung
              erläuterten Vorgängen übermitteln, verarbeiten wir diese Daten in dem von uns genutzten Clouddienst. Das
              bedeutet, dass Ihre Daten auf den Servern des Clouddient-Drittanbieters gespeichert werden. Die
              Drittanbieter verarbeiten zur Sicherung ihrer Server sowie zur Optimierung ihrer Dienstleistungen Nutzungs-
              und Metadaten. Wir verarbeiten und speichern insbesondere Ihre Kontakt-, Kunden- und Vertragsdaten.</p>
            <p>Sollten wir mittels des von uns genutzten Clouddienstes Dateien jeglicher Art öffentlich über unsere
              Interenetpräsenz zur Verfügung stellen, kann der jeweilige Drittanbieter des Clouddienstes Cookies auf Ihrem
              Computersystem speichern, sofern Sie auf diese Dateien zugreifen. Der Dienstanbieter kann die so erhobenen
              Daten verarbeiten, um Ihr Nutzungsverhalten bzw. Ihre Browser-Einstellungen zu analysieren.<br /><br />Wir
              weisen darauf hin, dass je nach Sitzland des nachstehend genannten Diensteanbieters die nachfolgend näher
              benannten Daten auf Server außerhalb des Raumes der Europäischen Union übertragen und verarbeitet werden
              können. Es besteht in diesem Fall das Risiko, dass das von der DSGVO vorgeschriebene Datenschutzniveau nicht
              eingehalten und die Durchsetzung Ihrer Rechte nicht oder nur erschwert erfolgen kann. Sofern der von uns
              eingesetzte Diensteanbieter das Verarbeiten der Daten ausschließlich innerhalb der EU anbietet,
              beabsichtigen wir - sofern derzeit ohnehin nicht bereits umgesetzt - Ihre Daten ausschließlich dort zu
              verarbeiten.</p>
            <p><strong>Betroffene Daten:</strong></p>
            <ul>
              <li>Bestandsdaten (bspw. Namen, Adressen),</li>
              <li>Kontaktdaten (bspw. E-Mail-Adressen, Telefon- und Handynummern)</li>
              <li>Inhaltsdaten (bspw. Fotos, Videos, Texte),</li>
              <li>Nutzungsdaten (bspw. Zeiten der Zugriffe, besuchte Internetpräsenzen, Interesse an Inhalten),</li>
              <li>Metadaten (bspw. IP-Adresse, Computersystem-Informationen)</li>
            </ul>
            <p><strong>Betroffene Personen:</strong> Interessenten, Kommunikationspartner, Kunden, Beschäftigte (bspw.
              Bewerber, aktuelle und ehemalige Mitarbeiter)</p>
            <p><strong>Verarbeitungszweck: </strong>Organisation der Büro- und Administrationsaufgaben</p>
            <p><strong>Rechtsgrundlage:</strong> Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, Vertragserfüllung und
              vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b DSGVO, berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
            <p><strong>Eingesetze Cloud-Dienstleister:</strong></p>
          </div>
        </div>
        <div>
          <div>
            <p><strong>Google Clouddienste</strong></p>
            <p>Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />Mutterunternehmen:
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />Internetseite: <a
                href="https://cloud.google.com/"
                rel="noreferrer">https://cloud.google.com/</a><br />Datenschutzerklärung:
              <a href="https://www.google.com/policies/privacy" rel="noreferrer">https://www.google.com/policies/privacy</a></p>
          </div>
        </div>
        <div>
          <div>
            <h2>Webhosting</h2>
            <p>Wir bedienen uns zum Vorhalten unserer Internetseiten eines Anbieters, auf dessen Server unsere
              Internetseiten gespeichert und für den Abruf im Internet verfügbar gemacht werden (Hosting). Hierbei können
              von dem Anbieter all diejenigen über den von Ihnen genutzten Browser übertragenen Daten verarbeitet werden,
              die bei der Nutzung unserer Internetseiten anfallen. Hierzu gehören insbesondere Ihre IP-Adresse, die der
              Anbieter benötigt, um unser Online-Angebot an den von Ihnen genutzten Browser ausliefern zu können sowie
              sämtliche von Ihnen über unsere Internetseite getätigten Eingaben. Daneben kann der von uns genutzte
              Anbieter&nbsp;&nbsp;</p>
            <ul>
              <li>das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite</li>
              <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
              <li>Zugriffsstatus (HTTP-Status)</li>
              <li>die übertragene Datenmenge</li>
              <li>der Internet-Service-Provider des zugreifenden Systems</li>
              <li>der von Ihnen verwendete Browsertyp und dessen Version</li>
              <li>das von Ihnen verwendete Betriebssystem</li>
              <li>die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind</li>
              <li>die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen.</li>
            </ul>
            <p>erheben. Die vorgenannten Daten werden als Logfiles auf den Servern unseres Anbieters gespeichert. Dies ist
              erforderlich, um die Stabilität und Sicherheit des Betriebs unserer Internetseite zu gewährleisten.</p>
            <p>&nbsp;</p>
            <p><strong>Betroffene Daten:</strong></p>
            <ul>
              <li>Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
              <li>Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
              <li>Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)</li>
            </ul>
            <p><strong>Betroffene Personen: </strong>Nutzer unserer Internetpräsenz</p>
            <p><strong>Verarbeitungszweck: </strong>Ausspielen unserer Internetseiten, Gewährleistung des Betriebs unserer
              Internetseiten</p>
            <p><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
            <p><strong>Von uns beauftragte(r) Webhoster:</strong></p>
          </div>
        </div>

        <div>
          <div>
            <p><strong>Google Clouddienste</strong></p>
            <p>Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />Mutterunternehmen:
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />Internetseite: <a
                href="https://cloud.google.com/"
                rel="noreferrer">https://cloud.google.com/</a><br />Datenschutzerklärung:
              <a href="https://www.google.com/policies/privacy" rel="noreferrer">https://www.google.com/policies/privacy</a></p>
          </div>
        </div>
        <div>
          <div>
            <h2>Kontaktaufnahme</h2>
            <p>Soweit Sie uns über E-Mail, Soziale Medien, Telefon, Fax, Post, unser Kontaktformular oder sonstwie
              ansprechen und uns hierbei personenbezogene Daten wie Ihren Namen, Ihre Telefonnummer oder Ihre
              E-Mail-Adresse zur Verfügung stellen oder weitere Angaben zur Ihrer Person oder Ihrem Anliegen machen,
              verarbeiten wir diese Daten zur Beantwortung Ihrer Anfrage im Rahmen des zwischen uns bestehenden
              vorvertraglichen oder vertraglichen Beziehungen.</p>
            <p><strong>Betroffene Daten:</strong></p>
            <ul>
              <li>Bestandsdaten (bspw. Namen, Adressen)</li>
              <li>Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
              <li>Inhaltsdaten (Texte, Fotos, Videos)</li>
              <li>Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
            </ul>
            <p><strong>Betroffene Personen: </strong>Interessenten, Kunden, Geschäfts- und Vertragspartner</p>
            <p><strong>Verarbeitungszweck: </strong>Kommunikation sowie Beantwortung von Kontaktanfragen, Büro und
              Organisationsverfahren</p>
            <p><strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b DSGVO,
              berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Sicherheitsmaßnahmen</h2>
            <p>Wir treffen im Übrigen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik, um
              die Vorschriften der Datenschutzgesetze einzuhalten und Ihre Daten gegen zufällige oder vorsätzliche
              Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter
              zu schützen.</p>
            <h2>Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand September 2022. Aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.</p>
            <p><strong>Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von SOS Recht erstellt. SOS
              Recht ist ein Angebot der Mueller.legal Rechtsanwälte Partnerschaft mit Sitz in Berlin.</strong></p>
          </div>
        </div>
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
