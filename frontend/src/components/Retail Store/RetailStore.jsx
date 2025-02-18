import React from "react";
import "./RetailStore.css";
import img from "../../assets/images/retail.png"; // Replace with actual image path

const RetailStore = () => {
  const features = [
    {
      icon: "👥", // Changed from 👷‍♂️ to 👥 (people icon)
      title: "Precise Foot Traffic Analysis",
      description: "Leverage computer vision to monitor pedestrian activity, identify peak periods, and compare trends across different times and seasons.",
    },
    {
      icon: "📈", // Changed from 🧑‍🔬 to 📈 (chart increasing)
      title: "Streamline Operations & Drive Growth",
      description:
        "Monitor real-time traffic, boost conversions, control occupancy, optimize marketing, improve resource use, expand strategically, and maintain GDPR-compliant data privacy.",
    },
    {
      icon: "🏪", // Changed from 🏗️ to 🏪 (convenience store)
      title: "Storefront Engagement Analysis",
      description:
        "Measure foot traffic and track gaze duration to assess display effectiveness and customer interest.",
    },
    {
      icon: "🔍", // Changed from ⚠️ to 🔍 (magnifying glass)
      title: "A/B Testing for Storefronts",
      description:
        "Test product displays to identify what attracts customers and apply successful strategies across all locations.",
    },
    {
      icon: "🔥", // Changed from 🚛 to 🔥 (fire, representing heatmap)
      title: "Customer Heatmap Insights",
      description:
        "Analyze dwell time to understand buying behavior, compare zone performance, and optimize store layout for better sales and engagement.",
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
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="image-container">
        <img src={img} alt="Retail Store Analytics" /> {/* Updated alt text */}
      </div>
    </div>
  );
};

export default RetailStore;

