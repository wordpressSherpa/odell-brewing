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
	exportRoot = new lib._90homepage();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 2043,
	height: 447,
	fps: 24,
	color: "#E7D0AB",
	manifest: [
		{src:"images/homepagebg.jpg", id:"homepagebg"},
		{src:"images/mountains.png", id:"mountains"},
		{src:"images/riverhighlight_03.png", id:"riverhighlight_03"},
		{src:"images/riverhighlight_06.png", id:"riverhighlight_06"},
		{src:"images/riverhighlight_11.png", id:"riverhighlight_11"},
		{src:"images/riverhighlight_14.png", id:"riverhighlight_14"},
		{src:"images/riverhighlight_17.png", id:"riverhighlight_17"},
		{src:"images/riverhighlight_23.png", id:"riverhighlight_23"},
		{src:"images/riverhighlight_26.png", id:"riverhighlight_26"},
		{src:"images/riverhighlight_29.png", id:"riverhighlight_29"},
		{src:"images/riverhighlights2_03.png", id:"riverhighlights2_03"},
		{src:"images/riverhighlights2_06.png", id:"riverhighlights2_06"},
		{src:"images/riverhighlights2_09.png", id:"riverhighlights2_09"},
		{src:"images/riverhighlights2_15.png", id:"riverhighlights2_15"},
		{src:"images/riverhighlights2_18.png", id:"riverhighlights2_18"},
		{src:"images/riverhighlights2_21.png", id:"riverhighlights2_21"},
		{src:"images/treesleft.png", id:"treesleft"},
		{src:"images/treesright.png", id:"treesright"},
		{src:"images/wateraccent3_03.png", id:"wateraccent3_03"},
		{src:"images/waterbase.png", id:"waterbase"}
	]
};



// symbols:



(lib.homepagebg = function() {
	this.initialize(img.homepagebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2043,447);


(lib.mountains = function() {
	this.initialize(img.mountains);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2037,420);


(lib.riverhighlight_03 = function() {
	this.initialize(img.riverhighlight_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,12);


(lib.riverhighlight_06 = function() {
	this.initialize(img.riverhighlight_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,11);


(lib.riverhighlight_11 = function() {
	this.initialize(img.riverhighlight_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,35);


(lib.riverhighlight_14 = function() {
	this.initialize(img.riverhighlight_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,18);


(lib.riverhighlight_17 = function() {
	this.initialize(img.riverhighlight_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,20);


(lib.riverhighlight_23 = function() {
	this.initialize(img.riverhighlight_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,41);


(lib.riverhighlight_26 = function() {
	this.initialize(img.riverhighlight_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,35);


(lib.riverhighlight_29 = function() {
	this.initialize(img.riverhighlight_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,15);


(lib.riverhighlights2_03 = function() {
	this.initialize(img.riverhighlights2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,61);


(lib.riverhighlights2_06 = function() {
	this.initialize(img.riverhighlights2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,27);


(lib.riverhighlights2_09 = function() {
	this.initialize(img.riverhighlights2_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,19);


(lib.riverhighlights2_15 = function() {
	this.initialize(img.riverhighlights2_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,43);


(lib.riverhighlights2_18 = function() {
	this.initialize(img.riverhighlights2_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,34);


(lib.riverhighlights2_21 = function() {
	this.initialize(img.riverhighlights2_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,19);


(lib.treesleft = function() {
	this.initialize(img.treesleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,365);


(lib.treesright = function() {
	this.initialize(img.treesright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,699,304);


(lib.wateraccent3_03 = function() {
	this.initialize(img.wateraccent3_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,24);


(lib.waterbase = function() {
	this.initialize(img.waterbase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,143);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mountains();
	this.instance.setTransform(-1018.5,-210);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1018.5,-210,2037,420);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mountains();
	this.instance.setTransform(-1018.5,-210);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1018.5,-210,2037,420);


(lib.tress = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.treesright();
	this.instance.setTransform(1069.2,60.5);

	this.instance_1 = new lib.treesleft();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1768.2,365);


(lib.hl15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wateraccent3_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,24);


(lib.hl14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,12);


(lib.hl13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,11);


(lib.hl12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,35);


(lib.hl11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,18);


(lib.hl10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_17();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,20);


(lib.hl9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,41);


(lib.hl8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_26();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,35);


(lib.hl7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlight_29();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,15);


(lib.hl6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,61);


(lib.hl5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,27);


(lib.hl4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,19);


(lib.hl3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,43);


(lib.hl2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_18();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,34);


(lib.hl1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.riverhighlights2_21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,19);


(lib.river = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// water-accent-3_03.png
	this.instance = new lib.hl15();
	this.instance.setTransform(451,47,1,1,0,0,0,15,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({y:48.2,alpha:0.289},30,cjs.Ease.get(1)).wait(1).to({y:47,alpha:0.898},13,cjs.Ease.get(1)).wait(27));

	// river-highlight_03.png
	this.instance_1 = new lib.hl14();
	this.instance_1.setTransform(312,48,1,1,0,0,0,26.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({alpha:0.289},17,cjs.Ease.get(1)).to({alpha:0.898},26,cjs.Ease.get(1)).wait(38));

	// river-highlight_06.png
	this.instance_2 = new lib.hl13();
	this.instance_2.setTransform(379,55,1,1,0,0,0,17,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:379.5,y:55.5,alpha:0.289},13,cjs.Ease.get(1)).to({x:379,y:55,alpha:0.898},32,cjs.Ease.get(1)).wait(59));

	// river-highlight_11.png
	this.instance_3 = new lib.hl12();
	this.instance_3.setTransform(414,79,1,1,0,0,0,19,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:79.7,alpha:0.289},12,cjs.Ease.get(1)).to({y:79,alpha:0.898},9,cjs.Ease.get(1)).wait(75));

	// river-highlight_14.png
	this.instance_4 = new lib.hl11();
	this.instance_4.setTransform(493,86,1,1,0,0,0,15.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({y:87.2,alpha:0.289},13,cjs.Ease.get(1)).wait(1).to({y:86,alpha:0.898},13,cjs.Ease.get(1)).wait(13));

	// river-highlight_17.png
	this.instance_5 = new lib.hl10();
	this.instance_5.setTransform(319,91,1,1,0,0,0,32,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({alpha:0.289},13,cjs.Ease.get(1)).to({alpha:0.898},12,cjs.Ease.get(1)).wait(50));

	// river-highlight_23.png
	this.instance_6 = new lib.hl9();
	this.instance_6.setTransform(245,125,1,1,0,0,0,52,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({y:126.2,alpha:0.289},9,cjs.Ease.get(1)).to({y:125,alpha:0.898},13,cjs.Ease.get(1)).wait(78));

	// river-highlight_26.png
	this.instance_7 = new lib.hl8();
	this.instance_7.setTransform(522,128,1,1,0,0,0,64,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({y:128.7,alpha:0.289},28,cjs.Ease.get(1)).wait(1).to({y:128,alpha:0.898},20,cjs.Ease.get(1)).wait(1));

	// river-highlight_29.png
	this.instance_8 = new lib.hl7();
	this.instance_8.setTransform(673,139,1,1,0,0,0,31,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({y:140.2,alpha:0.289},17,cjs.Ease.get(1)).wait(1).to({y:139,alpha:0.898},13,cjs.Ease.get(1)).wait(69));

	// river-highlights-2_03.png
	this.instance_9 = new lib.hl6();
	this.instance_9.setTransform(380,71,1,1,0,0,0,46,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:72.2,alpha:0.289},22,cjs.Ease.get(1)).wait(1).to({y:71,alpha:0.898},26,cjs.Ease.get(1)).wait(26));

	// river-highlights-2_06.png
	this.instance_10 = new lib.hl5();
	this.instance_10.setTransform(299,63,1,1,0,0,0,22,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({y:63.7,alpha:0.289},13).wait(1).to({y:63,alpha:0.898},13,cjs.Ease.get(1)).wait(27));

	// river-highlights-2_09.png
	this.instance_11 = new lib.hl4();
	this.instance_11.setTransform(520,75,1,1,0,0,0,21,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({y:76.2,alpha:0.289},29,cjs.Ease.get(1)).wait(1).to({y:75,alpha:0.898},13,cjs.Ease.get(1)).wait(59));

	// river-highlights-2_15.png
	this.instance_12 = new lib.hl3();
	this.instance_12.setTransform(308,128,1,1,0,0,0,59,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({y:129.2,alpha:0.289},9,cjs.Ease.get(1)).wait(1).to({y:128,alpha:0.898},14,cjs.Ease.get(1)).wait(1));

	// river-highlights-2_18.png
	this.instance_13 = new lib.hl2();
	this.instance_13.setTransform(605,130.5,1,1,0,0,0,46,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({y:131.5,alpha:0.289},33,cjs.Ease.get(1)).wait(1).to({y:130.5,alpha:0.898},25,cjs.Ease.get(1)).wait(1));

	// river-highlights-2_21.png
	this.instance_14 = new lib.hl1();
	this.instance_14.setTransform(150,141,1,1,0,0,0,11.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(38).to({y:142,alpha:0.289},13,cjs.Ease.get(1)).wait(1).to({y:142.5},0).to({y:141,alpha:0.898},20,cjs.Ease.get(1)).wait(32));

	// water-base.png
	this.instance_15 = new lib.waterbase();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,801,150.5);


// stage content:
(lib._90homepage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_146 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(146).call(this.frame_146).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("EBoGAc8QgdgHgoABQiDACg/gBIhpAAIl3hTIgTgMQg7gngeg7Qgag/gSgZQgegqhDgPQjzg2gPAZQgCAPgJAFQgQAJhDgJImwAKQgSgEghgEQgggDgagGQgegGgigmQgSgTgrg7QhThxg5gNQgggHgmAGQgdAGgLAGIm9AUQgIgEgYgDQgggFgYgFQhRgShYhlQgvg3gRgQQglgiglgIQgegHgIABIg0AGQhkAMjMAKQkeAChGgCQhBgBh2gNIlkhOQAMhGgIg4QgQh2h1gaQgegGgMgBIobATQhSgeiTgZQiNgVgYgGQgHgBgjguQgyhDgfgkQiEiYiAgcQjOguhpAEQhPADgkAiQgJAIgQAUQgOATgLAIQgjAahQgKIiYgUIHB/mMBqNAXhMgHWAhGQhCg+hbgUgAK/JhIAKgDIAGAHg");
	var mask_graphics_30 = new cjs.Graphics().p("EBoLAdBQgdgGgoAAQiDADg/gBIhpAAIl3hSIgTgMQg7gmgfg7QgZg/gSgZQgegrhEgOQjyg1gQAYQgBAPgJAFQgRAKhCgJImwAKQgTgEgggDQghgEgagFQgdgHgjglQgSgTgrg7QhThxg5gNQgggHgmAHQgeAFgKAHIm9AUQgIgDgYgDQgggFgYgGQhRgRhYhlQgvg3gSgQQglgiglgIQgdgGgJAAIgzAHQhlAMjLAKQkfADhGgCQhBgBh1gMIlkhOQALhFgIg5QgRh2h0gZQgfgHgLgBIocAVQhRgeiTgZQiOgVgYgFQgHgBgjgvQgyhCgfgkQiEiYiAgcQjOgthpAEQhPAEgkAhQgJAIgRAVQgNASgLAJQgjAZhQgJIiYgTIG8/oMBqRAXSMgHRAhHQhDg+hbgUgALCJ0IAJgDIAHAGg");
	var mask_graphics_31 = new cjs.Graphics().p("EBoQAdGQgcgGgpABQiDACg/AAIhpAAIl3hRIgTgMQg7gmgfg7Qgag/gSgZQgegqhDgPQjzg0gPAYQgCAPgJAGQgQAJhDgJImwALQgSgEghgDQgggDgagGQgegGgiglQgTgUgrg7QhThwg5gNQgggHgmAHQgeAFgKAHIm9AWQgIgEgYgDQgggFgYgFQhRgRhYhlQgwg3gRgQQglghgmgIQgdgHgIAAIg0AHQhkANjMAKQkeAEhGgCQhBgBh2gMIlkhNQALhFgIg4QgRh2h1gaQgegGgMgBIobAWQhRgeiUgYQiNgVgYgFQgHgCgjguQgzhCgfgkQiFiXiAgcQjNgthqAFQhPADgjAiQgJAIgRAVQgNASgLAIQgjAahQgJIiYgTIG3/pMBqUAXDMgHMAhIQhCg+hcgUgALEKHIAKgDIAGAGg");
	var mask_graphics_32 = new cjs.Graphics().p("EBoVAdLQgcgGgpABQiDADg+AAIhpAAIl4hQIgTgMQg7gmgfg7Qgag/gSgZQgegqhEgOQjyg0gQAYQgBAQgJAFQgRAJhCgJImwANQgTgEgggDQghgEgagFQgdgHgjglQgSgTgrg7QhUhwg5gMQgggHgmAGQgeAGgKAHIm9AWQgIgDgYgDQgggFgYgFQhRgShYhkQgwg3gSgQQglghglgIQgdgGgJAAIgzAHQhlAMjLAMQkfAEhGgCQhBgBh1gLIllhNQALhFgIg4QgRh2h1gZQgegGgMgBIobAXQhSgeiTgYQiNgUgZgFQgHgCgjguQgzhCgegkQiGiXiAgbQjOgshpAEQhPAEgkAhQgJAJgQAUQgNATgLAIQgjAahQgJIiYgTIGy/pMBqYAWzMgHHAhIQhDg9hcgUgALHKZIAJgDIAHAHg");
	var mask_graphics_33 = new cjs.Graphics().p("EBobAdRQgdgGgoABQiDADg/AAIhpAAIl4hPIgTgMQg7gmgfg7Qgag+gSgZQgfgqhDgPQjzgzgPAYQgCAQgJAFQgQAJhDgIImwANQgSgEghgDQgggDgagGQgegGgiglQgTgTgrg7QhUhwg5gMQgggHgmAHQgeAFgKAHIm9AYQgIgEgYgDQgggFgYgFQhRgRhZhkQgwg2gRgQQgmgiglgIQgdgGgIAAIg0AHQhkANjMAMQkeAFhGgCQhBgBh2gLIllhLQALhGgIg4QgRh2h1gYQgfgHgLgBIocAZQhRgeiTgYQiOgTgYgGQgHgBgjguQgzhCgfgkQiGiXiAgbQjOgrhpAEQhPAEgkAiQgJAIgQAVQgOASgLAJQgiAahQgJIiYgSIGu/rMBqbAWkMgHDAhJQhDg9hbgTgALJKsIAKgDIAHAHg");
	var mask_graphics_34 = new cjs.Graphics().p("EBogAdWQgcgGgpABQiDAEg/AAIhpABIl4hPIgTgMQg7gmgfg6Qgag/gTgZQgegqhEgOQjygzgQAYQgBAQgJAFQgRAJhCgIImwAOQgSgEghgCQghgEgagFQgdgGgjglQgTgTgrg7QhUhwg5gMQgggHgmAHQgeAGgKAHIm9AYQgIgDgYgDQgggFgYgFQhRgRhZhkQgwg2gSgQQglgiglgHQgegHgIABIgzAHQhlANjLAMQkeAGhGgBQhCgCh1gKIllhLQALhFgJg5QgSh1h1gZQgegGgLgBIocAaQhRgeiUgXQiNgUgZgFQgHgBgjguQgzhCgfgjQiGiXiAgbQjOgrhpAFQhPAEgkAiQgJAIgQAVQgOASgLAJQgiAahQgJIiYgSIGp/rMBqeAWUMgG9AhKQhDg9hcgTgALMK/IAJgDIAHAHg");
	var mask_graphics_35 = new cjs.Graphics().p("EBolAdbQgcgGgpACQiDADg/ABIhpABIl4hOIgTgMQg7gmgfg6Qgbg/gSgZQgfgqhDgOQjzgygPAYQgCAQgJAFQgQAKhDgJImwAQQgSgEghgDQgggDgagFQgegHgjgkQgSgUgsg6QhUhwg6gMQgfgHgnAHQgdAGgKAHIm9AZQgIgDgYgDQgggEgYgFQhRgRhZhkQgwg2gSgQQgmghglgIQgdgGgIAAIg0AHQhkAOjLAMQkfAGhGAAQhBgBh2gLIllhKQALhFgJg4QgSh2h1gYQgegHgMAAIobAbQhSgeiTgXQiOgTgYgFQgHgBgjguQg0hCgfgjQiGiXiAgaQjOgrhqAFQhOAEgkAiQgJAJgQAUQgOATgLAIQgiAbhQgJIiYgSIGl/sMBqhAWEMgG5AhMQhDg9hcgTgALOLSIAKgDIAHAGg");
	var mask_graphics_36 = new cjs.Graphics().p("EBoqAdhQgcgGgpABQiCAEg/AAIhpACIl4hNIgUgMQg7gmggg6Qgag/gSgYQgfgqhEgOQjzgygPAZQgBAPgJAFQgRAKhCgIImwAQQgSgEghgCQghgEgagFQgdgGgjglQgTgTgrg6QhVhwg6gMQgfgGgnAHQgdAFgKAHIm9AbQgIgDgYgDQgggFgYgFQhRgQhahkQgwg2gRgQQgmghglgIQgegGgIABIgzAHQhlAOjLANQkeAGhGAAQhCgBh1gKIllhJQAKhGgJg4QgSh2h1gYQgegGgMgBIobAdQhSgeiTgWQiOgTgYgFQgHgCgkgtQgzhCgfgjQiHiWiAgbQjOgqhqAGQhPAEgjAiQgJAIgQAVQgOATgLAIQghAahRgIIiYgRIGg/uMBqkAV1MgGzAhNQhEg9hcgSgALRLlIAKgDIAGAGg");
	var mask_graphics_37 = new cjs.Graphics().p("EBowAdmQgdgGgoACQiDAEg/AAIhpACIl4hMIgUgMQg7glggg7Qgag+gTgZQgfgqhDgOQjzgxgPAZQgCAPgJAGQgQAJhDgIImwARQgSgDghgDQgggDgagFQgegGgjglQgSgTgsg6QhVhwg6gMQgfgGgnAHQgdAGgKAHIm9AbQgIgDgYgDQgggEgYgFQhRgRhahjQgwg2gSgQQglghgmgHQgdgGgIAAIg0AHQhkAOjLAOQkfAHhGAAQhBgBh2gKIllhIQAKhGgJg4QgSh1h1gYQgfgGgLgBIobAeQhSgeiUgWQiNgSgZgFQgHgCgjgtQg0hCgfgjQiHiWiAgaQjPgqhpAGQhPAEgjAjQgJAIgQAVQgOASgKAJQgiAahRgIIiYgRIGb/uMBqoAVlMgGvAhOQhDg8hcgTgALUL4IAJgEIAHAHg");
	var mask_graphics_38 = new cjs.Graphics().p("EBo1AdrQgcgGgpACQiDAEg/ABIhpACIl4hLIgUgMQg7glggg7Qgbg+gSgZQgfgqhEgNQjzgxgPAZQgBAPgJAGQgQAJhDgIImwATQgSgEghgDQghgCgagGQgdgGgjgkQgTgTgsg7QhVhvg6gLQgggHgmAHQgdAGgKAHIm9AdQgIgEgYgCQgggFgYgFQhRgQhahjQgwg2gSgQQgmghglgHQgegGgIAAIgzAIQhlAOjLAOQkeAIhGAAQhCgBh1gJIlmhIQAKhFgIg5QgTh1h1gYQgfgGgLAAIobAeQhSgdiUgWQiOgSgYgFQgHgBgkgtQgzhCgggjQiHiWiAgZQjPgqhpAGQhPAFgjAiQgJAJgQAUQgNATgLAJQgiAahRgIIiYgRIGX/vMBqrAVWMgGqAhPQhEg8hcgTgALWMLIAKgEIAHAHg");
	var mask_graphics_39 = new cjs.Graphics().p("EBo6AdwQgcgFgpABQiDAFg/ABIhoACIl5hKIgUgMQg7glggg6Qgbg/gTgYQgfgqhDgOQjzgwgQAZQgBAQgJAFQgQAJhDgHImwATQgSgEgggCQghgDgagFQgegGgjglQgTgTgsg6QhVhvg6gLQgggHgmAIQgdAGgKAHIm9AdQgIgDgYgDQgggEgYgFQhRgQhahjQgxg2gSgPQglghgmgIQgdgGgIABIg0AIQhkAOjLAOQkfAJhGAAQhBgBh1gJIlmhHQAKhFgJg4QgTh2h2gXQgegGgMgBIobAgQhSgdiTgVQiOgSgYgFQgHgBgkguQg0hBgfgjQiIiViAgaQjPgohpAGQhPAFgjAiQgJAIgQAVQgNATgLAIQgiAbhRgIIiYgQIGS/wMBquAVGMgGlAhQQhEg8hcgTgALZMdIAKgDIAHAHg");
	var mask_graphics_40 = new cjs.Graphics().p("EBo/Ad2QgcgGgpACQiCAFg/ABIhpACIl5hJIgUgMQg7glggg6Qgbg+gTgZQgfgqhEgNQjzgwgPAZQgBAQgJAFQgQAKhDgIImwAUQgSgDghgDQgggCgagGQgegFgkglQgSgTgsg6QhWhvg6gLQgggGgmAHQgdAGgKAHIm9AfQgIgEgYgCQgggFgYgEQhRgQhahjQgxg2gSgPQgmghglgHQgegGgIAAIgzAIQhkAPjMAOQkeAKhGAAQhBAAh2gJIlmhGQAKhGgJg4QgUh1h1gXQgegGgMgBIobAhQhSgdiTgVQiOgRgZgFQgHgBgkguQgzhBgggjQiIiViAgZQjPgohpAGQhPAFgjAiQgJAJgQAVQgNATgLAIQgiAbhQgIIiZgQIGO/xMBqxAU3MgGhAhRQhDg8hdgSgALcMwIAJgDIAHAGg");
	var mask_graphics_41 = new cjs.Graphics().p("EBpFAd7QgdgGgoACQiDAGg/ABIhpACIl5hIIgUgMQg7glggg6Qgcg+gSgZQgfgphEgNQj0gvgPAYQgBAQgJAFQgQAKhDgIImwAVQgSgDgggCQghgDgagFQgegGgjgkQgTgTgsg6QhWhvg6gLQgggGgmAHQgdAGgKAIIm8AfQgJgDgYgDQgggEgYgFQhRgPhbhjQgwg1gSgQQgmghgmgHQgdgGgIABIg0AIQhkAOjLAQQkeAKhGAAQhCAAh1gJIlmhFQAJhGgJg4QgUh1h1gXQgegGgMAAIobAiQhSgciUgVQiNgSgZgEQgHgCgkgtQg0hBgfgjQiJiUiAgZQjPgohpAHQhPAFgjAiQgJAJgQAVQgNASgLAJQgiAbhQgIIiYgQIGJ/xMBqzAUnMgGbAhSQhEg8hcgSgALfNDIAJgDIAHAGg");
	var mask_graphics_42 = new cjs.Graphics().p("EBpKAeAQgdgFgoACQiDAFg/ACIhpACIl5hHIgUgMQg7glghg6Qgbg+gTgYQgfgqhEgNQjzgugPAYQgBAQgJAFQgQAKhDgHImwAWQgSgEghgCQgggCgagFQgegGgkgkQgTgTgsg6QhWhvg6gLQgggGgmAIQgdAGgKAHIm8AgQgJgDgYgCQgggEgYgFQhRgPhbhjQgxg1gSgQQgmghglgHQgegFgIAAIgzAIQhkAPjLAQQkfALhGAAQhBAAh2gJIlmhEQAKhFgKg5QgUh1h1gWQgfgGgLgBIobAkQhSgciUgVQiOgRgYgEQgHgCgkgtQg0hBgggjQiJiUiAgZQjPgnhpAHQhPAFgjAjQgJAIgQAVQgNATgLAJQghAahRgHIiYgPIGE/zMBq3AUYMgGXAhTQhEg8hcgSgALhNWIAKgDIAHAGg");
	var mask_graphics_43 = new cjs.Graphics().p("EBpPAeFQgcgFgpACQiDAGg/ABIhpAEIl5hIIgUgLQg7glghg6Qgbg+gTgYQgfgqhEgMQj0gugPAYQgBAQgJAFQgQAKhDgHImvAXQgTgDgggCQghgDgagFQgegGgjgkQgTgTgtg5QhWhvg6gLQgggGgmAIQgdAGgKAHIm8AiQgJgDgYgDQgggEgYgEQhRgQhbhiQgxg1gSgQQgmgggmgHQgdgGgIABIg0AIQhkAPjLAQQkeAMhGAAQhBAAh2gIIlmhEQAJhFgKg4QgUh2h1gWQgfgFgLgBIobAlQhSgciUgVQiOgQgYgFQgHgBglgtQg0hBgggjQiJiUiAgYQjPgnhpAHQhPAGgjAiQgJAJgQAVQgNATgLAIQghAbhRgHIiYgPIGA/zMBq5AUIMgGRAhUQhFg8hcgSgALkNpIAKgEIAHAHg");
	var mask_graphics_44 = new cjs.Graphics().p("EBpUAeLQgcgGgpADQiDAGg+ABIhpAEIl6hHIgUgLQg7gkghg6Qgcg+gSgZQgggphEgNQjzgtgPAZQgBAPgJAGQgQAJhDgHImwAYQgSgDghgCQgggDgagEQgegGgkgkQgTgTgsg5QhXhvg6gKQgggGgmAHQgdAHgKAHIm8AiQgJgDgYgCQgggEgYgFQhRgPhbhiQgxg1gSgQQgnggglgHQgdgFgJAAIgzAIQhkAQjLAQQkeAMhGABQhCAAh1gIIlnhCQAJhGgJg4QgVh1h1gWQgfgGgLAAIobAmQhSgciUgUQiOgQgZgFQgGgBglgtQg0hBgggjQiJiTiBgYQjPgnhpAIQhPAFgjAjQgJAJgPAVQgOATgKAIQgiAbhQgHIiZgOIF7/1MBq9AT5MgGNAhUQhEg7hdgRgALnN8IAKgEIAGAHg");
	var mask_graphics_45 = new cjs.Graphics().p("EBpaAeQQgdgFgpACQiCAGg/ACIhpAEIl6hGIgUgLQg7gkghg6Qgcg+gTgZQgfgphEgMQj0gtgPAZQgBAPgJAGQgQAJhDgGImvAZQgSgEghgCQghgCgagFQgegFgjgkQgTgTgtg6QhXhug6gKQgggGgmAIQgdAGgKAHIm8AkQgJgDgYgDQgggEgYgEQhRgPhbhiQgyg1gSgPQgmghglgHQgegFgIAAIgzAJQhkAPjLASQkfAMhGABQhBABh2gIIlmhCQAJhGgKg4QgVh1h1gVQgfgGgLgBIobAoQhSgciUgUQiOgQgZgEQgHgBgkgtQg1hBgggjQiJiTiBgXQjPgnhpAIQhPAGgjAjQgJAIgPAVQgNATgLAJQghAbhRgHIiYgOIF2/1MBq/ATpMgGIAhVQhEg7hcgRgALqOPIAJgEIAHAHg");
	var mask_graphics_46 = new cjs.Graphics().p("EBpfAeVQgdgFgoACQiDAHg/ACIhpAEIl6hFIgUgLQg8gkggg6Qgcg+gTgYQgggqhEgMQj0gsgOAZQgBAPgJAGQgQAKhDgHImwAaQgSgDghgCQgggDgagEQgegGgkgkQgTgSgtg6QhXhtg6gLQgggGgmAIQgdAGgKAIIm8AkQgJgDgXgCQghgEgYgEQhRgPhchiQgxg1gSgPQgmghgmgGQgdgGgJABIgzAIQhkAQjLASQkeANhGABQhBABh2gIIlnhBQAJhFgKg4QgVh2h1gVQgfgFgMgBIoaApQhSgciUgTQiOgQgZgEQgHgCgkgsQg1hBgggiQiKiTiBgYQjPglhpAIQhPAGgjAiQgIAJgQAVQgNATgLAJQghAbhRgHIiYgOIFy/2MBrCATaMgGDAhWQhFg7hcgRgALtOhIAJgDIAHAGg");
	var mask_graphics_47 = new cjs.Graphics().p("EBpkAeaQgdgFgoADQiDAHg/ACIhpAEIl6hEIgUgLQg8gkggg6Qgcg+gTgYQgggphEgMQj0gsgPAZQgBAPgJAGQgQAKhDgHImvAbQgSgDghgCQghgCgagFQgegFgjgkQgUgTgtg5QhXhtg6gLQgggGgmAIQgdAHgKAHIm8AmQgIgEgYgCQghgEgYgEQhRgOhchiQgxg1gSgPQgnggglgHQgegFgIAAIgzAJQhkAQjLASQkeAOhGABQhCABh1gHIlnhAQAIhGgKg4QgVh1h1gVQgfgGgMAAIoaAqQhSgciUgTQiOgPgZgEQgHgCglgsQg0hBgggiQiLiTiBgXQjPglhpAIQhPAGgjAjQgIAJgQAVQgNATgKAJQgiAbhQgHIiZgNIFt/3MBrGATKMgF/AhXQhFg7hcgRgALwO0IAJgDIAHAGg");
	var mask_graphics_48 = new cjs.Graphics().p("EBppAegQgcgFgpACQiDAHg/ADIhoAEIl7hDIgTgLQg9gkghg6Qgcg9gTgZQgggphEgMQj0grgOAZQgBAQgJAFQgQAKhDgGImwAcQgSgEgggBQghgDgagEQgegFgkgkQgTgTgtg5QhYhtg6gLQgggFgmAIQgdAGgKAIIm8AmQgIgDgYgCQghgEgYgEQhRgPhchhQgyg0gSgQQgmgggmgHQgdgFgIABIg0AIQhkARjKASQkeAPhGABQhCABh1gHIlog/QAJhGgKg4QgWh1h1gVQgfgFgMgBIoaArQhSgbiUgSQiOgPgZgFQgHgBglgsQg1hBgggiQiLiTiBgWQjPglhpAIQhPAHgiAjQgJAIgPAWQgNATgLAIQghAbhRgGIiYgNIFo/4MBrIAS7MgF6AhYQhFg7hcgQgALzPHIAJgDIAHAGg");
	var mask_graphics_49 = new cjs.Graphics().p("EBpuAelQgcgFgpADQiDAHg+ACIhpAFIl7hCIgTgLQg9gkghg5Qgcg+gTgYQgggphEgMQj0grgPAZQgBAQgJAFQgQAKhDgGImvAdQgSgDghgCQghgCgagFQgegFgkgkQgTgSgtg5QhYhtg6gLQgggFgmAIQgdAHgKAHIm8AnQgIgDgYgCQgggDgZgFQhRgOhchhQgyg0gSgQQgnggglgGQgegFgIAAIgzAJQhkARjLATQkeAPhGABQhBABh2gGIlng/QAIhGgKg4QgWh1h2gUQgegFgMgBIoaAsQhSgbiUgSQiOgPgZgEQgHgBglgtQg1hAgggiQiLiSiBgXQjQgkhpAJQhOAGgjAjQgJAJgPAVQgNATgLAJQghAbhQgGIiZgMIFk/5MBrLASrMgF1AhZQhFg7hdgQgAL2PaIAJgDIAHAGg");
	var mask_graphics_50 = new cjs.Graphics().p("EBpzAeqQgcgFgpADQiCAIg/ACIhpAFIl7hBIgTgLQg9gkghg5Qgcg+gUgYQgggphEgMQj0gqgOAZQgBAQgJAFQgQAKhDgGImvAeQgTgDgggCQghgCgagEQgegFgkgkQgTgSgug5QhYhtg6gKQgggGgmAIQgdAHgKAHIm7ApQgJgDgYgCQgggEgYgEQhSgOhchhQgyg0gSgQQgnggglgGQgegFgIABIgzAJQhkAQjLAUQkeAQhGABQhBACh2gHIlng+QAIhFgLg4QgWh1h2gVQgegFgMAAIoaAtQhSgbiUgRQiPgPgYgEQgHgBglgtQg1hAghgiQiLiSiBgWQjQgkhpAJQhOAHgjAjQgIAJgQAVQgNATgKAJQghAbhRgGIiZgMIFg/6MBrNAScMgFwAhaQhFg7hdgQgAL5PtIAJgEIAHAHg");
	var mask_graphics_51 = new cjs.Graphics().p("EBp5AevQgdgFgpADQiCAJg/ACIhpAFIl6hAIgUgLQg9gkghg5Qgdg+gTgYQgggphEgLQj1gqgOAZQgBAQgJAFQgQAKhDgFImvAeQgSgDghgBQgggCgbgFQgegFgkgjQgTgTgtg5QhZhsg6gKQgggGgmAJQgdAGgKAIIm7ApQgJgDgYgCQgggDgYgEQhSgOhchhQgyg0gTgPQgmgggmgHQgdgFgIABIg0AJQhjARjLAUQkeARhGABQhCACh1gGIlog9QAIhGgKg4QgXh1h1gUQgfgFgMgBIoaAvQhSgbiUgRQiPgOgYgEQgHgBglgtQg2hAgggiQiMiRiBgWQjPgjhpAJQhPAHgiAjQgJAJgPAVQgNATgLAJQghAbhRgFIiYgNIFb/6MBrPASMMgFrAhaQhFg6hcgQgAL8QAIAJgEIAHAHg");
	var mask_graphics_52 = new cjs.Graphics().p("EBp+Ae1QgdgFgoADQiDAIg/ADIhpAFIl6g/IgUgLQg9gkghg5Qgdg9gTgZQghgohEgMQj0gpgPAZQAAAQgJAGQgQAKhDgGImvAgQgSgDghgCQghgCgagEQgegFgkgkQgTgSgug5QhYhsg7gKQgggFgmAIQgdAHgKAHIm7ArQgJgDgYgCQgggEgYgEQhSgNhchhQgzg0gSgPQgnggglgGQgegFgIAAIgzAKQhkARjKAUQkeARhGACQhCACh1gGIlog8QAIhGgLg4QgXh1h1gTQgfgFgMgBIoZAwQhTgaiUgSQiPgNgYgEQgHgCglgsQg2hAgggiQiMiRiBgWQjQgihpAJQhPAHgiAkQgJAIgPAVQgNAUgKAJQghAbhRgFIiZgMIFW/7MBrTAR8MgFmAhbQhGg6hcgPgAL/QTIAJgEIAHAGg");
	var mask_graphics_53 = new cjs.Graphics().p("EBqDAe6QgdgFgoADQiDAJg/ADIhoAFIl7g+IgUgLQg9gkgig5Qgcg9gUgYQgggphEgLQj1gpgOAZQgBAQgJAGQgQAKhDgGImvAhQgSgDghgBQgggCgagEQgegFglgkQgTgSgug5QhYhsg7gKQgggFgmAIQgdAHgKAIIm7ArQgJgDgYgCQgggDgYgEQhRgOhehgQgyg0gSgPQgnggglgGQgegFgIABIgzAJQhkASjLAUQkeAShGACQhBACh2gGIlog7QAIhGgLg4QgWh0h2gUQgfgFgMAAIoZAxQhTgaiUgRQiOgOgZgEQgHgBglgsQg2hAghgiQiMiQiBgWQjQgihpAKQhPAHgiAjQgIAJgPAVQgNATgLAJQghAchRgFIiYgMIFR/8MBrVARtMgFhAhcQhGg6hcgPgAMCQlIAJgDIAHAGg");
	var mask_graphics_54 = new cjs.Graphics().p("EBqIAe/QgdgFgoADQiDAKg/ACIhoAGIl7g9IgUgLQg9gjgig6Qgdg9gTgYQghgphEgLQj0gogPAZQAAAQgJAGQgQAKhDgFImvAhQgSgDghgBQghgCgagEQgegFgkgjQgUgSgug5QhYhsg7gKQgggFgmAJQgcAHgLAHIm7AsQgIgCgYgCQghgEgYgDQhRgOhehgQgyg0gSgPQgngfgmgHQgdgEgJAAIgzAKQhjARjLAWQkeAShGACQhBACh2gFIlog7QAIhFgLg4QgXh1h2gTQgfgFgLAAIoaAyQhTgaiUgRQiOgNgZgEQgHgBglgsQg2hAghgiQiNiQiBgVQjQgihpAKQhOAHgiAkQgJAJgPAVQgNATgKAJQghAchRgFIiZgLIFN/9MBrYARdMgFdAhdQhFg6hdgPgAMFQ4IAJgDIAHAGg");
	var mask_graphics_55 = new cjs.Graphics().p("EBqNAfEQgcgEgpADQiDAJg+ADIhpAGIl7g8IgUgLQg9gjgig5Qgdg+gUgYQgggohEgLQj1gngOAZQgBAPgJAGQgPAKhEgFImuAjQgTgDgggCQghgBgagEQgegFglgjQgTgTgug4QhZhsg7gKQgggFglAJQgdAHgLAHIm7AuQgIgDgYgCQghgDgYgEQhRgNhehgQgyg0gTgPQgngfglgGQgegFgIABIgzAJQhkASjKAWQkeAThGACQhBACh2gFIlog5QAHhGgLg4QgXh1h2gTQgfgEgLgBIoaA0QhTgaiUgQQiOgNgZgEQgHgBglgsQg3hAggghQiNiRiBgUQjQgihpAKQhPAIgiAkQgIAIgQAWQgMATgLAJQghAchQgFIiZgLIFI/9MBraARNMgFXAheQhGg6hdgPgAMIRLIAJgDIAHAGg");
	var mask_graphics_56 = new cjs.Graphics().p("EBqSAfJQgcgEgpADQiCAKg/ADIhpAGIl7g8IgUgKQg9gjgig5Qgdg+gUgXQghgphEgLQj1gmgOAZQAAAPgJAGQgQAKhDgFImvAkQgSgDghgBQgggCgbgEQgegFgkgjQgUgSgug4QhZhsg6gJQghgFglAIQgdAHgLAIIm6AuQgJgDgYgBQgggDgZgEQhRgNhehgQgygzgTgPQgnggglgGQgegFgIABIgzAKQhkASjKAWQkeAUhGACQhBADh2gFIlpg5QAIhGgLg4QgYh0h2gTQgfgFgLAAIoaA1QhTgaiUgQQiOgMgZgEQgHgBgmgsQg2hAggghQiOiQiBgVQjQgghpAKQhPAIgiAjQgIAJgPAVQgNAUgKAJQghAbhRgEIiYgLIFD/+MBrdAQ+MgFTAhfQhGg6hdgPgAMLReIAJgEIAHAHg");
	var mask_graphics_57 = new cjs.Graphics().p("EBqXAfPQgcgFgpADQiCAKg/AEIhpAGIl7g7IgUgKQg9gjgig5Qgeg9gTgYQghgphEgKQj1gmgOAZQgBAPgJAGQgPAKhDgFImvAlQgTgDgggBQghgBgagEQgegFglgjQgTgSgvg5QhZhrg6gJQghgFglAJQgdAHgLAHIm6AwQgJgDgYgCQgggDgYgEQhSgMhehgQgzgzgSgPQgngggmgGQgdgEgJABIgzAJQhjATjLAWQkdAVhGACQhCADh1gFIlpg4QAHhGgLg3QgYh1h2gSQgfgFgLAAIoZA2QhTgaiVgPQiOgMgZgEQgHgBgmgsQg2hAghghQiNiQiCgUQjQgghpAKQhOAIgiAkQgJAJgPAVQgMAUgLAJQggAbhRgEIiZgKIE///MBrfAQuMgFOAhfQhGg5hdgOgAMORxIAJgEIAIAHg");
	var mask_graphics_58 = new cjs.Graphics().p("EBqdAfUQgdgFgpAEQiCAKg/AEIhpAGIl7g6IgUgKQg9gjgjg5Qgdg9gUgYQghgohEgLQj1glgOAZQAAAPgJAGQgQAKhDgEImvAlQgSgCghgBQgggCgagEQgfgFgkgiQgUgTgug4Qhahrg6gJQgggFgmAJQgdAHgKAIIm7AwQgJgDgYgBQgggDgYgEQhSgNhehfQgzgzgSgPQgngfgmgGQgegFgIABIgzAKQhjASjLAYQkdAVhGADQhCACh2gEIlog4QAHhFgMg4QgYh1h2gSQgegEgMgBIoZA4QhTgaiVgPQiOgMgZgDQgHgCglgrQg3hAghghQiOiPiBgUQjQgghpALQhPAIgiAkQgIAJgPAVQgNATgKAJQghAchQgEIiZgKIE6//MBriAQeMgFJAhgQhHg5hcgOgAMRSEIAKgEIAHAGg");
	var mask_graphics_59 = new cjs.Graphics().p("EBqiAfZQgdgEgoADQiDALg/ADIhoAHIl8g5IgUgLQg9gigjg5Qgdg9gUgYQghgohEgKQj1glgOAZQgBAQgJAFQgPALhDgFImvAnQgSgDghgBQghgBgagEQgegFglgjQgTgSgvg4Qhahrg6gJQgggFgmAJQgdAHgKAIIm7AyQgIgDgYgCQghgDgYgDQhSgNhehfQgzgzgSgPQgogfglgGQgegEgIAAIgzAKQhkATjKAYQkeAWhGADQhBACh2gEIlog2QAGhGgLg4QgZh0h2gSQgegFgMAAIoZA4QhTgZiUgPQiPgLgZgEQgHgBglgrQg3hAghghQiOiPiCgTQjQgghpALQhOAJgiAjQgJAJgOAWQgNATgKAJQghAchRgEIiZgJMAE2ggBMBrkAQPMgFEAhhQhHg5hcgOgAMUSXIAKgEIAHAGg");
	var mask_graphics_60 = new cjs.Graphics().p("EBqnAfeQgdgEgoADQiDALg/AEIhoAHIl8g4IgUgLQg9gigjg5Qgeg9gUgXQgggphFgKQj1gkgOAZQAAAQgJAFQgQALhDgFImuAoQgTgDgggBQghgBgagEQgegEglgjQgUgSgvg4Qhahrg6gJQgggFgmAJQgdAIgKAHIm6AzQgJgDgYgBQghgDgYgEQhRgMhfhfQgzgzgTgPQgngfgmgGQgdgEgIABIgzAKQhkATjKAYQkeAWhGAEQhBACh2gDIlpg2QAHhGgMg4QgYh0h2gSQgfgEgMAAIoZA5QhTgZiUgOQiPgLgYgEQgHgBgmgrQg3hAghghQiPiOiBgUQjRgfhoAMQhPAIgiAkQgIAJgPAVQgMAUgLAJQggAchRgEIiZgJMAExggBMBrmAQAMgE/AhhQhGg5hdgOgAMYSqIAJgEIAHAGg");
	var mask_graphics_61 = new cjs.Graphics().p("EBqsAfjQgdgEgoAEQiDALg/AEIhoAHIl8g3IgUgLQg+gigig5Qgeg8gUgYQghgohEgKQj2gkgNAZQgBAQgJAFQgPALhDgEImvAoQgSgDghAAQghgCgagDQgegFglgiQgTgSgvg4Qhbhrg6gJQgggEgmAJQgdAHgKAIIm6AzQgJgCgYgCQgggDgZgDQhRgMhfhfQgzgzgTgPQgngfgmgFQgdgFgJABIgzAKQhjAUjKAYQkeAXhGAEQhBADh2gEIlpg1QAHhGgMg3QgZh1h2gRQgfgEgMgBIoYA7QhUgZiUgOQiPgKgYgEQgHgBgmgsQg3g/ghghQiPiOiCgTQjQgehpALQhOAJgiAkQgIAJgPAVQgNAUgKAJQggAchRgEIiZgJMAEsggBMBrpAPwMgE7AhiQhGg5hdgOgAMbS8IAJgDIAHAGg");
	var mask_graphics_62 = new cjs.Graphics().p("EBqxAfpQgdgFgoAEQiDAMg+AEIhpAHIl8g2IgUgLQg+gigig4Qgfg9gTgYQghgohFgKQj1gjgOAZQAAAQgJAGQgQAKhDgEImuApQgTgCgggBQghgBgagEQgegEglgjQgUgSgvg4Qhbhqg6gIQgggFgmAJQgdAIgKAHIm6A1QgJgDgYgBQgggDgYgEQhSgLhfhfQgzgzgTgPQgngegmgGQgegEgIABIgzAKQhjAUjKAZQkeAXhGAEQhBADh2gDIlpg0QAGhGgMg4QgZh0h2gRQgfgFgLAAIoZA8QhTgYiVgOQiOgLgZgDQgHgBgmgsQg3g/ghghQiQiOiBgSQjRgehoAMQhPAIghAkQgJAJgOAWQgNATgKAKQghAchQgEIiZgIMAEnggDMBrrAPhMgE1AhjQhHg5hdgNgAMeTPIAKgDIAHAGg");
	var mask_graphics_63 = new cjs.Graphics().p("EBq2AfuQgdgEgoAEQiDALg+AFIhpAHIl8g1IgUgLQg+gigjg4Qgeg9gUgYQghgohEgJQj2gjgOAZQAAAQgJAGQgPAKhDgEImvArQgSgDghgBQgggBgbgDQgegFglgiQgTgSgwg4Qhbhqg6gIQgggFgmAJQgdAIgKAIIm6A1QgIgDgYgBQghgDgYgDQhSgMhfheQg0gzgSgOQgogfglgGQgegEgIABIgzALQhjATjKAaQkeAYhGAEQhBADh2gDIlpgzQAGhGgMg4Qgah0h2gRQgfgEgLAAIoZA9QhTgYiVgOQiOgKgZgDQgHgBgmgsQg3g/ghghQiQiNiCgSQjQgehpAMQhOAJgiAkQgIAJgPAWQgMATgLAJQggAdhRgEIiZgIMAEjggDMBrtAPRMgEwAhjQhHg4hdgNgAMhTiIAKgEIAHAHg");
	var mask_graphics_64 = new cjs.Graphics().p("EBq7AfzQgdgEgoAEQiCAMg/AEIhpAIIl8g1IgUgKQg+gigjg4Qgeg9gUgXQghgohFgKQj1gigOAZQAAAQgJAGQgQAKhDgEImuAsQgSgDghAAQghgBgagEQgegEglgiQgUgSgvg4Qhbhqg7gIQgggFgmAKQgdAHgKAIIm5A3QgJgDgYgCQghgCgYgDQhSgMhfheQg0gygSgPQgogfgmgFQgdgEgIABIgzAKQhkAUjKAaQkdAZhGAEQhBADh2gDIlpgyQAGhGgNg3QgZh1h3gQQgegEgMgBIoYA/QhUgYiUgNQiPgKgZgEQgGgBgngrQg3g+gighQiPiOiCgSQjRgdhoAMQhPAKghAkQgIAJgPAWQgMATgLAJQggAdhRgEIiZgHMAEeggEMBrwAPBMgEsAhkQhHg4hdgNgAMlT1IAJgEIAHAGg");
	var mask_graphics_65 = new cjs.Graphics().p("EBrAAf4QgdgEgoAEQiCANg/AEIhpAIIl8g0IgUgKQg+gigjg4Qgfg9gUgXQghgohEgJQj2gigOAZQAAAQgJAGQgPAKhDgDImuAsQgTgCgggBQghgBgagDQgfgEglgjQgTgSgwg3Qhbhqg7gIQgggEgmAJQgcAIgLAHIm5A4QgJgDgYgBQgggDgZgDQhRgLhgheQg0gygSgPQgogfgmgFQgdgEgJABIgzALQhjAUjKAaQkdAahGAEQhBADh2gCIlpgyQAFhGgMg3Qgah0h2gRQgfgEgMAAIoYBAQhTgYiVgNQiOgJgZgEQgHgBgngrQg3g+gighQiQiNiCgSQjQgdhpANQhOAJghAlQgJAJgOAVQgNAUgKAJQggAchRgDIiZgHMAEaggEMBrxAOxMgEnAhlQhHg4hdgNgAMoUIIAKgEIAHAGg");
	var mask_graphics_66 = new cjs.Graphics().p("EBrFAf9QgcgEgpAEQiCANg/AFIhpAIIl8gzIgUgKQg+gigjg4Qgfg8gUgYQghgohFgJQj2ghgNAZQAAAQgJAGQgQAKhDgDImuAtQgSgCghAAQgggBgbgEQgegEglgiQgUgSgwg3Qhbhqg7gIQgggEgmAJQgcAIgKAIIm6A4QgJgCgYgCQgggCgYgDQhSgLhgheQg0gygTgPQgngegmgGQgegEgIABIgzALQhjAVjKAaQkdAbhGAEQhBADh2gCIlqgwQAGhGgMg4Qgbh0h2gQQgfgEgLAAIoYBBQhUgYiVgMQiOgKgZgDQgHgBgmgrQg4g+gighQiQiNiCgRQjRgchoAMQhPAKghAkQgIAJgPAWQgMAUgKAJQggAchRgDIiZgHMAEVggEMBrzAOhMgEhAhmQhIg4hdgNgAMsUbIAJgEIAHAGg");
	var mask_graphics_67 = new cjs.Graphics().p("EBrKAgCQgcgDgpAEQiCANg/AFIhoAIIl9gyIgUgKQg+gigkg4Qgeg8gUgYQgignhEgJQj2ghgOAZQAAAQgJAGQgPALhDgEImuAvQgSgDghAAQghgBgagDQgegEgmgjQgUgRgvg4Qhchpg7gIQgggEglAKQgdAHgKAIIm6A6QgIgDgYgBQghgCgYgEQhSgKhgheQg0gygTgPQgogeglgFQgegEgIABIgzALQhjAUjKAcQkdAbhGAEQhBAEh2gCIlqgwQAGhGgNg4Qgah0h3gPQgfgEgLAAIoYBCQhUgYiUgMQiPgJgZgDQgHgBgmgrQg4g+gighQiQiMiCgRQjRgchpANQhOAKghAkQgIAJgPAWQgMATgKAKQggAchRgCIiZgHMAEQggGMBr2AOSMgEdAhnQhIg4hdgNgAMvUuIAJgEIAIAGg");
	var mask_graphics_68 = new cjs.Graphics().p("EBrPAgIQgcgEgpAEQiCANg/AFIhoAJIl9gxIgUgKQg+gigkg4Qgfg8gUgXQgigohEgJQj2gggNAaQAAAPgJAGQgQALhDgEImtAwQgTgCghgBQggAAgbgEQgegEglgiQgUgSgwg3Qhchpg7gIQgggEglAKQgdAIgKAIIm5A6QgJgDgYgBQghgCgYgDQhSgLhghdQg0gygTgPQgogeglgFQgegEgIABIgzALQhjAVjKAcQkdAbhGAFQhBAEh2gCIlqgvQAFhGgMg3Qgbh0h2gQQgfgEgMAAIoYBEQhTgYiVgMQiOgIgZgDQgHgBgngrQg4g+gighQiRiMiCgRQjQgbhpANQhOAKghAlQgJAJgOAWQgMATgKAJQggAdhRgCIiZgHMAELggGMBr4AODMgEYAhmQhIg3hdgMgAMyVBIAKgEIAHAGg");
	var mask_graphics_69 = new cjs.Graphics().p("EBrUAgNQgcgEgpAEQiCAOg/AFIhoAJIl9gwIgUgKQg+gigkg3Qgfg9gUgXQgigohEgJQj2gfgOAaQAAAPgJAGQgPALhDgDImuAwQgSgCghAAQghgBgagDQgegEgmgiQgUgSgvg3Qhdhpg6gHQghgFglAKQgdAIgKAIIm5A7QgJgCgYgBQgggCgZgDQhSgLhghdQg0gygTgOQgogfgmgFQgdgDgJABIgyALQhjAVjKAcQkdAchGAFQhBAEh2gBIlqgvQAFhGgNg3Qgbh0h2gPQgfgEgMAAIoXBFQhUgYiUgLQiPgIgZgDQgHgBgngrQg4g+ghghQiSiLiCgRQjRgbhoAOQhPAKghAlQgIAJgOAVQgMAUgLAJQgfAdhRgCIiZgGMAEHggHMBr5ANzMgETAhnQhIg3hdgMgAM2VTIAJgDIAHAGg");
	var mask_graphics_70 = new cjs.Graphics().p("EBrZAgSQgcgEgpAFQiCAOg/AFIhoAJIl9gvIgVgLQg9gggkg4Qgfg9gVgXQgignhEgJQj2gfgNAaQAAAPgJAGQgQALhDgDImtAxQgTgCggAAQghgBgagDQgfgEglgiQgUgRgwg3Qhdhpg6gHQghgEglAJQgdAIgKAIIm5A9QgJgDgYgBQgggCgYgDQhSgKhhhdQg0gygTgOQgogegmgFQgegEgIABIgzALQhiAWjKAcQkdAdhGAFQhBAEh2gBIlqgtQAFhGgNg4Qgbh0h3gPQgfgDgLAAIoYBGQhTgYiVgLQiPgHgZgEQgGAAgngrQg5g+ghghQiSiLiCgQQjRgahpANQhOALghAkQgIAJgOAWQgMAUgLAJQgfAdhRgCIiZgGMAECggHMBr8ANjMgEPAhoQhHg3hegMgAM5VmIAKgEIAHAGg");
	var mask_graphics_71 = new cjs.Graphics().p("EBreAgXQgcgEgpAFQiCAOg/AGIhoAJIl9gvIgVgKQg9gggkg4Qggg9gUgXQgignhFgJQj2gegNAaQAAAPgJAGQgPALhDgDImuAzQgSgDghAAQggAAgbgDQgegEgmgiQgUgSgwg2Qhdhpg6gHQgggEgmAKQgdAIgKAIIm5A9QgIgCgYgBQghgCgYgDQhSgKhhhdQg0gygTgOQgogegmgFQgegEgIABIgzAMQhjAVjJAdQkdAehGAFQhBAEh2gBIlqgsQAFhGgNg4Qgchzh2gPQgfgEgMAAIoXBHQhUgWiVgLQiOgIgZgDQgHgBgngqQg5g+ghggQiSiLiCgQQjRgahpAOQhOAKghAlQgIAJgOAWQgMAUgLAJQgfAdhRgCIiZgFMAD9ggIMBr+ANTMgEJAhpQhIg4hegLgAM9V5IAJgEIAHAGg");
	var mask_graphics_72 = new cjs.Graphics().p("EBrjAgcQgcgDgpAEQiCAPg+AFIhpAKIl9guIgVgKQg+gggkg4Qgfg8gVgXQgigohEgIQj2gegNAaQAAAPgJAGQgPALhEgDImtA0QgSgCghAAQghgBgagDQgegEgmghQgUgSgwg3Qhdhog7gHQgggEgmAKQgdAIgKAIIm4A/QgJgDgYgBQghgCgYgDQhSgKhhhcQg0gygTgOQgogegmgFQgegDgIABIgzALQhjAWjJAeQkdAehGAFQhBAEh2AAIlqgsQAFhGgOg3Qgbh0h3gOQgfgEgLAAIoXBIQhUgWiVgLQiPgHgZgDQgHgBgngqQg4g+giggQiTiLiCgQQjRgZhoAOQhOALghAlQgIAJgOAWQgMATgLAKQgfAdhRgCIiZgFMAD5ggIMBr/ANDMgEEAhpQhIg3hegLgANAWMIAKgEIAHAGg");
	var mask_graphics_73 = new cjs.Graphics().p("EBrpAghQgdgDgpAFQiCAOg+AGIhpAKIl9gtIgVgKQg+gggkg4Qggg8gUgXQgigohFgIQj2gdgNAaQAAAPgJAGQgPALhDgCImtA0QgTgCggAAQghAAgagDQgfgEglgiQgVgRgwg3Qhdhog7gHQgggEgmAKQgcAJgKAHIm5BAQgJgDgYAAQgggCgZgDQhRgKhihcQg0gxgTgPQgpgeglgEQgegEgIABIgzAMQhjAWjJAeQkdAfhGAFQhBAFh2gBIlqgrQAEhGgNg3Qgch0h3gOQgegDgMAAIoXBJQhUgWiVgKQiOgHgZgDQgHgBgngqQg5g+giggQiTiKiCgQQjRgZhoAPQhPAKggAlQgIAKgPAWQgLATgLAKQgfAdhRgCIiZgFMAD0ggJMBsCAM0MgEAAhqQhIg3hdgLgANEWfIAJgEIAHAGg");
	var mask_graphics_74 = new cjs.Graphics().p("EBruAgmQgdgDgpAFQiCAPg+AGIhpAKIl9gsIgVgKQg+gggkg4Qggg8gUgXQgjgnhEgIQj2gdgOAaQABAPgJAGQgPALhEgCImtA1QgSgCghAAQggAAgbgDQgegDgmgiQgUgSgxg2Qhdhog7gHQgggEgmALQgcAIgKAIIm5BAQgIgCgYgBQghgCgYgDQhSgJhihcQg0gxgTgPQgpgeglgEQgegDgIABIgzALQhjAXjJAeQkdAghGAFQhBAFh2AAIlqgqQAEhHgNg3Qgdhzh2gOQgfgEgMAAIoWBLQhUgWiVgKQiPgGgZgDQgHgBgngqQg5g+giggQiTiKiCgPQjRgYhpAOQhOALggAlQgIAJgPAWQgLAUgLAJQgfAdhRgBIiZgEMADvggKMBsEAMlMgD7AhqQhIg3hdgLgANHWyIAKgEIAHAGg");
	var mask_graphics_75 = new cjs.Graphics().p("EBrzAgsQgdgEgpAFQiCAQg+AGIhpAKIl9grIgVgKQg+gggkg4Qggg8gVgXQgignhFgIQj2gcgNAaQAAAPgJAHQgPAKhDgCImtA3QgSgDghABQghAAgagDQgegEgmghQgVgSgwg2Qhehog7gHQgggDglAKQgdAIgKAIIm4BCQgJgDgYAAQghgCgYgDQhSgJhihcQg0gxgTgPQgpgdgmgFQgdgDgJABIgyAMQhjAWjJAfQkdAghGAGQhBAFh2AAIlqgpQAEhGgOg3Qgch0h3gNQgfgEgLAAIoXBMQhUgWiVgJQiOgHgZgCQgHgBgogrQg5g9giggQiTiKiCgOQjRgYhpAPQhOALggAlQgIAJgPAWQgLAUgLAJQgfAdhRgBIiZgEMADrggKMBsFAMTMgD2AhtQhIg3hdgKgANLXFIAJgEIAIAGg");
	var mask_graphics_76 = new cjs.Graphics().p("EBr4AgxQgdgEgpAGQiCAPg+AGIhpALIl9gqIgVgKQg+ggglg4Qggg8gUgXQgjgnhEgHQj3gcgNAaQABAQgJAGQgPAKhEgCImsA4QgTgCggAAQghAAgbgDQgegDgmgiQgUgRgxg2Qhehog7gHQgggDglAKQgdAJgKAIIm4BCQgJgCgYgBQgggCgZgCQhSgKhihbQg0gxgTgOQgpgegmgEQgegEgIACIgyALQhjAXjJAgQkdAghGAGQhBAFh2ABIlqgpQAEhGgOg3Qgdh0h2gNQgfgDgMAAIoWBNQhUgWiVgJQiPgGgZgDQgHAAgngrQg5g9giggQiUiJiCgPQjSgXhoAPQhOALggAmQgIAJgPAWQgLAUgKAJQggAdhRgBIiZgDMADmggLMBsHAMDMgDxAhtQhIg2hdgKgANPXYIAJgEIAHAFg");
	var mask_graphics_77 = new cjs.Graphics().p("EBr8Ag2QgcgDgpAFQiCAQg+AGIhpALIl9gqIgVgJQg+ggglg4Qggg7gVgXQgignhFgIQj2gbgNAaQAAAQgJAGQgPALhDgCImtA4QgSgCghAAQghAAgagDQgegDgmghQgVgSgwg2Qhfhng6gGQghgEglALQgdAIgKAIIm4BDQgIgCgYgBQghgBgYgDQhSgJhihbQg1gxgUgOQgogegmgEQgegDgIABIgyAMQhjAXjJAgQkdAhhGAGQhBAFh2ABIlqgoQAEhGgOg3Qgdhzh3gNQgfgEgLABIoXBOQhUgWiVgJQiOgFgZgDQgHgBgogqQg5g9giggQiUiJiCgOQjSgXhoAQQhOALggAlQgIAKgOAWQgMATgKAKQggAdhRgBIiZgDMADiggLMBsJALzMgDtAhuQhIg2hegKgANSXqIAJgEIAIAGg");
	var mask_graphics_78 = new cjs.Graphics().p("EBsBAg7QgcgDgpAFQiCAQg+AHIhoALIl+gpIgVgJQg+ggglg4Qggg7gVgXQgjgnhEgHQj3gbgNAaQABAQgJAGQgPALhEgCImsA5QgSgCghABQghAAgagDQgfgDgmgiQgUgRgxg2Qhfhng6gGQghgEglALQgcAIgKAIIm4BFQgJgDgYAAQghgCgYgCQhSgJhihbQg1gxgUgOQgogegmgEQgegDgIABIgzANQhiAXjJAgQkdAihFAGQhBAFh2ABIlrgmQAEhHgOg3Qgehzh2gNQgfgDgMAAIoWBQQhUgWiVgIQiPgFgZgDQgHgBgngqQg6g9giggQiUiIiDgOQjRgWhoAPQhOAMggAlQgIAJgOAWQgMAUgKAKQgfAdhRgBIiZgCMADcggMMBsLALjMgDnAhvQhJg2hegKgANWX9IAJgEIAIAGg");
	var mask_graphics_79 = new cjs.Graphics().p("EBsGAhAQgcgDgpAFQiCARg+AGIhoAMIl+goIgVgKQg+gfglg3Qghg8gVgXQgignhFgHQj3gagMAaQAAAQgJAGQgPALhDgCImsA6QgTgCghABQggAAgbgDQgegDgmghQgVgRgxg2Qhehng7gGQgggEgmALQgcAJgKAIIm4BFQgJgCgYgBQgggBgZgDQhSgIhihbQg1gxgUgOQgogdgmgEQgegDgIABIgzAMQhiAXjJAhQkdAjhFAGQhBAGh2ABIlrgmQAEhGgOg3Qgeh0h3gMQgfgDgLAAIoWBRQhUgWiVgIQiPgFgZgCQgHgBgogqQg5g9gjgfQiUiJiDgNQjRgWhoAQQhOALggAmQgIAJgOAWQgMAUgKAKQgfAdhRAAIiZgDMADYggMMBsMALUMgDiAhvQhJg2hegKgANaYQIAJgEIAHAGg");
	var mask_graphics_80 = new cjs.Graphics().p("EBsLAhFQgcgDgpAGQiCAQg+AHIhoAMIl+gnIgVgKQg/gfglg3Qggg8gVgXQgjgmhEgIQj3gZgNAaQABAQgJAGQgPALhEgCImsA8QgSgCghAAQghABgagDQgegDgnghQgUgSgxg1Qhfhng7gGQgggDgmAKQgcAJgKAIIm3BHQgJgDgYAAQghgCgYgCQhSgJhjhaQg1gxgUgOQgogdgmgEQgegDgIABIgzANQhiAXjJAhQkcAkhGAGQhBAGh2ABIlrglQAEhGgPg3Qgehzh2gMQgfgEgMABIoWBSQhUgViVgIQiPgFgYgCQgHgBgogqQg6g9gigfQiViIiDgNQjRgWhoAQQhOAMggAmQgIAJgOAWQgMAUgKAJQgfAehRAAIiZgCMADUggNMBsNALEMgDdAhvQhJg1hegKgANdYjIAJgEIAIAGg");
	var mask_graphics_81 = new cjs.Graphics().p("EBsQAhKQgdgDgoAGQiCARg+AHIhoAMIl+gmIgVgKQg/gfglg3Qghg8gVgXQgigmhFgHQj3gZgMAaQAAAQgJAGQgPALhDgBImsA8QgTgCggABQghAAgagDQgfgDgmghQgUgRgyg2Qhfhmg7gGQgggDglALQgdAIgKAIIm3BIQgJgCgYgBQghgBgYgDQhSgIhjhaQg1gxgUgOQgogdgmgEQgegDgIACIgzAMQhiAYjJAiQkcAkhGAGQhBAGh2ACIlrglQADhGgOg3Qgehzh3gMQgfgDgLAAIoWBUQhUgViVgIQiPgEgZgDQgHAAgogqQg6g8giggQiViIiDgNQjRgVhoAQQhOANggAlQgIAKgOAWQgMAUgKAJQgfAehRAAIiZgCMADPggNMBsPAK0MgDYAhwQhJg1hegKgANhY2IAJgEIAIAGg");
	var mask_graphics_82 = new cjs.Graphics().p("EBsVAhPQgdgCgoAFQiCASg+AHIhoAMIl+glIgVgKQg/gfglg3Qghg8gVgWQgjgnhFgHQj2gYgNAaQABAQgJAGQgPALhDgBImsA9QgTgCghABQggAAgbgCQgegDgmghQgVgRgxg2Qhghmg7gGQgggDglALQgdAJgKAIIm3BIQgJgCgYAAQgggCgZgCQhSgIhjhaQg1gxgUgNQgogegmgDQgegDgIABIgzANQhiAYjJAiQkcAkhGAHQhBAGh2ACIlrgjQADhHgOg3Qgehzh3gLQgfgDgMAAIoVBVQhUgViVgHQiPgEgZgDQgHAAgogqQg6g8gjggQiViHiDgNQjRgUhoAQQhOAMggAmQgIAJgOAXQgLAUgKAJQgfAehRAAIiZgCMADKggNMBsRAKkMgDUAhxQhJg1hegKgANlZJIAJgEIAHAGg");
	var mask_graphics_83 = new cjs.Graphics().p("EBsaAhUQgdgCgoAFQiCASg+AHIhoANIl/glIgUgJQg/gfglg3Qghg8gVgWQgjgnhFgGQj3gYgMAaQAAAQgJAGQgPALhDgBImsA+QgSgCghABQghABgagDQgegDgnghQgUgRgyg1Qhghmg6gGQghgDglALQgdAJgJAIIm3BKQgJgDgYAAQghgBgYgCQhSgIhkhaQg1gwgUgOQgpgdglgEQgegDgIABIgzANQhiAYjJAjQkcAlhGAHQhBAGh1ADIlsgjQADhGgOg3Qgfhzh3gMQgfgDgLABIoVBVQhVgUiVgHQiPgEgYgCQgHgBgpgpQg6g8giggQiWiHiDgMQjRgUhoAQQhOANggAmQgIAJgOAWQgLAUgKAKQgfAehRAAIiZgBMADFggOMBsTAKVMgDPAhxQhJg2hegJgANpZcIAJgEIAHAFg");
	var mask_graphics_84 = new cjs.Graphics().p("EBsfAhaQgdgDgoAGQiCASg+AHIhoANIl/gkIgUgJQg/gfgmg3Qghg7gVgXQgjgmhFgHQj3gXgMAaQABAQgJAGQgPALhDgBImsA/QgTgBggABQghAAgagCQgfgDgmghQgVgRgyg1Qhghmg6gGQghgDglALQgcAJgKAIIm3BLQgJgCgYgBQgggBgZgCQhSgIhkhZQg1gwgUgOQgpgdglgEQgegCgIABIgzANQhiAYjJAjQkcAmhFAHQhBAGh2ADIlrgiQAChGgOg3Qgfhzh3gLQgfgDgMABIoVBWQhUgUiVgGQiPgEgZgCQgHgBgogpQg6g8gjggQiWiGiDgMQjRgUhoARQhOANggAlQgIAKgNAWQgMAUgKAKQgfAehRAAIiZgBMADBggOMBsUAKFMgDKAhxQhJg1hegIgANsZvIAKgFIAHAGg");
	var mask_graphics_85 = new cjs.Graphics().p("EBskAhfQgdgDgoAGQiCASg+AIIhoANIl/gjIgUgJQg/gfgmg3Qghg7gVgXQgjgmhFgGQj3gXgNAaQABAQgJAGQgPALhDAAImrBAQgTgCghABQggAAgbgCQgegDgnggQgUgRgyg1Qhghmg7gFQgggDgmALQgcAJgKAIIm3BLQgIgCgYAAQghgBgYgCQhTgIhjhZQg2gwgUgOQgpgdglgDQgegDgIABIgzANQhiAZjJAjQkbAnhGAHQhBAGh2ADIlrghQAChGgOg3Qgghzh3gKQgfgDgLAAIoVBYQhUgUiVgGQiPgDgZgCQgHgBgogpQg7g8gjggQiWiGiCgMQjSgThoARQhOANggAmQgIAKgNAWQgLAUgKAKQgfAdhRABIiZAAMAC8ggPMBsVAJ1MgDFAhyQhJg1hegIgANwaCIAJgFIAIAGg");
	var mask_graphics_86 = new cjs.Graphics().p("EBspAhkQgdgDgoAGQiCATg+AHIhoAOIl/giIgUgKQg/gegmg3Qgig7gVgXQgjgmhFgGQj3gWgMAaQAAAQgIAGQgPALhDAAImsBBQgSgCghABQghABgagCQgegDgnghQgVgRgyg1Qhghlg7gFQgggDglALQgdAJgKAIIm2BNQgJgDgYAAQghgBgYgCQhSgHhkhZQg2gwgUgOQgpgdglgDQgegDgIACIgzANQhiAZjIAkQkcAnhGAHQhBAHh2ADIlrggQAChHgPg3Qgfhyh3gLQgfgDgMABIoUBZQhVgUiVgGQiOgCgZgCQgHgBgpgpQg6g8gjgfQiXiGiCgMQjSgShoARQhOANgfAmQgIAJgOAXQgLAUgKAJQgfAehRABIiZAAMAC4ggPMBsWAJlMgDAAhzQhKg1hdgIgAN0aUIAJgEIAIAGg");
	var mask_graphics_87 = new cjs.Graphics().p("EBsuAhpQgdgDgoAGQiCATg+AIIhoAOIl/ghIgVgKQg/gegmg3Qghg7gVgWQgkgnhEgFQj3gWgNAaQABAQgJAGQgPALhDAAImrBCQgTgCggACQghAAgagCQgfgDgnggQgUgRgyg1Qhhhlg7gFQgggDglALQgdAJgJAJIm3BNQgJgCgYAAQgggBgZgCQhSgHhkhZQg2gwgTgOQgqgcgmgEQgdgCgJABIgyANQhiAZjIAlQkcAohGAHQhBAHh1ADIlsgfQAChGgPg3Qgfhzh3gKQgfgDgMABIoUBaQhVgUiVgFQiPgCgZgDQgHAAgogpQg7g8gjgfQiXiGiCgLQjSgShoARQhOAOgfAmQgIAJgOAWQgLAVgKAJQgeAehRABIiZABMACyggQMBsYAJWMgC7AhzQhKg1hdgIgAN4anIAJgEIAIAGg");
	var mask_graphics_88 = new cjs.Graphics().p("EBszAhuQgdgCgoAGQiCATg+AIIhoAOIl/ghIgVgJQg/gegmg3Qgig7gVgWQgjgmhFgGQj3gVgMAaQAAAQgIAGQgPALhDAAImrBDQgTgBghABQggABgbgDQgegCgnghQgVgQgyg1Qhhhlg7gFQgggDglAMQgcAJgKAIIm2BOQgJgCgYAAQghgBgYgCQhSgHhlhYQg2gwgTgOQgqgcgmgDQgdgDgJABIgyAOQhiAZjIAlQkcAohFAIQhBAHh2AEIlsgfQADhGgQg3Qgghzh3gKQgfgCgLAAIoUBcQhVgUiVgFQiPgCgZgCQgHAAgogpQg7g8gjgfQiYiFiCgLQjSgShoASQhOANgfAmQgIAKgNAWQgLAUgKAKQgfAehRABIiZABMACuggQMBsaAJGMgC3AhzQhKg0hdgIgAN8a6IAJgEIAHAGg");
	var mask_graphics_89 = new cjs.Graphics().p("EBs4AhzQgdgCgoAGQiCATg+AIIhoAOIl/gfIgVgJQg/gegmg3Qgig7gVgWQgkgmhEgGQj4gUgMAaQABAQgJAGQgPALhDAAImrBEQgSgBghABQghABgagCQgegDgnggQgVgRgyg0Qhihlg6gFQghgDglAMQgcAJgKAIIm2BQQgJgCgYAAQgggBgZgCQhSgHhlhYQg2gwgTgOQgqgcgmgDQgdgDgJACIgyANQhiAajIAlQkcAphFAIQhBAHh2AEIlrgeQAChGgQg3Qgghyh3gKQgfgDgMABIoTBdQhVgUiVgEQiPgCgZgCQgHgBgpgoQg7g8gjgfQiXiFiDgKQjSgShoASQhNAOggAmQgHAKgOAWQgLAUgKAKQgeAehRABIiZABMACpggQMBsbAI2MgCyAh0QhKg0hdgIgAOAbNIAJgEIAHAFg");
	var mask_graphics_90 = new cjs.Graphics().p("EBs9Ah4QgdgCgoAGQiCAUg+AIIhoAOIl/geIgVgJQg/gegmg3Qgig7gWgWQgjgmhFgFQj3gUgMAaQAAAQgIAGQgPAMhDAAImrBFQgTgCggABQghABgagCQgfgCgnggQgVgRgyg1Qhhhkg7gFQghgDglAMQgcAJgKAJIm1BQQgJgCgYAAQghgBgYgCQhTgGhkhYQg3gwgTgNQgqgdgmgDQgdgCgJABIgyAOQhiAajIAlQkbAqhGAIQhBAHh2AEIlrgcQAChHgQg2Qgghzh3gJQgfgDgMABIoUBeQhUgTiVgFQiPgBgZgCQgHgBgpgpQg7g7gjgfQiYiEiDgLQjSgQhnASQhOAOgfAmQgIAJgNAXQgMAUgJAKQgfAehRACIiZABMAClggRMBscAInMgCtAh0QhKg0hdgIgAOEbgIAJgEIAHAFg");
	var mask_graphics_91 = new cjs.Graphics().p("EBtCAh9QgdgCgpAGQiBAVg+AIIhoAOIl/gdIgVgJQg/gegng3Qgig6gVgXQgkglhFgGQj3gTgMAaQABAQgJAGQgPAMhDAAImqBGQgTgCghACQggABgbgCQgegDgnggQgVgQgzg1Qhhhkg7gFQgggCglALQgdAKgJAIIm2BRQgJgCgYAAQggAAgZgCQhSgGhlhYQg3gwgTgNQgqgdgmgCQgdgDgJACIgyANQhiAajIAmQkbArhGAIQhAAHh2AFIlsgcQAChHgQg2Qghhzh3gJQgfgCgLAAIoUBgQhUgTiWgEQiOgBgZgCQgHgBgpgpQg7g7gkgfQiYiEiDgKQjRgQhoASQhOAOgfAnQgIAJgNAXQgLAUgKAKQgeAehRACIiZABMACgggRMBsdAIXMgCoAh0QhKg0hdgHgAOIbzIAJgFIAHAGg");
	var mask_graphics_92 = new cjs.Graphics().p("EBtGAiCQgdgCgoAHQiBAUg+AIIhoAPIl/gdIgVgJQg/gdgng3Qgig6gWgWQgjgmhFgFQj4gTgLAaQAAAQgIAGQgPAMhDAAImrBHQgSgBghABQghABgagCQgegCgoggQgUgRgzg0Qhihkg7gFQgggCglAMQgcAJgKAIIm2BTQgIgCgYAAQghgBgYgBQhTgHhlhXQg3gwgTgNQgqgcgmgDQgdgCgJABIgyAOQhhAajIAnQkcArhFAIQhBAHh2AFIlsgbQAChGgQg3Qghhyh3gJQgfgDgMABIoTBhQhVgTiVgEQiPgBgYgBQgHgBgqgpQg7g7gjgfQiZiDiCgKQjSgQhoATQhOAOgfAmQgHAKgOAWQgLAVgJAJQgfAfhRACIiZACMACbggSMBsfAIHMgCjAh1QhKg0hegHgAOMcGIAJgFIAHAGg");
	var mask_graphics_93 = new cjs.Graphics().p("EBtLAiHQgdgCgoAHQiBAVg+AIIhoAPIl/gcIgVgJQhAgegmg1Qgjg7gVgWQgkgmhFgFQj3gSgMAaQABAQgJAGQgPAMhDAAImqBIQgTgBggABQghABgagBQgfgDgnggQgVgQgzg0Qhihkg7gFQgggCglAMQgcAJgKAJIm1BTQgJgCgYAAQghAAgYgCQhSgGhmhXQg2gwgUgNQgqgcglgDQgegCgJABIgyAOQhhAbjIAnQkbAshGAIQhBAIh2AFIlrgbQABhGgQg3Qghhyh3gJQgfgCgMABIoTBiQhVgTiVgDQiPgBgZgCQgHAAgpgpQg7g7gjgeQiZiEiDgJQjSgQhoATQhNAPgfAmQgIAKgNAWQgLAUgKAKQgeAfhRACIiZACMACWggSMBsgAH3MgCeAh2QhKg0hegHgAOQcYIAJgEIAHAGg");
	var mask_graphics_94 = new cjs.Graphics().p("EBtQAiMQgdgCgoAHQiBAVg+AJIhoAPIl/gbIgVgJQhAgegng1Qgig7gWgWQgkgmhEgFQj4gRgMAaQABAQgIAGQgPAMhDABImqBIQgTgBghACQggABgbgCQgegCgnggQgVgRgzg0Qhjhjg6gFQghgCglAMQgcAKgKAIIm1BUQgIgCgZABQgggBgZgBQhSgGhlhYQg3gugUgOQgqgcglgDQgegCgIACIgzAOQhhAajIAoQkbAshGAJQhAAIh2AFIlsgaQABhGgQg2Qghhzh4gIQgegCgMABIoTBiQhVgSiVgDQiPAAgZgCQgHAAgpgpQg7g7gkgeQiZiDiDgKQjSgOhnATQhOAOgfAnQgHAJgOAXQgLAUgJAKQgeAfhRACIiZADMACRggTMBshAHoMgCZAh1QhKgzhegHgAOUcrIAJgEIAHAGg");
	var mask_graphics_95 = new cjs.Graphics().p("EBtVAiSQgdgCgoAGQiBAWg+AIIhoAQIl/gaIgVgJQhAgegng1Qgjg7gVgWQgkglhFgFQj3gRgMAaQABAQgJAGQgPAMhDABImqBJQgSgBghACQghABgagCQgegCgogfQgVgRgzg0Qhihjg7gEQghgDgkAMQgdAKgJAIIm1BWQgJgCgYAAQghAAgYgCQhSgFhmhYQg3gugUgOQgpgcgmgCQgegCgIABIgzAOQhhAbjIAoQkbAthFAJQhBAIh2AFIlsgYQABhHgQg2Qgihyh3gIQgfgCgLAAIoTBkQhVgSiVgDQiPABgZgCQgHgBgpgoQg8g7gjgeQiaiDiCgJQjSgOhoATQhOAPgeAnQgIAJgNAXQgLAUgKAKQgeAehRADIiZADMACNggTMBsiAHYMgCUAh2QhKgzhegGgAOYc+IAJgEIAHAFg");
	var mask_graphics_96 = new cjs.Graphics().p("EBtaAiXQgdgCgoAHQiBAVg/AJIhnAQIl/gaIgVgIQhAgegng1Qgjg7gWgWQgkglhFgFQj3gQgMAaQABAQgIAGQgPAMhDABImqBLQgTgCggACQghACgagCQgfgCgnggQgVgQgzg0Qhjhjg7gEQgggCglAMQgcAJgKAJIm1BWQgJgCgYAAQggAAgZgBQhSgGhmhXQg3gugUgOQgpgbgmgDQgegCgIACIgyAOQhiAbjIAoQkaAuhGAJQhBAIh1AGIlsgYQAAhGgQg3Qgihyh3gIQgfgCgMABIoSBlQhVgSiVgCQiPAAgZgBQgHgBgpgoQg8g7gkgeQiZiCiDgJQjSgOhoAUQhNAPgfAmQgIAKgNAXQgKAUgKAKQgeAehRADIiZAEMACIggTMBsjAHIMgCPAh2QhLgzhdgGgAOcdRIAJgEIAIAFg");
	var mask_graphics_97 = new cjs.Graphics().p("EBtfAicQgdgCgoAHQiBAWg/AJIhnAQImAgZIgVgJQg/gdgog1Qgig7gWgWQgkglhFgEQj4gQgLAaQABAQgJAGQgOAMhEABImpBMQgTgBghABQggACgbgCQgegCgogfQgVgRgzgzQhjhjg7gEQgggCglAMQgcAKgKAIIm0BXQgJgCgYABQghAAgYgCQhSgFhnhXQg3gugUgOQgpgbgmgDQgegCgIACIgyAOQhiAcjHApQkbAuhFAJQhBAIh2AGIlsgXQABhGgRg3Qgihyh3gHQgfgCgMABIoSBmQhVgSiVgCQiPABgZgBQgHgBgpgoQg8g7gkgeQiaiCiDgIQjSgOhnAUQhOAQgeAmQgIAKgNAWQgLAVgJAKQgeAehRADIiZAEMACDggTMBskAG4MgCKAh2QhLgyhdgGgAOgdkIAJgFIAIAGg");
	var mask_graphics_98 = new cjs.Graphics().p("EBtjAihQgcgCgoAHQiCAWg+AJIhnARImAgYIgVgJQhAgdgng1Qgjg7gWgVQgkgmhFgEQj3gPgMAaQABAQgIAGQgPAMhDABImqBNQgSgBghACQggABgbgBQgegCgoggQgVgQgzg0Qhkhjg7gDQgggCglAMQgcAKgJAIIm1BZQgJgCgYAAQggAAgZgBQhSgFhmhXQg4gugTgNQgqgcgmgCQgegCgIABIgyAPQhiAbjHAqQkbAvhFAJQhBAIh2AHIlsgXQABhGgRg2Qgihyh3gIQgfgBgMAAIoSBoQhVgSiVgBQiPABgZgCQgHAAgpgoQg8g6gkgfQibiBiCgIQjSgNhoAUQhNAPgfAnQgHAJgNAXQgLAVgKAJQgeAfhRADIiZAEMAB/ggTMBslAGoMgCFAh3QhLgzhegFgAOkd3IAJgFIAIAGg");
	var mask_graphics_99 = new cjs.Graphics().p("EBtoAimQgdgCgoAHQiBAXg+AJIhnAQImAgWIgVgJQhAgdgng1Qgjg6gWgWQgkglhFgFQj4gOgLAaQABAQgJAGQgOAMhEACImpBNQgSgBghACQghACgagCQgfgCgngfQgVgQg0g0Qhjhjg7gDQghgCglAMQgcAKgJAJIm0BZQgJgCgYABQghAAgYgCQhTgFhmhWQg3gugUgNQgqgcgmgCQgegCgIACIgyAOQhhAcjIAqQkaAvhGAKQhAAIh2AHIlsgWQAAhGgQg2Qgjhyh4gHQgfgCgLABIoSBpQhVgSiVgBQiPACgZgCQgHAAgqgoQg8g6gjgfQibiBiDgIQjSgMhnAUQhOAQgeAnQgIAJgNAXQgKAUgKAKQgeAfhRADIiZAFMAB7ggUMBslAGZMgCAAh3QhLgzhegFgAOoeKIAJgFIAIAGg");
	var mask_graphics_100 = new cjs.Graphics().p("EBttAirQgdgCgoAHQiBAXg+AKIhoAQIl/gVIgVgJQhAgdgng1Qgkg6gWgWQgkglhFgEQj3gOgMAaQABAQgIAGQgPAMhDACImpBOQgTgBggACQghACgbgCQgegBgoggQgVgQg0gzQhjhjg7gDQgggCglANQgcAKgKAIIm0BaQgJgCgYABQggAAgZgBQhSgFhnhWQg3gugUgNQgqgcgmgCQgegBgIABIgyAPQhhAcjHAqQkbAwhFAKQhBAIh2AHIlsgUQAAhHgQg2Qgjhyh4gGQgfgCgLABIoSBqQhVgRiVgBQiPABgZgBQgHAAgqgoQg8g6gkgeQibiBiCgIQjTgMhnAVQhNAQgfAmQgHAKgNAXQgLAUgJAKQgeAfhRADIiZAFMAB2ggUMBsmAGJMgB7Ah4QhLgzhegFgAOsecIAJgEIAIAFg");
	var mask_graphics_101 = new cjs.Graphics().p("EBtyAiwQgdgCgoAIQiBAXg+AJIhoARIl/gVIgVgIQhAgdgog1Qgjg6gWgWQglglhEgEQj4gNgMAaQACAQgJAGQgOAMhEACImpBPQgSgBghADQggABgbgBQgegCgogfQgVgQg0g0Qhkhig7gDQgggCglANQgcAKgKAIImzBcQgJgCgYAAQghABgYgCQhTgEhnhWQg3gugUgNQgqgbgmgCQgegCgIABIgyAPQhhAcjHArQkbAxhFAKQhBAJh1AHIlsgUQAAhGgRg3Qgkhxh3gHQgfgBgLAAIoSBsQhVgRiVgBQiPACgZgBQgHgBgqgnQg8g6gkgeQibiBiDgHQjSgMhnAVQhOAQgeAnQgIAKgMAXQgLAUgKAKQgdAfhRAEIiZAFMABxggVMBsnAF5MgB2Ah4QhLgyhegFgAOxevIAJgEIAHAFg");
	var mask_graphics_102 = new cjs.Graphics().p("EBiMAjYIgVgIQhAgdgog1Qgkg6gWgVQgkglhFgEQj4gNgLAbQABAPgIAHQgPALhDACImpBRQgSgBghACQghACgagBQgfgCgogfQgVgQg0gzQhkhig7gDQgggCglANQgcAKgJAIIm0BcQgJgBgYAAQggABgZgCQhSgEhnhWQg4gtgUgOQgqgbgmgCQgegBgIABIgyAPQhhAdjHArQkaAxhFAKQhBAJh2AIIlsgTQAAhHgRg2Qgkhyh3gGQgfgBgMABIoQBsQhWgRiVAAQiPACgZgBQgHAAgqgoQg8g6gkgeQiciAiDgHQjSgLhnAVQhNAQgeAnQgIAKgNAXQgKAUgKAKQgeAfhQAEIiZAGMABsggVMBsoAFpMgBxAh4QhMgyhdgFQgdgBgoAHQiBAYg+AJIhoARgAO1fCIAJgFIAIAFg");
	var mask_graphics_103 = new cjs.Graphics().p("EBiRAjfIgVgJQhBgcgng1Qgkg6gWgWQglglhFgDQj3gNgMAbQACAQgJAGQgOAMhEACImoBRQgTAAggACQghACgagCQgfgBgogfQgVgQg0gzQhkhig7gDQghgCgkANQgcAKgKAJImzBdQgJgCgYABQghAAgYgBQhTgEhnhVQg4gugUgNQgqgbgmgCQgegCgIACIgyAPQhhAdjHArQkaAzhFAJQhBAKh1AHIltgSQAAhGgRg2Qgkhyh3gGQgfgBgMABIoQBtQhWgQiVAAQiPACgZgBQgHAAgqgoQg8g5gkgeQiciAiDgHQjSgKhnAVQhOAQgeAnQgHAKgNAXQgLAUgJAKQgeAghQAEIiZAFMABnggVMBspAFaMgBsAh4QhMgyhdgEQgdgCgoAIQiBAXg+AKIhoASgAO5fUIAJgFIAIAGg");
	var mask_graphics_104 = new cjs.Graphics().p("EBiWAjlIgWgJQhAgcgog1Qgkg6gWgVQgkglhFgDQj4gMgLAaQABAQgIAHQgPALhDADImpBSQgSgBghADQggACgbgCQgegBgogfQgWgQg0gzQhkhig7gCQghgCgkANQgcAKgKAJImzBeQgJgCgYABQggAAgZgBQhSgEhohVQg3gugUgNQgrgbgmgBQgegCgIACIgxAPQhhAdjHAsQkaAzhGAKQhAAJh2AIIlsgRQgBhHgRg2Qgkhxh3gGQgfgBgMABIoQBvQhVgRiWAAQiOAEgZgCQgHAAgrgnQg8g6glgeQich/iDgGQjSgLhnAWQhNAQgeAoQgIAJgMAXQgLAVgJAKQgeAfhRAEIiYAGMABiggVMBsqAFKMgBnAh4QhMgxhegFQgdgBgoAHQiAAYg+AKIhoASgAO9fmIAJgEIAIAFg");
	var mask_graphics_105 = new cjs.Graphics().p("EBiaAjrIgVgJQhAgcgog0Qgkg6gWgWQglgkhFgEQj4gLgLAbQABAPgIAHQgOAMhEACImoBUQgSgBghACQghACgagBQgegBgpgfQgVgQg0gzQhlhhg7gDQgggBglAMQgcALgJAIImzBgQgJgCgYABQghAAgYgBQhTgEhnhUQg4gugUgNQgrgbglgCQgegBgJACIgxAPQhhAdjHAtQkaAzhFAKQhBAKh1AIIltgRQAAhGgSg2Qgkhxh3gGQgfgBgMABIoQBwQhVgQiWAAQiOAEgZgBQgHgBgrgnQg9g5gkgeQich/iDgGQjSgKhnAWQhOAQgdAoQgIAJgMAXQgLAVgJAKQgeAfhRAEIiZAHMABfggVMBsqAE6MgBiAh4QhMgxhegEQgdgCgoAIQiBAYg+AKIhnASgAPCf4IAJgEIAHAFg");
	var mask_graphics_106 = new cjs.Graphics().p("EBifAjxIgVgIQhAgcgog1Qglg6gWgVQglglhEgDQj4gKgLAaQABAQgIAGQgPAMhDADImoBUQgTgBggADQghACgagBQgfgBgogfQgVgQg1gzQhlhhg7gCQgggCglANQgcAKgJAJImzBgQgIgCgZABQggABgZgBQhSgEhohUQg4gugUgNQgqgagmgCQgegBgIABIgyAQQhhAdjHAtQkZA0hGAKQhAAKh2AJIlsgQQgBhGgRg2Qglhyh3gFQgfgBgMABIoQBxQhVgQiVABQiPAEgZgBQgHAAgqgoQg+g5gkgeQich+iDgGQjTgJhnAWQhNARgeAnQgHAKgNAWQgKAVgKAKQgdAfhRAFIiZAHMABaggWMBsrAEqMgBdAh5QhMgxhegEQgdgBgoAIQiBAYg+AKIhnASgEAPGAgLIAJgFIAIAFg");
	var mask_graphics_107 = new cjs.Graphics().p("EBikAj3IgVgIQhAgcgpg1Qgkg5gWgWQglgkhFgDQj4gKgLAaQABAQgIAHQgOAMhEACImnBWQgTgBghADQggACgbgBQgegCgogeQgWgQg0gzQhlhhg7gCQghgBgkANQgcAKgKAJImyBhQgJgCgYABQghABgYgBQhSgEhphUQg4gtgUgNQgqgbgmgBQgegCgIACIgyAQQhhAdjGAuQkaA0hFALQhBAKh1AIIltgOQgBhHgRg2Qglhxh3gFQgfgBgMABIoQByQhVgQiVACQiPAEgZgBQgHAAgqgoQg+g5gkgdQidh/iDgFQjSgJhnAXQhNARgeAnQgHAKgNAXQgKAUgKAKQgdAghRAEIiZAIMABVggWMBssAEaMgBYAh5QhNgxhdgDQgdgCgoAIQiBAZg+AKIhnATgEAPKAgdIAJgFIAIAGg");
	var mask_graphics_108 = new cjs.Graphics().p("EBipAj9IgVgIQhBgcgog0Qgkg6gXgVQglglhFgCQj4gKgLAbQACAPgIAHQgPAMhDADImoBWQgSgBghADQggACgbgBQgegBgpgeQgVgQg1gzQhlhgg7gDQghgBgkANQgcALgJAIImyBjQgJgCgYABQghABgYgBQhTgDhohVQg5gtgUgMQgqgbgmgCQgegBgIACIgyAQQhgAdjHAuQkZA2hGAKQhAAKh2AJIlsgOQgBhGgSg2Qglhxh3gFQgfgBgMABIoPB0QhWgQiVACQiPAEgZgBQgHAAgqgnQg+g5gkgeQidh+iDgFQjSgIhnAXQhOARgdAnQgIAKgMAXQgKAUgKALQgdAfhRAFIiZAHMABQggVMBstAEKMgBUAh6QhMgxhegEQgdgBgnAIQiBAZg+AKIhnATgEAPPAgvIAJgFIAIAGg");
	var mask_graphics_109 = new cjs.Graphics().p("EBiuAkDIgVgIQhBgbgog1Qglg5gWgWQglgkhFgCQj4gJgLAaQABAQgIAGQgOAMhEADImnBYQgSgBghADQghACgagBQgfgBgogeQgWgQg0gzQhmhgg7gCQgggBglANQgcAKgJAJImyBjQgJgBgYABQggABgZgBQhSgDhphUQg4gtgUgNQgrgbgmgBQgegBgIACIgxAPQhhAejGAvQkaA2hFALQhBAKh1AJIltgNQgBhHgSg2Qglhxh3gEQgfgBgMABIoPB1QhWgQiVADQiPAEgZgBQgHAAgqgnQg+g5gkgdQieh+iDgFQjSgHhnAXQhNARgdAnQgIAKgMAXQgKAVgKAKQgdAfhRAFIiZAIMABMggWMBstAD7MgBPAh6QhMgxhegEQgdgBgoAIQiAAag+AKIhnATgEAPTAhBIAJgEIAIAFg");
	var mask_graphics_110 = new cjs.Graphics().p("EBizAkJIgVgIQhBgbgpg0Qgkg6gXgVQglgkhFgDQj4gIgLAbQACAPgIAHQgPAMhDADImnBYQgTAAggACQghADgagBQgfgBgogeQgWgQg1gzQhmhgg6gCQghgBgkAOQgcAKgKAJImxBkQgJgCgYACQghAAgYAAQhTgDhohUQg5gtgUgNQgrgagmgBQgegBgIABIgxAQQhhAejGAvQkZA3hGALQhAAKh2AKIlsgNQgBhGgSg2Qgmhxh3gEQgfgBgMABIoPB2QhVgPiWACQiOAFgZAAQgHgBgrgnQg+g4gkgdQieh+iDgEQjSgIhnAXQhNASgeAnQgHAKgMAXQgKAVgKAKQgdAghRAFIiYAIMABGggWMBsuADrMgBKAh6QhMgxhegDQgdgBgoAIQiAAag+AKIhnATgEAPYAhUIAJgFIAHAFg");
	var mask_graphics_111 = new cjs.Graphics().p("EBi4AkQIgWgJQhAgbgpg0Qglg5gWgVQgmglhFgCQj3gIgLAbQABAPgIAHQgOAMhEAEImnBZQgSgBghADQggADgbgBQgegBgpgfQgVgPg1gyQhmhgg7gCQghgBgkANQgcALgJAJImyBlQgJgCgYABQggABgZgBQhSgChphUQg5gsgUgNQgrgaglgCQgegBgJACIgxAQQhhAfjGAvQkZA3hFALQhAALh2AJIltgLQgBhGgSg2Qgmhxh3gEQgfgBgMABIoPB4QhVgQiVADQiPAGgZgBQgHAAgrgnQg+g5gkgdQieh9iDgEQjTgHhmAXQhNASgeAnQgHAKgMAXQgKAVgKAKQgdAghQAFIiZAJMABCggWMBsuADbMgBFAh6QhNgxhdgDQgdgBgoAJQiBAZg9ALIhoAUgEAPcAhmIAJgFIAIAFg");
	var mask_graphics_112 = new cjs.Graphics().p("EBi8AkWIgVgJQhBgagpg1Qgkg5gXgVQglgkhFgCQj4gHgLAaQACAQgJAHQgOAMhDADImnBaQgSAAghADQghACgaAAQgfgBgogfQgWgPg1gyQhmhgg7gCQgggBglAOQgcALgJAIImxBnQgJgCgYABQghABgYgBQhTgChphTQg4gtgVgNQgqgagmgBQgegBgIACIgyAQQhgAfjGAvQkZA4hFAMQhBAKh1AKIltgLQgChGgSg2Qgmhwh3gEQgfgBgMABIoOB5QhWgPiVADQiPAGgZgBQgHAAgrgnQg9g4glgdQieh9iDgEQjTgGhnAXQhNASgdAoQgHAJgMAYQgKAUgKALQgdAfhQAGIiZAJMAA9ggXMBsvADMMgBAAh6QhNgxhegCQgdgBgnAIQiBAag+ALIhnAUgEAPhAh4IAIgFIAIAFg");
	var mask_graphics_113 = new cjs.Graphics().p("EBjBAkcIgVgIQhBgbgpg0Qglg5gWgVQgmgkhFgCQj4gHgKAbQABAPgIAHQgOAMhEAEImmBbQgTgBggADQghADgagBQgfgBgpgeQgVgPg1gyQhnhgg7gBQgggBglANQgbALgKAJImxBnQgJgCgYACQggABgZgBQhSgChphTQg5gsgUgNQgrgagmgBQgegBgIACIgyAQQhgAfjGAwQkZA4hFAMQhAALh2AKIlsgKQgChGgSg2Qgnhxh3gDQgfgBgMABIoOB6QhWgPiVAEQiOAGgZgBQgHAAgrgnQg+g4glgdQifh8iDgEQjSgGhnAYQhNASgdAoQgHAKgMAXQgKAUgKALQgdAfhQAGIiZAKMAA4ggXMBswAC7MgA7Ah7QhNgwhegDQgdgBgoAJQiAAag+ALIhnAUgEAPlAiKIAJgFIAIAGg");
	var mask_graphics_114 = new cjs.Graphics().p("EBjGAkiIgVgIQhBgbgpg0Qglg5gXgVQglgkhFgCQj4gGgLAbQACAQgJAGQgOAMhDAEImmBcQgTAAghADQggADgbgBQgegBgpgeQgVgPg2gyQhmhfg7gCQghgBgkAOQgcALgJAJImxBoQgJgCgYACQggABgZgBQhSgChqhTQg5gsgUgNQgrgagmgBQgeAAgIABIgxARQhhAfjFAwQkZA6hFALQhBALh1ALIltgJQgChHgSg1Qgnhxh3gDQgfgBgMACIoOB6QhVgOiVAEQiPAGgZgBQgHAAgrgmQg+g4glgdQifh8iDgEQjSgFhnAYQhNASgdAoQgHAKgMAXQgKAVgKAKQgcAghRAGIiZAJMAA0ggWMBswACrMgA2Ah7QhNgwhegDQgdAAgoAIQiAAbg+ALIhnAUgEAPqAicIAIgEIAIAFg");
	var mask_graphics_115 = new cjs.Graphics().p("EBjLAkoIgVgIQhBgbgqgzQglg5gWgVQgmgkhFgCQj4gFgLAaQACAQgIAHQgOAMhEAEImmBdQgSgBghAEQggACgbAAQgegBgpgeQgWgPg1gyQhnhfg7gBQghgBgkAOQgcALgJAIImwBqQgJgCgYABQghACgYgBQhTgChqhSQg5gtgUgMQgrgagmgBQgegBgIACIgxARQhgAfjGAxQkZA6hFAMQhAAKh1ALIltgIQgChGgTg2Qgnhwh3gDQgfgBgMACIoNB8QhWgPiVAEQiPAHgZAAQgHgBgrgmQg+g4glgdQifh8iDgCQjTgFhmAYQhNASgdAoQgHAKgMAXQgKAVgJAKQgdAghRAGIiZAKMAAvggZMBsxACeMgAyAh7QhNgwhegCQgdgBgnAJQiAAbg+ALIhnAVgEAPuAivIAJgFIAIAFg");
	var mask_graphics_116 = new cjs.Graphics().p("EBjQAkuIgWgIQhBgagpg0Qglg5gXgVQgmgkhFgBQj4gFgKAbQABAPgIAHQgOAMhDAEImmBeQgTAAggADQghADgaAAQgfgBgpgeQgVgPg2gyQhnhfg7gBQggAAglANQgbALgJAJImxBqQgJgBgYABQggABgZAAQhSgChqhSQg5gsgUgNQgrgZgmgBQgegBgIACIgyARQhgAfjGAyQkYA6hFAMQhAALh2ALIlsgHQgDhHgSg1Qgohxh3gCQgfgBgMACIoNB9QhWgOiVAEQiOAHgZAAQgHAAgsgnQg+g4glgcQifh8iDgCQjTgFhmAZQhNASgdAoQgHAKgMAXQgKAVgJAKQgdAghRAHIiYAKMAAqggZMBsxACOMgAtAh7QhNgwhegCQgdAAgoAIQiAAcg9ALIhnAVgEAPzAjBIAIgFIAIAFg");
	var mask_graphics_117 = new cjs.Graphics().p("EBjVAk0IgWgIQhBgagpg0Qgmg4gWgVQgmgkhFgBQj4gFgLAbQACAQgIAGQgOANhEAEImlBfQgTgBggAEQghADgagBQgfAAgpgeQgWgPg1gyQhoheg6gBQghgBgkAOQgcALgJAJImwBrQgJgCgYACQghABgYAAQhTgChqhSQg5gsgUgMQgrgagmgBQgeAAgIACIgyAQQhgAgjFAyQkYA7hFAMQhBALh1AMIltgHQgChGgTg2Qgohwh3gCQgfgBgMACIoMB+QhWgOiVAFQiPAHgZAAQgHAAgrgnQg/g3glgdQigh7iCgCQjTgEhmAZQhNASgdAoQgHAKgMAXQgKAVgJALQgdAghQAGIiZALMAAmggZMBswAB+MgAnAh7QhNgwhegBQgdgBgoAJQiAAcg+ALIhmAVgEAP3AjTIAJgFIAIAFg");
	var mask_graphics_118 = new cjs.Graphics().p("EBjZAk6IgVgIQhBgagqgzQglg5gXgVQgmgjhFgCQj4gDgKAaQABAQgIAHQgOAMhDAEImmBgQgSAAghADQggADgbAAQgeAAgpgeQgWgPg2gyQhnheg7gBQghAAgkAOQgcALgJAIImwBtQgIgCgZACQggABgZAAQhSgChqhRQg6gsgUgNQgrgZgmgBQgeAAgIACIgxAQQhgAgjGAzQkYA7hFANQhAALh1AMIltgGQgDhGgTg2Qgnhwh4gCQgfgBgLACIoNB/QhWgNiVAFQiPAHgZAAQgHAAgrgmQg/g4glgcQigh7iDgCQjSgDhnAZQhMASgdAoQgHAKgMAYQgKAUgJALQgdAghQAHIiZALMAAhggaMBsxABvMgAiAh7QhOgvhegCQgdAAgnAIQiAAcg+AMIhnAVgEAP8AjlIAJgFIAIAGg");
	var mask_graphics_119 = new cjs.Graphics().p("EBjeAlAIgVgIQhBgZgqg0Qgmg4gXgVQgmgkhFgBQj4gDgKAbQACAPgIAHQgOAMhDAFImmBhQgSAAghADQggADgbAAQgegBgqgdQgVgPg2gyQhoheg7AAQgggBglAOQgbALgJAJImwBtQgJgBgYABQggACgZAAQhSgChrhRQg5gsgVgMQgrgagmAAQgegBgIACIgxARQhgAgjFAzQkYA8hFANQhAALh2AMIlsgFQgDhGgTg1Qgohwh4gCQgfAAgLABIoNCBQhVgOiVAGQiPAIgZgBQgHAAgsgmQg+g3glgdQihh6iDgCQjSgDhnAZQhMATgdApQgHAJgMAYQgKAVgJAKQgcAghRAHIiZALMAAdggZMBsxABfMgAdAh7QhOgvhegCQgdAAgnAJQiAAcg+AMIhnAWgEAQAAj4IAJgFIAIAFg");
	var mask_graphics_120 = new cjs.Graphics().p("EBjjAlGIgVgHQhCgagqg0Qglg4gXgVQgmgjhFgBQj4gDgLAbQACAQgIAHQgOAMhDAFImlBhQgTAAggAEQghADgaAAQgfgBgpgdQgWgQg2gxQhohdg7gBQggAAgkAOQgcALgJAJImvBuQgJgCgYACQghACgYgBQhTgBhqhRQg6grgUgNQgrgZgmgBQgeAAgIACIgyARQhgAgjFA0QkYA9hEAMQhBAMh1AMIltgEQgDhGgTg2Qgohwh4gBQgfAAgLABIoMCCQhWgNiVAFQiPAJgZgBQgHAAgrgmQg/g3glgcQihh6iDgCQjSgChnAZQhMATgdApQgHAKgMAXQgJAVgKAKQgcAghRAHIiYAMMAAXggZMBsyABPMgAZAh7QhNgvhegBQgdgBgoAKQiAAcg9AMIhnAWgEAQFAkKIAJgFIAIAFg");
	var mask_graphics_121 = new cjs.Graphics().p("EBjoAlMIgWgHQhBgagqgzQgmg5gXgUQgmgkhFAAQj4gDgKAbQACAQgIAHQgOAMhDAFImlBjQgTAAggADQghAEgagBQgfAAgpgdQgWgQg2gxQhohdg7gBQghAAgkAOQgcAMgJAJImvBvQgJgCgYACQggACgZgBQhSAAhrhRQg6gsgUgMQgrgagmAAQgeAAgIACIgxARQhgAgjFA0QkYA+hFANQhAALh1ANIltgDQgDhHgTg1Qgphwh3gBQgfAAgMABIoMCDQhVgNiWAGQiOAJgZAAQgHAAgsgmQg/g3glgdQihh5iDgBQjSgChnAZQhMAUgdAoQgHAKgMAXQgJAVgJAKQgdAhhQAHIiZAMMAATggZMBsyAA/MgAUAh7QhOgvhegBQgdAAgnAJQiAAdg9AMIhnAWgEAQKAkcIAJgFIAIAFg");
	var mask_graphics_122 = new cjs.Graphics().p("EBjtAlTIgWgIQhBgagqgzQgmg4gXgVQgngjhFAAQj4gCgKAbQACAPgIAHQgOANhDAFImlBjQgSAAghAEQggADgbAAQgeAAgqgdQgVgQg3gwQhoheg7AAQggAAglAOQgbALgJAJImvBwQgJgBgYACQggABgZAAQhSAAhrhRQg6gsgVgMQgrgZgmAAQgeAAgIACIgxARQhgAgjFA1QkXA+hFANQhAAMh2ANIlsgDQgEhGgTg2Qgphvh3gBQgfAAgMABIoLCEQhWgNiVAHQiPAJgZAAQgHAAgrgmQhAg3glgcQihh5iDgBQjSgChnAaQhMAUgdAoQgHAKgLAXQgKAVgJALQgcAghRAHIiYANMAAOggaMBsyAAwMgAPAh7QhOgvheAAQgdgBgnAKQiAAdg+AMIhmAWgEAQOAkuIAJgFIAIAFg");
	var mask_graphics_123 = new cjs.Graphics().p("EBjxAlZIgVgIQhBgZgrgzQgmg5gXgUQgmgjhFgBQj4gBgKAbQACAQgIAHQgOAMhDAFImlBlQgSAAghAEQggADgbAAQgeAAgqgeQgWgPg2gwQhphdg7gBQggAAgkAPQgcALgJAJImuBxQgJgCgYACQghACgYAAQhTAAhrhRQg6grgUgMQgsgZgmgBQgeAAgIACIgxASQhfAhjFA0QkYA/hEANQhBAMh1ANIltgBQgDhHgTg1Qgphwh4AAQgfAAgLABIoMCGQhWgNiVAHQiOAJgZAAQgHAAgsgmQg/g3gmgcQihh4iDgBQjTgBhmAaQhMAUgcAoQgHAKgMAXQgKAVgJALQgcAghQAIIiZANMAAJggaMBsyAAgMgAJAh7QhOgvheAAQgdAAgoAJQh/Aeg+AMIhnAWgEAQTAlAIAJgFIAIAFg");
	var mask_graphics_124 = new cjs.Graphics().p("EBj2AlfIgVgIQhCgZgqgzQgmg4gXgVQgngjhFAAQj4gBgKAbQACAQgIAHQgOAMhDAGImkBlQgTAAggAEQghAEgaAAQgfgBgpgdQgWgPg3gwQhohdg7AAQghAAgkAOQgbAMgJAJImvByQgJgCgYACQggACgZAAQhSAAhrhRQg6grgVgMQgrgZgmAAQgeAAgIACIgxARQhgAijFA1QkXA/hFANQhAANh1ANIltgBQgDhGgUg1Qgphwh4AAQgfAAgLABIoLCHQhWgNiVAHQiPAKgZAAQgHAAgrgmQhAg2glgcQiih5iDAAQjTAAhmAaQhMAUgcAoQgHAKgMAYQgJAVgJAKQgcAghRAIIiYANMAAEggZMBsyAAQMgAFAh7QhOguhegBQgdAAgnAKQiAAdg9ANIhnAXgEAQYAlTIAJgFIAIAFg");
	var mask_graphics_125 = new cjs.Graphics().p("EBj7AlkIgVgHQhCgZgqgzQgng4gXgUQgmgkhFABQj4AAgKAbQACAPgIAHQgOAMhDAGImkBnQgTAAggADQghAEgaAAQgfAAgpgdQgWgPg3gxQhphcg7AAQggAAgkAPQgcALgJAJImuBzQgJgCgYADQggACgZAAQhSAAhshQQg6grgUgMQgsgagmAAQgeAAgIACIgxASQhfAhjFA2QkXBAhFAOQhAAMh1ANIltAAQgDhGgUg1Qgqhwh3AAQgfAAgMACIoKCIQhWgNiVAIQiPAKgZAAQgHAAgsglQg/g3gmgcQiih4iDAAQjSAAhmAaQhNAVgcAoQgHAKgLAYQgKAUgJALQgcAghQAJIiZANMAAAggZMBsyAAAMAAAAh6QhOgthegBQgdAAgnAKQiAAeg9ANIhnAWgEAQdAlkIAJgEIAIAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:728.9,y:193.4}).wait(1).to({graphics:mask_graphics_30,x:729,y:193.9}).wait(1).to({graphics:mask_graphics_31,x:729.1,y:194.4}).wait(1).to({graphics:mask_graphics_32,x:729.1,y:194.9}).wait(1).to({graphics:mask_graphics_33,x:729.2,y:195.4}).wait(1).to({graphics:mask_graphics_34,x:729.3,y:195.9}).wait(1).to({graphics:mask_graphics_35,x:729.3,y:196.4}).wait(1).to({graphics:mask_graphics_36,x:729.4,y:196.9}).wait(1).to({graphics:mask_graphics_37,x:729.4,y:197.4}).wait(1).to({graphics:mask_graphics_38,x:729.5,y:197.9}).wait(1).to({graphics:mask_graphics_39,x:729.6,y:198.3}).wait(1).to({graphics:mask_graphics_40,x:729.6,y:198.8}).wait(1).to({graphics:mask_graphics_41,x:729.7,y:199.3}).wait(1).to({graphics:mask_graphics_42,x:729.7,y:199.8}).wait(1).to({graphics:mask_graphics_43,x:729.8,y:200.3}).wait(1).to({graphics:mask_graphics_44,x:729.8,y:200.8}).wait(1).to({graphics:mask_graphics_45,x:729.9,y:201.3}).wait(1).to({graphics:mask_graphics_46,x:730,y:201.8}).wait(1).to({graphics:mask_graphics_47,x:730,y:202.3}).wait(1).to({graphics:mask_graphics_48,x:730.1,y:202.7}).wait(1).to({graphics:mask_graphics_49,x:730.1,y:203.2}).wait(1).to({graphics:mask_graphics_50,x:730.2,y:203.7}).wait(1).to({graphics:mask_graphics_51,x:730.2,y:204.2}).wait(1).to({graphics:mask_graphics_52,x:730.2,y:204.7}).wait(1).to({graphics:mask_graphics_53,x:730.3,y:205.2}).wait(1).to({graphics:mask_graphics_54,x:730.3,y:205.6}).wait(1).to({graphics:mask_graphics_55,x:730.4,y:206.1}).wait(1).to({graphics:mask_graphics_56,x:730.4,y:206.6}).wait(1).to({graphics:mask_graphics_57,x:730.5,y:207.1}).wait(1).to({graphics:mask_graphics_58,x:730.5,y:207.6}).wait(1).to({graphics:mask_graphics_59,x:730.5,y:208.1}).wait(1).to({graphics:mask_graphics_60,x:730.6,y:208.5}).wait(1).to({graphics:mask_graphics_61,x:730.6,y:209}).wait(1).to({graphics:mask_graphics_62,x:730.7,y:209.5}).wait(1).to({graphics:mask_graphics_63,x:730.7,y:210}).wait(1).to({graphics:mask_graphics_64,x:730.7,y:210.5}).wait(1).to({graphics:mask_graphics_65,x:730.8,y:210.9}).wait(1).to({graphics:mask_graphics_66,x:730.8,y:211.4}).wait(1).to({graphics:mask_graphics_67,x:730.8,y:211.9}).wait(1).to({graphics:mask_graphics_68,x:730.9,y:212.4}).wait(1).to({graphics:mask_graphics_69,x:730.9,y:212.9}).wait(1).to({graphics:mask_graphics_70,x:730.9,y:213.3}).wait(1).to({graphics:mask_graphics_71,x:731,y:213.8}).wait(1).to({graphics:mask_graphics_72,x:731,y:214.3}).wait(1).to({graphics:mask_graphics_73,x:731,y:214.8}).wait(1).to({graphics:mask_graphics_74,x:731,y:215.2}).wait(1).to({graphics:mask_graphics_75,x:731.1,y:215.7}).wait(1).to({graphics:mask_graphics_76,x:731.1,y:216.2}).wait(1).to({graphics:mask_graphics_77,x:731.1,y:216.7}).wait(1).to({graphics:mask_graphics_78,x:731.1,y:217.1}).wait(1).to({graphics:mask_graphics_79,x:731.1,y:217.6}).wait(1).to({graphics:mask_graphics_80,x:731.2,y:218.1}).wait(1).to({graphics:mask_graphics_81,x:731.2,y:218.6}).wait(1).to({graphics:mask_graphics_82,x:731.2,y:219}).wait(1).to({graphics:mask_graphics_83,x:731.2,y:219.5}).wait(1).to({graphics:mask_graphics_84,x:731.2,y:220}).wait(1).to({graphics:mask_graphics_85,x:731.3,y:220.5}).wait(1).to({graphics:mask_graphics_86,x:731.3,y:220.9}).wait(1).to({graphics:mask_graphics_87,x:731.3,y:221.4}).wait(1).to({graphics:mask_graphics_88,x:731.3,y:221.9}).wait(1).to({graphics:mask_graphics_89,x:731.3,y:222.3}).wait(1).to({graphics:mask_graphics_90,x:731.3,y:222.8}).wait(1).to({graphics:mask_graphics_91,x:731.3,y:223.3}).wait(1).to({graphics:mask_graphics_92,x:731.3,y:223.8}).wait(1).to({graphics:mask_graphics_93,x:731.4,y:224.2}).wait(1).to({graphics:mask_graphics_94,x:731.4,y:224.7}).wait(1).to({graphics:mask_graphics_95,x:731.4,y:225.2}).wait(1).to({graphics:mask_graphics_96,x:731.4,y:225.6}).wait(1).to({graphics:mask_graphics_97,x:731.4,y:226.1}).wait(1).to({graphics:mask_graphics_98,x:731.4,y:226.6}).wait(1).to({graphics:mask_graphics_99,x:731.4,y:227}).wait(1).to({graphics:mask_graphics_100,x:731.4,y:227.5}).wait(1).to({graphics:mask_graphics_101,x:731.4,y:228}).wait(1).to({graphics:mask_graphics_102,x:731.4,y:228.5}).wait(1).to({graphics:mask_graphics_103,x:731.4,y:229}).wait(1).to({graphics:mask_graphics_104,x:731.4,y:229.5}).wait(1).to({graphics:mask_graphics_105,x:731.4,y:230.1}).wait(1).to({graphics:mask_graphics_106,x:731.4,y:230.6}).wait(1).to({graphics:mask_graphics_107,x:731.4,y:231.1}).wait(1).to({graphics:mask_graphics_108,x:731.4,y:231.6}).wait(1).to({graphics:mask_graphics_109,x:731.4,y:232.2}).wait(1).to({graphics:mask_graphics_110,x:731.4,y:232.7}).wait(1).to({graphics:mask_graphics_111,x:731.4,y:233.2}).wait(1).to({graphics:mask_graphics_112,x:731.3,y:233.7}).wait(1).to({graphics:mask_graphics_113,x:731.3,y:234.3}).wait(1).to({graphics:mask_graphics_114,x:731.3,y:234.8}).wait(1).to({graphics:mask_graphics_115,x:731.3,y:235.3}).wait(1).to({graphics:mask_graphics_116,x:731.3,y:235.8}).wait(1).to({graphics:mask_graphics_117,x:731.3,y:236.4}).wait(1).to({graphics:mask_graphics_118,x:731.3,y:236.9}).wait(1).to({graphics:mask_graphics_119,x:731.3,y:237.4}).wait(1).to({graphics:mask_graphics_120,x:731.2,y:237.9}).wait(1).to({graphics:mask_graphics_121,x:731.2,y:238.4}).wait(1).to({graphics:mask_graphics_122,x:731.2,y:239}).wait(1).to({graphics:mask_graphics_123,x:731.2,y:239.5}).wait(1).to({graphics:mask_graphics_124,x:731.2,y:240}).wait(1).to({graphics:mask_graphics_125,x:731.2,y:240.5}).wait(22));

	// river
	this.instance = new lib.river();
	this.instance.setTransform(1057.3,375.1,1,1,0,0,0,400.5,71.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},86).wait(32));

	// trees
	this.instance_1 = new lib.tress();
	this.instance_1.setTransform(1015.8,276.1,1,1,0,0,0,884.1,182.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:266.1,alpha:1},29,cjs.Ease.get(1)).wait(118));

	// mountains
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(1024.2,223.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(1024.2,236.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},27).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true,y:236.1,alpha:1},27,cjs.Ease.get(1)).wait(105));

	// bg
	this.instance_4 = new lib.homepagebg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1021.5,223.5,2043,458.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;