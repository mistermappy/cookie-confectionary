function addChocolate(){
 	$(`#chocolate`).html(parseInt($(`#chocolate`).html(), 10)+1	);
	let x = $('#chocolate').html()
	console.log(x)
	Cookies.set('chocolate', x)
};

function addSugar(){
	$(`#sugar`).html(parseInt($(`#sugar`).html(), 10)+1	)
	let x = $('#sugar').html()
	console.log(x)
	Cookies.set('sugar', x)
};

function addLemon(){
	$(`#lemon`).html(parseInt($(`#lemon`).html(), 10)+1	)
	let x = $('#lemon').html()
	console.log(x)
	Cookies.set('lemon', x)
};

function changeCookieCount(){
	let x = Cookies.get('chocolate');
	console.log(x)
	$(`#chocolate`).html(x)

	let y = Cookies.get('sugar');
	console.log(y)
	$(`#sugar`).html(y) 

	let z = Cookies.get('lemon');
	console.log(z)
	$(`#lemon`).html(z) 
};

function resetCookieCount(){
	//let x = Cookies.get('chocolate');
	$(`#chocolate`).html(0);
	$(`#sugar`).html(0);
	$(`#lemon`).html(0);
	Cookies.remove('chocolate');
	Cookies.remove('sugar');
	Cookies.remove('lemon');
}