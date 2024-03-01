import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import { withTranslation, TFunction } from "react-i18next";
import { CenterContent } from "../../components/ContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const DemoBlock = lazy(() => import("../../components/DemoBlock"));

const Home = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t("IntroContent.title")}
        content={t("IntroContent.text")}
        button={IntroContent.button}
        icon="RAGImage.svg"
        id="intro"
      />
      <CenterContent paddingTB="50px">
        <DemoBlock />
      </CenterContent>
      <MiddleBlock
        title={t("MiddleBlockContent.title")}
        content={t("MiddleBlockContent.text")}
        button={t("MiddleBlockContent.button")}
      />
      <ContentBlock
        direction="left"
        title={t("AboutContent.title")}
        content={t("AboutContent.text")}
        section={t("AboutContent.section")}
        icon="process_outline III.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={t("MissionContent.title")}
        content={t("MissionContent.text")}
        icon="SEO.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={t("ProductContent.title")}
        content={t("ProductContent.text")}
        icon="contact us_solid III.svg"
        id="product"
      />
      <Contact
        title={t("ContactContent.title")}
        content={t("ContactContent.text")}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
