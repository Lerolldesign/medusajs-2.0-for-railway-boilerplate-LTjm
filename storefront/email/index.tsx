import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface KoalaWelcomeEmailProps {
  userFirstname: string
}

export const KoalaWelcomeEmail = ({
  userFirstname = "Céline",
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Il y a une commande !!!!!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://res.cloudinary.com/dvdup4fx9/image/upload/v1718902365/La%20Lune%20Curieuse/Mailing/logo_long_uhz2ni.png`}
          width="360"
          height="109"
          alt="la lune curieuse"
          style={logo}
        />
        <Text style={paragraph}>Coucou {userFirstname},</Text>
        <Text style={paragraph}>
          C&apos;est super !!! tu as reçu une commande depuis la belle boutique
          de La Lune Curieuse.
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href="https://backend-production-90ae.up.railway.app/app/"
          >
            On va vite la découvrir !
          </Button>
        </Section>
        <Text style={paragraph}>
          Bonne journée,
          <br />
          Aline
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          © Service crée avec ❤️ par //// Leroll Design
        </Text>
      </Container>
    </Body>
  </Html>
)

export default KoalaWelcomeEmail

const main = {
  backgroundColor: "#fff5ef",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const logo = {
  margin: "0 auto",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#C87E53",
  borderRadius: "50px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "20px",
  marginTop: "20px",
  marginBottom: "10px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
