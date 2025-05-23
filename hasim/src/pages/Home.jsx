
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

import ChannelList from '../components/ChannelList';
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ChannelList />
      <Gallery />

      <ContactSection />
    </div>
  );
};

export default Home;
