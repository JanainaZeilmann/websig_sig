var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_Ceara_1 = new ol.format.GeoJSON();
var features_Municipios_Ceara_1 = format_Municipios_Ceara_1.readFeatures(json_Municipios_Ceara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_Ceara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_Ceara_1.addFeatures(features_Municipios_Ceara_1);
var lyr_Municipios_Ceara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_Ceara_1, 
                style: style_Municipios_Ceara_1,
                popuplayertitle: "Municipios_Ceara",
                interactive: true,
                title: '<img src="styles/legend/Municipios_Ceara_1.png" /> Municipios_Ceara'
            });
var lyr_raster_ce_recortado_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "raster_ce_recortado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/raster_ce_recortado_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4354000.000049, -562126.307502, -4143499.999945, -371409.726352]
                            })
                        });
var format_Pontos_Condominio_Heatmap_3 = new ol.format.GeoJSON();
var features_Pontos_Condominio_Heatmap_3 = format_Pontos_Condominio_Heatmap_3.readFeatures(json_Pontos_Condominio_Heatmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_Condominio_Heatmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_Condominio_Heatmap_3.addFeatures(features_Pontos_Condominio_Heatmap_3);
var lyr_Pontos_Condominio_Heatmap_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Pontos_Condominio_Heatmap_3, 
                radius: 0 * 2,
                gradient: ['#2b83ba', '#3389b9', '#abdda4', '#ffffbf', '#fdae61', '#d7191c'],
                blur: 15,
                shadow: 250,
                title: 'Pontos_Condominio_Heatmap'
            });
var format_Pontos_Condominio_4 = new ol.format.GeoJSON();
var features_Pontos_Condominio_4 = format_Pontos_Condominio_4.readFeatures(json_Pontos_Condominio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_Condominio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_Condominio_4.addFeatures(features_Pontos_Condominio_4);
var lyr_Pontos_Condominio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontos_Condominio_4, 
                style: style_Pontos_Condominio_4,
                popuplayertitle: "Pontos_Condominio",
                interactive: true,
                title: '<img src="styles/legend/Pontos_Condominio_4.png" /> Pontos_Condominio'
            });
var format_Estacoes_CoastSnap_5 = new ol.format.GeoJSON();
var features_Estacoes_CoastSnap_5 = format_Estacoes_CoastSnap_5.readFeatures(json_Estacoes_CoastSnap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacoes_CoastSnap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacoes_CoastSnap_5.addFeatures(features_Estacoes_CoastSnap_5);
var lyr_Estacoes_CoastSnap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estacoes_CoastSnap_5, 
                style: style_Estacoes_CoastSnap_5,
                popuplayertitle: "Estacoes_CoastSnap",
                interactive: true,
                title: '<img src="styles/legend/Estacoes_CoastSnap_5.png" /> Estacoes_CoastSnap'
            });
var format_LinhadeCosta_6 = new ol.format.GeoJSON();
var features_LinhadeCosta_6 = format_LinhadeCosta_6.readFeatures(json_LinhadeCosta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhadeCosta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhadeCosta_6.addFeatures(features_LinhadeCosta_6);
var lyr_LinhadeCosta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhadeCosta_6, 
                style: style_LinhadeCosta_6,
                popuplayertitle: "LinhadeCosta",
                interactive: true,
                title: '<img src="styles/legend/LinhadeCosta_6.png" /> LinhadeCosta'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Municipios_Ceara_1.setVisible(true);lyr_raster_ce_recortado_2.setVisible(true);lyr_Pontos_Condominio_Heatmap_3.setVisible(true);lyr_Pontos_Condominio_4.setVisible(true);lyr_Estacoes_CoastSnap_5.setVisible(true);lyr_LinhadeCosta_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Municipios_Ceara_1,lyr_raster_ce_recortado_2,lyr_Pontos_Condominio_Heatmap_3,lyr_Pontos_Condominio_4,lyr_Estacoes_CoastSnap_5,lyr_LinhadeCosta_6];
lyr_Municipios_Ceara_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Pontos_Condominio_4.set('fieldAliases', {'id': 'id', 'praia': 'praia', });
lyr_Estacoes_CoastSnap_5.set('fieldAliases', {'id': 'id', });
lyr_LinhadeCosta_6.set('fieldAliases', {'id': 'id', });
lyr_Municipios_Ceara_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Pontos_Condominio_4.set('fieldImages', {'id': 'TextEdit', 'praia': '', });
lyr_Estacoes_CoastSnap_5.set('fieldImages', {'id': 'TextEdit', });
lyr_LinhadeCosta_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Municipios_Ceara_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Pontos_Condominio_4.set('fieldLabels', {'id': 'no label', 'praia': 'no label', });
lyr_Estacoes_CoastSnap_5.set('fieldLabels', {'id': 'no label', });
lyr_LinhadeCosta_6.set('fieldLabels', {'id': 'no label', });
lyr_LinhadeCosta_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});