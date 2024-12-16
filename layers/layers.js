var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_Landuse_2 = new ol.format.GeoJSON();
var features_Landuse_2 = format_Landuse_2.readFeatures(json_Landuse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_2.addFeatures(features_Landuse_2);
var lyr_Landuse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_2, 
                style: style_Landuse_2,
                popuplayertitle: "Landuse",
                interactive: true,
                title: '<img src="styles/legend/Landuse_2.png" /> Landuse'
            });
var format_Natural_3 = new ol.format.GeoJSON();
var features_Natural_3 = format_Natural_3.readFeatures(json_Natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natural_3.addFeatures(features_Natural_3);
var lyr_Natural_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natural_3, 
                style: style_Natural_3,
                popuplayertitle: "Natural",
                interactive: true,
                title: '<img src="styles/legend/Natural_3.png" /> Natural'
            });
var format_Places_4 = new ol.format.GeoJSON();
var features_Places_4 = format_Places_4.readFeatures(json_Places_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_4.addFeatures(features_Places_4);
var lyr_Places_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_4, 
                style: style_Places_4,
                popuplayertitle: "Places",
                interactive: true,
                title: '<img src="styles/legend/Places_4.png" /> Places'
            });
var format_Points_5 = new ol.format.GeoJSON();
var features_Points_5 = format_Points_5.readFeatures(json_Points_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_5.addFeatures(features_Points_5);
var lyr_Points_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_5, 
                style: style_Points_5,
                popuplayertitle: "Points",
                interactive: true,
                title: '<img src="styles/legend/Points_5.png" /> Points'
            });
var format_Railways_6 = new ol.format.GeoJSON();
var features_Railways_6 = format_Railways_6.readFeatures(json_Railways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_6.addFeatures(features_Railways_6);
var lyr_Railways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railways_6, 
                style: style_Railways_6,
                popuplayertitle: "Railways",
                interactive: true,
                title: '<img src="styles/legend/Railways_6.png" /> Railways'
            });
var format_Roads_7 = new ol.format.GeoJSON();
var features_Roads_7 = format_Roads_7.readFeatures(json_Roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_7.addFeatures(features_Roads_7);
var lyr_Roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_7, 
                style: style_Roads_7,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_7.png" /> Roads'
            });
var format_WaterWays_8 = new ol.format.GeoJSON();
var features_WaterWays_8 = format_WaterWays_8.readFeatures(json_WaterWays_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterWays_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterWays_8.addFeatures(features_WaterWays_8);
var lyr_WaterWays_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterWays_8, 
                style: style_WaterWays_8,
                popuplayertitle: "WaterWays",
                interactive: true,
                title: '<img src="styles/legend/WaterWays_8.png" /> WaterWays'
            });
var format_rent1_9 = new ol.format.GeoJSON();
var features_rent1_9 = format_rent1_9.readFeatures(json_rent1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rent1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rent1_9.addFeatures(features_rent1_9);
var lyr_rent1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rent1_9, 
                style: style_rent1_9,
                popuplayertitle: "rent1",
                interactive: true,
                title: '<img src="styles/legend/rent1_9.png" /> rent1'
            });
var format_sale1_10 = new ol.format.GeoJSON();
var features_sale1_10 = format_sale1_10.readFeatures(json_sale1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sale1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sale1_10.addFeatures(features_sale1_10);
var lyr_sale1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sale1_10, 
                style: style_sale1_10,
                popuplayertitle: "sale1",
                interactive: true,
                title: '<img src="styles/legend/sale1_10.png" /> sale1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_Landuse_2.setVisible(true);lyr_Natural_3.setVisible(true);lyr_Places_4.setVisible(true);lyr_Points_5.setVisible(true);lyr_Railways_6.setVisible(true);lyr_Roads_7.setVisible(true);lyr_WaterWays_8.setVisible(true);lyr_rent1_9.setVisible(true);lyr_sale1_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Buildings_1,lyr_Landuse_2,lyr_Natural_3,lyr_Places_4,lyr_Points_5,lyr_Railways_6,lyr_Roads_7,lyr_WaterWays_8,lyr_rent1_9,lyr_sale1_10];
lyr_Buildings_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Landuse_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Natural_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Places_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_Points_5.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_Railways_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Roads_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_WaterWays_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_rent1_9.set('fieldAliases', {'Type': 'Type', 'Area': 'Area', 'Rooms': 'Rooms', 'Bathrooms': 'Bathrooms', 'Floor': 'Floor', 'Constraction year\delivery': 'Constraction year\delivery', 'Finishing': 'Finishing', 'View': 'View', 'Adv no': 'Adv no', 'Payment method': 'Payment method', 'Advertiser': 'Advertiser', 'Price': 'Price', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Description': 'Description', 'Image URL': 'Image URL', });
lyr_sale1_10.set('fieldAliases', {'Type': 'Type', 'Area': 'Area', 'Rooms': 'Rooms', 'Bathrooms': 'Bathrooms', 'Floor': 'Floor', 'Constraction year\delivery': 'Constraction year\delivery', 'Finishing': 'Finishing', 'View': 'View', 'Adv-no': 'Adv-no', 'Price of one meter': 'Price of one meter', 'Payment method': 'Payment method', 'Advertiser': 'Advertiser', 'Price': 'Price', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Description': 'Description', 'Image URL': 'Image URL', });
lyr_Buildings_1.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_Landuse_2.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_Natural_3.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_Places_4.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', 'population': '', });
lyr_Points_5.set('fieldImages', {'osm_id': '', 'timestamp': '', 'name': '', 'type': '', });
lyr_Railways_6.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_Roads_7.set('fieldImages', {'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'maxspeed': '', });
lyr_WaterWays_8.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', 'width': '', });
lyr_rent1_9.set('fieldImages', {'Type': '', 'Area': '', 'Rooms': '', 'Bathrooms': '', 'Floor': '', 'Constraction year\delivery': '', 'Finishing': '', 'View': '', 'Adv no': '', 'Payment method': '', 'Advertiser': '', 'Price': '', 'Longitude': '', 'Latitude': '', 'Description': '', 'Image URL': '', });
lyr_sale1_10.set('fieldImages', {'Type': '', 'Area': '', 'Rooms': '', 'Bathrooms': '', 'Floor': '', 'Constraction year\delivery': '', 'Finishing': '', 'View': '', 'Adv-no': '', 'Price of one meter': '', 'Payment method': '', 'Advertiser': '', 'Price': '', 'Longitude': '', 'Latitude': '', 'Description': '', 'Image URL': '', });
lyr_Buildings_1.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Landuse_2.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Natural_3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Places_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'population': 'inline label - always visible', });
lyr_Points_5.set('fieldLabels', {'osm_id': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Railways_6.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Roads_7.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'ref': 'inline label - always visible', 'type': 'inline label - always visible', 'oneway': 'inline label - always visible', 'bridge': 'inline label - always visible', 'maxspeed': 'inline label - always visible', });
lyr_WaterWays_8.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'width': 'inline label - always visible', });
lyr_rent1_9.set('fieldLabels', {'Type': 'inline label - always visible', 'Area': 'inline label - always visible', 'Rooms': 'inline label - always visible', 'Bathrooms': 'inline label - always visible', 'Floor': 'inline label - always visible', 'Constraction year\delivery': 'inline label - always visible', 'Finishing': 'inline label - always visible', 'View': 'inline label - always visible', 'Adv no': 'inline label - always visible', 'Payment method': 'inline label - always visible', 'Advertiser': 'inline label - always visible', 'Price': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Description': 'inline label - always visible', 'Image URL': 'inline label - always visible', });
lyr_sale1_10.set('fieldLabels', {'Type': 'inline label - always visible', 'Area': 'inline label - always visible', 'Rooms': 'inline label - always visible', 'Bathrooms': 'inline label - always visible', 'Floor': 'inline label - always visible', 'Constraction year\delivery': 'inline label - always visible', 'Finishing': 'inline label - always visible', 'View': 'inline label - always visible', 'Adv-no': 'inline label - always visible', 'Price of one meter': 'inline label - always visible', 'Payment method': 'inline label - always visible', 'Advertiser': 'inline label - always visible', 'Price': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Description': 'inline label - always visible', 'Image URL': 'inline label - always visible', });
lyr_sale1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});