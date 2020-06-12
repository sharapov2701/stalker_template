var info = document.getElementsByClassName('footer__block');
for (var i = 0; i < info.length; i++) {
	info[i].addEventListener('click', function(event) {
		if (event.target.classList.contains('footer__title')) {
			event.target.classList.toggle('active');
			event.currentTarget.querySelector('.footer__small-info').classList.toggle('active');
		}
	});
}
