import React from "react";
import Card from "../../components/card/Card";
import CarouselFadeExample from "../../components/Carousel/Carousel";
import UserIngresar from "../user/UserIngresar";

const Index = () => {
  return (
    <>
      {/* <CarouselFadeExample /> */}

      {/* <div
        style={{
          background: "#ebebeb",
          padding: "2px",
          display: "flex",
          flexWRap: "wrap",
          justifyContent: "center",
          minHeight: "80VH",
        }}
      >
        <Card />
        <Card />
        <Card />
      </div> */}
      <UserIngresar />
    </>
  );
};

export default Index;
