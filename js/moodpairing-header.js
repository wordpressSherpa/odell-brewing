(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

var base_url = 'http://localhost:8888/c_cactus/odell/wordpress/wp-content/themes/odell/';

// library properties:
lib.properties = {
	width: 1699,
	height: 370,
	fps: 24,
	color: "#123337",
	manifest: [
		{src: base_url + "img/header/moodpairing.png", id:"moodpairing"},
		{src: base_url + "img/header/OBC580022_OdellMoodPairing_LAYV12.jpg", id:"OBC580022_OdellMoodPairing_LAYV12"},
		{src: base_url + "img/header/pairingoutline.png", id:"pairingoutline"},
		{src: base_url + "img/header/spot.png", id:"spot"}
	]
};



// symbols:



(lib.moodpairing = function() {
	this.initialize(img.moodpairing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,175);


(lib.OBC580022_OdellMoodPairing_LAYV12 = function() {
	this.initialize(img.OBC580022_OdellMoodPairing_LAYV12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1699,371);


(lib.pairingoutline = function() {
	this.initialize(img.pairingoutline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,221);


(lib.spot = function() {
	this.initialize(img.spot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,129);


(lib.spot_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.spot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,129);


(lib.pairing = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.moodpairing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166,175);


(lib.outline = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pairingoutline();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,221,221);


(lib.leaf = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCD4C9").s().p("AgMBAQgJgCgPgiQgRgiAEgQQAGgbAcgLQAbgKAQATQASAVAEAVQAFAXgRAVQgZAdgTAAIgGAAg");
	this.shape.setTransform(19.7,67.5,0.389,0.389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCD4C9").s().p("AgQAsQgehCAYgTQASgOATAHQAXAKgGAmQgGAlgUALQgGADgFAAQgHAAgEgHg");
	this.shape_1.setTransform(17.2,62.8,0.389,0.389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCD4C9").s().p("AguUgQAJhPgCg0QgCg7gSgkQgshaj1hLQhlgfi4glQgugJgEgIQgCgFAPgjQAOghgjgWQhGgkhDglQhfg1gMgTQgHgKAWgPQAmgbAJgPQAOgagZggQh9ifghgwQgegsANgOQABgCAngPQAegLANgRQASgYgWgeQhOhqgUgqQgSgnAGgIQAGgHAwABQAyABAGiBIABhrQABg9AHgaQARhGASABQANAAAoAZQAlANAbhSQAZhmANgkQAnhyAYgYQARgSAaAXQAoAkAqgOQAmgNAcgwQA0hWAgg4QAYgpAJgEQAQgGAiAmQAaAcA/hLQAigqA6hTQBAhPATgTQA4g4AoACQApgCA4A4QATATBABPQAYAdBEBgQA/BLAagcQAjgmAQAGQAIAEAYApQAgA4A0BWQAcAwAmANQAqAOAogkQAagXARASQAYAYAoByQANAkAZBmQAaBSAlgNQANgEASgLQAQgKAGAAQASgBASBGQAGAaABA9IACBrQAFCBAygBQAwgBAGAHQAGAIgSAnQgUArhOBpQgWAeASAYQANARAeALQAoAPABACQAMAOgeAsQgUAdg6BKIhQBoQgZAgAPAaQAJAPAmAbIAPALQAFAGgFAIQgNAThfA1QhDAlhGAkQgjAWAOAhQAPAjgCAFQgEAIguAJQjRAqhDAVQjmBHgRBjQgZBmgWCDgAjoLGQgQAHggASIgiATIgzAjQgHAEADAEQADAHAMgHIATgJQAXgKAIgGQAFgDAZgKQATgGAHgEIAhgPQADgDAAgDQgBgDgFgCIgJgOgAhoIEQgeAIgWAdQgWAegGApQgGApAOAkQAQAsAnAXQAdARAhACQAeADAOgJQAagRAPAHQACABAEgBQADgBACgDQAEgHgMgJQgIgGgCgGQgBgEADgHIACgIQABgKgGgBQgDgBgDACQgEACgBAEIgCAEQgFAPgDAHQgJAOgQAFQgLAEgQgEQgTgEgQgNQgwgjADhBQADhLAcgYQARgOAfAEQANACAMAIQAMAJACALQADAQgZAMQgIADACAGQACAFAKgCQAPgBAGAGQADADACgBQADAAADgHQAPgsgVgbQgOgPgagFQgLgCgLAAQgRAAgSAEgAD6K/IgDAEQgIADAAAFQAAAEAGACIAHAEQAEADArAQIAmAPIAKAHQAbARAKADQAHABACgDQACgFgHgEIgdgVQgGgGgQgKQgQgKgIgDIg0gdIgFgBQgDABgDAHgABqLqQgNACgHAHIgMAMQgCAEACACQACADAFgDIADgCIANgFQAJgCAIADQAQAHATgDQAXgDAPgRQAEgFgCgCQgBgCgEACQgaANgWgJQgJgEgKAAIgLACgABJI3QgNAWgBAhQAAAhANAYQARAfAfAAQAeABAWgdQATgaABgjQABgggRgVQgUgagngBIgBAAQgbAAgQAagAoSJnQgBAEAPAGQAMAFAOADIBFANIBFALIAOACQBGAOAGgJQABgCgBgEQgDgFAAgLQABgGgDgDQgEgEgNAAIhHgCQhAgCgZgEIhBgIIgNgBQgIAAAAADgAHpJcQgsAIgqABIh8AFQgHAAgCADQgCACAEAJIACAEIgCAFQgBAGACACQADAEAIgCQAFgCArgDQBDgDAZgGIArgLQAigKALgEQALgFgBgDQAAgDgHAAgAmFHxQgBACADAHQAGAJAiAaIADADQASAOBCAmIACABIAHACQADgBADgGIADgFQAEgGgBgDQgCgEgFgCIgmgTIgsgXIgcgTQgWgQgDAAIgCAAQgFAAgBACgAFtHqIhCAtQgfAXgLAFIgDADQgBACADADIAEAIQABAGAEACQADABAEgDIAsgfQAFgDAQgRIARgRQAEgDALgNIAFgGQADgDgCgDQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgEADgAsFDSIABABQAAARAYAEQAOADAWA4QAMAfAUBAIAMAiIABAEQAHAOAAAHQABAKgIARQgHARAFADQAFAEAQgRQALgMA5gYIAVgJQAqghACgoQABgZgNgWQgOgXgWgMQgXgLgSAHQgHADgDgDQgEgEACgHQANgrgLgZQgIgRgVgKQgOgHgRAIQgJAEgSANIgHAGQgYARgfgBgAK7HSQADADAFAAQADAAADgCQAGgHgMgMQgHgJAGgYQADgPAHgMQAGgMAEgCIAPABQAMACABgDQADgDgKgKQgNgPgkgIQgagHgXgBQgIAAAAAEQgBADAEADQADADAFABQANADAMAIQAOAKgBAJIAAACQgDAXgEALQgHAXgPAFQgdAJgYgPQgXgPgEgmQgFgxARgxQAQgsAagXQAGgGAQgFQAUgHAQADQAYADANAXQAMAVAAAPQAAAKgFALQgGAKAFAEQAFADAG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");
	this.shape_2.setTransform(43.3,53.3,0.389,0.389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCD4C9").s().p("Ag5C7Qglg1AGhjQAEhRAehIQAdhIAcgSQAbgRAWAdQAwA9gMCVQgJB0gwA6QgYAcgVAAQgWAAgVgdg");
	this.shape_3.setTransform(18.2,45.4,0.389,0.389);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCD4C9").s().p("AgbAvQgFgJgEgXQgGgWACgKQACgSAUgLQARgKAIAEQAPAFAMAUQAQAagRAbQgQAcgWAAIgDAAQgRAAgCgHg");
	this.shape_4.setTransform(25.7,60.1,0.389,0.389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DCD4C9").s().p("AgDA9QgWAAgMgWQgKgSAAgWQABgYAKgQQALgUAVABQAaABAOATQAMAPgBAXQAAAXgOAUQgPAUgTAAIgCAAg");
	this.shape_5.setTransform(48.1,77.6,0.389,0.389);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,2,85,102.6);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.OBC580022_OdellMoodPairing_LAYV12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1699,371);


(lib.lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spot
	this.instance = new lib.spot_1();
	this.instance.setTransform(1034.3,19.5,1,1,0,0,0,67.5,64.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:0.051},10).to({alpha:0},5).wait(29).to({alpha:0.039},5).to({alpha:0},7).wait(45).to({alpha:0.051},9).to({alpha:0},5).wait(9).to({alpha:0.102},7).to({alpha:0},8).to({_off:true},1).wait(39));

	// spot
	this.instance_1 = new lib.spot_1();
	this.instance_1.setTransform(-542.1,227.5,1,1,0,0,0,67.5,64.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.059},8).to({alpha:0},7).wait(9).to({alpha:0.059},8).to({alpha:0},8).wait(54).to({alpha:0.059},7).to({alpha:0},5).wait(39).to({alpha:0.051},8).to({alpha:0},8).to({_off:true},5).wait(24));

	// spot
	this.instance_2 = new lib.spot_1();
	this.instance_2.setTransform(350.1,193.5,1,1,0,0,0,67.5,64.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:0.051},8).to({alpha:0},7).wait(20).to({alpha:0.059},8).to({alpha:0},7).wait(39).to({alpha:0.059},8).to({alpha:0},7).wait(20).to({alpha:0.051},9).to({alpha:0},8).to({_off:true},1).wait(14));

	// spot
	this.instance_3 = new lib.spot_1();
	this.instance_3.setTransform(333.6,-17.5,1,1,0,0,0,67.5,64.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({alpha:0.039},5).to({alpha:0},8).wait(18).to({alpha:0.051},8).to({alpha:0},7).wait(21).to({alpha:0.059},7).to({alpha:0},7).wait(43).to({alpha:0.051},8).to({alpha:0},8).to({_off:true},1).wait(29));

	// spot
	this.instance_4 = new lib.spot_1();
	this.instance_4.setTransform(155.6,162.5,1,1,0,0,0,67.5,64.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:0.039},8).to({alpha:0},10).wait(37).to({alpha:0.059},5).to({alpha:0},7).wait(35).to({alpha:0.051},8).to({alpha:0},9).wait(38).to({alpha:0.051},9).to({alpha:0},8).to({_off:true},3).wait(11));

	// spot
	this.instance_5 = new lib.spot_1();
	this.instance_5.setTransform(-282.5,76.5,1,1,0,0,0,67.5,64.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:0.051},10).to({alpha:0},5).wait(19).to({alpha:0.051},7).to({alpha:0},8).wait(18).to({alpha:0.051},7).to({alpha:0},5).wait(46).to({alpha:0.051},7).to({alpha:0},8).wait(17).to({alpha:0.102},8).to({alpha:0},7).to({_off:true},4).wait(4));

	// spot
	this.instance_6 = new lib.spot_1();
	this.instance_6.setTransform(-374.6,120.5,1,1,0,0,0,67.5,64.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.039},8).to({alpha:0},7).wait(15).to({alpha:0.051},5).to({alpha:0},8).wait(53).to({alpha:0.039},7).to({alpha:0},8).wait(47).to({alpha:0.039},9).to({alpha:0},8).to({_off:true},1).wait(14));

	// spot
	this.instance_7 = new lib.spot_1();
	this.instance_7.setTransform(417.6,193.5,1,1,0,0,0,67.5,64.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({alpha:0.051},7).to({alpha:0},8).wait(49).to({alpha:0.059},8).to({alpha:0},7).wait(31).to({alpha:0.051},7).to({alpha:0},8).wait(41).to({alpha:0.051},7).to({alpha:0},8).wait(1));

	// spot
	this.instance_8 = new lib.spot_1();
	this.instance_8.setTransform(945.8,120.5,1,1,0,0,0,67.5,64.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({alpha:0.059},7).to({alpha:0},8).wait(40).to({alpha:0.051},7).to({alpha:0},8).wait(35).to({alpha:0.051},11).to({alpha:0},9).to({_off:true},1).wait(23));

	// spot
	this.instance_9 = new lib.spot_1();
	this.instance_9.setTransform(611.7,-31.5,1,1,0,0,0,67.5,64.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({alpha:0.051},10).to({alpha:0},8).wait(47).to({alpha:0.051},8).to({alpha:0},7).wait(18).to({alpha:0.039},8).to({alpha:0},7).wait(42).to({alpha:0.039},9).to({alpha:0},5).to({alpha:0.039},7).to({alpha:0},8).to({_off:true},1).wait(1));

	// spot
	this.instance_10 = new lib.spot_1();
	this.instance_10.setTransform(67.5,64.5,1,1,0,0,0,67.5,64.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0.039},8).to({alpha:0},7).wait(21).to({alpha:0.051},8).to({alpha:0},7).wait(71).to({alpha:0.039},8).to({alpha:0},5).wait(23).to({alpha:0.051},9).to({alpha:0},8).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-609.6,-96,1288.8,388.1);


(lib.icno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// pairing-outline.png
	this.instance = new lib.outline();
	this.instance.setTransform(110.5,110.5,1,1,0,0,0,110.5,110.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},32,cjs.Ease.get(1)).wait(1));

	// mood-pairing.png
	this.instance_1 = new lib.pairing();
	this.instance_1.setTransform(110.5,110.5,1,1,-45,0,0,83,87.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({rotation:0,alpha:1},27,cjs.Ease.get(1)).wait(6));

	// leaf_03.png
	this.instance_2 = new lib.leaf();
	this.instance_2.setTransform(110.5,117.5,1,1,0,0,0,43.5,54.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:110.5,alpha:1},27,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.moodPairing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_235 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(235).call(this.frame_235).wait(1));

	// icon
	this.instance = new lib.icno();
	this.instance.setTransform(849.5,185,1,1,0,0,0,110.5,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(236));

	// light
	this.instance_1 = new lib.lights();
	this.instance_1.setTransform(616.2,180.1,1,1,0,0,0,67.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236));

	// BG
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(849.5,185.5,1,1,0,0,0,849.5,185.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},13,cjs.Ease.get(1)).to({alpha:0.801},82,cjs.Ease.get(1)).wait(35).to({alpha:1},82,cjs.Ease.get(-1)).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(788.6,185,1760,407.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
var canvas, stage, exportRoot;

function headerInit() {
	canvas = document.getElementById("mp-header-canvas");
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
	exportRoot = new lib.moodPairing();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
