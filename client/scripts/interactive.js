var interactive = function(){
  var init = function(options) {
    this.options = options.animating || true; 
  }
	
  var addMouseHandler = function(dom) {
    dom.addEventListener( 'mouseup', onMouseUp, false);
  };
	
  var onMouseUp = function(event) {
    event.preventDefault();
    options.animating = !options.animating;
  };

  return {
    init: init,
    addMouseHandler: addMouseHandler
  };

}();	
