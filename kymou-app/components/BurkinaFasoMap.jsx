'use client'
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BurkinaFasoMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      //.style("background", "white") // Fond blanc
      .attr('class','zigzag')

    const g = svg.append("g");

    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(data => {
      const burkina = data.features.find(d => d.properties.name === "Burkina Faso");

      if (!burkina) return;

      const projection = d3.geoMercator().fitSize([width, height], burkina);
      const pathGenerator = d3.geoPath().projection(projection);

      // Dessiner le Burkina Faso
      g.append("path")
        .datum(burkina)
        .attr("d", pathGenerator)
        .attr("fill", "#ffffff")
        .attr("stroke", "#333")
        //.attr('className','zigzag');

      // Liste des villes
      const cities = [
        { name: "Ouagadougou", coords: [-1.52254, 12.36180] },
        { name: "Bwan", coords: [-3.521413, 12.147629] }
      ];

      // Ajouter les points et les labels des villes
      cities.forEach(city => {
        const [x, y] = projection(city.coords);

        g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 5)
          .attr("fill", "black") // Couleur noire
          .attr("stroke", "black")
          .attr("stroke-width", 1);

        g.append("text")
          .attr("x", x + 8)
          .attr("y", y)
          .attr("font-size", "12px")
          .attr("fill", "black")
          .attr("text-anchor", "start")
          .attr("alignment-baseline", "middle")
          .text(city.name);
      });

      // Ajouter une zone de 20 px autour du point (11.879682, -3.482634)
      const pointCoords = [-3.431413, 12.148629];
      const [px, py] = projection(pointCoords);

      g.append("g")  // Add a group element to isolate the scale effect
      .append("circle")
      .attr("cx", px)
      .attr("cy", py)
      .attr("r", 20)  // Radius of 20px
      .attr("fill", "rgba(0, 0, 255, 0.2)")  // Light blue color with opacity
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr('class', 'animatedAreaD3');
    

    });

  }, []);

  return <svg ref={svgRef} className="zigzag"></svg>;
};

export default BurkinaFasoMap;
