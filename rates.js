/* CAYS shipping rates — shared by the order pages.
   Copied from the round calculators (Thailand → worldwide, prices in THB).
   Rates already include the handling fee. Change rates only here.            */
(function (root) {
var RATES = {
  1:  [250,250,300,350,400,400,450,500,550,600,600,650,700,750,750,800,850,900,950,1000],
  2:  [250,300,300,350,400,400,450,500,550,600,600,650,700,750,750,800,850,900,950,1000],
  3:  [250,250,300,350,400,400,450,500,550,600,600,650,700,750,750,800,850,900,950,1000],
  4:  [250,300,350,400,450,550,600,650,700,750,800,800,850,900,950,1000,1050,1100,1150,1200],
  5:  [250,300,350,450,500,550,600,700,750,850,950,1000,1100,1150,1200,1300,1350,1450,1500,1600],
  6:  [300,350,400,450,500,550,600,650,700,750,850,900,950,1000,1050,1100,1150,1250,1300,1350],
  7:  [300,350,400,500,550,650,700,800,850,900,1000,1050,1150,1200,1300,1350,1400,1500,1550,1650],
  8:  [300,400,450,500,550,650,700,800,900,1000,1050,1150,1250,1350,1450,1500,1600,1700,1800,1900],
  9:  [300,350,400,400,450,500,550,650,700,750,800,850,900,950,1050,1100,1150,1250,1300,1350],
  10: [350,400,500,550,650,750,800,900,1000,1100,1150,1250,1350,1400,1500,1600,1700,1750,1850,1950],
  11: [300,400,500,600,650,800,850,950,1050,1150,1250,1350,1450,1550,1600,1700,1800,1900,2000,2100],
  12: [300,400,450,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100],
  13: [300,400,500,550,650,800,900,1000,1150,1250,1350,1500,1600,1700,1850,1950,2050,2200,2300,2400],
  14: [350,400,500,600,700,800,950,1050,1200,1300,1400,1550,1650,1750,1900,2000,2150,2250,2350,2500],
  15: [350,450,500,600,700,750,900,1000,1050,1150,1250,1350,1450,1550,1650,1750,1850,1950,2050,2150],
  16: [350,450,550,700,800,950,1050,1200,1300,1450,1550,1700,1800,1950,2050,2200,2350,2450,2600,2700],
  17: [300,350,400,450,500,600,700,750,850,900,1000,1100,1150,1250,1350,1400,1500,1550,1650,1700]
};

var US_RATES = {
  US1: [400,450,550,600,700,750,850,950,1050,1100,1200,1300,1350,1450,1550,1650,1700,1800,1900,2000,2300,2650,2950,3300,3650,3950],
  US2: [450,550,700,800,950,1050,1100,1150,1250,1350,1450,1500,1600,1700,1750,1800,1900,1950,2050,2200,2600,2950,3350,3750,4100,4500]
};

var DEST = [
  ["Albania",11],["Algeria",8],["Argentina",16],["Armenia",7],["Australia",6],
  ["Austria",13],["Azerbaijan",7],["Bahrain",6],["Bangladesh",6],["Belarus",5],
  ["Belgium",13],["Bhutan",2],["Bosnia and Herzegovina",13],["Brazil",14],
  ["Brunei",5],["Bulgaria",5],["Cambodia",1],["Canada",16],["China",1],
  ["Colombia",14],["Cote D'Ivoire",8],["Croatia",11],["Cyprus",8],["Czech Republic",8],
  ["Denmark",13],["Djibouti",14],["Egypt",8],["Estonia",8],["Ethiopia",11],
  ["Finland",11],["France",7],["Georgia",8],["Germany",9],["Ghana",11],
  ["Greece",13],["Hong Kong",1],["Hungary",10],["Iceland",13],["India",2],
  ["Indonesia",1],["Iran",7],["Iraq",7],["Ireland",10],["Israel",8],
  ["Italy",10],["Japan",3],["Jordan",12],["Kazakhstan",8],["Kenya",7],
  ["South Korea",1],["Kuwait",7],["Kyrgyzstan",8],["Laos",1],["Latvia",16],
  ["Lebanon",7],["Lithuania",13],["Luxembourg",11],["Macao",3],["Madagascar",8],
  ["Macedonia",14],["Malaysia",1],["Maldives",2],["Malta",11],["Mauritius",8],
  ["Mexico",17],["Moldova",11],["Mongolia",7],["Morocco",7],["Mozambique",11],
  ["Myanmar",1],["Nepal",10],["Netherlands",13],["New Zealand",7],["Nigeria",7],
  ["Norway",13],["Oman",10],["Pakistan",5],["Panama",14],["Philippines",1],
  ["Poland",11],["Portugal",13],["Qatar",11],["Romania",10],["Russia",12],
  ["Rwanda",8],["Saudi Arabia",11],["Senegal",14],["Serbia",8],["Singapore",1],
  ["Slovakia",16],["Slovenia",13],["South Africa",10],["Spain",15],["Sri Lanka",4],
  ["Sweden",15],["Switzerland",13],["Taiwan",1],["Tanzania",13],["Tunisia",8],
  ["Turkey",11],["United Arab Emirates",5],["United Kingdom",7],
  ["United States (Mainland)","US1"],["United States (Alaska, Hawaii & Territories)","US2"],
  ["Uzbekistan",7],["Vietnam",1],["Zambia",11]
].sort(function (a, b) { return a[0].localeCompare(b[0]); });

var FLAGS = {
  "Albania":"🇦🇱","Algeria":"🇩🇿","Argentina":"🇦🇷","Armenia":"🇦🇲",
  "Australia":"🇦🇺","Austria":"🇦🇹","Azerbaijan":"🇦🇿","Bahrain":"🇧🇭",
  "Bangladesh":"🇧🇩","Belarus":"🇧🇾","Belgium":"🇧🇪","Bhutan":"🇧🇹",
  "Bosnia and Herzegovina":"🇧🇦","Brazil":"🇧🇷","Brunei":"🇧🇳","Bulgaria":"🇧🇬",
  "Cambodia":"🇰🇭","Canada":"🇨🇦","China":"🇨🇳","Colombia":"🇨🇴",
  "Cote D'Ivoire":"🇨🇮","Croatia":"🇭🇷","Cyprus":"🇨🇾","Czech Republic":"🇨🇿",
  "Denmark":"🇩🇰","Djibouti":"🇩🇯","Egypt":"🇪🇬","Estonia":"🇪🇪",
  "Ethiopia":"🇪🇹","Finland":"🇫🇮","France":"🇫🇷","Georgia":"🇬🇪",
  "Germany":"🇩🇪","Ghana":"🇬🇭","Greece":"🇬🇷","Hong Kong":"🇭🇰",
  "Hungary":"🇭🇺","Iceland":"🇮🇸","India":"🇮🇳","Indonesia":"🇮🇩",
  "Iran":"🇮🇷","Iraq":"🇮🇶","Ireland":"🇮🇪","Israel":"🇮🇱",
  "Italy":"🇮🇹","Japan":"🇯🇵","Jordan":"🇯🇴","Kazakhstan":"🇰🇿",
  "Kenya":"🇰🇪","South Korea":"🇰🇷","Kuwait":"🇰🇼","Kyrgyzstan":"🇰🇬",
  "Laos":"🇱🇦","Latvia":"🇱🇻","Lebanon":"🇱🇧","Lithuania":"🇱🇹",
  "Luxembourg":"🇱🇺","Macao":"🇲🇴","Macedonia":"🇲🇰","Madagascar":"🇲🇬",
  "Malaysia":"🇲🇾","Maldives":"🇲🇻","Malta":"🇲🇹","Mauritius":"🇲🇺",
  "Mexico":"🇲🇽","Moldova":"🇲🇩","Mongolia":"🇲🇳","Morocco":"🇲🇦",
  "Mozambique":"🇲🇿","Myanmar":"🇲🇲","Nepal":"🇳🇵","Netherlands":"🇳🇱",
  "New Zealand":"🇳🇿","Nigeria":"🇳🇬","Norway":"🇳🇴","Oman":"🇴🇲",
  "Pakistan":"🇵🇰","Panama":"🇵🇦","Philippines":"🇵🇭","Poland":"🇵🇱",
  "Portugal":"🇵🇹","Qatar":"🇶🇦","Romania":"🇷🇴","Russia":"🇷🇺",
  "Rwanda":"🇷🇼","Saudi Arabia":"🇸🇦","Senegal":"🇸🇳","Serbia":"🇷🇸",
  "Singapore":"🇸🇬","Slovakia":"🇸🇰","Slovenia":"🇸🇮","South Africa":"🇿🇦",
  "Spain":"🇪🇸","Sri Lanka":"🇱🇰","Sweden":"🇸🇪","Switzerland":"🇨🇭",
  "Taiwan":"🇹🇼","Tanzania":"🇹🇿","Tunisia":"🇹🇳","Turkey":"🇹🇷",
  "United Arab Emirates":"🇦🇪","United Kingdom":"🇬🇧",
  "United States (Mainland)":"🇺🇸","United States (Alaska, Hawaii & Territories)":"🇺🇸",
  "Uzbekistan":"🇺🇿","Vietnam":"🇻🇳","Zambia":"🇿🇲"
};

function isUSZone(z) { return z === 'US1' || z === 'US2'; }
function maxWeightFor(zone) { return isUSZone(zone) ? 5000 : 2000; }

/* Same "bump at the ceiling" rule as the calculators: a parcel within
   bufferGap grams of a tier's ceiling is charged at the next tier.         */
function priceFor(zone, grams, bufferGap) {
  var gap = bufferGap || 0, idx;
  if (isUSZone(zone)) {
    var arr = US_RATES[zone];
    if (grams <= 2000) {
      idx = Math.ceil(grams / 100) - 1;
      if ((idx + 1) * 100 - grams < gap) idx += 1;
    } else {
      idx = 19 + Math.ceil((grams - 2000) / 500);
      if (2000 + (idx - 19) * 500 - grams < gap) idx += 1;
    }
    idx = Math.min(Math.max(idx, 0), arr.length - 1);
    return arr[idx];
  }
  idx = Math.ceil(grams / 100) - 1;
  if ((idx + 1) * 100 - grams < gap) idx += 1;
  idx = Math.min(Math.max(idx, 0), 19);
  return RATES[zone][idx];
}
function zoneOf(country) {
  for (var i = 0; i < DEST.length; i++) if (DEST[i][0] === country) return DEST[i][1];
  return null;
}

root.CAYS_SHIP = { RATES: RATES, US_RATES: US_RATES, DEST: DEST, FLAGS: FLAGS,
  isUSZone: isUSZone, maxWeightFor: maxWeightFor, priceFor: priceFor, zoneOf: zoneOf };
})(typeof window !== 'undefined' ? window : globalThis);
