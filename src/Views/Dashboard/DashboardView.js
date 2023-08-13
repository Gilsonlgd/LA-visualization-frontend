import { React, useState, useEffect } from "react";
import Heatmap from "../../Components/Heatmap/Heatmap";
import logs from "../../Data/anonimizado.json";
import "./DashboardView.css";

export default function Dashboard() {
  const [topHeader, setTopHeader] = useState([]);
  const [sideHeader, setSideHeader] = useState([]);
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [selectedView] = useState("geral");

  useEffect(() => {
    formatData();
    const newMaxValue = Math.max(...data.flat());
    const newMinValue = Math.min(...data.flat());
    setMaxValue(newMaxValue);
    setMinValue(newMinValue);

    function formatData() {
      const newData = [];

      const uniqueUsers = [...new Set(logs.map((log) => log["Nome completo"]))];
      const uniqueModules = [
        ...new Set(logs.map((log) => log["Contexto do Evento"])),
      ];

      setSideHeader(uniqueModules);
      setTopHeader(uniqueUsers);

      uniqueModules.forEach((module) => {
        const row = [];
        uniqueUsers.forEach((user) => {
          const filteredLogs = logs.filter(
            (log) =>
              log["Nome completo"] === user &&
              log["Contexto do Evento"] === module &&
              log["Nome do evento"] === "Módulo do curso visualizado"
          );
          row.push(filteredLogs.length);
        });
        newData.push(row);
      });

      setData(newData);
    }

    /*function formatData() {
      const newData = [];

      const filteredLogs = logs.filter(
        (log) =>
          log["Nome completo"] === "Susan Palmer" &&
          log["Nome do evento"] === "Módulo do curso visualizado"
      );

      const modules = filteredLogs.map((log) => log["Contexto do Evento"]);
      const uniqueModules = [...new Set(modules)];

      setSideHeader(uniqueModules);
      setTopHeader(["Susan Palmer"]);

      sideHeader.forEach((module) => {
        const row = [];
        topHeader.forEach((user) => {
          const filteredLogs = logs.filter(
            (log) =>
              log["Nome completo"] === user &&
              log["Contexto do Evento"] === module &&
              log["Nome do evento"] === "Módulo do curso visualizado"
          );
          row.push(filteredLogs.length);
        });
        newData.push(row);
      });

      setData(newData);
    }*/
  }, [data, sideHeader, topHeader]);

  return (
    <div className="dashboard-container p-3">
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
                    compact={true}
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
