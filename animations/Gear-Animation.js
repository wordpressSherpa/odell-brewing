(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1079,
	height: 348,
	fps: 24,
	color: "#E3D4AF",
	manifest: [
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/cloud1.png", id:"cloud1"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/cloud2.png", id:"cloud2"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/cloud3.png", id:"cloud3"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/cloud4.png", id:"cloud4"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/cloud5.png", id:"cloud5"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/GearBG.jpg", id:"GearBG"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/gearbulb.png", id:"gearbulb"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/gearcart.png", id:"gearcart"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/googles.png", id:"googles"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/hops1.png", id:"hops1"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/hops2.png", id:"hops2"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/hops3.png", id:"hops3"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/leafgear.png", id:"leafgear"},
		{src:"http://localhost:8888/c_cactus/odell/wordpress//images/shadow.png", id:"shadow"}
	]
};



// symbols:



(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,80);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,62);


(lib.cloud3 = function() {
	this.initialize(img.cloud3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,177);


(lib.cloud4 = function() {
	this.initialize(img.cloud4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,172);


(lib.cloud5 = function() {
	this.initialize(img.cloud5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,79);


(lib.GearBG = function() {
	this.initialize(img.GearBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1079,348);


(lib.gearbulb = function() {
	this.initialize(img.gearbulb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,70);


(lib.gearcart = function() {
	this.initialize(img.gearcart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,259);


(lib.googles = function() {
	this.initialize(img.googles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.hops1 = function() {
	this.initialize(img.hops1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,104);


(lib.hops2 = function() {
	this.initialize(img.hops2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,112);


(lib.hops3 = function() {
	this.initialize(img.hops3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,177);


(lib.leafgear = function() {
	this.initialize(img.leafgear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,106);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,70);


(lib.shadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259,70);


(lib.leaf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.leafgear();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,106);


(lib.hops3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hops3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,177);


(lib.hops2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hops2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,112);


(lib.hops1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hops1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,104);


(lib.goggles = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.googles();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.cloud5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,79);


(lib.cloud4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,172);


(lib.cloud3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,177);


(lib.cloud2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,62);


(lib.cloud1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,80);


(lib.cart = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gearcart();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,270,259);


(lib.bulb = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gearbulb();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,70);


(lib.shadowouter = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shadow_1();
	this.instance.setTransform(129.5,35,1,1,0,0,0,129.5,35);
	this.instance.filters = [new cjs.ColorFilter(0.1, 0.1, 0.1, 1, 153.9, 144.9, 120.6, 0)];
	this.instance.cache(-2,-2,263,74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259,70);


// stage content:
(lib.GearAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// hops3
	this.instance = new lib.hops3_1();
	this.instance.setTransform(1004,253,1,1,-6.5,0,0,39.5,88.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:1014,y:263,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// hops2
	this.instance_1 = new lib.hops2_1();
	this.instance_1.setTransform(675,261,1,1,-8.5,0,0,84.5,56);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:665,y:271,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// hops1
	this.instance_2 = new lib.hops1_1();
	this.instance_2.setTransform(654.9,94,1,1,-15,0,0,64.5,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:645,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// goggle
	this.instance_3 = new lib.goggles();
	this.instance_3.setTransform(898.9,79,1,1,-30,0,0,23,22.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:23,rotation:0,x:909,y:89,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// cloud 5
	this.instance_4 = new lib.cloud5_1();
	this.instance_4.setTransform(688,245,1,1,0,0,0,75,39.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:678,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// cloud 4
	this.instance_5 = new lib.cloud4_1();
	this.instance_5.setTransform(932,359,1,1,0,0,0,67,86);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({x:942,y:369,alpha:0.898},21,cjs.Ease.get(1)).wait(7));

	// cloud 3
	this.instance_6 = new lib.cloud3_1();
	this.instance_6.setTransform(898,214,1,1,0,0,0,100,88.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({x:908,y:224,alpha:0.898},21,cjs.Ease.get(1)).wait(13));

	// cloud 2
	this.instance_7 = new lib.cloud2_1();
	this.instance_7.setTransform(699,288,1,1,0,0,0,111,31);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:298,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// cloud 1
	this.instance_8 = new lib.cloud1_1();
	this.instance_8.setTransform(674,100,1,1,0,0,0,51,40);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:664,y:90,alpha:0.898},21,cjs.Ease.get(1)).wait(18));

	// cart
	this.instance_9 = new lib.cart();
	this.instance_9.setTransform(734,146,1,1,0,0,0,135,129.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:744,y:156,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// shadow
	this.instance_10 = new lib.shadowouter();
	this.instance_10.setTransform(643,261,1,1,0,0,0,129.5,35);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:663,y:241,alpha:0.898},21,cjs.Ease.get(1)).wait(24));

	// bulb
	this.instance_11 = new lib.bulb();
	this.instance_11.setTransform(548,265.1,1,1,-15,0,0,26.9,35.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:27,regY:35,rotation:0,x:538,y:275,alpha:0.898},31,cjs.Ease.get(1)).wait(14));

	// leaf
	this.instance_12 = new lib.leaf();
	this.instance_12.setTransform(459,257,1,1,-7.8,0,0,75,53);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:0,x:429,y:277,alpha:0.898},40,cjs.Ease.get(1)).wait(5));

	// bg
	this.instance_13 = new lib.GearBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(539.5,174,1079,349);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

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
	exportRoot = new lib.GearAnimation();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}