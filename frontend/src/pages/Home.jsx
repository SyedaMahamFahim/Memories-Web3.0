import React from "react";
import { Header, SectionTitle} from "../components";
import { AppForm ,Memories} from "../containers";
const Home = () => {
  return (
    <>
      <Header />
      <SectionTitle />
      <AppForm />
      <Memories/>

    </>
  );
};

export default Home;
