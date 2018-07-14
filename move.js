/**
 * @author mky
 */
function starmove(obj,attr,itarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iCur;
		if(attr=='opacity'){
		 iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
		}else{
		 iCur=parseInt(getStyle(obj,attr));
		}
		var ispeed=(itarget-iCur)/8;
		ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
		if(iCur==itarget){
			clearInterval(obj.timer);
		}else{
			if(attr== "opacity"){
				obj.style.filter='alpha(opacity:'+(iCur+ispeed)+')';
				obj.style.opacity=(iCur+ispeed)/100;
			}else{
				obj.style[attr]=iCur+ispeed+'px';
			}
		}
	},30);
};
function getStyle(obj,attr){
	if(obj.currentStyle){
	 return obj.currentStyle[attr];
	}else{
	 return getComputedStyle(obj,false)[attr];
	}
};