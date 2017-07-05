

/*
Triangulate the 2d [X, Y] position from the 3 sources [X, Y, I] of emission.
X & Y are coordonate in a carthesian plan, I$ (the intensity) is the ray of the cirle of emission, in the same scall as x & y.
*/
function triangulation_2d(A, B, C) {
	/*

	I)
	First we extract independents variable that we will use to perform caluations.

	*/
	var Xa = A[0];
	var Ya = A[1];
	var Ia = A[2];

	var Xb = B[0];
	var Yb = B[1];
	var Ib = B[2];

	var Xc = C[0];
	var Yc = C[1];
	var Ic = C[2];


	/*

	II)
	Calculate intremediate variables to interprate each circle equations as :
	(A, B, C) = X2 - 2AX + A2 - Y2 - 2BY + B2 = C2
	
	*/
	var nbXa = 2 * Xa;
	var nbYa = 2 * Ya;
	var nbIa = Math.pow(Xa, 2) + Math.pow(Ya, 2) - Math.pow(Ia, 2);

	var nbXb = 2 * Xb;
	var nbYb = 2 * Yb;
	var nbIb = Math.pow(Xb, 2) + Math.pow(Yb, 2) - Math.pow(Ib, 2);

	var nbXc = 2 * Xc;
	var nbYc = 2 * Yc;
	var nbIc = Math.pow(Xc, 2) + Math.pow(Yc, 2) - Math.pow(Ic, 2);


	/*

	III)
	Resolve equation A - B = B - C.
	To extract two equation to deduce X & Y emission source coordonates.
	Note that X2 & Y2 are now both equale to 0 :
	   A(a, b, c) - B(a, b, c) can be expressed like as :
	   // TODO - EQUATION RESOLUTION
	*/

	Yab = [
		( - ( nbXb - nbXa ) ) / ( nbYb - nbYa ),  // X part
		( nbIb - nbIa ) / ( nbYb - nbYa )		  // N part
		];

	Ybc = [
		( - ( nbXc - nbXb ) ) / ( nbYc - nbYb ),  // X part
		( nbIc - nbIb ) / ( nbYc - nbYb )         // N part
	];


	/*

	IV)
	Deduce X & Y from previous equations and return coordaonate of the source.

	*/

	X = ( Yab[1] - Ybc[1] ) / ( Ybc[0] - Yab[0] );
	Y = Ybc[0] * X + Ybc[1];

	return [X, Y];
}
