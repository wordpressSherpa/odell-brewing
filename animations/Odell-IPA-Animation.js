(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 355,
	fps: 24,
	color: "#A8603E",
	manifest: [
		{src:"../images/bg_03.jpg", id:"bg_03"},
		{src:"../images/ipa_03.png", id:"ipa_03"},
		{src:"../images/ipa_06.png", id:"ipa_06"},
		{src:"../images/mountains_03.png", id:"mountains_03"},
		{src:"../images/mountains_06.png", id:"mountains_06"},
		{src:"../images/ScreenShot20150311at100027AM.jpg", id:"ScreenShot20150311at100027AM"}
	]
};



// symbols:



(lib.bg_03 = function() {
	this.initialize(img.bg_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,356);


(lib.ipa_03 = function() {
	this.initialize(img.ipa_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,246);


(lib.ipa_06 = function() {
	this.initialize(img.ipa_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,99);


(lib.mountains_03 = function() {
	this.initialize(img.mountains_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,53);


(lib.mountains_06 = function() {
	this.initialize(img.mountains_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,53);


(lib.ScreenShot20150311at100027AM = function() {
	this.initialize(img.ScreenShot20150311at100027AM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1037,363);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ipa_06();
	this.instance.setTransform(43,-45.5,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49,-45.5,92,99);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mountains_06();
	this.instance.setTransform(-54,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-27.5,112,53);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mountains_03();
	this.instance.setTransform(-64,-30.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-30.5,122,53);


(lib.elephant = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ipa_03();
	this.instance.setTransform(-2.5,-4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-4,341,246);


(lib.wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// mtn1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(279.2,250.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:290.2,y:261.7,alpha:1},22,cjs.Ease.get(1)).wait(19));

	// mtn2
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(481,251.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:470,y:262.3,alpha:1},22,cjs.Ease.get(1)).wait(19));

	// wheat
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(101.9,156,1,1,0,7,-173);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({skewX:0,skewY:-180,x:91.9,y:166,alpha:1},23,cjs.Ease.get(1)).wait(4));

	// wheat
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(651.9,156,1,1,-7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({rotation:0,x:661.9,y:166,alpha:1},23,cjs.Ease.get(1)).wait(4));

	// Artwork
	this.instance_4 = new lib.elephant();
	this.instance_4.setTransform(377.3,167.8,1,1,0,0,0,168.2,118.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:187.8,alpha:1},18,cjs.Ease.get(1)).wait(27));

	// Layer 7
	this.instance_5 = new lib.bg_03();
	this.instance_5.setTransform(549.6,-1);

	this.instance_6 = new lib.bg_03();
	this.instance_6.setTransform(-324.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(45));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE6648").s().p("AjiDjIAAnFIHFAAIAAHFg");
	this.shape.setTransform(22.8,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.1,-1,1759.7,356);


// stage content:



(lib.OdellIPAAnimation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wrapper();
	this.instance.setTransform(343.9,23.8,1,1,0,0,0,22.8,22.8);

	// guide
	this.instance_1 = new lib.ScreenShot20150311at100027AM();
	this.instance_1.setTransform(-129,-7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(571,170.5,1885.6,363);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


//
var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	exportRoot = new lib.OdellIPAAnimation();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}