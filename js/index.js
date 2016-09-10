FastClick.attach(document.body);
(function(){
	var desW=640;
	var winW=document.documentElement.clientWidth,
	ratio=winW/desW,
	oMain=document.querySelector('.main');
	if(winW>desW){
		oMain.style.margin="0 auto";
		oMain.style.width=desW+"px";
	}
	document.documentElement.style.fontSize=ratio*100+'px';

})();
//初始化swiper
var swiper1=new Swiper('.swiper-container',{
	direction:'vertical',
	loop:true,
	onSlideChangeEnd: function (swiper) {
		var slideAry = swiper.slides,
			curIn = swiper.activeIndex,
			total = slideAry.length;
		var targetId = 'page';
		switch (curIn) {
			case 0:
				targetId += total - 2;
				break;
			case (total - 1):
				targetId += 1;
				break;
			default:
				targetId += curIn;
		}
		[].forEach.call(slideAry, function (item, index) {
			if (curIn === index) {
				item.id = targetId;
				return;
			}
			item.id = null;
		});
	}
});
(function(){
	var musicMenu=document.getElementById('musicMenu');
	var musicAudio=document.getElementById('musicAudio');
	musicMenu.addEventListener('click',function(){
		if(musicAudio.paused){
			musicAudio.play();
			musicMenu.className = 'music move';
			return;
		}
		musicAudio.pause();
		musicMenu.className = 'music';
	}, false);
	function controlMusic(){
		musicAudio.play();
		musicAudio.addEventListener('canplay',function(){
			musicMenu.style.display="block";
			musicMenu.className="music move"
		})
	}
	window.setTimeout(controlMusic,1000);
})();