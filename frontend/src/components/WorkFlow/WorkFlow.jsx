import React from "react";
import "./WorkFlow.css";

const WorkFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Your Request",
      description:
        "Start by submitting your project details on our website to help us understand your needs.",
      // timing: "1 working day",
    },
    {
      id: 2,
      title: "Initial Consultation",
      description:
        "We schedule a consultation to explore your objectives, challenges, and how our solutions can help.",
      // timing: "up to 7 working days",
    },
    {
      id: 3,
      title: "Proposal and Strategy Development",
      description:
        "We create a customized proposal outlining the strategy, timeline, and costs to meet your goals",
      // timing: "7+ working days",
    },
    {
      id: 4,
      title: "Contract and Kickoff",
      description:
        "Once you approve the proposal, we sign the contract and begin executing the plan, keeping you updated throughout the process.",
    },
  ];

  return (
    <div className="workflow-container">
      <div className="workflow-header">
        <h1>How we work</h1>
        <p>
          We combine the industry’s best service delivery standards with
          unprecedented solution personalization practices.
        </p>
      </div>
      <div className="workflow-steps">
        {steps.map((step) => (
          <div className="workflow-step" key={step.id}>
            <span className="workflow-step-number">Step {step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {step.timing && <span className="workflow-step-timing">{step.timing}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
