import React from "react";
import "../App.css";

const RandomMetroVid = () => {
  const getRandomVideoId = () => {
    // Replace with an array of YouTube video IDs
    const videoIds = [
      "O5Y_onlHJYk?si=rK9qtN1QnyqM-Zra",
      "65xiTGSSVcg?si=RKR_uNtUi4GPbGu3",
      "cAWLHr-OxOA?si=S7ghqVcE17WSsGwn",
      "HbamJH7LzdU?si=H9W8_rATRU9dD5JS",
      "KWjoDdM0BjI?si=rRYGz0tIFzwlUF36",
      "cpSYBDmc4A0?si=FblNl2oVIwXEGizJ",
      "5zZzNW4PXZs?si=d6JvchBkCwUsU51R",
      "QA0_uP5x478?si=Zn6haF3Jd4q2yneW",
      "hhpzyDhl3hU?si=4doyxi02Wxfd1TwV",
      "1KpYYEz1yNc?si=LHVwKq1ktZeKAH-X",
      "vR0Ld7XSXgU?si=LYgp7cxzF6vZcq47",
      "ZigSgHmWjb0?si=L-XZoiriQoDDh6Js",
      "xkjfh5klUzM?si=U_-ySVMeFDGJlNyi",
      "xyPczDYqTSY?si=iH1hAeRRBtoCY-Jx",
      "4550lkjOgOU?si=hskmH3kH2RRzF9vd",
      "Kdm-w7o3tXA?si=qbPd0YS5mtO5ujx6",
      "UYDcXb_nh-w?si=tznQEWl80yqXwizf"
    ];
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    return videoIds[randomIndex];
  };

  const randomVideoId = getRandomVideoId();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${randomVideoId}`}
        title="Random Metro Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RandomMetroVid;
