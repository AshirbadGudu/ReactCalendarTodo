import { Header } from "components";

const withLayout = (Page) => {
  const PageLayout = () => (
    <>
      <Header />
      <Page />
    </>
  );
  return PageLayout;
};

export default withLayout;
