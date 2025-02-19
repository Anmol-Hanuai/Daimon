import React, { useState } from "react";
import "./RetailStore.css";
import defaultImg from "../../assets/images/default.png";
import footTrafficImg from "../../assets/images/traffic.png";
import operationsImg from "../../assets/images/growth.png";
import storefrontImg from "../../assets/images/analysis.png";
import abTestingImg from "../../assets/images/testing.png";
import heatmapImg from "../../assets/images/heatmap.png";

const images = [
  footTrafficImg,
  operationsImg,
  storefrontImg,
  abTestingImg,
  heatmapImg,
];

const RetailStore = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: "👥",
      title: "Precise Foot Traffic Analysis",
      description: "Leverage computer vision to monitor pedestrian activity, identify peak periods, and compare trends across different times and seasons.",
    },
    {
      icon: "📈",
      title: "Streamline Operations & Drive Growth",
      description: "Monitor real-time traffic, boost conversions, control occupancy, optimize marketing, improve resource use, expand strategically, and maintain GDPR-compliant data privacy.",
    },
    {
      icon: "🏪",
      title: "Storefront Engagement Analysis",
      description: "Measure foot traffic and track gaze duration to assess display effectiveness and customer interest.",
    },
    {
      icon: "🔍",
      title: "A/B Testing for Storefronts",
      description: "Test product displays to identify what attracts customers and apply successful strategies across all locations.",
    },
    {
      icon: "🔥",
      title: "Customer Heatmap Insights",
      description: "Analyze dwell time to understand buying behavior, compare zone performance, and optimize store layout for better sales and engagement.",
    },
  ];

  return (
    <div className="retail-store">
      <div className="content2">
        <h2 className="heading">Computer Vision Based Retail Store Analytics</h2>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <span className="icon">{feature.icon}</span>
              <div className="text">
                <h3
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="image-container">
        <img
          src={hoveredIndex !== null ? images[hoveredIndex] : defaultImg}
          alt="Retail Store Analytics"
          className="transition-image"
        />
      </div>
    </div>
  );
};

export default RetailStore;
