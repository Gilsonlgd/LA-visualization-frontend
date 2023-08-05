import { React, useState, useEffect } from "react";
import Heatmap from "../../Components/Heatmap/Heatmap";

export default function Dashboard() {
  const [topHeader, setTopHeader] = useState(["Gilson"]);
  const [sideHeader, setSideHeader] = useState([
    "Atividade 1",
    "Atividade 2",
    "Atividade 3",
  ]);
  const [data] = useState([[1], [2], [3]]);
  const [maxValue, setMaxValue] = useState(4);
  const [minValue, setMinValue] = useState(1);

  useEffect(() => {
    const newMaxValue = Math.max(...data.flat());
    const newMinValue = Math.min(...data.flat());
    setMaxValue(newMaxValue);
    setMinValue(newMinValue);
  }, [data]);

  return (
    <div className="body p-2">
      <div className="row mt-4">
        <div className="col-12">
          <h1>Dashboard Heatmap</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h2>Heatmap</h2>
                  <p>
                    Mapa de calor do número de acessos a atividades da
                    disciplina
                  </p>
                  <Heatmap
                    topHeader={topHeader}
                    sideHeader={sideHeader}
                    data={data}
                    maxValue={maxValue}
                    minValue={minValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
