import React from "react";

function Heatmap({topHeader, sideHeader, data, maxValue, minValue}) {
  function getCellColor(value) {
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    const red = 255;
    const green = 0;
    const blue = 0;
    const opacity = normalizedValue;

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
  return(
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          {topHeader.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr>
            <th>{sideHeader[index]}</th>
            {row.map((value) => (
              <td className="text-center" style={{ backgroundColor: getCellColor(value) }}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>);
}

export default Heatmap;
