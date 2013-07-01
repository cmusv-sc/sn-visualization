var sn_visualization = sn_visualization || {};

sn_visualization.prestoredData = {
    cmusvB23 : {
        polygonGeo : [ [37.410326,-122.059208], [37.410750,-122.059420], [37.410490,-122.060227], [37.410080,-122.060037] ],
        bgGeo : [[37.410326,-122.059208], [37.410490,-122.060227]],
        elevations : 1, // The number of floors
        imgs : [ "images/floor1.png", "images/floor2.png" ], // floorplan images for each floor
        ugTable : {
            '10170205' : { print_name : "Sensor Andrew 214B", geo : [37.410465,-122.059935, 1] },
            '10170204' : { print_name : "Sensor Andrew 214", geo : [37.410465,-122.059990, 1] },
            '10170203' : { print_name : "Sensor Andrew 213", geo : [37.410466,-122.060050, 1] },
            '10170202' : { print_name : "Sensor Andrew 216", geo : [37.410449,-122.060050, 1] },
            '10170208' : { print_name : "Sensor Andrew 217A", geo : [37.410449,-122.059784, 1] },
            '10170209' : { print_name : "Sensor Andrew 217B", geo : [37.410449,-122.059874, 1] },
            '10170105' : { print_name : "Sensor Andrew 228", geo : [37.410411,-122.059480, 1] },
            '10170104' : { print_name : "Sensor Andrew 230", geo : [37.410400,-122.059480, 1] },
            '10170007' : { print_name : "Sensor Andrew 211", geo : [37.410350,-122.059890, 1] },
            '10170008' : { print_name : "Sensor Andrew 212", geo : [37.410350,-122.059990, 1] },
            '10170207' : { print_name : "Sensor Andrew 215", geo : [37.410465,-122.059780, 1] },
            '10170206' : { print_name : "Sensor Andrew 215B", geo : [37.410465,-122.059852, 1] },
            '10170009' : { print_name : "Sensor Andrew 210", geo : [37.410362,-122.060040, 1] },
            '10170303' : { print_name : "Sensor Andrew 104", geo : [37.410386,-122.060032, 0] },
            '10170302' : { print_name : "Sensor Andrew 105B", geo : [37.410379,-122.060032, 0] },
            '10170006' : { print_name : "Sensor Andrew 107", geo : [37.410368,-122.060048, 0] },
            '10170005' : { print_name : "Sensor Andrew 109", geo : [37.410350,-122.059990, 0] },
            '10170004' : { print_name : "Sensor Andrew 110", geo : [37.410350,-122.059930, 0] },
            '10170002' : { print_name : "Sensor Andrew 115", geo : [37.410357,-122.059680, 0] },
            '10170003' : { print_name : "Sensor Andrew 116", geo : [37.410365,-122.059680, 0] },
            '10170308' : { print_name : "Sensor Andrew 120", geo : [37.410442,-122.060030, 0] },
            '10170307' : { print_name : "Sensor Andrew 122", geo : [37.410437,-122.060030, 0] },
            '10170306' : { print_name : "Sensor Andrew 124", geo : [37.410431,-122.060030, 0] },
            '10170305' : { print_name : "Sensor Andrew 126", geo : [37.410425,-122.060030, 0] },
            '10170103' : { print_name : "Sensor Andrew 129", geo : [37.410400,-122.059750, 0] },
            '10170102' : { print_name : "Sensor Andrew 129A", geo : [37.410415,-122.059630, 0] },
            '23-03' : { print_name : "Jeenet 213", geo : [37.410460,-122.060090, 1] },
            '23-05' : { print_name : "Jeenet 214", geo : [37.4104695,-122.060006, 1] },
            '23-01' : { print_name : "Jeenet 216", geo : [37.410454,-122.060090, 1] },
            'Sweetfeedback_device_3' : { print_name : "Sweetfeedback 120", geo : [37.410442,-122.060080, 0] }
        }
    },

    nasaBuildingN : {
        polygonGeo : [
            [37.410904,-122.062409], //make x smaller "lowers" a corner, make y quantity smaller moves corner to right  "bottom left corner"
            [37.411181,-122.061529], //make x larger "raises" a corner, make y quantity larger moves corner to left, "bottom right corner"
            [37.41144,-122.061695], //make x larger "raises" a corner, "top right corner"
            [37.411205,-122.06251]  //"top left corner"
        ],
        bgGeo : [[37.411467,-122.062457], [37.410912,-122.061556]],
        elevations : 1,
        imgs : [ "images/nasa1stnorth.png", "images/nasa2ndnorth.png" ],
        //increasing x moves it to the left, decreasing x moves it to the right
        //increasing y moves it up, decreasing y moves it down
        ugTable : {
            //first floor North
            '10181101' : { print_name : "RTN101", geo : [37.411419,-122.062012, 0] },
            '10181103' : { print_name : "RTN103", geo : [37.411421,-122.061836, 0] },
            '10181104' : { print_name : "RTN104", geo : [37.411420,-122.061798, 0] },
            '10181105' : { print_name : "RTN105", geo : [37.411376,-122.062015, 0] },
            '10181106' : { print_name : "RTN106", geo : [37.411375,-122.061950, 0] },
            '10181107' : { print_name : "RTN107", geo : [37.411373,-122.061875, 0] },
            '10181108' : { print_name : "RTN108", geo : [37.411370,-122.061801, 0] },
            '10181109' : { print_name : "RTN109", geo : [37.411332,-122.062024, 0] },
            '10181110' : { print_name : "RTN110", geo : [37.411325,-122.061940, 0] },
            '10181111' : { print_name : "RTN111", geo : [37.411324,-122.061878, 0] },
            '10181112' : { print_name : "RTN112", geo : [37.411320,-122.061816, 0] },
            '10181113' : { print_name : "RTN113", geo : [37.411305,-122.062020, 0] },
            '10181114' : { print_name : "RTN114", geo : [37.411302,-122.061973, 0] },
            '10181115' : { print_name : "RTN115", geo : [37.411299,-122.061921, 0] },
            '10181116' : { print_name : "RTN116", geo : [37.411289,-122.061849, 0] },
            '10181117' : { print_name : "RTN117", geo : [37.411265,-122.062033, 0] },
            '10181118' : { print_name : "RTN118", geo : [37.411264,-122.062013, 0] },
            '10181119' : { print_name : "RTN119", geo : [37.411273,-122.061926, 0] },
            '10181120' : { print_name : "RTN120", geo : [37.411262,-122.061861, 0] },
            '10181121' : { print_name : "RTN121", geo : [37.411243,-122.062066, 0] },
            '10181122' : { print_name : "RTN122", geo : [37.411235,-122.061999, 0] },
            '10181123' : { print_name : "RTN123", geo : [37.411228,-122.061940, 0] },
            '10181124' : { print_name : "RTN124", geo : [37.411218,-122.061863, 0] },
            '10181125' : { print_name : "RTN125", geo : [37.411200,-122.062099, 0] },
            '10181126' : { print_name : "RTN126", geo : [37.411190,-122.062037, 0] },
            '10181127' : { print_name : "RTN127", geo : [37.411180,-122.061975, 0] },
            '10181128' : { print_name : "RTN128", geo : [37.411168,-122.061900, 0] },
            '10181129' : { print_name : "RTN129", geo : [37.411147,-122.062071, 0] },
            '10181130' : { print_name : "RTN130", geo : [37.411113,-122.061925, 0] },
            '10181132' : { print_name : "RTN132", geo : [37.411123,-122.062182, 0] },
            '10181134' : { print_name : "RTN134", geo : [37.411074,-122.062037, 0] },
            '10181135' : { print_name : "RTN135", geo : [37.411060,-122.062160, 0] },
            '10181136' : { print_name : "RTN136", geo : [37.411040,-122.062293, 0] },
            '10181137' : { print_name : "RTN137", geo : [37.411025,-122.062072, 0] },
            '10181138' : { print_name : "RTN138", geo : [37.410999,-122.062116, 0] },
            
            // start of second floor North
            '10181201' : { print_name : "RTN201", geo : [37.411419,-122.062021, 1] },
            '10181202' : { print_name : "RTN202", geo : [37.411419,-122.061979, 1] },
            '10181203' : { print_name : "RTN203", geo : [37.411419,-122.061840, 1] },
            '10181204' : { print_name : "RTN204", geo : [37.411419,-122.061800, 1] },

            '10181205' : { print_name : "RTN205", geo : [37.411374,-122.062023, 1] },
            '10181206' : { print_name : "RTN206", geo : [37.411371,-122.061950, 1] },
            '10181207' : { print_name : "RTN207", geo : [37.411369,-122.061860, 1] },
            '10181208' : { print_name : "RTN208", geo : [37.411369,-122.061800, 1] },

            '10181209' : { print_name : "RTN209", geo : [37.411327,-122.062029, 1] },
            '10181210' : { print_name : "RTN210", geo : [37.411323,-122.061950, 1] },
            '10181211' : { print_name : "RTN211", geo : [37.411319,-122.061878, 1] },
            '10181212' : { print_name : "RTN212", geo : [37.411315,-122.061810, 1] }

        }
    },

     nasaBuildingS : {
        polygonGeo : [
            [37.41075,-122.061899], //make x smaller "lowers" a corner, make y quantity smaller moves corner to right  "bottom left corner"
            [37.411050,-122.061070], //make x larger "raises" a corner, make y quantity larger moves corner to left, "bottom right corner"
            [37.411431,-122.061261], //make x larger "raises" a corner, "top right corner"
            [37.411148,-122.062044]  //"top left corner"
        ],
        bgGeo : [[37.411413,-122.06199], [37.410786,-122.061046]],
        elevations : 1,
        imgs : [ "images/nasa1stsouth.png", "images/nasa2ndsouth.png" ],
        ugTable : {
            '10182201' : { print_name : "RTS101", geo : [37.411349,-122.061392, 0] },
            // need to be re-aligned...
            '10182202' : { print_name : "RTS102", geo : [37.409240,-122.05324, 0] },
            '10182203' : { print_name : "RTS103", geo : [37.409000,-122.05326, 0] },
            '10182204' : { print_name : "RTS104", geo : [37.409180,-122.05276, 0] },
            '10182205' : { print_name : "RTS105", geo : [37.409100,-122.05264, 0] },
            '10182206' : { print_name : "RTS106", geo : [37.409040,-122.05214, 0] },
            '10182207' : { print_name : "RTS107", geo : [37.408250,-122.05284, 0] },
            '10182208' : { print_name : "RTS108", geo : [37.407920,-122.05237, 0] },
            '10182209' : { print_name : "RTS109", geo : [37.407200,-122.05310, 0] },
            '10182210' : { print_name : "RTS110", geo : [37.406840,-122.05264, 0] },
            '10182211' : { print_name : "RTS111", geo : [37.407258,-122.05354, 0] },
            '10182212' : { print_name : "RTS112", geo : [37.407566,-122.05390, 0] },
            '10182213' : { print_name : "RTS113", geo : [37.406130,-122.05337, 0] },
            '10182214' : { print_name : "RTS114", geo : [37.405775,-122.05298, 0] },
            '10182215' : { print_name : "RTS115", geo : [37.406187,-122.05386, 0] },
            '10182216' : { print_name : "RTS116", geo : [37.405095,-122.05370, 0] },
            '10182217' : { print_name : "RTS117", geo : [37.404700,-122.05331, 0] },
            '10182218' : { print_name : "RTS118", geo : [37.404950,-122.05478, 0] },
            '10182219' : { print_name : "RTS119", geo : [37.404627,-122.05447, 0] },
            '10182220' : { print_name : "RTS120", geo : [37.404045,-122.05403, 0] },
            '10182221' : { print_name : "RTS121", geo : [37.403655,-122.05367, 0] },
            '10182222' : { print_name : "RTS122", geo : [37.404250,-122.05483, 0] },
            '10182223' : { print_name : "RTS123", geo : [37.404085,-122.05471, 0] },
            '10182224' : { print_name : "RTS124", geo : [37.403600,-122.05442, 0] },
            '10182225' : { print_name : "RTS125", geo : [37.403198,-122.05415, 0] },
            '10182226' : { print_name : "RTS126", geo : [37.403770,-122.05506, 0] },
            '10182227' : { print_name : "RTS127", geo : [37.402850,-122.05528, 0] },
            '10182228' : { print_name : "RTS128", geo : [37.403370,-122.05501, 0] },
            '10182229' : { print_name : "RTS129", geo : [37.402897,-122.05478, 0] },
            '10182230' : { print_name : "RTS130", geo : [37.403290,-122.05553, 0] },
            '10182231' : { print_name : "RTS131", geo : [37.402387,-122.05500, 0] },
            '10182232' : { print_name : "RTS132", geo : [37.402550,-122.05446, 0] },
            '10182233' : { print_name : "RTS133", geo : [37.401720,-122.05460, 0] },
            '10182234' : { print_name : "RTS134", geo : [37.402527,-122.05595, 0] },
            '10182235' : { print_name : "RTS135", geo : [37.401940,-122.05562, 0] },
            '10182236' : { print_name : "RTS136", geo : [37.401460,-122.05539, 0] },
            '10182237' : { print_name : "RTS137", geo : [37.400854,-122.05505, 0] },
            '10182238' : { print_name : "RTS138", geo : [37.401876,-122.05634, 0] },
            '10182239' : { print_name : "RTS139", geo : [37.401623,-122.05623, 0] },
            '10182240' : { print_name : "RTS140", geo : [37.400310,-122.05573, 0] },
            '10182241' : { print_name : "RTS141", geo : [37.400040,-122.05555, 0] },
        }
    }

};
