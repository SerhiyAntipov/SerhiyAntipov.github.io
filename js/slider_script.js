window.onload = function(){
	var icon = document.getElementsByClassName('icon');
	var startpage = document.getElementsByClassName('startpage');
	var startNum = 3;
		startpage[startNum].setAttribute('class', 'startpage active');
	var StpageActive = startpage[startNum];
	var arrow = document.getElementsByClassName('arrow');
	var delta = [];
		delta.length = startpage.length

		
	for(var i = 0; i<icon.length; i++){
		icon[i].setAttribute('data-num', i);
	};

	document.querySelector('.block_arrow').onclick = function clickArrow(event){
		if(event.target.className == 'arrow left'){
			Left()
		};
		if(event.target.className == 'arrow right'){
			Right()
		};
		StpageChildrenActive();

	};

	document.onkeydown = function keyArrow(event){
		if(event.code == 'ArrowRight'){
			Right();
		}
		else if(event.code == 'ArrowLeft'){
			Left();
		};
		StpageChildrenActive();

	};	
	
	function Right(){
		if(startNum < startpage.length -1){
		startpage[startNum].setAttribute('class', 'startpage');
		startNum = startNum + 1;
		startpage[startNum].setAttribute('class', 'startpage active');
		}
		else{
		startNum = 0;
		startpage[startNum].setAttribute('class', 'startpage active');
		startpage[startpage.length - 1].setAttribute('class', 'startpage');
		};
		return false;
	};
    
	function Left(){
		if(startNum > 0){
		startpage[startNum].setAttribute('class', 'startpage');
		startNum = startNum-1;
		startpage[startNum].setAttribute('class', 'startpage active');
		}
		else{
		startNum = startpage.length - 1;
		startpage[0].setAttribute('class', 'startpage');
		startpage[startNum].setAttribute('class', 'startpage active');
		};
	};

	StpageChildrenActive();
	function StpageChildrenActive(){
		for(var i=0; i<startpage.length; i++){
			if(startpage[i].getAttribute('class') ==  'startpage active'){
				icon[i].setAttribute('class', 'icon active')
				StpageActive = startpage[i];
				// console.log(StpageActive);
				var StpageActivePlus = StpageActive.getElementsByClassName('content')
				// console.log(StpageActivePlus)
				for(var x =0; x<StpageActivePlus.length; x++){
					StpageActivePlus[x].setAttribute('class', 'content active' );
				};
			}
			else{
				icon[i].setAttribute('class', 'icon')
				var StpageNoActive = startpage[i];
				// console.log(StpageNoActive);
				var StpageNoActivePlus = StpageNoActive.getElementsByClassName('content')
				for(var y =0; y<StpageNoActivePlus.length; y++){
					StpageNoActivePlus[y].setAttribute('class', 'content' );
				};
			};
		};
	};

	document.querySelector('.slider_list_ul').onclick = function(event){
       	if(event.target.className == 'icon'){
			startNum = +event.toElement.dataset.num;// + для переводу змінної в число
			for(var x = 0; x<icon.length; x++){
				if(x == startNum ){
				startpage[x].setAttribute('class', 'startpage active');
				}
				else{
				startpage[x].setAttribute('class', 'startpage');
				};
			};
		};
		StpageChildrenActive();
	};
    
    
    function autoSlide(){
        Right()
        StpageChildrenActive()
    }
    setInterval(autoSlide, 3000)
   
};

