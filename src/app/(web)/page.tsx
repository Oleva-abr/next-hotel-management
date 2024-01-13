import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* featured room */}
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
