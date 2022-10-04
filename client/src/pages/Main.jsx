import React from "react";
import styled from "styled-components";
import MainReviewCard from "../components/cards/MainReviewCard";
import PlaceCardGroup1 from "../components/cards/PlaceCardGroup1";
import Footer from "../components/Footer";
import { useGetRecommend } from "../hooks/useAPI";

const Main = () => {
  const { data, isLoading, isError } = useGetRecommend();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERR...</div>;

  return (
    <>
      <MainTitle></MainTitle>
      <MainPage>
        <PlaceCardGroup1 title={"추천장소 확인해봐요! 👀"} data={data} />
      </MainPage>
      <MainReviewCard />
      <Footer />
    </>
  );
};

const MainPage = styled.div`
  padding-top: 50px;
  max-width: 1280px;
  width: 80vw;
  margin: 0 auto;
  color: #333;
  margin-bottom: 128px;
  cursor: default;
  .center {
    text-align: center;
  }
`;

const MainTitle = styled.div`
  padding-top: 152px;
  font-size: 80px;
  height: 55vh;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
`;


export default Main;