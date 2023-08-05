import React from "react";
import Table from "react-bootstrap/Table";
import "./Heatmap.css";
import { Tooltip } from "react-tooltip";

function Heatmap({ topHeader, sideHeader, data, maxValue, minValue }) {
  function getCellColor(value) {
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    const red = 255;
    const green = 0;
    const blue = 0;
    const opacity = normalizedValue;

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
  return (
    <div className="heatmap-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            {topHeader.map((header) => (
              <th className="text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr>
              <th className="side-header">{sideHeader[index]}</th>
              {row.map((value) => (
                <>
                  <td
                    className="text-center"
                    style={{ backgroundColor: getCellColor(value) }}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={"Número de Acessos: " + value}
                    data-tooltip-place="top"
                  />
                  <Tooltip id="my-tooltip" />
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Heatmap;
