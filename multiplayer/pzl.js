function id(x) {return document.getElementById(x);}
function cl(x) {return document.getElementsByClassName(x);}

var j; // common array to get values
var l1; // player 1 puzzle array
var l2; // player 2 puzzle array

var rdy1 = 0; // is player 1 ready
var rdy2 = 0; // is player 2 ready
var canp = 0; // are both of them ready

function setup() {
	j = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
	l1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
	var r = 0;
	do {
		var di = Math.floor(Math.random()*(j.length-1));
		var dd = j[di];
		if(dd!=-1) {l1[r]=dd; r+=1; j[di] = -1;}

	} while(r<15);
	j = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
	l2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
	var r = 0;
	do {
		var di = Math.floor(Math.random()*(j.length-1));
		var dd = j[di];
		if(dd!=-1) {l2[r]=dd; r+=1; j[di] = -1;}

	} while(r<15);
}











// swipe up
function ch_u(y) {
	if(y==0) { // player 1
		var z = getZ1();
		if(z<12) {sw1(z,z+4);}
	}
	if(y==1) { // player 2
		var z = getZ2();
		if(z<12) {sw2(z,z+4);}
	}
}

// swipe down
function ch_d(y) {
	if(y==0) { // player 1
		var z = getZ1();
		if(z>3) {sw1(z,z-4);}
	}
	if(y==1) { // player 2
		var z = getZ2();
		if(z>3) {sw2(z,z-4);}
	}
}

// swipe left
function ch_l(y) {
	if(y==0) { // player 1
		var z = getZ1();
		if(z!=3 && z!=7  && z!=11  && z!=15) {sw1(z,z+1);}
	}
	if(y==1) { // player 2
		var z = getZ2();
		if(z!=3 && z!=7  && z!=11  && z!=15) {sw2(z,z+1);}
	}
}

// swipe right
function ch_r(y) {
	if(y==0) { // player 1
		var z = getZ1();
		if(z!=0 && z!=4  && z!=8 && z!=12) {sw1(z,z-1);}
	}
	if(y==1) { // player 2
		var z = getZ2();
		if(z!=0 && z!=4  && z!=8 && z!=12) {sw2(z,z-1);}
	}
}

// switch array items witch swiped by player 1 in player 1 array
function sw1(a,b) {
	var k = l1[a];
	l1[a] = l1[b];
	l1[b] = k;
	drw1();drw2();
}

// switch array items witch swiped by player 2 in player 2 array
function sw2(a,b) {
	var k = l2[a];
	l2[a] = l2[b];
	l2[b] = k;
	drw1();drw2();
}



// get the index of zero (empty block of arrays)
function getZ1() {var i;for(i=0;i<l1.length;++i) {if(l1[i]==0) {return i;}}}
function getZ2() {var i;for(i=0;i<l2.length;++i) {if(l2[i]==0) {return i;}}}