import React from "react";

interface ImageIconProps {
  darkColor?: string;
  lightColor?: string;
}

const ImageIcon = ({
  darkColor = "#8a8a8a",
  lightColor = "#f5f5f5",
}: ImageIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 100 125"
      enableBackground="new 0 0 100 125"
      xmlSpace="preserve"
      style={
        {
          "--svg-dark-clr": darkColor,
          "--svg-light-clr": lightColor,
        } as React.CSSProperties
      }
    >
      {/* Outer Frame Border */}
      <path
        className="svg_dark_clr"
        stroke="none"
        d="
M22.002573,6.000000 
 C47.143436,6.000000 71.785049,6.000000 96.713013,6.000000 
 C96.713013,44.620033 96.713013,83.022301 96.713013,121.712624 
 C66.713783,121.712624 36.644054,121.712624 6.286731,121.712624 
 C6.286731,83.379448 6.286731,44.977180 6.286731,6.000000 
 C11.304845,6.000000 16.404083,6.000000 22.002573,6.000000 
M8.000000,46.500000 
 C8.000000,70.927429 8.000000,95.354866 8.000000,119.713776 
 C37.308598,119.713776 66.044937,119.713776 94.714340,119.713776 
 C94.714340,82.358032 94.714340,45.289215 94.714340,8.286213 
 C65.691437,8.286213 36.955101,8.286213 8.000000,8.286213 
 C8.000000,20.880785 8.000000,33.190392 8.000000,46.500000 
z"
      />

      {/* Outside of "Film" but within frame border */}
      <path
        className="svg_light_clr"
        stroke="none"
        d="
M8.000000,46.000000 
 C8.000000,33.190392 8.000000,20.880785 8.000000,8.286213 
 C36.955101,8.286213 65.691437,8.286213 94.714340,8.286213 
 C94.714340,45.289215 94.714340,82.358032 94.714340,119.713776 
 C66.044937,119.713776 37.308598,119.713776 8.000000,119.713776 
 C8.000000,95.354866 8.000000,70.927429 8.000000,46.000000 
M38.500000,92.000000 
 C55.928265,92.000000 73.356529,92.000000 90.714020,92.000000 
 C90.714020,65.024323 90.714020,38.621670 90.714020,12.286000 
 C64.357681,12.286000 38.288315,12.286000 12.285961,12.286000 
 C12.285961,38.975632 12.285961,65.378281 12.285961,92.000000 
 C20.880068,92.000000 29.190037,92.000000 38.500000,92.000000 
z"
      />

      {/* Mountains */}
      <path
        className="svg_dark_clr"
        stroke="none"
        d="
M38.000000,92.000000 
 C29.190037,92.000000 20.880068,92.000000 12.285961,92.000000 
 C12.285961,65.378281 12.285961,38.975632 12.285961,12.286000 
 C38.288315,12.286000 64.357681,12.286000 90.714020,12.286000 
 C90.714020,38.621670 90.714020,65.024323 90.714020,92.000000 
 C73.356529,92.000000 55.928265,92.000000 38.000000,92.000000 
M55.500000,14.000000 
 C41.746731,14.000000 27.993464,14.000000 14.271353,14.000000 
 C14.271353,32.895779 14.271353,51.244114 14.271353,70.612038 
 C21.128916,63.679626 27.346903,57.393768 34.094501,50.572517 
 C37.817837,54.336777 41.375526,57.933571 44.832420,61.428459 
 C53.334969,52.902832 62.015766,44.198471 70.527771,35.663368 
 C77.189445,41.768909 83.274292,47.345776 88.703171,52.321430 
 C88.703171,40.322235 88.703171,27.257418 88.703171,14.000000 
 C77.771507,14.000000 67.135750,14.000000 55.500000,14.000000 
z"
      />

      {/* Film Background */}
      <path
        className="svg_light_clr"
        stroke="none"
        d="
M56.000000,14.000000 
 C67.135750,14.000000 77.771507,14.000000 88.703171,14.000000 
 C88.703171,27.257418 88.703171,40.322235 88.703171,52.321430 
 C83.274292,47.345776 77.189445,41.768909 70.527771,35.663368 
 C62.015766,44.198471 53.334969,52.902832 44.832420,61.428459 
 C41.375526,57.933571 37.817837,54.336777 34.094501,50.572517 
 C27.346903,57.393768 21.128916,63.679626 14.271353,70.612038 
 C14.271353,51.244114 14.271353,32.895779 14.271353,14.000000 
 C27.993464,14.000000 41.746731,14.000000 56.000000,14.000000 
M38.999908,25.728680 
 C37.915119,20.709858 35.038799,18.823389 29.579109,20.059052 
 C25.024021,21.089983 24.599720,24.736809 25.011295,28.593859 
 C25.515846,33.322212 28.684725,34.233917 32.758801,34.024670 
 C37.222538,33.795410 38.888580,31.904247 38.999908,25.728680 
z"
      />

      {/* "Sun" */}
      <path
        className="svg_dark_clr"
        stroke="none"
        d="
M38.999954,26.154589 
 C38.888580,31.904247 37.222538,33.795410 32.758801,34.024670 
 C28.684725,34.233917 25.515846,33.322212 25.011295,28.593859 
 C24.599720,24.736809 25.024021,21.089983 29.579109,20.059052 
 C35.038799,18.823389 37.915119,20.709858 38.999954,26.154589 
z"
      />
    </svg>
  );
};

export default ImageIcon;
