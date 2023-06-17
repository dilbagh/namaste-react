import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="bleed">Namaste React 🚀</h1>;
};

const HeadingComponent = () => (
  <div>
    <Title />
    <h2>Heading Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
