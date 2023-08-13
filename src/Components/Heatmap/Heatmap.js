import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Heatmap.css";
import { Tooltip } from "react-tooltip";

function Heatmap({ topHeader, sideHeader, data, maxValue, minValue, compact }) {
  const [sideExpanded, setSideExpanded] = useState(false);
  const [topExpanded, setTopExpanded] = useState(-1);

  const handleSideHeaderClick = () => {
    setSideExpanded((prevState) => !prevState);
  };

  const handleTopHeaderClick = (index) => {
    setTopExpanded((prevState) => (prevState === index ? -1 : index));
  };

  function getCellColor(value) {
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    const red = 0;
    const green = 255;
    const blue = 0;
    const opacity = normalizedValue;

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
  function getFormatedName(name) {
    if (!compact) return name;

    const trimmedName = name.trim().split(" ");
    const firstName = trimmedName[0];
    const lastName = trimmedName[trimmedName.length - 1];
    return firstName[0] + " " + lastName[0];
  }
  return (
    <div className={`${compact ? "compact" : "standard"} heatmap-container`}>
      <div className="heatmap-table">
        <Table bordered>
          <thead className="table-header">
            <tr>
              <th></th>
              {topHeader.map((header, index) => (
                <th
                  className={
                    "top-header text-center" +
                    (topExpanded === index ? " top-expanded" : "")
                  }
                  onClick={() => handleTopHeaderClick(index)}
                >
                  {getFormatedName(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr>
                <th
                  className={
                    "side-header" + (sideExpanded ? " side-expanded" : "")
                  }
                  onClick={() => handleSideHeaderClick()}
                >
                  {sideHeader[index]}
                </th>
                {row.map((value) => (
                  <>
                    <td
                      className="table-cell"
                      style={{ backgroundColor: getCellColor(value) }}
                    >
                      <span className="text-hover">{value}</span>
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Heatmap;
