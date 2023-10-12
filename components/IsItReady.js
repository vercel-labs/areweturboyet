import React from "react";

export default function IsItReady(props) {
  let data = props.data;
  let warnings = props.testData.failingInDev.split(/^\*/gm).length - 1;
  let decision = data.percent === 100 && warnings === 0;
  let passing = data.percent === 100 ? "All" : data.percent + "% of";

  let releaseLink = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://turbo.build/pack"
    >
      Try the Beta!
    </a>
  );

  return decision ? (
    <div className="IsItReady">
      <h1 className="IsItReadyText">
        Yes<i>{"\ud83c\udf89"}</i>
      </h1>
      <p className="IsItReadyYes">{releaseLink}</p>
    </div>
  ) : (
    <div className="IsItReady">
      <h1 className="IsItReadyText">No</h1>
      <p className="IsItReadyDetails">
        {passing} tests are passing though
        <i>{"\u2705"}</i>
      </p>
      {/* <p className="IsItReadyDetails">
          {warnings === 1
            ? "but there is still 1 warning left to fix"
            : `but there are still ${warnings} warnings left to fix`}
        </p> */}
    </div>
  );
}
