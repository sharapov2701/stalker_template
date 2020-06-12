document.querySelector('.top-menu__burger').addEventListener(
	'click',
	function(event) {
		document.querySelector('.top-menu__burger').classList.toggle('active');
		document.querySelector('.top-menu__items').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
	}
);