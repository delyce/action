$(function(){
	enchant();

	var assets = [
			"img/chara1.png",
			"img/map1.png"
		];

	var core = new Core(480, 480);

	var portrait = new Scene();
	var landscape = new Scene();

	portrait.addChild((function(){
		var label = new Label("portrait");
		label.x = 10;
		label.y = 10;
		return label;
	})());

	landscape.addChild((function(){
		var label = new Label("landscape");
		label.x = 10;
		label.y = 10;
		return label;
	})());

	if ($(window).attr("orientation") == 0) {
		core.pushScene(portrait);
	}
	else {
		core.pushScene(landscape);
	}

	$(window).bind("orientationchange", function(){
		core.popScene();
		if ($(window).attr("orientation") == 0) {
			core.replaceScene(portrait);
		}
		else {
			core.replaceScene(landscape);
		}
	});

	core.fps = 15;
	core.preload(assets);
	core.scale = 1;
	core.addEventListener("load", function(){
        var map = new Map(16, 16);
        map.image = core.assets["img/map1.png"];
        map.loadData(
            [
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            ]
        );
        core.rootScene.addChild(map);

		var bear = new Sprite(32, 32);
		bear.image = core.assets["img/chara1.png"];
		bear.x = 10;
		bear.y = 150;
		bear.frame = 5;
		core.rootScene.addChild(bear);
	});
	core.start();
});
