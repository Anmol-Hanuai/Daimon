import React, { useState } from "react";
import "./Services.css"; // Updated CSS
import img1 from "../../assets/images/img4.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img0.jpg";
import img4 from "../../assets/images/img3.jpg";
import img5 from "../../assets/images/img5.jpg";

const contentData = [
  {
    title: "Computer Vision",
    description:
      "Our computer vision solutions automate visual data analysis, enabling businesses to extract meaningful insights from images and videos. Using advanced AI algorithms, we optimize processes and improve accuracy, allowing you to focus on strategic decisions.",
    examples: (
      <>
        <h3>What We Do:</h3>
        <ul>
          <li><strong>Quality Control Automation:</strong> Detect defects in products, such as cracks or color inconsistencies.</li>
          <li><strong>Object Detection:</strong> Identify and track objects, like vehicles or products.</li>
          <li><strong>Asset Management:</strong> Monitor and track physical assets in real-time.</li>
          <li><strong>Pattern Recognition:</strong> Analyze visual patterns for trends or abnormalities.</li>
        </ul>
       
      </>
    ),
    image: img1,
  },
  {
    title: "Document Parsing",
    description:
      "Our document parsing services simplify the extraction and processing of key information from unstructured data, such as PDFs, scanned images, and text-heavy documents.",
    examples: (
      <>
        <h3>What We Do:</h3>
        <ul>
          <li><strong>Invoice Processing:</strong> Extract key details like amounts, dates, and vendor info from invoices.</li>
          <li><strong>Contract Management:</strong> Identify important clauses and terms in contracts.</li>
          <li><strong>Report Analysis:</strong> Convert complex business reports into structured data.</li>
          <li><strong>Scanned Image Extraction:</strong> Use OCR to extract data from scanned documents.</li>
        </ul>
        
       
      </>
    ),
    image: img2,
  },
  {
    title: "Predictive Analysis",
    description:
      "Our predictive analysis services help businesses forecast future trends and make informed decisions by analyzing historical data patterns.",
    examples: (
      <>
        <h3>What We Do:</h3>
        <ul>
          <li><strong>Demand Forecasting:</strong> Predict future product demand for better inventory management.</li>
          <li><strong>Risk Management:</strong> Identify potential risks and mitigate financial or operational disruptions.</li>
          <li><strong>Customer Behavior Prediction:</strong> Forecast customer preferences to tailor marketing efforts.</li>
          <li><strong>Sales Trend Analysis:</strong> Identify trends to optimize pricing and promotional strategies.</li>
        </ul>
      </>
    ),
    image: img3,
  },
  {
    title: "Data Annotation and Labeling",
    description:
      "Our data annotation and labeling services provide high-quality, accurate tagging of data to train AI models for tasks like object detection, sentiment analysis, and more.",
    examples: (
      <>
        <h3>What We Do:</h3>
        <ul>
          <li><strong>Object Detection:</strong> Label images or videos with objects, like vehicles or products.</li>
          <li><strong>Sentiment Analysis:</strong> Tag text data with sentiment indicators for customer feedback.</li>
          <li><strong>Text Classification:</strong> Categorize documents for natural language processing.</li>
          <li><strong>Image Segmentation:</strong> Divide images into segments for detailed analysis.</li>
        </ul>
      </>
    ),
    image: img4,
  },
  {
    title: "Anomaly Detection",
    description:
      "Our anomaly detection services help businesses identify irregular patterns and potential issues in data, enabling proactive decision-making and risk management.",
    examples: (
      <>
        <h3>What We Do:</h3>
        <ul>
          <li><strong>Road Condition Monitoring:</strong> Detect cracks, potholes, and other issues in road surfaces.</li>
          <li><strong>CCTV Security Monitoring:</strong> Identify unusual activity in restricted areas.</li>
          <li><strong>Quality Control:</strong> Spot anomalies in manufacturing processes.</li>
          <li><strong>Predictive Maintenance:</strong> Identify early signs of equipment failure.</li>
        </ul>
      </>
    ),
    image: img5,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  const handleArrowClick = (direction) => {
    setActiveIndex((prevIndex) =>
      direction === "left"
        ? prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
        : prevIndex === contentData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, description, examples, image } = contentData[activeIndex];

  return (
    <div className="container">
      <h1 className="main-heading">Services</h1>
      <p className="intro">
        Daimon services help companies create AI and ML solutions at all stages, from pilot to production. We strategize, consult, and engineer so you can cast your ideas into the future with innovative AI technologies.
      </p>
      <div className="content">
        <div className="arrow left" onClick={() => handleArrowClick("left")}>&lt;</div>
        <div className="image-section">
          <img src={image} alt={title} className="image" />
        </div>
        <div className="text-section">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <br />
          <div className="examples">{examples}</div>
        </div>
        <div className="arrow right" onClick={() => handleArrowClick("right")}>&gt;</div>
      </div>
      <div className="circle-navigation">
        {contentData.map((_, index) => (
          <button
            key={index}
            className={`circle ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleCircleClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Services;





