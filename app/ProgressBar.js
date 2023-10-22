import React from "react";

export default function ProgressBar({ data }) {
  return (
    <div className="ProgressBar">
      <div className="ProgressBarFill" style={{ width: data.percent + "%" }}>
        {`${data.passing} of ${data.total} development integration / end-to-end tests passing`}
      </div>
    </div>
  );
}
