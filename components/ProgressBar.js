import React from "react";

export default function ProgressBar({ data }) {
  return (
    <div className="ProgressBar">
      <div className="ProgressBarFill" style={{ width: data.percent + "%" }}>
        {`${data.passing} of ${data.total} unit tests passing`}
      </div>
    </div>
  );
}
