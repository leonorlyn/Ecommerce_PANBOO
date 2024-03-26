import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import HorizontalScroll from '../components/HorizontalScroll';
import { Chrono } from 'react-chrono';
import { styled } from '@mui/system';




const process = [
    {
      title: "Selection",
      cardTitle: "Material Sourcing: The Quest for Prime Bamboo",
      cardDetailedText: "The quality of the product is hugely based on the material. PANBOO experts travel for the best mature bamboo in the Southern-Chinese region where they grow rapidly in heatwave, rain, and sunshine into large bamboo forests. We only search for bamboo wood with the age of 4-5 years for sustainable and quality reasons and we conduct careful quality checks before production.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Pre-treatment",
      cardTitle: "Preparation and Precision: Setting the Foundation with Vacuum-Dried Bamboo",
      cardDetailedText: "Bamboo stems are meticulously cut, shaped, and transformed into strands, laying the groundwork for further processing. At PANBOO, we employ advanced vacuum drying technology to meticulously dehydrate the bamboo, ensuring that the final product meets our stringent standards for quality.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Glue Dipping",
      cardTitle: "Customized Bonding: Reinforcing Strength with Proprietary Glue",
      cardDetailedText: "PANBOO transcends traditional methods by developing a proprietary glue, meticulously designed to bond bamboo fibers like never before. This innovative approach not only amplifies the stability and strength of our bamboo strands but also preserves their inherent flexibility. Furthermore, our unique glue formula significantly boosts the final product's resistance to decay and pests, setting new standards for durability and protection..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Pressing Process",
      cardTitle: "Precision Pressing: Enhancing Durability with Heat Treatment",
      cardDetailedText: "In our pressing process, we employ a heat-treatment at 200°C to shield against superficial fungi, thereby ensuring unparalleled durability. Tailored to the specific needs of each product, including dimensions and desired color, our hot-press systems leverage varying temperatures and durations to achieve optimal compression. This meticulous heat-treatment and compression not only minimize shrinkage and swelling compared to other materials but also endow our products with exceptional stability, hardness, and strength.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Pressing Process",
      cardTitle: "Precision Pressing: Enhancing Durability with Heat Treatment",
      cardDetailedText: "In our pressing process, we employ a heat-treatment at 200°C to shield against superficial fungi, thereby ensuring unparalleled durability. Tailored to the specific needs of each product, including dimensions and desired color, our hot-press systems leverage varying temperatures and durations to achieve optimal compression. This meticulous heat-treatment and compression not only minimize shrinkage and swelling compared to other materials but also endow our products with exceptional stability, hardness, and strength.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Forming Process",
      cardTitle: "Forming Excellence: Crafting the Final Profile and Surface",
      cardDetailedText: "At the forming stage, our product undergoes a meticulous coating process to shape the final profile and perfect the surface finish. This crucial step ensures that each piece meets our high standards for aesthetic appeal and functionality.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
    {
      title: "Packing",
      cardTitle: "Sealed: Preparing Products for Delivery",
      cardDetailedText: "Our products are meticulously packed, ensuring they are primed for safe transportation and ready to make their journey to you.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1438755582627-221038b62986?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      }
    },
  ];

  const Timeline = ({ items }) => {
    return (
      <Container>
        <Chrono 
          items={items}
          mode="VERTICAL"
          activeTitleStyle={{ color: 'dark', backgroundColor: '#FFFFFF' }}
          theme={{
            primary: '#004B49',
            secondary: 'white',
            titleColor: '#004B49',
            titleColorActive: '#004B49',
            cardTitleColor: '#004B49',
          }}
          slideItemDuration={4500}
          fontSizes={{
            title: '1.5rem',
            cardTitle: '1.2rem',
            cardSubtitle: '2rem', 
            cardText: '2rem', 
          }}
          cardHeight="auto" 
          mediaHeight={500} 
          scrollable
        />
      </Container>
    );
  };
  
  
const ManufacturingProcess = () => {
return (
    <div >
      <style >
        {`
          .ToolbarWrapper-sc-exupb5-0.hxLLRt {
            display: none !important;
          }
        `}
      </style>
    <Timeline items={process} />
    </div>
);
};


export default ManufacturingProcess;