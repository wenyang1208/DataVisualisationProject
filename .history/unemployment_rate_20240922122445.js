var vg_1 = "unemployment_rate_ma.vg.json";
vegaEmbed("#map_chart", vg_1).then(function(result) {
    result.tooltip({
        fontsize: 14,
        padding: 10
    })
}).catch(console.error);