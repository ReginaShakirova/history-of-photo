document.getElementById('show').onclick = function() {
	this.__toggle = !this.__toggle;
    var target = document.getElementById('comments');
    if( this.__toggle) {
        target.style.height = target.scrollHeight+"px";
    }
    else {
    	target.style.height = 0;
    }
}