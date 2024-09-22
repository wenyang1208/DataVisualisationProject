var vg_1 = "unemployment_rate_ma.vg.json";
vegaEmbed("#map_chart", vg_1, {
  config: {
    style: {
      "tooltip": {
        "fontSize": 100,  // Adjust the font size
        "padding": 10   // Adjust padding
      }
    }
  }
}).then(function(result) {
  // Access to the Vega view instance if needed
}).catch(console.error);