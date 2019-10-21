(function () {

	let icon = document.getElementsByClassName('icon');
	let site = document.getElementsByClassName('site');
	let startNum = 3;
	let pageActive = site[startNum];
	let delta = [];
	let timerId = 5000;

	(function slider() {
		site[startNum].setAttribute('class', 'site active');
		delta.length = site.length
		for (let i = 0; i < icon.length; i++) {
			icon[i].setAttribute('data-num', i);
		};
		startSlider();
		keyboardArrowSlide();
		arrowSlide();
		pressBtnSlide();
	})();

	function startSlider() {
		for (let i = 0; i < site.length; i++) {
			if (site[i].getAttribute('class') == 'site active') {
				icon[i].setAttribute('class', 'icon active')
				pageActive = site[i];
				let pageActivePlus = pageActive.getElementsByClassName('content')
				for (let x = 0; x < pageActivePlus.length; x++) {
					pageActivePlus[x].setAttribute('class', 'content active');
				};
			} else {
				icon[i].setAttribute('class', 'icon')
				let pageNoActive = site[i];
				let pageNoActivePlus = pageNoActive.getElementsByClassName('content')
				for (let y = 0; y < pageNoActivePlus.length; y++) {
					pageNoActivePlus[y].setAttribute('class', 'content');
				};
			};
		};
	};

	function keyboardArrowSlide() {
		document.onkeydown = function keyArrow(event) {
			if (event.code == 'ArrowRight') right();
			if (event.code == 'ArrowLeft') left();
			startSlider();
		};
	};

	function arrowSlide() {
		document.querySelector('.block_arrow').onclick = function clickArrow(event) {
			if (event.target.className == 'arrow right') right();
			if (event.target.className == 'arrow left') left();
			startSlider();
		};
	}

	function pressBtnSlide() {
		document.querySelector('.slider-list-ul').onclick = function (event) {
			if (event.target.className == 'icon') {
				startNum = +event.toElement.dataset.num;
				for (let x = 0; x < icon.length; x++) {
					if (x == startNum) {
						site[x].setAttribute('class', 'site active');
					} else {
						site[x].setAttribute('class', 'site');
					};
				};
			};
			startSlider();
		};
	}

	function right() {
		if (startNum < site.length - 1) {
			site[startNum].setAttribute('class', 'site');
			startNum = startNum + 1;
			site[startNum].setAttribute('class', 'site active');
		} else {
			startNum = 0;
			site[startNum].setAttribute('class', 'site active');
			site[site.length - 1].setAttribute('class', 'site');
		};
		return false;
	};

	function left() {
		if (startNum > 0) {
			site[startNum].setAttribute('class', 'site');
			startNum = startNum - 1;
			site[startNum].setAttribute('class', 'site active');
		} else {
			startNum = site.length - 1;
			site[0].setAttribute('class', 'site');
			site[startNum].setAttribute('class', 'site active');
		};
	};

	function autoSlide() {
		right()
		startSlider()
	}

	setInterval(autoSlide, timerId)

})();