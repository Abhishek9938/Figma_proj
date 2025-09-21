import React, { useEffect, useRef, useState } from 'react';
import './MapChart.css';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useDarkMode } from '../../../contexts/DarkModeContext';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#A8C5DA',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));
function MapChart() {
  const svgRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const { isDarkMode } = useDarkMode();

  
  useEffect(() => {
    const loadD3AndCreateMap = async () => {
      // Load D3.js dynamically
      if (!window.d3) {
        const script = document.createElement('script');
        script.src = 'https://d3js.org/d3.v7.min.js';
        script.onload = () => {
          createMap();
        };
        document.head.appendChild(script);
      } else {
        createMap();
      }
    };

    const createMap = async () => {
      if (!window.d3 || !svgRef.current) return;

      const d3 = window.d3;
      
      // Clear previous content
      d3.select(svgRef.current).selectAll("*").remove();

      // Get container dimensions
      const container = svgRef.current.parentElement;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      // Set up SVG
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", isDarkMode ? "transparent" : "#F7F9FB");

      // Create projection with responsive scaling
      const projection = d3.geoNaturalEarth1()
        .scale(Math.min(width, height) / 4)
        .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);

      // Load world GeoJSON data
      try {
        const worldData = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");
        
        // Draw countries
        svg.selectAll(".country")
          .data(worldData.features)
          .enter().append("path")
          .attr("class", "country")
          .attr("d", path)
          .style("fill", isDarkMode ? "#A8C5DA" : "#A8C5DA")
          .style("stroke", isDarkMode ? "#1C1C1C" : "#ffffff")
          .style("stroke-width", 1)

        // Add markers
        const markersData = [
          { name: "New York", coordinates: [-74.0060, 40.7128], revenue: "72K",progress:72 },
          { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: "39K",progress:39 },
          { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: "25K",progress:25 },
          { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: "61K",progress:61 }
        ];
        
        setMarkers(markersData);

        // Create marker group
        const markerGroup = svg.append("g").attr("class", "markers");

        // Add markers
        markerGroup.selectAll(".marker")
          .data(markersData)
          .enter().append("circle")
          .attr("class", "marker")
          .attr("cx", d => projection(d.coordinates)[0])
          .attr("cy", d => projection(d.coordinates)[1])
          .attr("r", 4)
          .style("fill", isDarkMode ? "#C6C7F8" : "#1C1C1C")
          .style("stroke", isDarkMode ? "#fff" : "#fff")
          .style("stroke-width", 2)
          .style("cursor", "pointer")
          .style("filter", "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.10))");

      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };

    loadD3AndCreateMap();

    const handleResize = () => {
      if (window.d3 && svgRef.current) {
        createMap();
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <>
    <div className={`MapChart ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className='mapchart-main'>
      <div className='revenue-world'>
          <div className='title'>Revenue by Location</div>
          <div className='map'>
          <svg ref={svgRef} style={{ maxWidth: '100%', height: '100%' }}></svg>
          </div>
          <div className='revenue-list'>
            {markers.map((marker, index) => (
              <div key={index}>
                <div  className='revenue-item'>
                  <span className='city-name'>{marker.name}</span>
                  <span className='revenue-amount'>{marker.revenue}</span>

                </div>
                
                <BorderLinearProgress variant="determinate" value={marker.progress} />
              </div>
              
            ))}
          </div>
      </div>
      </div>  
      </div>

    </>
  );
}

export default MapChart;