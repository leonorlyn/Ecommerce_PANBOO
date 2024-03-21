import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import HorizontalScroll from '../components/HorizontalScroll';
import { Chrono } from 'react-chrono';



const storyEvents = [
    {
      title: "2012",
      cardTitle: "PANBOO成立",
      cardSubtitle: "专注于竹制户外产品。",
      cardDetailedText: "在福建省建立了工厂和办公室，拥有100多名员工。"
    },
    {
      title: "2015",
      cardTitle: "建立合作伙伴关系",
      cardSubtitle: "与中国政府、承包商和设计师建立了合作伙伴关系。",
    },
  ];

  const Timeline = ({ items }) => {
    return (
      <Container>
        <Chrono 
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "rgb(103, 58, 183)",
            secondary: "rgb(255, 255, 255)",
            cardBgColor: "rgb(255, 255, 255)",
            cardForeColor: "rgb(0, 0, 0)",
            titleColor: "rgb(103, 58, 183)",
            // disableNavOnKey: false,
            hideControls:true,
            enableLayoutSwitch:false,
          }}
        //   slideShow
          slideItemDuration={4500}
        />
      </Container>
    );
  };
  
  
const Story = () => {
return (
    <div>
      <style>
        {`
          .ToolbarWrapper-sc-exupb5-0.hxLLRt {
            display: none !important;
          }
        `}
      </style>
    <h1>我们的故事</h1>
    <Timeline items={storyEvents} />
    </div>
);
};


export default Story;