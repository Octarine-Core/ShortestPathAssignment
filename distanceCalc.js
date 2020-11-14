var names = ['PC','Cl', 'L1','ED','RB','Ma','Al'];

var avgTime = [ //tempo medio de carro
[0,	8.5	,10.5,	15,	6	,17	,11.5],
[5,	0	,8.5,	19,	13,	11.5,	7.5],
[13,	14,	0	,12.5,	16	,17,	17],
[19,	16,	10.5,	0,	12.5,	7.5,	6],
[10.5,	7.5	,14.5	,12.5,	0,	13,	10.5],
[6,	13.5	,16	,19	,10.5,	0,	10.5],
[8.5,	7.5,	16.5,	15,	10.5,	10,	0]
];

var parking = [0,180,112,202,186,95,105]; //distancia em metros de estacionamento privado
var metro = [1260,629,286,53,291,26,5]; //distancia em metros da estacao de metro mais proxima
var straightDistance = [ //distancia em linha reta
[0],
[644,	0],	
[1630,	774,	0],
[1590,	1510	,3250,	0],
[1070,	1450,	2590,	3840,	0],
[2230,	596,	2370,	1760,	2080,	0],
[1210,	568,	946,	2710,	1840,	1510,	0]
];

for(var i = 0; i<7; i ++){ //completar a matriz
	for(var j = 0; j < straightDistance[i].length; j++){
		straightDistance[j][i] = straightDistance[i][j];
	}
}

var adjMtrx = [[],[],[],[],[],[],[]]; //declaracao da matriz de adjacencias

for (var i = 0; i < 7; i++) { //calculo dos valores de acordo com a formula de peso
	for (var j = 0; j < 7; j++) {
		adjMtrx[i][j] = (avgTime[i][j] * 
		(Math.sqrt(straightDistance[i][j]) +
			Math.sqrt(metro[i]) + parking[j])).toFixed(2);

	}
}

for (var i = 0; i < 7; i++) { //imprimir a matriz de pesos
	var str = "";
	for (var j = 0; j < 7; j++) {
		str += adjMtrx[i][j] + "  ";
	}
	console.log(str);
}

