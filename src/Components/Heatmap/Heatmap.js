import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Heatmap.css";

function Heatmap({ topHeader, sideHeader, data, maxValue, minValue, compact, onTHeaderClick }) {
  const [sideExpanded, setSideExpanded] = useState(false);
  const [topExpanded, setTopExpanded] = useState(-1);

  const handleSideHeaderClick = () => {
    setSideExpanded((prevState) => !prevState);
  };

  const handleTopHeaderClick = (index) => {
    setTopExpanded((prevState) => (prevState === index ? -1 : index));
    if (compact)
      onTHeaderClick(topHeader[index]);
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
              <th key={"empty"}></th>
              {topHeader.map((header, index) => (
                <th
                  className={
                    "top-header text-center" +
                    (topExpanded === index ? " top-expanded" : "")
                  }
                  onClick={() => handleTopHeaderClick(index)}
                  key={"header-" + index}
                >
                  {getFormatedName(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={"row-" + rowIndex}>
                <th
                  className={
                    "side-header" + (sideExpanded ? " side-expanded" : "")
                  }
                  onClick={() => handleSideHeaderClick()}
                  key={"side-header-" + rowIndex}
                >
                  {sideHeader[rowIndex]}
                </th>
                {row.map((value, columnIndex) => (
                  <>
                    <td
                      className="table-cell"
                      style={{ backgroundColor: getCellColor(value) }}
                      key={`cell-${rowIndex}-${columnIndex}`}
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
