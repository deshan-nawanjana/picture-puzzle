/*
	GPD.JS - GamePad Controller
	Developed By Deshan Nawanjana (DnW)
	http://dn-w.blogspot.com/

*/

// gamepad key functions
function gpdPress(x,y) {
	if(canp==0) {
		if(y==0) {rdy1 = 1;cl('p')[0].innerHTML = 'Player 1<br><br><small>Player 1 is Ready !</small>';}
		if(y==1) {rdy2 = 1;cl('p')[1].innerHTML = 'Player 2<br><br><small>Player 2 is Ready !</small>';}
		if(rdy1==1 && rdy2==1) {ready();}
		return;
	}
	if(x==1)   {ch_l(y);}
	if(x==2)   {ch_r(y);}
	if(x==3)   {ch_u(y);}
	if(x==4)   {ch_d(y);}
	chkWin();
}

// ready to replay
function replay() {
	setup();
	rc = 3;
	id('desc').innerHTML = 'Starts in 3...';
	drw1();drw2();
}

// check for a winner
function chkWin() {
	console.log('CHK');
	is_1_win = 1;
	for(i=0;i<15;i++) {if(l1[i]!==i+1) {is_1_win = 0;}}
	is_2_win = 1;
	for(i=0;i<15;i++) {if(l2[i]!==i+1) {is_2_win = 0;}}
	if(is_1_win==1) {id('head').innerHTML = 'Player 1 Won the Match !';}
	if(is_2_win==1) {id('head').innerHTML = 'Player 2 Won the Match !';}
	if(is_1_win==1 || is_2_win==1) {
		canp = 0;
		rdy1 = 0;
		rdy2 = 0;
		rc = 4;
		id('desc').innerHTML = '<center><div id="btn" onclick="replay()">Replay</div></center>';
		cl('p')[0].innerHTML = '';
		cl('p')[1].innerHTML = '';
		id('wall').style.display = 'inherit';
	}
}

rc = 3;
function ready() {
	setInterval(function(){
		if(rc==4) {return;}
		if(rc==0) {
			canp = 1;
			id('wall').style.display = 'none';
		}
		id('desc').innerHTML = 'Starts in '+rc+'...';
		rc-=1;
	},1000);
}


var gpdRefreshInterval = 1;

var _1_gpdAXu = false;
var _1_gpdAXd = false;
var _1_gpdAXl = false;
var _1_gpdAXr = false;
	
var _2_gpdAXu = false;
var _2_gpdAXd = false;
var _2_gpdAXl = false;
var _2_gpdAXr = false;

var gamepads = [];

setInterval(function(){
	gamepads = navigator.getGamepads();
	updGPDStatus();
},gpdRefreshInterval);



function updGPDStatus(gi) {

	if(gamepads.length > 0) {

		if(gamepads[0] === null) { return }
	
		var n_1_gpdAXl = gamepads[0]["axes"][0] == -1;
		var n_1_gpdAXr = gamepads[0]["axes"][0] ==  1;
		var n_1_gpdAXu = gamepads[0]["axes"][1] == -1;
		var n_1_gpdAXd = gamepads[0]["axes"][1] ==  1;
		if(n_1_gpdAXl && !_1_gpdAXl)    {gpdPress(1,0);}
		if(n_1_gpdAXr && !_1_gpdAXr)    {gpdPress(2,0);}
		if(n_1_gpdAXu && !_1_gpdAXu)    {gpdPress(3,0);}
		if(n_1_gpdAXd && !_1_gpdAXd)    {gpdPress(4,0);}
		if(n_1_gpdAXl)  {_1_gpdAXl = true;}  else {_1_gpdAXl = false;}
		if(n_1_gpdAXr)  {_1_gpdAXr = true;}  else {_1_gpdAXr = false;}
		if(n_1_gpdAXu)  {_1_gpdAXu = true;}  else {_1_gpdAXu = false;}
		if(n_1_gpdAXd)  {_1_gpdAXd = true;}  else {_1_gpdAXd = false;}
		
		var n_2_gpdAXl = gamepads[1]["axes"][0] == -1;
		var n_2_gpdAXr = gamepads[1]["axes"][0] ==  1;
		var n_2_gpdAXu = gamepads[1]["axes"][1] == -1;
		var n_2_gpdAXd = gamepads[1]["axes"][1] ==  1;
		if(n_2_gpdAXl && !_2_gpdAXl)    {gpdPress(1,1);}
		if(n_2_gpdAXr && !_2_gpdAXr)    {gpdPress(2,1);}
		if(n_2_gpdAXu && !_2_gpdAXu)    {gpdPress(3,1);}
		if(n_2_gpdAXd && !_2_gpdAXd)    {gpdPress(4,1);}
		if(n_2_gpdAXl)  {_2_gpdAXl = true;}  else {_2_gpdAXl = false;}
		if(n_2_gpdAXr)  {_2_gpdAXr = true;}  else {_2_gpdAXr = false;}
		if(n_2_gpdAXu)  {_2_gpdAXu = true;}  else {_2_gpdAXu = false;}
		if(n_2_gpdAXd)  {_2_gpdAXd = true;}  else {_2_gpdAXd = false;}
	}
	
}

/*
	Keyboard Controlls
*/

function key(e) {
	if(canp==0) {
		if(e.keyCode==87 || e.keyCode==83 || e.keyCode==65 || e.keyCode==68) {rdy1 = 1;cl('p')[0].innerHTML = 'Player 1<br><br><small>Player 1 is Ready !</small>';}
		if(e.keyCode==38 || e.keyCode==40 || e.keyCode==37 || e.keyCode==39) {rdy2 = 1;cl('p')[1].innerHTML = 'Player 2<br><br><small>Player 2 is Ready !</small>';}
		if(rdy1==1 && rdy2==1) {ready();}
		return;
	}


	if(e.keyCode==87) {ch_u(0);}
	if(e.keyCode==83) {ch_d(0);}
	if(e.keyCode==65) {ch_l(0);}
	if(e.keyCode==68) {ch_r(0);}

	if(e.keyCode==38) {ch_u(1);}
	if(e.keyCode==40) {ch_d(1);}
	if(e.keyCode==37) {ch_l(1);}
	if(e.keyCode==39) {ch_r(1);}
	chkWin();
}