var elderlyBeta = -0.00189291;
var GDPBeta = 0.00264044;
var beta0 = 0.00675737;
var GDP_mean = 4.344733;
var PEP_mean = 11.774326;
var GDP_SD = 0.311489;
var PEP_SD = 5.978104;
var countries = {
  Albania: {
    PEP: 13.188,
    GDP: 11803.431,
    PDPM: 0.005289359
  },
  Algeria: {
    PEP: 6.211,
    GDP: 13913.839,
    PDPM: 0.000674221
  },
  Argentina: {
    PEP: 11.198,
    GDP: 18933.907,
    PDPM: 0.012657478
  },
  Armenia: {
    PEP: 11.232,
    GDP: 8787.58,
    PDPM: 0.012574448
  },
  Australia: {
    PEP: 15.504,
    GDP: 44648.71,
    PDPM: 0.000374325
  },
  Austria: {
    PEP: 19.202,
    GDP: 45436.686,
    PDPM: 0.006647414
  },
  Azerbaijan: {
    PEP: 6.018,
    GDP: 15847.419,
    PDPM: 0.003744861
  },
  Bahamas: {
    PEP: 8.996,
    GDP: 27717.847,
    PDPM: 0.008719937
  },
  Bahrain: {
    PEP: 2.372,
    GDP: 43290.705,
    PDPM: 0.004006126
  },
  Belarus: {
    PEP: 14.799,
    GDP: 17167.967,
    PDPM: 0.002707576
  },
  Belgium: {
    PEP: 18.571,
    GDP: 42658.576,
    PDPM: 0.011426446
  },
  Bolivia: {
    PEP: 6.704,
    GDP: 6885.829,
    PDPM: 0.008275812
  },
  "Bosnia and Herzegovina": {
    PEP: 16.569,
    GDP: 11713.895,
    PDPM: 0.019105345
  },
  Botswana: {
    PEP: 3.941,
    GDP: 15807.374,
    PDPM: 0.0051898
  },
  Brazil: {
    PEP: 8.552,
    GDP: 14103.452,
    PDPM: 0.014410748
  },
  Brunei: {
    PEP: 4.591,
    GDP: 71809.251,
    PDPM: 0.001114077
  },
  Bulgaria: {
    PEP: 20.801,
    GDP: 18563.307,
    PDPM: 0.019878153
  },
  Canada: {
    PEP: 16.984,
    GDP: 44017.591,
    PDPM: 0.003860126
  },
  "Cape Verde": {
    PEP: 4.46,
    GDP: 6222.554,
    PDPM: 0.003170682
  },
  Chile: {
    PEP: 11.087,
    GDP: 22767.037,
    PDPM: 0.010074486
  },
  China: {
    PEP: 10.641,
    GDP: 15308.712,
    PDPM: 0.0000148
  },
  Colombia: {
    PEP: 7.646,
    GDP: 13254.949,
    PDPM: 0.012681492
  },
  "Costa Rica": {
    PEP: 9.468,
    GDP: 15524.995,
    PDPM: 0.007136513
  },
  Croatia: {
    PEP: 19.724,
    GDP: 22669.797,
    PDPM: 0.012834731
  },
  Cyprus: {
    PEP: 13.416,
    GDP: 32415.132,
    PDPM: 0.003363064
  },
  Czechia: {
    PEP: 19.027,
    GDP: 32605.906,
    PDPM: 0.015282612
  },
  Denmark: {
    PEP: 19.677,
    GDP: 46682.515,
    PDPM: 0.002436282
  },
  "Dominican Republic": {
    PEP: 6.981,
    GDP: 14600.861,
    PDPM: 0.001925013
  },
  Ecuador: {
    PEP: 7.104,
    GDP: 10581.936,
    PDPM: 0.005735564
  },
  Egypt: {
    PEP: 5.159,
    GDP: 10550.206,
    PDPM: 0.000951055
  },
  "El Salvador": {
    PEP: 8.273,
    GDP: 7292.458,
    PDPM: 0.002967175
  },
  Estonia: {
    PEP: 19.452,
    GDP: 29481.252,
    PDPM: 0.006717766
  },
  Finland: {
    PEP: 21.228,
    GDP: 40585.721,
    PDPM: 0.001148487
  },
  France: {
    PEP: 19.718,
    GDP: 38605.671,
    PDPM: 0.008468999
  },
  Gabon: {
    PEP: 4.45,
    GDP: 16562.413,
    PDPM: 0.000608051
  },
  Germany: {
    PEP: 21.453,
    GDP: 45229.245,
    PDPM: 0.005887904
  },
  Greece: {
    PEP: 20.396,
    GDP: 24574.382,
    PDPM: 0.008374021
  },
  Guatemala: {
    PEP: 4.694,
    GDP: 7423.808,
    PDPM: 0.004363336
  },
  Guyana: {
    PEP: 5.305,
    GDP: 7435.047,
    PDPM: 0.006171017
  },
  Honduras: {
    PEP: 4.652,
    GDP: 4541.795,
    PDPM: 0.005274566
  },
  "Hong Kong": {
    PEP: 16.303,
    GDP: 56054.92,
    PDPM: 0.000132864
  },
  Hungary: {
    PEP: 18.577,
    GDP: 26777.561,
    PDPM: 0.017271535
  },
  Iceland: {
    PEP: 14.431,
    GDP: 46482.958,
    PDPM: 0.000501579
  },
  Indonesia: {
    PEP: 5.319,
    GDP: 11188.744,
    PDPM: 0.002592287
  },
  Iran: {
    PEP: 5.44,
    GDP: 19082.62,
    PDPM: 0.007317336
  },
  Iraq: {
    PEP: 3.186,
    GDP: 15663.986,
    PDPM: 0.002834806
  },
  Ireland: {
    PEP: 13.928,
    GDP: 67335.293,
    PDPM: 0.005610147
  },
  Israel: {
    PEP: 11.733,
    GDP: 33132.32,
    PDPM: 0.004450745
  },
  Italy: {
    PEP: 23.021,
    GDP: 35220.084,
    PDPM: 0.01067476
  },
  Jamaica: {
    PEP: 9.684,
    GDP: 8193.571,
    PDPM: 0.00400552
  },
  Jordan: {
    PEP: 3.81,
    GDP: 8337.49,
    PDPM: 0.005667451
  },
  Kazakhstan: {
    PEP: 6.991,
    GDP: 24055.588,
    PDPM: 0.004761651
  },
  Lebanon: {
    PEP: 8.514,
    GDP: 13367.565,
    PDPM: 0.006354837
  },
  Libya: {
    PEP: 4.424,
    GDP: 17881.509,
    PDPM: 0.004002038
  },
  Lithuania: {
    PEP: 19.002,
    GDP: 29524.265,
    PDPM: 0.012389585
  },
  Luxembourg: {
    PEP: 14.312,
    GDP: 94277.965,
    PDPM: 0.006800359
  },
  Malaysia: {
    PEP: 6.293,
    GDP: 26808.164,
    PDPM: 0.004615883
  },
  Mauritius: {
    PEP: 10.945,
    GDP: 20292.745,
    PDPM: 0.000954656
  },
  Mexico: {
    PEP: 6.857,
    GDP: 17336.469,
    PDPM: 0.011172418
  },
  Moldova: {
    PEP: 10.864,
    GDP: 5189.972,
    PDPM: 0.011109655
  },
  Montenegro: {
    PEP: 14.762,
    GDP: 16409.288,
    PDPM: 0.018230481
  },
  Netherlands: {
    PEP: 18.779,
    GDP: 48472.545,
    PDPM: 0.005597115
  },
  "New Zealand": {
    PEP: 15.322,
    GDP: 36085.843,
    PDPM: 0.0000401
  },
  "North Macedonia": {
    PEP: 13.26,
    GDP: 13111.214,
    PDPM: 0.018146793
  },
  Norway: {
    PEP: 16.821,
    GDP: 64800.057,
    PDPM: 0.000918118
  },
  Oman: {
    PEP: 2.355,
    GDP: 37960.709,
    PDPM: 0.00405483
  },
  Palestine: {
    PEP: 3.043,
    GDP: 4449.898,
    PDPM: 0.004673156
  },
  Panama: {
    PEP: 7.918,
    GDP: 22267.037,
    PDPM: 0.00836496
  },
  Paraguay: {
    PEP: 6.378,
    GDP: 8827.01,
    PDPM: 0.011461687
  },
  Poland: {
    PEP: 16.763,
    GDP: 27216.445,
    PDPM: 0.010675429
  },
  Portugal: {
    PEP: 21.502,
    GDP: 27936.896,
    PDPM: 0.009076625
  },
  Qatar: {
    PEP: 1.307,
    GDP: 116935.6,
    PDPM: 0.001068322
  },
  Romania: {
    PEP: 17.85,
    GDP: 23313.199,
    PDPM: 0.014618747
  },
  Russia: {
    PEP: 14.178,
    GDP: 24765.954,
    PDPM: 0.00900758
  },
  "Saudi Arabia": {
    PEP: 3.295,
    GDP: 49045.411,
    PDPM: 0.001271257
  },
  Serbia: {
    PEP: 17.366,
    GDP: 14048.881,
    PDPM: 0.008302221
  },
  Singapore: {
    PEP: 12.922,
    GDP: 85535.383,
    PDPM: 0.000619516
  },
  Slovakia: {
    PEP: 15.07,
    GDP: 30155.152,
    PDPM: 0.013147551
  },
  Slovenia: {
    PEP: 19.062,
    GDP: 31400.84,
    PDPM: 0.01223878
  },
  "South Africa": {
    PEP: 5.344,
    GDP: 12294.876,
    PDPM: 0.007632458
  },
  "South Korea": {
    PEP: 13.914,
    GDP: 35938.374,
    PDPM: 0.000313219
  },
  Spain: {
    PEP: 19.436,
    GDP: 34272.36,
    PDPM: 0.009245636
  },
  "Sri Lanka": {
    PEP: 10.069,
    GDP: 11669.077,
    PDPM: 0.003374615
  },
  Sweden: {
    PEP: 19.985,
    GDP: 46949.283,
    PDPM: 0.0074001
  },
  Switzerland: {
    PEP: 18.436,
    GDP: 57410.166,
    PDPM: 0.006471033
  },
  Thailand: {
    PEP: 11.373,
    GDP: 16277.671,
    PDPM: 0.001433004
  },
  "Trinidad and Tobago": {
    PEP: 10.014,
    GDP: 28763.071,
    PDPM: 0.00718276
  },
  Tunisia: {
    PEP: 8.001,
    GDP: 10849.297,
    PDPM: 0.010721848
  },
  Turkey: {
    PEP: 8.153,
    GDP: 25129.341,
    PDPM: 0.004452087
  },
  Ukraine: {
    PEP: 16.462,
    GDP: 7894.393,
    PDPM: 0.009963346
  },
  "United Arab Emirates": {
    PEP: 1.144,
    GDP: 67293.483,
    PDPM: 0.001085209
  },
  "United Kingdom": {
    PEP: 18.517,
    GDP: 39753.244,
    PDPM: 0.010468243
  },
  "United States": {
    PEP: 15.413,
    GDP: 54225.446,
    PDPM: 0.01136149
  },
  Uruguay: {
    PEP: 14.655,
    GDP: 20551.409,
    PDPM: 0.008990442
  },
  Venezuela: {
    PEP: 6.614,
    GDP: 16745.022,
    PDPM: 0.000906733
  }
};

function predictPDPM(elderly, GDP) {
  return (
    beta0 +
    GDPBeta * ((Math.log10(GDP) - GDP_mean) / GDP_SD) +
    elderlyBeta * ((elderly - PEP_mean) / PEP_SD)
  );
}

function updateResults() {
  var elderly = document.getElementById("elderly1").value;
  var GDP = document.getElementById("GDP1").value;
  console.log(predictPDPM(elderly, GDP));
  document.getElementById("predValue").innerHTML = predictPDPM(elderly, GDP);
}

function updateParameters() {
  var country = document.getElementById("country").value;
  console.log(country);
  var values = countries[country];
  var PEP = values["PEP"];
  var PDPM = values["PDPM"];
  var GDP = values["GDP"];
  document.getElementById("actPDPM").value = PDPM;
  document.getElementById("actPEP").value = PEP;
  document.getElementById("actGDP").value = GDP;
}

function updateResults1() {
  var elderly = document.getElementById("actPEP").value;
  var GDP = document.getElementById("actGDP").value;
  document.getElementById("predValue").innerHTML = predictPDPM(elderly, GDP);
}
