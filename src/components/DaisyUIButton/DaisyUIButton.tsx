import * as React from "react";

export type DaisyUIButtonProps = {
  label?: string;
};

const DaisyUIButton = ({ label }: DaisyUIButtonProps) => {
  return <button className="btn btn-primary">{label}</button>;
};

DaisyUIButton.defaultProps = {
  label: "BUTTON",
};

export default DaisyUIButton;
