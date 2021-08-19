import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainContent from "./components/MainContent";
import TableOfContents from "./components/TableOfContents";

function App(): JSX.Element {
  return (
    <>
      <TableOfContents />
      <AppHeader />
      <MainContent />
      <AppFooter />
    </>
  );
}

export default App;
