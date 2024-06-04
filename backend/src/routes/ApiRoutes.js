import { Router } from 'express';
import * as turf from '@turf/turf';

const router = Router();

const lineString = turf.lineString(
    [
        [121.537266131747913, 25.072976532905773],
        [121.538597857059031, 25.073154568998909],
        [121.539434976965083, 25.073213830897068],
        [121.540079122484897, 25.07324394359987],
        [121.541138108675781, 25.073227418800549],
        [121.541831711803951, 25.073215616019858],
        [121.543628873736168, 25.073184449385511],
        [121.544177243322409, 25.073173682048896],
        [121.544226057995999, 25.073172726681552],
        [121.544308413551121, 25.073171114758917],
        [121.544398817300078, 25.073169338757459],
        [121.544468456244061, 25.073167972901551],
        [121.545377489012196, 25.073150126082304],
        [121.546926835973991, 25.073125437103315],
        [121.549060493728433, 25.073083448129509],
        [121.549316672842764, 25.073077154867367],
        [121.549763655567048, 25.073066164257018],
        [121.551259646419922, 25.073029366710305],
        [121.55127953950236, 25.073028877545369],
        [121.551955650868294, 25.073014113192862],
        [121.551982610084124, 25.07301352543567],
        [121.552032970285595, 25.073012425432278],
        [121.552091824625236, 25.073011141247225],
        [121.552411988703838, 25.073004965782211],
        [121.553495288780724, 25.072980461269889],
        [121.555092084708221, 25.072949677176219],
        [121.55567677886242, 25.072916549699436],
        [121.556285076431365, 25.072840041216796],
        [121.556738879947147, 25.072763912041268],
        [121.558055465222978, 25.072416125800249],
        [121.558058863087865, 25.072415228280853],
        [121.558059169998486, 25.072415145874892],
        [121.558063596556636, 25.072413982675673],
        [121.558259390862361, 25.072349661252726],
        [121.559147857874962, 25.072048010908084],
        [121.559975347587255, 25.071740229596131],
        [121.560544045687834, 25.071537226166694],
        [121.561573117066857, 25.071268667934977],
        [121.562311857957596, 25.071131352302135],
        [121.562997505288251, 25.07106043681053],
        [121.563875198210113, 25.071026145851523],
        [121.564417617818833, 25.071021879922274],
        [121.565501488507593, 25.071046398265185],
        [121.566534014187184, 25.071055675770843],
        [121.567416609497641, 25.071074339599019],
        [121.568601787541937, 25.071049966722573],
        [121.568734885520925, 25.071044815572787],
        [121.568858370262276, 25.07104002705238],
        [121.568870758375795, 25.071039546237198],
        [121.568883146489185, 25.07103906542099],
        [121.568908616478652, 25.071038083070754],
        [121.568943283387355, 25.071036740461043],
        [121.568977940378872, 25.071035396978445],
        [121.569617652623208, 25.071010606662256],
        [121.570814419068768, 25.07093754682019],
        [121.57105367510961, 25.070912520986226],
        [121.571066078221151, 25.070911218381767],
        [121.571078472453422, 25.070909924838439],
        [121.571322671208875, 25.070884383017916],
        [121.571514767595886, 25.070864286661305],
        [121.571974127772634, 25.070812582703496],
        [121.571988731772905, 25.070810937506192],
        [121.572181027347213, 25.070788961697488],
        [121.572268487453059, 25.070779452122466],
        [121.572610480336564, 25.070732486893721],
        [121.57287863235004, 25.070695664429785],
        [121.572891193027488, 25.070693936749048],
        [121.572903317868011, 25.070692273945248],
        [121.572956690888134, 25.070684943963226],
        [121.573012302644102, 25.070677308299551],
        [121.57306887077884, 25.070668576534615],
        [121.573119843492961, 25.070660705954388],
        [121.573127201990303, 25.070659567101469],
        [121.573166525239827, 25.070653483884179],
        [121.573175875663622, 25.07065203941405],
        [121.573200382875996, 25.070648251433717],
        [121.573203659472071, 25.070647742242045],
        [121.573233988873255, 25.070643047934045],
        [121.57327378755393, 25.070636890628627],
        [121.573281959281417, 25.070635631263613],
        [121.573349235686692, 25.070625223971152],
        [121.573743756393398, 25.070564186248653],
        [121.574562661726915, 25.070417389879918],
        [121.574643248857427, 25.070400366225307],
        [121.574698326278266, 25.070388732595397],
        [121.574708841709196, 25.070386516138871],
        [121.574768039509422, 25.070374008871752],
        [121.574769999203795, 25.070373595024304],
        [121.574791579587583, 25.070369033580697],
        [121.574851368570506, 25.070356406627575],
        [121.574851566642479, 25.07035636974857],
        [121.574906022132978, 25.070344863939592],
        [121.575051350307433, 25.07031416559688],
        [121.575637812764811, 25.070197126057725],
        [121.576253260548839, 25.070055362274811],
        [121.576415593399432, 25.070017472601076],
        [121.576468446885059, 25.070005142769155],
        [121.576514913927298, 25.069994291228088],
        [121.576550796451059, 25.069985918339903],
        [121.577427361568638, 25.069763913788446],
        [121.578085863245136, 25.069571444366922],
        [121.578881881229847, 25.069323428290435],
        [121.579228795694831, 25.069220210441429],
        [121.579276050014812, 25.069206159058531],
        [121.579282899598653, 25.069204119087878],
        [121.579303072247654, 25.069198118005602],
        [121.57931207812905, 25.069195112651496],
        [121.579920321650221, 25.068992386771924],
        [121.580537416449019, 25.06876250279657],
        [121.580982290327483, 25.068598672011852],
        [121.581173796518911, 25.068528154083378],
        [121.581822298374249, 25.06826502716816],
        [121.58193866105681, 25.06821182953335],
        [121.582006896734995, 25.068180640253356],
        [121.582014799357893, 25.068177025157844],
        [121.582066240669974, 25.068153513193717],
        [121.5820843108974, 25.068145253951862],
        [121.582100185388356, 25.068137996396782],
        [121.58210151071556, 25.068137386324498],
        [121.582174246554175, 25.068104139899141],
        [121.58218655054425, 25.068098521375713],
        [121.582236854319262, 25.068075519381768],
        [121.582470105092867, 25.067968894715374],
        [121.583055534490114, 25.067713788431828],
        [121.583058932244271, 25.067712307135615],
        [121.583117803329444, 25.067687989224908],
        [121.583206291747828, 25.067653281089182],
        [121.58483473359783, 25.067006577262863],
        [121.58551361760864, 25.066709748617999],
        [121.58556430085558, 25.066687592644335],
        [121.585615706093662, 25.066665108797885],
        [121.585679208473607, 25.066637349101182],
        [121.585768894095608, 25.066598129760703],
        [121.585777855892673, 25.066594474176309],
        [121.586805852582046, 25.066175005961732],
        [121.586904942952856, 25.066133726500841]
    ]
);

const multiPt = {
    "type": "FeatureCollection",
    "name": "station_taipeipart",
    "crs": {
        "type": "name",
        "properties": { "name": "urn:ogc:def:crs:EPSG::4326" }
    },
    "features": [
        {
        "type": "Feature",
        "properties": {
            "Name": "017K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5870293</TD><TD>25.06618759</TD><TD>38.88</TD><TD>17600</TD><TD>017K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5870293, 25.06618759, 38.88]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "017K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5861256</TD><TD>25.06655832</TD><TD>38.26</TD><TD>17700</TD><TD>017K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5861256, 25.06655832, 38.26]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "017K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5852219</TD><TD>25.06692904</TD><TD>37.65</TD><TD>17800</TD><TD>017K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5852219, 25.06692904, 37.65]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "017K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5843181</TD><TD>25.06729976</TD><TD>37.03</TD><TD>17900</TD><TD>017K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5843181, 25.06729976, 37.03]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5834144</TD><TD>25.06767048</TD><TD>36.42</TD><TD>18000</TD><TD>018K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5834144, 25.06767048, 36.42]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5825106</TD><TD>25.06804118</TD><TD>35.8</TD><TD>18100</TD><TD>018K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5825106, 25.06804118, 35.8]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5816066</TD><TD>25.06841139</TD><TD>35.21</TD><TD>18200</TD><TD>018K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5816066, 25.06841139, 35.21]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+300",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5806958</TD><TD>25.06876759</TD><TD>35.17</TD><TD>18300</TD><TD>018K+300</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5806958, 25.06876759, 35.17]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+400",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5797722</TD><TD>25.06909503</TD><TD>35.13</TD><TD>18400</TD><TD>018K+400</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5797722, 25.06909503, 35.13]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+500",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5788395</TD><TD>25.06940056</TD><TD>35.09</TD><TD>18500</TD><TD>018K+500</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5788395, 25.06940056, 35.09]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5778978</TD><TD>25.06968222</TD><TD>35.02</TD><TD>18600</TD><TD>018K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5778978, 25.06968222, 35.02]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5769481</TD><TD>25.06994068</TD><TD>35.05</TD><TD>18700</TD><TD>018K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5769481, 25.06994068, 35.05]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5759904</TD><TD>25.07017324</TD><TD>35.17</TD><TD>18800</TD><TD>018K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5759904, 25.07017324, 35.17]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "018K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5750261</TD><TD>25.07038192</TD><TD>35.75</TD><TD>18900</TD><TD>018K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5750261, 25.07038192, 35.75]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5740552</TD><TD>25.07056333</TD><TD>36.3</TD><TD>19000</TD><TD>019K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5740552, 25.07056333, 36.3]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5730796</TD><TD>25.07072266</TD><TD>36.88</TD><TD>19100</TD><TD>019K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5730796, 25.07072266, 36.88]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5720986</TD><TD>25.07085125</TD><TD>37.06</TD><TD>19200</TD><TD>019K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5720986, 25.07085125, 37.06]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+300",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5711142</TD><TD>25.0709568</TD><TD>36.64</TD><TD>19300</TD><TD>019K+300</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5711142, 25.0709568, 36.64]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+400",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5701271</TD><TD>25.07103717</TD><TD>35.89</TD><TD>19400</TD><TD>019K+400</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5701271, 25.07103717, 35.89]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+500",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5691379</TD><TD>25.07109337</TD><TD>35.05</TD><TD>19500</TD><TD>019K+500</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5691379, 25.07109337, 35.05]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5681474</TD><TD>25.07112435</TD><TD>34.05</TD><TD>19600</TD><TD>019K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5681474, 25.07112435, 34.05]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5671563</TD><TD>25.07112745</TD><TD>33.21</TD><TD>19700</TD><TD>019K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5671563, 25.07112745, 33.21]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5661652</TD><TD>25.07111847</TD><TD>32.7</TD><TD>19800</TD><TD>019K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5661652, 25.07111847, 32.7]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "019K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5651741</TD><TD>25.07110357</TD><TD>32.56</TD><TD>19900</TD><TD>019K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5651741, 25.07110357, 32.56]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.564183</TD><TD>25.0710913</TD><TD>32.48</TD><TD>20000</TD><TD>020K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.564183, 25.0710913, 32.48]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5631924</TD><TD>25.07111668</TD><TD>32.84</TD><TD>20100</TD><TD>020K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5631924, 25.07111668, 32.84]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5622089</TD><TD>25.07122545</TD><TD>33.5</TD><TD>20200</TD><TD>020K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5622089, 25.07122545, 33.5]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+300",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5612418</TD><TD>25.07142154</TD><TD>33.55</TD><TD>20300</TD><TD>020K+300</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5612418, 25.07142154, 33.55]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+400",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5602996</TD><TD>25.07170088</TD><TD>32.97</TD><TD>20400</TD><TD>020K+400</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5602996, 25.07170088, 32.97]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+500",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5593737</TD><TD>25.07202301</TD><TD>32.41</TD><TD>20500</TD><TD>020K+500</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5593737, 25.07202301, 32.41]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5584488</TD><TD>25.07234787</TD><TD>31.88</TD><TD>20600</TD><TD>020K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5584488, 25.07234787, 31.88]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5575105</TD><TD>25.07263743</TD><TD>31.69</TD><TD>20700</TD><TD>020K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5575105, 25.07263743, 31.69]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5565471</TD><TD>25.07284728</TD><TD>31.77</TD><TD>20800</TD><TD>020K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5565471, 25.07284728, 31.77]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "020K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.555566</TD><TD>25.07297253</TD><TD>31.85</TD><TD>20900</TD><TD>020K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.555566, 25.07297253, 31.85]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5545767</TD><TD>25.07302509</TD><TD>32.06</TD><TD>21000</TD><TD>021K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5545767, 25.07302509, 32.06]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5535857</TD><TD>25.07304525</TD><TD>32.24</TD><TD>21100</TD><TD>021K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5535857, 25.07304525, 32.24]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5525947</TD><TD>25.07306447</TD><TD>32.43</TD><TD>21200</TD><TD>021K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5525947, 25.07306447, 32.43]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+300",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5516036</TD><TD>25.0730831</TD><TD>32.63</TD><TD>21300</TD><TD>021K+300</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5516036, 25.0730831, 32.63]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+400",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5506126</TD><TD>25.07310173</TD><TD>32.83</TD><TD>21400</TD><TD>021K+400</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5506126, 25.07310173, 32.83]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+500",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5496216</TD><TD>25.07312035</TD><TD>33.03</TD><TD>21500</TD><TD>021K+500</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5496216, 25.07312035, 33.03]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5486306</TD><TD>25.07313896</TD><TD>33.23</TD><TD>21600</TD><TD>021K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5486306, 25.07313896, 33.23]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5476395</TD><TD>25.07315757</TD><TD>33.43</TD><TD>21700</TD><TD>021K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5476395, 25.07315757, 33.43]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5466485</TD><TD>25.07317617</TD><TD>33.63</TD><TD>21800</TD><TD>021K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5466485, 25.07317617, 33.63]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "021K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5456575</TD><TD>25.07319476</TD><TD>33.83</TD><TD>21900</TD><TD>021K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5456575, 25.07319476, 33.83]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5446665</TD><TD>25.07321335</TD><TD>34.03</TD><TD>22000</TD><TD>022K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5446665, 25.07321335, 34.03]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5436754</TD><TD>25.07323192</TD><TD>34.23</TD><TD>22100</TD><TD>022K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5436754, 25.07323192, 34.23]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5426844</TD><TD>25.0732505</TD><TD>34.43</TD><TD>22200</TD><TD>022K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5426844, 25.0732505, 34.43]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+300",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5416934</TD><TD>25.07326906</TD><TD>34.63</TD><TD>22300</TD><TD>022K+300</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5416934, 25.07326906, 34.63]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+400",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5407024</TD><TD>25.07328219</TD><TD>33.19</TD><TD>22400</TD><TD>022K+400</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5407024, 25.07328219, 33.19]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+500",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5397115</TD><TD>25.07326851</TD><TD>31.69</TD><TD>22500</TD><TD>022K+500</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5397115, 25.07326851, 31.69]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+600",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5387229</TD><TD>25.07320863</TD><TD>30.57</TD><TD>22600</TD><TD>022K+600</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5387229, 25.07320863, 30.57]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+700",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5377392</TD><TD>25.07309807</TD><TD>29.98</TD><TD>22700</TD><TD>022K+700</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5377392, 25.07309807, 29.98]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+800",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5367574</TD><TD>25.0729743</TD><TD>30.48</TD><TD>22800</TD><TD>022K+800</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5367574, 25.0729743, 30.48]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "022K+900",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5357758</TD><TD>25.07284854</TD><TD>31.19</TD><TD>22900</TD><TD>022K+900</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5357758, 25.07284854, 31.19]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "023K+000",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5347942</TD><TD>25.07272365</TD><TD>31.98</TD><TD>23000</TD><TD>023K+000</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5347942, 25.07272365, 31.98]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "023K+100",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5338093</TD><TD>25.07262398</TD><TD>33.6</TD><TD>23100</TD><TD>023K+100</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5338093, 25.07262398, 33.6]
        }
        },
        {
        "type": "Feature",
        "properties": {
            "Name": "023K+200",
            "description": "<TABLE BORDER=\"1\" WIDTH=\"600\"><TR BGCOLOR=#e0ffff><TH>RoadName</TH><TH>LR</TH><TH>X</TH><TH>Y</TH><TH>Z</TH><TH>KM</TH><TH>KM2</TH></TR><TD>國1</TD><TD>M</TD><TD>121.5328196</TD><TD>25.07263077</TD><TD>34.65</TD><TD>23200</TD><TD>023K+200</TD></TABLE>",
            "timestamp": null,
            "begin": null,
            "end": null,
            "altitudeMode": null,
            "tessellate": -1,
            "extrude": 0,
            "visibility": -1,
            "drawOrder": null,
            "icon": null,
            "Route": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [121.5328196, 25.07263077, 34.65]
        }
        }
    ]
};

const initialData = (inputPt, lineString, multiPt, threshold=0.2) => {
    const inputPtToPathDistance = turf.pointToLineDistance(inputPt, lineString, {units: 'kilometers'});

    if (inputPtToPathDistance < threshold) {
        const projectedInputPt = turf.nearestPointOnLine(lineString, inputPt);
        const splitLineStrings = [];
        const projectedPoints = [];
        
        // Iterate through each point in the MultiPoint
        multiPt.features.forEach(feature => {
            const coordinate = feature.geometry.coordinates;
            const mile = convertStringToFloat(feature.properties.Name);
            
            // Project each point onto the LineString
            const point = turf.point(coordinate);
            const projectedPoint = turf.nearestPointOnLine(lineString, point);

            // Collect projected points
            projectedPoints.push({"coordinates": projectedPoint.geometry.coordinates, "mile": mile});
        });

        // Use each pair of adjacent projected points to split the whole LineString
        for (let i = 0; i < projectedPoints.length - 1; i++) {
            const startPoint = projectedPoints[i].coordinates;
            const endPoint = projectedPoints[i + 1].coordinates;
            
            // Split the LineString by the pair of points
            const split = turf.lineSlice(startPoint, endPoint, lineString);
            split.properties = {
                "startPt": projectedPoints[i], 
                "endPt": projectedPoints[i + 1]
            };

            // Collect the split LineString
            splitLineStrings.push(split);
        }

        return {
            "status": "success",
            "data": {
                "projectedInputPt": projectedInputPt,
                "splitLineStrings": splitLineStrings
            }
        }
    } else {
        return {
            "status": "error",
            "message": "The input point is too far from the road."
        }
    }
};

const convertStringToFloat = (inputString) => {
    const replacedString = String(inputString).replace('K+', '.');
    const trimmedString = replacedString.replace(/^0+/, '');
    const parts = trimmedString.split('.');
    if (parts.length === 1 || parts[1].length === 0) {
        parts.push('0');
    }

    const result = parseFloat(parts.join('.'));

    return result;
}

router.get('/getMile', (req, res) => {
    // const inputPt = [121.5710216096096, 25.071002700355304];
    const { x, y } = req.query;

    // Check if both x and y coordinates are provided
    if (!x || !y) {
        return res.status(400).json({ status: "error", message: "Both 'x' and 'y' coordinates are required." });
    }

    const inputPt = [x, y];
    const initialDataJson = initialData(inputPt, lineString, multiPt);

    // Find The Top2 Nearest Stations
    if (initialDataJson.status === "success") {
        const { projectedInputPt, splitLineStrings } = initialDataJson.data;

        // Find The Path
        var targetPath = null;
        for (let i = 0; i < splitLineStrings.length - 1; i++) {
            var path = splitLineStrings[i];
            
            if (turf.pointToLineDistance(projectedInputPt, path) < 0.0001) {
                targetPath = path;
                break;
            }
        };

        if (!targetPath) res.status(204).json(initialDataJson);

        // Calculate The Distance Along Path
        // const mileResult = getDistanceAlongPath(path);
        const startPt = path.properties.startPt.coordinates;
        const startPtMile = path.properties.startPt.mile;
        const endPt = path.properties.endPt.coordinates;
        const endPtMile = path.properties.endPt.mile;
        const split = turf.lineSlice(startPt, projectedInputPt, lineString);
        const splitLength = turf.length(split, { units: "kilometers" });
        
        // Get The Mile of Input Point
        const inputPtMile = parseFloat((startPtMile + splitLength).toFixed(3));

        // Gengerate Output Geometry
        const startPtGeom = turf.point(startPt);
        startPtGeom.properties = {"Name": "Start_Point", "Mile": startPtMile};
        const endPtGeom = turf.point(endPt);
        endPtGeom.properties = {"Name": "End_Point",  "Mile": endPtMile};

        const floatInputPt = inputPt.map(function(coord) {
            return parseFloat(coord);
        });
        const inputPtGeom = turf.point(floatInputPt);
        inputPtGeom.properties = {"Name": "Input_Point", "Mile": inputPtMile};

        const pathGeom = targetPath
        pathGeom.properties = {"Name": "Path_Name"};

        // Api Result
        const apiResult = {
            "status": "success",
            "data": {
                "text": {
                    "inputPtMile": inputPtMile,
                    "pathName": pathGeom.properties.Name
                },
                "geometry": {
                    "totalFeatureCollection": turf.featureCollection([ inputPtGeom, startPtGeom, endPtGeom, pathGeom])
                }
            }
        };

        res.status(200).json(apiResult);
    } else {
        res.status(204).json(initialDataJson);
    }
});

export default router;
