import AppBar from "./components/AppBar/AppBar";
import CrowdfundingSection from "./components/CrowdfundingSection/CrowdfundingSection";
import Header from "./components/Header/Header";

function App() {
  return (
    <main className="flex w-full flex-col items-center px-6 md:px-0">
      <AppBar />
      <Header />
      <CrowdfundingSection />
    </main>
  );
}

export default App;
