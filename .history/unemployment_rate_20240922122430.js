var vg_1 = "unemployment_rate_ma.vg.json";
vegaEmbed("#map_chart", vg_1).then(function(result) {
    result.tooltop
}).catch(console.error);