(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.PLAYAGAIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACGDhIjklDIAAE9Ig6AAIAAm7IAZAAIDeEyIAAkyIA5AAIAAHBg");
	this.shape.setTransform(327.3,156.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdDeIAAm7IA7AAIAAG7g");
	this.shape_1.setTransform(298.9,156.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABzDhIgfheIikAAIghBeIhEAAIC1nBIAPAAICnHBgAhABXICDAAIg/jDg");
	this.shape_2.setTransform(272,155.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah5CnQg1g+AAhnQAAhmA7hAQA6hABiAAQBFAAAsAmIgaAyQgtgigsAAQhEAAgpAxQgoAxAABQQAABNAoAvQAnAvBDAAQAwAAAfgdIAAhoIg+AAIAAgzIB6AAIAADBQgZAUgqANQgsAMgpAAQhbAAg1g+g");
	this.shape_3.setTransform(231.7,156.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABzDhIgfheIikAAIghBeIhEAAIC1nBIAPAAICnHBgAhABXICDAAIg/jDg");
	this.shape_4.setTransform(193.6,155.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdDeIAAjHIiPj0IA/AAIBtDCIBvjCIA+AAIiOD0IAADHg");
	this.shape_5.setTransform(312.4,82.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABzDhIgfheIikAAIghBeIhEAAIC1nBIAPAAICnHBgAhABXICDAAIg/jDg");
	this.shape_6.setTransform(276.5,81.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiBDeIAAm7IA8AAIAAGEIDIAAIAAA3g");
	this.shape_7.setTransform(244.4,82.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiJDfIAAm6IBTgDQDAAAAACBQAACVipAAIgtgDIAACqgAhMilIAACkIAoACQBvAAABhYQgBhRh2AAQgNAAgUADg");
	this.shape_8.setTransform(210.6,82.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("A4AniQAAlZD0j0QD2j2FXAAQFZAADzD2QBLBMA0BUQAshAA8g9QD0j0FZAAQFZAAD0D0QDzD0AAFWQAAEZicDTI1tT8I05z2Qg/hLgphRQgUgmgPgrQg0iJAAicg");
	this.shape_9.setTransform(260.3,131.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("A1AAwQhAhLgphRQgUglgPgsQg0iJAAicQAAlZD0jzQD3j3FWAAQFYAAD0D3QBLBLA0BUQArhAA9g9QD0jzFZAAQFZAAD0DzQDzD0AAFWQAAEZicDTI1tT8g");
	this.shape_10.setTransform(260.3,131.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AClEUIkZmOIAAGHIhHAAIAAogIAeAAIERF4IAAl4IBIAAIAAIng");
	this.shape_11.setTransform(342.6,162.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkERIAAohIBJAAIAAIhg");
	this.shape_12.setTransform(307.7,161.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACMEUIglhzIjKAAIgoBzIhTAAIDdonIATAAIDNIngAhPBqIChAAIhOjug");
	this.shape_13.setTransform(274.6,161.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiUDOQhChNAAh/QAAh+BIhOQBHhPB5AAQBVAAA2AvIgfA+Qg5gqg1AAQhVAAgxA8QgyA9AABiQAABfAxA5QAwA6BTAAQA7AAAlgkIAAh/IhLAAIAAg/ICWAAIAADtQgeAZg1AQQg2APgxAAQhxAAhAhMg");
	this.shape_14.setTransform(225,161.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACMEUIglhzIjKAAIgoBzIhTAAIDdonIATAAIDNIngAhPBqIChAAIhNjug");
	this.shape_15.setTransform(178.1,161.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkERIAAj1IivksIBMAAICHDuICIjuIBNAAIiwEsIAAD1g");
	this.shape_16.setTransform(324.3,70.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACMEUIglhzIjKAAIgoBzIhTAAIDdonIATAAIDOIngAhPBqIChAAIhOjvg");
	this.shape_17.setTransform(280.1,70.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AifERIAAohIBKAAIAAHeID2AAIAABDg");
	this.shape_18.setTransform(240.6,70.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AipETIAAohIBmgEQDtAAAACfQAAC3jRAAQgNAAgqgDIAADSgAhejLIAADKIAyACQCJAAAAhsQAAhkiTAAQgPAAgZAEg");
	this.shape_19.setTransform(199,70.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("A9ipRQAAmpEskrQEwkwGkAAQGpAAErEwQBdBcBABoQA1hPBLhLQEskrGoAAQGpAAErErQEsEsAAGlQAAFbjBEDI6rYiI5t4bQhOhcgzhkQgYgugSg2QhBinAAjBg");
	this.shape_20.setTransform(260.1,131.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF3366").s().p("A52A7QhOhcgzhkQgYgugSg2QhBinAAjBQAAmoEsksQEwkwGkAAQGpAAErEwQBdBcBABoQA1hOBLhMQEsksGoAAQGpAAErEsQEsEsAAGlQAAFbjBECI6rYjg");
	this.shape_21.setTransform(260.1,131.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AC/FBIlFnOIAAHFIhSAAIAAp3IAiAAIE9G0IAAm0IBSAAIAAKAg");
	this.shape_22.setTransform(355.6,186.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqE8IAAp3IBVAAIAAJ3g");
	this.shape_23.setTransform(315.1,186);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACjFAIgriFIjrAAIguCFIhhAAIEBqAIAWAAIDuKAgAhcB7IC7AAIhakVg");
	this.shape_24.setTransform(276.8,185.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AisDuQhMhYAAiUQAAiRBThbQBThcCMAAQBjAAA+A2IgkBIQhBgxg+AAQhjABg5BGQg6BGAABxQAABvA5BCQA4BDBgAAQBFAAArgpIAAiVIhYAAIAAhIICuAAIAAETQgiAdg+ASQg+ASg6AAQiCAAhLhZg");
	this.shape_25.setTransform(219.3,186.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ACjFAIgriFIjrAAIguCFIhhAAIEBqAIAWAAIDuKAgAhcB7IC7AAIhakVg");
	this.shape_26.setTransform(164.9,185.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgqE8IAAkbIjLlcIBYAAICdEUICdkUIBZAAIjKFcIAAEbg");
	this.shape_27.setTransform(334.3,80.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ACjFBIgriGIjrAAIguCGIhhAAIEBqBIAWAAIDuKBgAhcB8IC7AAIhakWg");
	this.shape_28.setTransform(283.1,80.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ai5E8IAAp3IBWAAIAAIqIEdAAIAABNg");
	this.shape_29.setTransform(237.4,80.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AjEE/IAAp4QBigEAUAAQETgBAAC5QAADVjzgBQgOAAgygEIAAD0gAhujrIAADpIA6ADQCgAAAAh9QAAh0irABQgRgBgeAFg");
	this.shape_30.setTransform(189.2,80.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("EgiPgKwQAAnsFclbQFglgHoAAQHsAAFbFgQBsBrBJB4QA+hbBXhXQFclcHsAAQHsAAFbFcQFbFcAAHnQAAGSjfEsI+8cdI9y8UQhbhrg6h0Qgdg1gVg/QhLjCAAjfg");
	this.shape_31.setTransform(259.9,151.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990066").s().p("A9+BEQhahqg6h1Qgdg1gVg+QhLjCABjgQgBnsFclbQFglgHoABQHrgBFcFgQBrBrBKB4QA+hbBXhXQFblcHsABQHtgBFaFcQFcFcAAHnQAAGSjfEsI+8cdg");
	this.shape_32.setTransform(259.9,151.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,522.4,265.6);


(lib.phone2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUArIgUgiIgUAiIgLAAIAYgrIgWgqIALAAIASAhIATghIAMAAIgaAqIAcArg");
	this.shape.setTransform(68.7,121.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBArIgghVIANAAIAVA+IAVg+IAMAAIgfBVg");
	this.shape_1.setTransform(31.2,121.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AgYArIAAhVIAyAAIAAAKIgnAAIAAAZIAbAAIAAAJIgbAAIAAAeIAmAAIAAALg");
	this.shape_2.setTransform(64.1,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_3.setTransform(57.2,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AAWAsIgGgSIgfAAIgGASIgNAAIAihXIADAAIAgBXgAgLARIAYAAIgMglg");
	this.shape_4.setTransform(51.3,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("AgdArIAAhVIAVAAQARAAALALQAKALAAASQAAAtgqAAgAgRgfIAAA/IAJABQALAAAIgJQAGgKABgPQAAgfgbAAIgIABg");
	this.shape_5.setTransform(44.3,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("AAaArIgsg9IAAA9IgKAAIAAhWIAEAAIAqA7IAAg7IALAAIAABWg");
	this.shape_6.setTransform(36.6,31.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_7.setTransform(31.1,31.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3300").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_8.setTransform(25.9,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AglABQA6AvAhg4ABoh7IguAQAhTh7IA1AHAjGjNQBPiLBRgTQAZgGAZAGQBSATBVCLAjGjNQD5gxCAAxAEGEpQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnEhQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAggAjGjNQDWJgCjpg");
	this.shape_9.setTransform(49.1,92.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CC0000").ss(1,1,1).p("AA1gaQgUAXgbABQgcAfgegLQANgzAhALQALgfAwAbQgQBohZg8");
	this.shape_10.setTransform(76.8,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAndr9IO7AAIAAX7Iu7AAgAl5pCIL2AAIAATAIr2AAg");
	this.shape_11.setTransform(47.8,76.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAgZjLQhRAShQCMQDXJgCjpgQhViMhSgSQgNgDgMAAQgMAAgNADgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_12.setTransform(47.8,76.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgyAxQgUgUAAgdQAAgcAUgVQAWgTAcgBQAdABAVATQAVAVAAAcQAAAdgVAUQgVAUgdABQgcgBgWgUg");
	this.shape_13.setTransform(68.2,122.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC00").s().p("Ag3A2QgXgWAAggQAAgfAXgXQAXgWAggBQAhABAWAWQAYAXAAAfQAAAggYAWQgWAYghAAQggAAgXgYg");
	this.shape_14.setTransform(30.8,121.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFCC").s().p("Ai8iLQD5gxCAAxQhREwhfAAQheAAhrkwgAAUBZQAZAAARgcIABgBIAAAAIABgCIAAgBIAAABIgBACIAAAAIgBABQgRAbgZABIAAAAIgBAAQgUgBgZgUIAAAAIgBgBIABABIAAAAQAZAUAUABIABAAIAAAAgABEgpIAugQgAgUgyIg1gHg");
	this.shape_15.setTransform(48,86);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#993300").s().p("Ai8BQQBPiKBRgTQAagFAYAFQBTATBUCKQiAgxj5Axg");
	this.shape_16.setTransform(48,64);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgFADgFQAFgEAFAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAFgGgBQgFABgFgFg");
	this.shape_17.setTransform(32.9,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AATArIAAgqIglAAIAAAqIgLAAIAAhVIALAAIAAAiIAlAAIAAgiIALAAIAABVg");
	this.shape_18.setTransform(71.2,111);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AgUAhQgKgNAAgUQAAgSAKgMQALgOAPAAQAOABAIAFIgEAJQgGgEgMAAQgKAAgHAKQgHAKAAAOQAAAOAHAKQAHAJAKAAQAMAAAHgJIAGAJQgKALgQgBQgQABgJgMg");
	this.shape_19.setTransform(63.7,111);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgFArIAAhKIgcAAIAAgLIBDAAIAAALIgdAAIAABKg");
	this.shape_20.setTransform(56.6,111);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AAWAsIgGgSIgfAAIgGASIgNAAIAihWIADAAIAgBWgAgLARIAYAAIgMglg");
	this.shape_21.setTransform(50.7,110.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AAAAsIgTg4IgKA3IgMAAIAQhVIAGAAIATA9IATg9IAFAAIASBVIgLAAIgLg3IgSA4g");
	this.shape_22.setTransform(43,111);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AgZAgQgKgNAAgTQAAgSAKgNQAJgNAQAAQARAAAJAMQAKAMAAAUQAAAVgKAMQgJAMgRgBQgQAAgJgMgAgRgYQgFAJAAAPQAAAOAGAKQAFAKALAAQALAAAGgJQAHgJAAgQQAAghgYAAQgLAAgGAJg");
	this.shape_23.setTransform(31,111);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AAaAsIgsg+IAAA9IgKAAIAAhVIAEAAIAqA6IAAg6IAMAAIAABWg");
	this.shape_24.setTransform(23.2,111);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AA7B9Ig9hkIg5BkIgjAAIBKiBIhEh4IAhAAIA2BfIA6hfIAiAAIhNB5IBRCAg");
	this.shape_25.setTransform(50.7,70.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("ADOAAQAABVg9A6Qg7A7hWAAQhVAAg9g7Qg7g6AAhVQAAhTA7g8QA9g6BVAAQBWAAA7A6QA9A8AABTg");
	this.shape_26.setTransform(49.2,73);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAiDizQg8A7ABBUQgBBUA8A6QA9A7BVAAQBWAAA7g7QA9g6AAhUQAAhUg9g7Qg7g7hWAAQhVAAg9A7gADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_27.setTransform(47.8,76.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AiSCPQg7g6AAhVQAAhTA7g8QA9g6BVAAQBWAAA7A6QA9A8AABTQAABVg9A6Qg7A7hWAAQhVAAg9g7g");
	this.shape_28.setTransform(49.2,73);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AA9kZQA3ANArAvQA7BCAABdQAABcg7BBQg7BChUAAQhTAAg7hCQg7hBAAhcQAAhdA7hCQAogtA0gOQAWgGAYgBQACAAACAAQAXAAAWAGIAyhYAAMkfIAMhaAgYiGIg2AAABzANQgeCOieiSABOh+QAlg/AlA/AgikYIg4h6AEGFNQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgVQAVgUAdAAQAdAAAVAUQAVAVAAAdgAhnFFQAAAggYAWQgWAYghAAQggAAgYgYQgXgWAAggQAAggAXgXQAYgXAgAAQAhAAAWAXQAYAXAAAgg");
	this.shape_29.setTransform(49.1,89.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAhxhhQg7BCAABcQAABdA7BCQA7BCBTAAQBUAAA6hCQA8hCAAhdQAAhcg8hCQgqgvg3gNIAyhXIgyBXQgWgFgXAAIgEAAIAMhbIgMBbQgZAAgVAGIg4h5IA4B5Qg0APgoAsgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_30.setTransform(47.8,76.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#993300").s().p("AiOCfQg7hCAAhdQAAhcA7hCQAogtA0gOQAWgGAZgBIADAAQAXAAAWAGQA3ANAqAvQA8BCAABcQAABdg8BCQg6BBhUABQhTgBg7hBgAAmCSQAtAAAPhEIABgCIgBACQgPBEgtAAIAAAAIgBAAQgtgBhMhEIgCgBIAAgBIgDgCIgBgBIABABIADACIAAABIACABQBMBEAtABIABAAIAAAAgACIg/Qglg/gmA/QATgfATAAQASAAATAfgAgohHIg2AAg");
	this.shape_31.setTransform(50.7,82.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CC0000").ss(1,1,1).p("Ag0ASQANgzAhALQALgfAwAbQgUAXgbABQgcAfgegLgAA1gaQgQBohZg8");
	this.shape_32.setTransform(76.8,29.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAl5pCIL2AAIAATAIr2AAgAndr9IO7AAIAAX7Iu7AAg");
	this.shape_33.setTransform(47.8,76.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("ADBjmQAZAyAAA8QAABdg7BBQg7BChUAAQhTAAg7hCQg7hBAAhdQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANArAvQAUAXAOAaQAYAyhEAbQhZAkj1gDACfhnQhxC0hOhcAEGETQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnELQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAgg");
	this.shape_34.setTransform(49.1,94.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgACEBBIAeglAhYBcIBAgHAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAndr9IO7AAIAAX7Iu7AAgAl5pCIL2AAIAATAIr2AAg");
	this.shape_35.setTransform(47.8,76.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003300").s().p("Ai/BwQAQhvArgvQAogsA0gPQAWgGAYAAIAEAAQAXAAAWAFQA3ANAqAvQAVAXANAZQAYAyhEAbQhSAhjZAAIgiAAg");
	this.shape_36.setTransform(49.7,71.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAgVicQg0APgoAsQgrAwgQBuQAABdA7BCQA7BCBTAAQBUAAA6hCQA8hCAAhdQAAg9gZgwQgOgagVgXQgqgvg3gNQgWgFgXAAIgEAAQgZAAgVAGgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_37.setTransform(47.8,76.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC99").s().p("AiOBlQg7hBAAhcQD1ACBZgjQBEgbgYgyQAZAxAAA9QAABcg8BBQg6BChUAAQhTAAg7hCgAAIBPQA5AABFhqIAAAAIABgBIABgBIABgBIAFgIIAAgBIAAABIgFAIIgBABIgBABIgBABIAAAAQhFBqg5AAIAAAAIAAAAQgcAAgagcIgCgDIACADQAaAcAcAAIAAAAIAAAAgAh1gZIA/gIgABng1IAegkg");
	this.shape_38.setTransform(50.7,88.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("Ai5h4QAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANArAvQAUAXAOAaQAZAyAAA8QAAADAAABQgBBbg6A/Qg7BChUAAQhTAAg7hCQg7hBAAhdgACfhnQhxC0hOhcADah0Qiek3j1EzAEGETQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnELQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAgg");
	this.shape_39.setTransform(49.1,94.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgABAAjQAYg+A3A5AhkBRQgJhJBSAbAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAl5pCIL2AAIAATAIr2AAgAndr9IO7AAIAAX7Iu7AAg");
	this.shape_40.setTransform(47.8,76.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663333").s().p("AjJBuQAQhuArgwQAogsA0gPQAWgGAZAAIADAAQAXAAAWAFQA3ANAqAvQAVAXAOAZQAYAyABBAQiek2j1Eyg");
	this.shape_41.setTransform(50.7,71.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAgVicQg0APgoAsQgrAwgQBuQAABdA7BCQA7BCBTAAQBUAAA6hCQA7hAABhbIAAgEQAAg9gZgwQgOgagVgXQgqgvg3gNQgWgFgXAAIgEAAQgZAAgVAGgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_42.setTransform(47.8,76.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AiOB7Qg7hCAAhcQD1kzCeE3QgBhAgYgyQAZAxAAA9IAAAEQgBBag7BAQg6BChUAAQhTAAg7hCgAAIBkQA5AABFhpIAAAAIABgCIABAAIABgCIAFgIIAAgBIAAABIgFAIIgBACIgBAAIgBACIAAAAQhFBpg5AAIAAAAIAAAAQgcAAgagcIgCgDIACADQAaAcAcAAIAAAAIAAAAgAiBgPIgBgGQgDgvAnAAIAAAAIABAAQAOAAAVAGIAAAAIABABIACAAIgCAAIgBgBIAAAAQgVgGgOAAIgBAAIAAAAQgnAAADAvIABAGgAAig9IACgEQANgdATAAIAAAAIABAAQASAAAZAaIAAAAIABABIABABIgBgBIgBgBIAAAAQgZgagSAAIgBAAIAAAAQgTAAgNAdIgCAEg");
	this.shape_43.setTransform(50.7,86.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("ADBjmQAZAyAAA8QAABdg7BBQg7BChUAAQhTAAg7hCQg7hBAAhdQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANArAvQAUAXAOAagAEGETQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnELQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAgg");
	this.shape_44.setTransform(49.1,94.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgAAFAMIgygjIg4A/ABWAPIA0goIAjAoAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAgYClQBQCLBSiVAl5pCIL2AAIAATAIr2AAgAndr9IO7AAIAAX7Iu7AAg");
	this.shape_45.setTransform(47.8,76.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC99").s().p("AiOCfQg7hCAAhdQAQhuArgwQAogtA0gOQAWgGAZgBIADAAQAXAAAWAGQA3ANAqAvQAVAXAOAaQAZAxAAA8QAABdg8BCQg6BBhUABQhTgBg7hBgAAYCrQAqAAAqhMIAAgCIAAACQgqBMgqAAIAAAAIAAAAQgkAAgmg9IAAgBIgDgEIgBgCIABACIADAEIAAABQAmA9AkAAIAAAAIAAAAgAiCgUIA4hAIAzAkIgzgkgACQgtIgkgqIgyAqIAygqg");
	this.shape_46.setTransform(50.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_28},{t:this.shape_27},{t:this.shape_11},{t:this.shape_10},{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},16).to({state:[{t:this.shape_17},{t:this.shape_31},{t:this.shape_13},{t:this.shape_14},{t:this.shape_30},{t:this.shape_11},{t:this.shape_10},{t:this.shape_29},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).to({state:[{t:this.shape_17},{t:this.shape_28},{t:this.shape_27},{t:this.shape_33},{t:this.shape_32},{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},17).to({state:[{t:this.shape_17},{t:this.shape_13},{t:this.shape_14},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_10},{t:this.shape_34},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_17},{t:this.shape_28},{t:this.shape_27},{t:this.shape_33},{t:this.shape_32},{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},16).to({state:[{t:this.shape_17},{t:this.shape_13},{t:this.shape_14},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_32},{t:this.shape_39},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_17},{t:this.shape_28},{t:this.shape_27},{t:this.shape_11},{t:this.shape_10},{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},16).to({state:[{t:this.shape_17},{t:this.shape_13},{t:this.shape_14},{t:this.shape_46},{t:this.shape_37},{t:this.shape_45},{t:this.shape_32},{t:this.shape_44},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).to({state:[{t:this.shape_17},{t:this.shape_28},{t:this.shape_27},{t:this.shape_33},{t:this.shape_32},{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},16).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,97.5,155.3);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgYArIAAhVIAyAAIAAAKIgnAAIAAAZIAbAAIAAAJIgbAAIAAAeIAmAAIAAALg");
	this.shape.setTransform(64.1,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_1.setTransform(57.2,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AAWAsIgGgSIgfAAIgGASIgNAAIAihXIADAAIAgBXgAgLARIAYAAIgMglg");
	this.shape_2.setTransform(51.3,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AgdArIAAhVIAVAAQARAAALALQAKALAAASQAAAtgqAAgAgRgfIAAA/IAJABQALAAAIgJQAGgKABgPQAAgfgbAAIgIABg");
	this.shape_3.setTransform(44.3,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AAaArIgsg9IAAA9IgKAAIAAhWIAEAAIAqA7IAAg7IALAAIAABWg");
	this.shape_4.setTransform(36.6,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3300").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_5.setTransform(31.1,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_6.setTransform(25.9,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC0000").ss(1,1,1).p("AA1gaQgUAXgbABQgcAfgegLQANgzAhALQALgfAwAbQgQBohZg8");
	this.shape_7.setTransform(76.8,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAndr9IO7AAIAAX7Iu7AAgAl5pCIL2AAIAATAIr2AAg");
	this.shape_8.setTransform(47.8,76.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_9.setTransform(47.8,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgFADgFQAFgEAFAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAFgGgBQgFABgFgFg");
	this.shape_10.setTransform(32.9,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAUArIgUgiIgUAiIgLAAIAYgrIgWgqIALAAIASAhIATghIAMAAIgaAqIAcArg");
	this.shape_11.setTransform(68.7,121.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBArIgghVIANAAIAVA+IAVg+IAMAAIgfBVg");
	this.shape_12.setTransform(31.2,121.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AglABQA6AvAhg4ABoh7IguAQAhTh7IA1AHAjGjNQBPiLBRgTQAZgGAZAGQBSATBVCLAjGjNQD5gxCAAxAEGEpQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnEhQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAggAjGjNQDWJgCjpg");
	this.shape_13.setTransform(49.1,92.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAgZjLQhRAShQCMQDXJgCjpgQhViMhSgSQgNgDgMAAQgMAAgNADgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_14.setTransform(47.8,76.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgyAxQgUgUAAgdQAAgcAUgVQAWgTAcgBQAdABAVATQAVAVAAAcQAAAdgVAUQgVAUgdABQgcgBgWgUg");
	this.shape_15.setTransform(68.2,122.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("Ag3A2QgXgWAAggQAAgfAXgXQAXgWAggBQAhABAWAWQAYAXAAAfQAAAggYAWQgWAYghAAQggAAgXgYg");
	this.shape_16.setTransform(30.8,121.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFCC").s().p("Ai8iLQD5gxCAAxQhREwhfAAQheAAhrkwgAAUBZQAZAAARgcIABgBIAAAAIABgCIAAgBIAAABIgBACIAAAAIgBABQgRAbgZABIAAAAIgBAAQgUgBgZgUIAAAAIgBgBIABABIAAAAQAZAUAUABIABAAIAAAAgABEgpIAugQgAgUgyIg1gHg");
	this.shape_17.setTransform(48,86);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("Ai8BQQBPiKBRgTQAagFAYAFQBTATBUCKQiAgxj5Axg");
	this.shape_18.setTransform(48,64);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AATArIAAgqIglAAIAAAqIgLAAIAAhVIALAAIAAAiIAlAAIAAgiIALAAIAABVg");
	this.shape_19.setTransform(71.2,111);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgUAhQgKgNAAgUQAAgSAKgMQALgOAPAAQAOABAIAFIgEAJQgGgEgMAAQgKAAgHAKQgHAKAAAOQAAAOAHAKQAHAJAKAAQAMAAAHgJIAGAJQgKALgQgBQgQABgJgMg");
	this.shape_20.setTransform(63.7,111);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgFArIAAhKIgcAAIAAgLIBDAAIAAALIgdAAIAABKg");
	this.shape_21.setTransform(56.6,111);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AAWAsIgGgSIgfAAIgGASIgNAAIAihWIADAAIAgBWgAgLARIAYAAIgMglg");
	this.shape_22.setTransform(50.7,110.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AAAAsIgTg4IgKA3IgMAAIAQhVIAGAAIATA9IATg9IAFAAIASBVIgLAAIgLg3IgSA4g");
	this.shape_23.setTransform(43,111);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AgZAgQgKgNAAgTQAAgSAKgNQAJgNAQAAQARAAAJAMQAKAMAAAUQAAAVgKAMQgJAMgRgBQgQAAgJgMgAgRgYQgFAJAAAPQAAAOAGAKQAFAKALAAQALAAAGgJQAHgJAAgQQAAghgYAAQgLAAgGAJg");
	this.shape_24.setTransform(31,111);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AAaAsIgsg+IAAA9IgKAAIAAhVIAEAAIAqA6IAAg6IAMAAIAABWg");
	this.shape_25.setTransform(23.2,111);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA7B9Ig9hkIg5BkIgjAAIBKiBIhEh4IAhAAIA2BfIA6hfIAiAAIhNB5IBRCAg");
	this.shape_26.setTransform(50.7,70.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("ADOAAQAABVg9A6Qg7A7hWAAQhVAAg9g7Qg7g6AAhVQAAhTA7g8QA9g6BVAAQBWAAA7A6QA9A8AABTg");
	this.shape_27.setTransform(49.2,73);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAiDizQg8A7ABBUQgBBUA8A6QA9A7BVAAQBWAAA7g7QA9g6AAhUQAAhUg9g7Qg7g7hWAAQhVAAg9A7gADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_28.setTransform(47.8,76.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AiSCPQg7g6AAhVQAAhTA7g8QA9g6BVAAQBWAAA7A6QA9A8AABTQAABVg9A6Qg7A7hWAAQhVAAg9g7g");
	this.shape_29.setTransform(49.2,73);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AA9kZQA3ANArAvQA7BCAABdQAABcg7BBQg7BChUAAQhTAAg7hCQg7hBAAhcQAAhdA7hCQAogtA0gOQAWgGAYgBQACAAACAAQAXAAAWAGIAyhYAAMkfIAMhaAgYiGIg2AAABzANQgeCOieiSABOh+QAlg/AlA/AgikYIg4h6AEGFNQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgVQAVgUAdAAQAdAAAVAUQAVAVAAAdgAhnFFQAAAggYAWQgWAYghAAQggAAgYgYQgXgWAAggQAAggAXgXQAYgXAgAAQAhAAAWAXQAYAXAAAgg");
	this.shape_30.setTransform(49.1,89.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAhxhhQg7BCAABcQAABdA7BCQA7BCBTAAQBUAAA6hCQA8hCAAhdQAAhcg8hCQgqgvg3gNIAyhXIgyBXQgWgFgXAAIgEAAIAMhbIgMBbQgZAAgVAGIg4h5IA4B5Qg0APgoAsgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_31.setTransform(47.8,76.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#993300").s().p("AiOCfQg7hCAAhdQAAhcA7hCQAogtA0gOQAWgGAZgBIADAAQAXAAAWAGQA3ANAqAvQA8BCAABcQAABdg8BCQg6BBhUABQhTgBg7hBgAAmCSQAtAAAPhEIABgCIgBACQgPBEgtAAIAAAAIgBAAQgtgBhMhEIgCgBIAAgBIgDgCIgBgBIABABIADACIAAABIACABQBMBEAtABIABAAIAAAAgACIg/Qglg/gmA/QATgfATAAQASAAATAfgAgohHIg2AAg");
	this.shape_32.setTransform(50.7,82.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CC0000").ss(1,1,1).p("Ag0ASQANgzAhALQALgfAwAbQgUAXgbABQgcAfgegLgAA1gaQgQBohZg8");
	this.shape_33.setTransform(76.8,29.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("ADXqmIkaAAAiGqeQAAAGgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgAAnK8QAAARgNALQgLAMgPAAQgRAAgMgMQgLgLAAgRQAAgQALgMQAMgLARAAQAPAAALALQANAMAAAQgAl5pCIL2AAIAATAIr2AAgAndr9IO7AAIAAX7Iu7AAg");
	this.shape_34.setTransform(47.8,76.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("Ai5h4QAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANArAvQAUAXAOAaQAZAyAAA8QAABdg7BBQg7BChUAAQhTAAg7hCQg7hBAAhdgABegTQgwBghOhcABviGQAYhCApBCAgQh6QhAhIgeBIADBjmQjpgziRChAEGETQAAAdgVAUQgVAVgdAAQgdAAgVgVQgVgUAAgdQAAgdAVgUQAVgUAdAAQAdAAAVAUQAVAUAAAdgAhnELQAAAggYAXQgWAXghAAQggAAgYgXQgXgXAAggQAAggAXgXQAYgWAgAAQAhAAAWAWQAYAXAAAgg");
	this.shape_35.setTransform(49.1,94.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgACZGYQgUAUAAAdQAAAdAUAUQAWAVAdAAQAdAAAVgVQAVgUAAgdQAAgdgVgUQgVgUgdAAQgdAAgWAUgAjhGKQgXAXAAAgQAAAgAXAXQAXAXAhAAQAhAAAWgXQAYgXAAggQAAgggYgXQgWgWghAAQghAAgXAWgAgVicQg0APgoAsQgrAwgQBuQAABdA7BCQA7BCBTAAQBUAAA6hCQA8hCAAhdQAAg9gZgwQgOgagVgXQgqgvg3gNQgWgFgXAAIgEAAQgZAAgVAGgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_36.setTransform(47.8,76.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AiOBrQg7hBAAhcQCRihDpAzQAZAxAAA9QAABcg8BBQg6BChUAAQhTAAg7hCgAAVBjQAfAAAXgsIACgDIABgCIgBACIgCADQgXAsgfAAIAAAAIgBAAQgdAAgkgpIgCgDIgBgBIABABIACADQAkApAdAAIABAAIAAAAgAggg0QhAhIgfBIQAQgkAXAAQAYAAAgAkgACghBQgphBgYBBQAMggAQAAQARAAAUAgg");
	this.shape_37.setTransform(50.7,87.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF33").s().p("AiBguQAogsA0gPQAWgGAYAAIAEAAQAXAAAWAFQA3ANAqAvQAVAXANAZQjogyiRCgQAQhvArgvg");
	this.shape_38.setTransform(49.4,71.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AATArIAAgqIglAAIAAAqIgLAAIAAhVIALAAIAAAjIAlAAIAAgjIALAAIAABVg");
	this.shape_39.setTransform(63,115.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AgUAgQgKgMAAgTQAAgTAKgNQALgNAPABQAOAAAIAEIgEALQgGgFgMAAQgKAAgHAKQgHAJAAAPQAAAPAHAJQAHAJAKAAQAMAAAHgIIAGAJQgKAJgQABQgQgBgJgMg");
	this.shape_40.setTransform(55.4,115.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_41.setTransform(48.4,115.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AAWArIgGgSIgfAAIgGASIgNAAIAihWIADAAIAgBWgAgLARIAYAAIgMglg");
	this.shape_42.setTransform(42.5,115);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AAAArIgTg3IgKA2IgMAAIAQhUIAGAAIATA+IATg+IAFAAIASBUIgLAAIgLg2IgSA3g");
	this.shape_43.setTransform(34.7,115.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGB/Ihej9IAnAAIA/C4IA+i4IAlAAIhbD9g");
	this.shape_44.setTransform(49.6,75.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("ADnAAQAABehEBBQhEBEhfAAQheAAhFhEQgugugPg8QgGgZAAgcQAAgbAGgZQAPg9AugvQBFhCBeAAQBfAABEBCQBEBDAABdg");
	this.shape_45.setTransform(48.4,75.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAicirQgvAvgOA9QgHAZAAAcQAAAbAHAZQAOA8AvAuQBFBEBeAAQBeAABEhEQBEhBAAhdQAAhehEhDQhEhCheAAQheAAhFBCgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_46.setTransform(47.8,76.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CC00").s().p("AijCfQgugugPg8QgGgZAAgcQAAgbAGgZQAPg9AugvQBFhCBeAAQBfAABDBCQBFBDAABdQAABehFBBQhDBEhfAAQheAAhFhEg");
	this.shape_47.setTransform(48.4,75.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AjJkFQAQhvArgwQApgsAzgOQAXgHAYAAQACAAABAAQAYAAAVAFQA3ANArAvQAUAXAOAaQAZAxAAA9QAABdg7BCQg7BChUAAQhSAAg8hCQg7hCAAhdgAgFAtQACAAABAAQACAAAAAAQAEAAADAAQA/AAAxArQAyArAFAvQADAlAAAQQAAAQABALQAPBugmB2IgqiCQgCgJgBgJQgGAIgHAIQguA2hCAAQhBAAgvg1IgtCCQgoh2AQhtQABgMAAgPQAAgQAEgmQAEgvA1grQA1grBCAAQAFAAAFABIACBFQBMAGAlDaABOigQgwBhhOhdABfkTQAZhCAoBCACxlzQjpgziRChAggkHQhAhIgeBIAARDoQAYg3AQA7AgSDkQgNg+gkA+Ag4EqQAxBwA3huAgDByQhVAGgnDr");
	this.shape_48.setTransform(49.1,89.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_49.setTransform(47.8,76.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC99").s().p("Ah/FYQAnjsBVgGQBLAHAlDaIgMAPQguA2hCAAQhBAAgvg0gAgFFXQAYAAAagwIABgDIACgDIgCADIgBADQgaAwgYAAIAAAAIAAAAQgagBgXgzIgBgBIAAAAIAAAAIgBgEIABAEIAAAAIAAAAIABABQAXAzAaABIAAAAIAAAAgAA4DhIAAgDIgBgBIAAAAIAAgCIAAAAQgIgZgJAAIAAAAIgBAAQgIAAgKAVIgBADIAAAAIgBABIAAACIAAgCIABgBIAAAAIABgDQAKgVAIAAIABAAIAAAAQAJAAAIAZIAAAAIAAACIAAAAIABABIAAADgAgSDYQgNg9gkA9QASgfAMAAQAMAAAHAfgAiOhyQg7hBAAhdQCRihDpAzQAZAxAAA9QAABdg7BBQg7BChUAAQhTAAg7hCgAAVh6QAfAAAYguIAAAAIACgDIgCADIAAAAQgYAugfAAIAAAAIgBAAQgdAAgmgrIgBgCIABACQAmArAdAAIABAAIAAAAgAggkSQhAhIgeBIQAPgkAXAAQAYAAAgAkgACgkfQgphBgYBBQAMghAQAAQARAAAUAhg");
	this.shape_50.setTransform(49.1,91);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF33").s().p("AB6FkIgDgRQgljahNgHIgBhFIADAAIADAAIAGAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACAMQAPBtgmB2gAi7ECQACgLAAgQQAAgQADgmQAFguA1gsQA0gqBDgBIAJABIABBFQhTAGgnDsIgtCBQgph1AQhugAiEmjQAogtA0gOQAWgHAYAAIAEAAQAXAAAWAGQA3AMAqAwQAVAWANAaQjogziRChQAQhvArgvg");
	this.shape_51.setTransform(48.1,89.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AimkFQAQhvArgwQApgsAzgOQAWgHAYAAQACAAACAAQAYAAAVAFQA3ANArAvQAUAXAOAaQAZAxAAA9QAABdg7BCQg7BChUAAQhSAAg8hCQg7hCAAhdgAjsgFIA2A/IAphBQgQg6geA6QghgsgQAugAAdAtQACAAABAAQACAAABAAQAEAAADAAQA/AAAxArQAyArAFAvQADAlAAAQQAAAQABALQAPBugmB2IgqiCQgCgJgBgJQgGAIgHAIQguA2hDAAQhAAAgvg1IgtCCQgoh2AQhtQABgMAAgPQAAgQAEgmQAEgvA1grQA1grBBAAQAFAAAFABIACBFQBNAGAlDaACCkTQAZhCAoBCABxigQgwBhhOhdADUlzQjpgziRChAACkHQg/hIgeBIAA0DoQAYg3AQA7AAQDkQgNg+gjA+AgVEqQAwBwA4huAAfByQhUAGgnDr");
	this.shape_52.setTransform(45.6,89.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC0000").s().p("AgvgQQARgtAgAsQAdg6ARA6IgqBAg");
	this.shape_53.setTransform(26.7,90.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_54.setTransform(47.8,76.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AjVkFQAQhvArgwQAogsA0gOQAWgHAZAAQACAAACAAQAWAAAWAFQA3ANAqAvQAVAXANAaQAaAxAAA9QAABdg8BCQg7BChSAAQhUAAg7hCQg7hCAAhdgAkbgFIA2A/IAphBQgRg6gdA6QghgsgQAugAgRAtQABAAACAAQABAAACAAQADAAADAAQA+AAAyArQAyArAEAvQADAlAAAQQAAAQACALQAPBugmB2IgriCQgBgJgCgJQgFAIgHAIQgvA2hBAAQhCAAgug1IgtCCQgph2AQhtQACgMAAgPQAAgQADgmQAFgvA1grQA0grBDAAQAFAAAFABIABBFQBMAGAlDaAC+haIA2BAIAphCQgRg6gdA6QghgrgQAtgABCigQgxBhhOhdABSkTQAZhCApBCACklzQjogziRChAgskHQhAhIgfBIAAEDoQAYg3AQA7AgfDkQgMg+gkA+AhFEqQAyBwA3huAgQByQhUAGgnDr");
	this.shape_55.setTransform(50.4,89.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0000").s().p("AkcAaQARgtAhArQAdg5ARA5IgqBCgAC9g6QAQgtAhArQAeg6ARA6IgqBBg");
	this.shape_56.setTransform(50.4,86.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_57.setTransform(47.8,76.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Ai1kFQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANAqAvQAVAXANAaQAaAxAAA9QAABdg8BCQg7BChTAAQhTAAg7hCQg7hCAAhdgAk8mfIA2BAIAphCQgQg6geA6QghgsgQAugAj7gFIA2A/IAphBQgRg6gdA6QghgsgQAugAAOAtQABAAACAAQABAAACAAQADAAADAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACALQAPBugmB2IgriCQgBgJgCgJQgFAIgHAIQgvA2hCAAQhBAAgug1IgtCCQgph2AQhtQACgMAAgPQAAgQADgmQAFgvA1grQA0grBCAAQAFAAAFABIABBFQBNAGAlDaADehaIA2BAIAphCQgRg6gdA6QghgrgQAtgABiigQgxBhhOhdABykTQAZhCApBCADElzQjogziRChAgMkHQhAhIgfBIAAkDoQAYg3AQA7AAADkQgLg+gkA+AglEqQAxBwA4huAAPByQhTAGgnDr");
	this.shape_58.setTransform(47.1,89.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0000").s().p("Aj7C8QAQgtAhAsQAdg6ARA6IgpBBgADeBoQAQgtAhArQAdg6ARA6IgpBCgAk8jcQAQguAhArQAeg5AQA5IgpBDg");
	this.shape_59.setTransform(47.1,70.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgAlCkbIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_60.setTransform(47.8,76.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AjGkFQAQhvArgwQApgsAzgOQAXgHAYAAQABAAACAAQAYAAAVAFQA3ANArAvQAUAXAOAaQAZAxAAA9QAABdg7BCQg7BChUAAQhSAAg8hCQg7hCAAhdgAlMmfIA2BAIAphCQgRg6gdA6QghgsgQAugAkMgFIA2A/IAphBQgQg6geA6QghgsgQAugADulrIA2BAIAphCQgQg6geA6QghgrgQAtgAh8FjIgtCCQgoh2AQhtQABgMAAgPQAAgQAEgmQAEgvA1grQA1grBCAAQAFAAAFABQACAAAAAAQACAAABAAQAEAAADAAQA/AAAxArQAyArAFAvQADAlAAAQQAAAQABALQAPBugmB2IgqiCQgCgJgBgJQgGAIgHAIQguA2hCAAQhBAAgvg1gADNhaIA2BAIAphCQgQg6geA6QghgrgQAtgABRigQgwBhhOhdABikTQAZhCAoBCAC0lzQjpgziRChAgdkHQhAhIgeBIAAUDoQAYg3AQA7AAAByQBMAGAlDaAgPDkQgNg+gkA+Ag1EqQAxBwA3huAAAByQhVAGgnDrAgCAtIACBF");
	this.shape_61.setTransform(48.8,89.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC0000").s().p("AkMC8QAQgtAhAsQAeg6AQA6IgpBBgADNBoQAQgtAhArQAeg6AQA6IgpBCgADuioQAQguAhAsQAeg6AQA6IgpBCgAlMjcQAQguAhArQAdg5ARA5IgpBDg");
	this.shape_62.setTransform(48.8,70.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF33").s().p("AB6FkIgDgRQgljahNgHIgBhFIADAAIADAAIAGAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACAMQAPBtgmB2gAi7ECQACgLAAgQQAAgQADgmQAFguA1gsQA0gqBDgBIAJABIABBFQhTAGgnDsIgtCBQgph1AQhugAAEAtIAAAAgAiEmjQAogtA0gOQAWgHAYAAIAEAAQAXAAAWAGQA3AMAqAwQAVAWANAaQjogziRChQAQhvArgvg");
	this.shape_63.setTransform(48.1,89.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgAD5jnIA2BAIAohCQgQg6geA6QgQgVgMAAQgMAAgIAXgAlCkbIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_64.setTransform(47.8,76.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("Ai9kFQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANAqAvQAVAXANAaQAaAxAAA9QAABdg8BCQg7BChTAAQhTAAg7hCQg7hCAAhdgAlEmfIA2BAIAphCQgQg6geA6QghgsgQAugAkDgFIA2A/IAphBQgRg6gdA6QghgsgQAugAD3lrIA2BAIAphCQgRg6gdA6QghgrgQAtgAhzFjIgtCCQgph2AQhtQACgMAAgPQAAgQADgmQAFgvA1grQA0grBDAAQAEAAAFABQABAAACAAQABAAACAAQADAAADAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACALQAPBugmB2IgriCQgBgJgCgJQgFAIgHAIQgvA2hBAAQhCAAgug1gADWhaIA2BAIAphCQgRg6gdA6QghgrgQAtgABaigQgxBhhOhdABqkTQAZhCApBCAC8lzQjogziRChAgUkHQhAhIgfBIAAcDoQAYg3AQA7AAHByQBNAGAlDaAgHDkQgMg+gkA+AgtEqQAxBwA4huAlVDeIA2BAIAphCQgQg6geA6QghgsgQAugAAHByQhTAGgnDrAAGAtIABBF");
	this.shape_65.setTransform(47.9,89.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC0000").s().p("AlVEuQAQgtAhArQAeg5AQA5IgpBDgAkDBKQAQgtAhAsQAdg6ARA6IgpBBgADWgJQAQgtAhArQAdg6ARA6IgpBBgAD3kaQAQguAhAsQAdg6ARA6IgpBCgAlElOQAQguAhArQAeg5AQA5IgpBDg");
	this.shape_66.setTransform(47.9,81.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgAlTFiIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgAD5jnIA2BAIAohCQgQg6geA6QgQgVgMAAQgMAAgIAXgAlCkbIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_67.setTransform(47.8,76.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("Ai9kFQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANAqAvQAVAXANAaQAaAxAAA9QAABdg8BCQg7BChTAAQhTAAg7hCQg7hCAAhdgAlEmfIA2BAIAphCQgQg6geA6QghgsgQAugAkDgFIA2A/IAphBQgRg6gdA6QghgsgQAugAD3lrIA2BAIAphCQgRg6gdA6QghgrgQAtgAhzFjIgtCCQgph2AQhtQACgMAAgPQAAgQADgmQAFgvA1grQA0grBDAAQAEAAAFABQABAAACAAQABAAACAAQADAAADAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACALQAPBugmB2IgriCQgBgJgCgJQgFAIgHAIQgvA2hBAAQhCAAgug1gADWhaIA2BAIAphCQgRg6gdA6QghgrgQAtgABqkTQAZhCApBCABaigQgxBhhOhdAgUkHQhAhIgfBIAC8lzQjogziRChADrELIA2BAIAphCQgQg6geA6QghgrgQAtgAgHDkQgMg+gkA+AAHByQBNAGAlDaAAcDoQAYg3AQA7AgtEqQAxBwA4huAlVDeIA2BAIAphCQgQg6geA6QghgsgQAugAAHByQhTAGgnDrAAGAtIABBF");
	this.shape_68.setTransform(47.9,89.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CC0000").s().p("ADrFFQAQgtAhArQAeg6AQA6IgpBCgAlVEYQAQguAhAsQAeg6AQA6IgpBCgAkDA0QAQguAhAsQAdg5ARA5IgpBCgADWggQAQgtAhArQAdg6ARA6IgpBBgAD3kxQAQgtAhArQAdg6ARA6IgpBCgAlEllQAQguAhAsQAeg6AQA6IgpBCg");
	this.shape_69.setTransform(47.9,84);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgADtGPIA2BAIAphCQgQg6geA6QgQgVgMAAQgNAAgIAXgAlTFiIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgAD5jnIA2BAIAohCQgQg6geA6QgQgVgMAAQgMAAgIAXgAlCkbIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_70.setTransform(47.8,76.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("Ai9kFQAQhvArgwQAogsA0gOQAWgHAYAAQACAAACAAQAXAAAWAFQA3ANAqAvQAVAXANAaQAaAxAAA9QAABdg8BCQg7BChTAAQhTAAg7hCQg7hCAAhdgAlEmfIA2BAIAphCQgQg6geA6QghgsgQAugAk1i6IAkArIAbgsQgLgngTAnQgWgdgLAegAkDgFIA2A/IAphBQgRg6gdA6QghgsgQAugAD3jwIAkArIAbgsQgLgngUAnQgWgdgKAegAD3lrIA2BAIAphCQgRg6gdA6QghgrgQAtgAAXAEIAVAYIAQgZQgHgVgLAVQgNgQgGARgAAGAtQABAAACAAQABAAACAAQADAAADAAQA/AAAyArQAyArAEAvQADAlAAAQQAAAQACALQAPBugmB2IgriCQgBgJgCgJQgFAIgHAIQgvA2hBAAQhCAAgug1IgtCCQgph2AQhtQACgMAAgPQAAgQADgmQAFgvA1grQA0grBDAAQAEAAAFABIABBFQBNAGAlDaADWhaIA2BAIAphCQgRg6gdA6QghgrgQAtgAD2A0IAkArIAbgsQgLgngUAnQgWgdgKAegABqkTQAZhCApBCABaigQgxBhhOhdAgUkHQhAhIgfBIAC8lzQjogziRChADrELIA2BAIAphCQgQg6geA6QghgrgQAtgAgHDkQgMg+gkA+AAcDoQAYg3AQA7ADrGaIAkArIAbgsQgLgngTAnQgWgdgLAegAgtEqQAxBwA4huAlVDeIA2BAIAphCQgQg6geA6QghgsgQAugAk1GHIAkAqIAbgsQgLgmgTAmQgWgdgLAfgAAHByQhTAGgnDr");
	this.shape_71.setTransform(47.9,89.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC0000").s().p("ADrGYQALgfAWAdQATgnALAnIgbAsgAk1GEQALgfAWAeQATgnALAnIgbArgADrEIQAQgtAhAsQAeg7AQA7IgpBBgAlVDbQAQgtAhArQAeg6AQA6IgpBCgAD2AxQAKgeAWAdQAUgmALAmIgbAsgAkDgIQAQgtAhArQAdg6ARA6IgpBBgAAXABQAGgQANAPQALgVAHAVIgQAZgADWhdQAQgtAhArQAdg5ARA5IgpBCgAk1i8QALgfAWAdQATgnALAnIgbAsgAD3jyQAKgfAWAdQAUgnALAnIgbAsgAD3ltQAQguAhAsQAdg7ARA7IgpBBgAlEmiQAQguAhAsQAeg6AQA6IgpBCg");
	this.shape_72.setTransform(47.9,90.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AndL+IAA37IO6AAIAAX7gAgoK8QAAARAMALQALAMARAAQAPAAALgMQAMgLAAgRQAAgQgMgMQgLgLgPAAQgRAAgLALQgMAMAAAQIAAAAgAl5J+IL1AAIAAzAIr1AAIL1AAIAATAIr1AAIAAzAIAATAgAB+HoIArCCQAlh2gPhuQgBgLAAgQQAAgQgDglQgFgvgxgrQgygrg/AAIgGAAIgEAAIgCAAIgJgBQhDAAg0ArQg1ArgFAvQgEAmABAQQgBAPgBAMQgQBtAoB2IAtiCQAvA0BCAAQBBAAAug1IANgQIADASgADtIeIAkArIAbgsQgLgngUAnQgKgOgIAAQgJAAgFAPgAkzILIAkAqIAbgsQgLgmgUAmQgKgOgIAAQgJAAgFAQgADtGPIA2BAIAphCQgQg6geA6QgQgVgMAAQgNAAgIAXgAlTFiIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgAD4C4IAkArIAbgsQgMgngTAnQgLgOgIAAQgIAAgFAPgAkCB+IA2BAIAqhCQgRg6gdA6QgRgWgMAAQgMAAgJAYgAAZCIIAUAYIARgZQgHgWgLAWQgGgIgFAAQgFAAgDAJgADXApIA2BAIAqhCQgRg5geA5QgQgVgMAAQgMAAgJAXgAgklaQg0AOgoAsQgsAwgQBvQAABdA8BBQA7BCBTAAQBTAAA7hCQA7hBAAhdQABg9gagxQgOgagUgXQgqgvg3gNQgWgFgXAAIgFAAQgXAAgWAHgAkzg2IAkArIAbgsQgLgngUAnQgKgOgIAAQgJAAgFAPgAD5hsIAkArIAbgsQgMgngTAnQgLgOgIAAQgIAAgFAPgAD5jnIA2BAIAohCQgQg6geA6QgQgVgMAAQgMAAgIAXgAlCkbIA2BAIAphCQgRg6gdA6QgQgWgMAAQgNAAgIAYgADtnDQBaA8AQhpQgvgbgNAfQgGgCgFAAQgYAAgLArgAifqoQgDAEAAAGQAAAGADAEQAFAFAGAAQAGAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgGAAQgGAAgFAEgADXqmIkZAAgAgcLYQgMgLAAgRQAAgQAMgMQALgLARAAQAPAAALALQAMAMAAAQQAAARgMALQgLAMgPAAQgRAAgLgMgAAmK8IAAAAg");
	this.shape_73.setTransform(47.8,76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_12},{t:this.shape_11}]},12).to({state:[{t:this.shape_10},{t:this.shape_29},{t:this.shape_28},{t:this.shape_8},{t:this.shape_7},{t:this.shape_27},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},16).to({state:[{t:this.shape_10},{t:this.shape_32},{t:this.shape_15},{t:this.shape_16},{t:this.shape_31},{t:this.shape_8},{t:this.shape_7},{t:this.shape_30},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_12},{t:this.shape_11}]},17).to({state:[{t:this.shape_10},{t:this.shape_29},{t:this.shape_28},{t:this.shape_34},{t:this.shape_33},{t:this.shape_27},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},17).to({state:[{t:this.shape_10},{t:this.shape_15},{t:this.shape_16},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_34},{t:this.shape_33},{t:this.shape_35},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_12},{t:this.shape_11}]},16).to({state:[{t:this.shape_10},{t:this.shape_47},{t:this.shape_46},{t:this.shape_33},{t:this.shape_34},{t:this.shape_45},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},16).to({state:[{t:this.shape_10},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_34},{t:this.shape_33},{t:this.shape_48},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_54},{t:this.shape_51},{t:this.shape_10},{t:this.shape_50},{t:this.shape_53},{t:this.shape_34},{t:this.shape_33},{t:this.shape_52},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_57},{t:this.shape_51},{t:this.shape_10},{t:this.shape_50},{t:this.shape_56},{t:this.shape_34},{t:this.shape_33},{t:this.shape_55},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_60},{t:this.shape_51},{t:this.shape_10},{t:this.shape_50},{t:this.shape_59},{t:this.shape_34},{t:this.shape_33},{t:this.shape_58},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_10},{t:this.shape_62},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_61},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_67},{t:this.shape_63},{t:this.shape_10},{t:this.shape_66},{t:this.shape_50},{t:this.shape_34},{t:this.shape_33},{t:this.shape_65},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_70},{t:this.shape_63},{t:this.shape_10},{t:this.shape_69},{t:this.shape_50},{t:this.shape_8},{t:this.shape_7},{t:this.shape_68},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_73},{t:this.shape_51},{t:this.shape_10},{t:this.shape_72},{t:this.shape_50},{t:this.shape_8},{t:this.shape_7},{t:this.shape_71},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,97.5,155.3);


(lib.LOVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDDeIAAm7IEHAAIAAA3IjLAAIAAB7ICSAAIAAAyIiSAAIAACgIDIAAIAAA3g");
	this.shape.setTransform(317.2,156.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMDhIilnBIBDAAIBxFGIBulGIBBAAIigHBg");
	this.shape_1.setTransform(281.2,156.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiICkQgwhBAAhmQAAhgAxhBQAwhBBSAAQBbAAAyA9QAxA7AABqQAABtgyA+QgxA9hbAAQhUAAgvhBgAhbiAQgdAuAABPQAABMAeAzQAeAzA3AAQA9AAAhgvQAggvAAhUQAAirh+AAQg4AAgeAug");
	this.shape_2.setTransform(242,156.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBDeIAAm7IA8AAIAAGEIDIAAIAAA3g");
	this.shape_3.setTransform(207.4,156.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdDeIAAjHIiPj0IA/AAIBtDCIBvjCIA+AAIiOD0IAADHg");
	this.shape_4.setTransform(312.4,82.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABzDhIgfheIikAAIghBeIhEAAIC1nBIAPAAICnHBgAhABXICDAAIg/jDg");
	this.shape_5.setTransform(276.5,81.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiBDeIAAm7IA8AAIAAGEIDIAAIAAA3g");
	this.shape_6.setTransform(244.4,82.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiJDfIAAm6IBTgDQDAAAAACBQAACVipAAIgtgDIAACqgAhMilIAACkIAoACQBvAAABhYQgBhRh2AAQgNAAgUADg");
	this.shape_7.setTransform(210.6,82.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("A4AniQAAlZD0j0QD2j2FXAAQFZAADzD2QBLBMA0BUQAshAA8g9QD0j0FZAAQFZAAD0D0QDzD0AAFWQAAEZicDTI1tT8I05z2Qg/hLgphRQgUgmgPgrQg0iJAAicg");
	this.shape_8.setTransform(260.3,131.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("A1AAwQhAhLgphRQgUglgPgsQg0iJAAicQAAlZD0jzQD3j3FWAAQFYAAD0D3QBLBLA0BUQArhAA9g9QD0jzFZAAQFZAAD0DzQDzD0AAFWQAAEZicDTI1tT8g");
	this.shape_9.setTransform(260.3,131.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai2EzIAAplIFtAAIAABMIkaAAIAACqIDKAAIAABGIjKAAIAADdIEVAAIAABMg");
	this.shape_10.setTransform(338.7,165.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRE3IjlptIBdAAICeHDICYnDIBaAAIjfJtg");
	this.shape_11.setTransform(288.9,166);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai9DjQhChbAAiMQAAiFBDhaQBDhaBxAAQCAABBDBSQBEBSABCUQAACWhFBWQhEBWh/AAQhzAAhChbgAh+ixQgoA/AABuQgBBoAqBHQAqBHBLAAQBWAAAthBQAshAABh1QgBjtivAAQhNAAgpBAg");
	this.shape_12.setTransform(234.8,165.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ai0EzIAAplIBUAAIAAIZIEUAAIAABMg");
	this.shape_13.setTransform(186.8,165.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoEzIAAkTIjGlSIBWAAICYEMICZkMIBWAAIjFFSIAAETg");
	this.shape_14.setTransform(332.1,63.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACfE3IgriCIjjAAIgtCCIheAAID5ptIAVAAIDnJtgAhZB4IC1AAIhXkNg");
	this.shape_15.setTransform(282.4,62.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ai0EzIAAplIBUAAIAAIZIEVAAIAABMg");
	this.shape_16.setTransform(238.1,63.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ai+E1IAAplIBzgEQEKAAAACzQAADOjsAAQgNAAgxgEIAADsgAhrjkIAADiIA4ADQCcAAAAh5QAAhximAAQgRAAgdAFg");
	this.shape_17.setTransform(191.3,63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("EghNgKbQAAndFRlRQFVlVHZAAQHeAAFRFVQBoBoBIB0QA8hYBUhVQFRlQHdAAQHeAAFRFQQFQFSAAHZQAAGGjYEjI+BblI857cQhYhog5hxQgcg0gUg8QhIi9AAjYg");
	this.shape_18.setTransform(259.9,131.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF3366").s().p("A9EBDQhYhog5hxQgcg0gUg8QhIi9AAjYQAAndFRlRQFVlVHZAAQHeAAFRFVQBoBoBIB0QA8hYBUhVQFRlQHdAAQHeAAFRFQQFQFSAAHZQAAGGjYEjI+Bblg");
	this.shape_19.setTransform(259.9,131.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("Eha7gckQAA0aObubQOmulUPAAQUbAAOaOlQEeEeDGE+QCkjyDmjoQOcuZUaAAQUbAAOaOZQOZOeAAUOQAAQrpQMfMhSLBLgMhPHhLIQjxkeibk1QhMiOg3ikQjGoGAApQg");
	this.shape_20.setTransform(260,131.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("EhPmAC3Qjxkdibk2QhMiOg3ikQjGoGAApQQAA0aObubQOmulUPAAQUbAAOaOlQEeEeDGE+QCkjyDmjnQOcuaUaAAQUbAAOaOaQOZOdAAUOQAAQrpQMgMhSLBLfg");
	this.shape_21.setTransform(260,131.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,522.4,265.6);


(lib.kissinthebar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgEAGIANgLIgRAA");
	this.shape.setTransform(278.5,89.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AgNADIAAgOAgGAEIALgKAgDAMIARAA");
	this.shape_1.setTransform(282.6,78.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiYgYQCqCSCHil");
	this.shape_2.setTransform(362.7,137.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AHN0hIgHhNAH00WIAwg1AGY0XIguhGAFfrHIAMCUIhqAaIBeCIIg5AIIgvE/QDeAEDfAVAEBoZIhqAcIAQGtIBQAGAIipIIgVCcIBPgMIBYGHAIipIICnAqIArHxIAAAEIg1gHIgLgBAIVrrIANCjAFfmRICugbAEFz6IAihcADZ0DIgIhcADB0AIg0hBEArXAF8QACgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVC/szCJQgVADgUADQh0ATh5AQQsoBsw7AAQzeAAtyiPQmVhBjbhOEArXAF8QAEAMACANAL0gtQHqAaGhA3QB5AQB0ATQAUADAVAEQDYAkChAoQGXBlAyB9AsN2yQAAgQACgPQAFgeAPgYQAWgjAfAAQAeAAAXAiQAAABAAAAQADAGADAGQAJATAFAWQAMAUAFAcIgRAMQgCANgDAMIAQAAIgVAMIAVAAAqS3mQgUgIgIAaAqD1xQgEAKgGAKQgWAjgfAAQgfAAgWgjQgWgjAAgyICAhWAp+19QgDAGgCAGAmz3TQAGgDAEAAQAEgBADACQADACAAAGQAAAFgDAIAlb1RQgSAggZAAQgZAAgSgjQgGgLgEgNQgFgRgCgUQghAIAjhAQADgYAJgUAlb1RIAIAiIADgeIAFg0QADgPAAgQQAAgBAAAAQACg4gUgiQgBgCgBgBQgzg+glBHIA1ANQAeBGAGBRgAi027QAABfhuBDQhIAshcAPQgwAIg2AAQg2AAgwgIQhcgPhIgsQhuhDAAhfQAAhfBuhDQBuhDCcAAQCcAABuBDQBuBDAABfgEggSgQzQAnkKBnhzQBhhrB7ghQA2gQA7gBQAFAAAEAAQA5AAAzANQCEAfBmBxQAxA3AgA/QA+B1AACSQAADfiPCdQhTBdhoAmQhIAbhTAAQhcAAhQghIAACHIgVAIIliCOIgIEOIgBA2QhwAPhqARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAgWAKgSQAGgIAHgIQAXgXAgAAQAhAAAXAXQAHAIAFAIQALASAAAWgAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgA2TmwIAUADIFdA9IAUBkIAiCsIAHAmA4nlYQBfgbA1g9IAAiEA1LxWQA8idBhCdA59w4QiZishJCsA7ao6QhdgohNhVQiOidAAjfA9NAGQABAAAAAAQEVgdG2gYQBUgEBbgFQALAAAjgCIABAAIAAABIgBgBEghaAAnQAIgCAIAAID9gfEghZgAPIEMAVAskg9IBhgDQAFAAAEAAIAJgBQAEAAADAAQDdgFDpAAQHuAAG1AWArDhAIASgBAtmg7QAGgBAGAAIAogBIgEAAIASAAAtmg7QADAAAEAAQAMgBANAAQAFAAAFAAIAGgBAujg6QAYAAAlgBAvshgIhNAZIhIAYAsyg9QAHAAAHAAA7amzQBKBIBpATA1/mtIheCwIhKhbA7vmrIB6CuIBOhbAyH06Qovh7lcGCA1ztBQh0Dni9jdEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_3.setTransform(323.8,228);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AjdGFIBJDQQh9iRhvjYQhvjXAsjUQAtjWCohzQBLgoBOgZQAPgFAQgFIASDZQEIBSBODYQAcBOgCDpQgHA2gOA7AArhkQANgPAOgJQAXgOAeADQAQADAXAIQALAFAMAGAjdGFQBtBMB8ACQAJAAAJAAQALgBAOgBQBLgHBAgbQACgCABAAQA/geAzg0IgmDcQBnjAAUg1QACgGABgFQApiNAFgcQAdh9gOjCQgGhCgUg3Qg0iWidhUQgXgNgXgKQhqguh1AFAi9hGQANgPAPgJQAIgFAJgCQALgEANAAQAFAAAGABQAPADASAGQAEABACABQAMAEALAHAgUAJQg6BNBfAcAgkl6QmGDaDNIl");
	this.shape_4.setTransform(357.6,110.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999966").s().p("AjeCrIAvk+IA6gIICsgbIBQgNIBYGHQjfgWjegDg");
	this.shape_5.setTransform(370.8,203.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArFNUIkMgXIAIkOIFhiOIAWgIQBKBJBpASQBegbA1g8IAUACIFdA+IATBjQhfgShAAsQAIBFAKA3IAAACIABABQAEAaBeATIhJAYQm0AXkVAfIgBAAgAlWJQIBeixIheCxIhJhcgAntJQIBOhcIhOBcIh7ivIB7CvgACDkCQgMgMAAgRQAAgQAMgMQAMgNARAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgRAAgMgNgADrkxQgXgXAAghQAAgWALgSQAFgIAHgHQAXgYAhAAQAgAAAXAYQAIAHAFAIQAKASAAAWQAAAhgXAXQgXAXgggBQghABgXgXgAH0mRQhcgPhIgrQhuhDAAhfQAAhfBuhDQBuhECcAAQCcAABuBEQBuBDAABfQAABfhuBDQhIArhcAPQgwAJg2gBQg2ABgwgJgAMzniIADgeIgDAeIgIgiQADAHAIgDQAIgCgDgyQADgPAAgQIAAgBIAAgGQAAgxgSgjQASAfABAvIgBAMIABgMQgBgvgSgfIgBgDQgVgfgVAAQgaAAgSAiIgDAGQgJAUgDAYQgiBAAggIQACAUAFARQAEANAGALQASAkAagBQAYAAASggIAIAigAGPq6QgOAYgFAeQgDAPAAARQAAAxAWAjQAWAjAfAAQAfAAAWgjQAGgKAFgKIAEgLIAQAAIgUALIAUAAIgUAAIAUgLIgQAAQAEgNACgNIARgMQgFgbgNgVQgEgWgJgTIgHgMIAAgBQgWghgfgBQgfABgWAigAK9oTIAOgMIgSAAIASAAgAMsquIAAAAg");
	this.shape_6.setTransform(207.9,143.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("EgtAAM9IAA2NQDbBOGWBBQNxCPTfAAQQ6AAMohsQB6gQBzgTIApgHQM0iIAUi/IAAZMgEAs7gM7IAGgBIAAAaQgCgNgEgMg");
	this.shape_7.setTransform(313.8,348.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#773300").s().p("EghPAFXQmWhBjahOQj+hagEhrIAAgFQAFiQHLhyQCvgsDzgnQBqgRBvgPIARgCID9geIABAAQEVgfG2gXICugJIAvgDIAAABIBFgCIAZgBIAKAAIAFAAIASgBIBigDIAJAAIAIAAIAIgBQDdgFDoAAQHuAAG1AWIA1AHIAAgEQHqAbGiA3QB5AQBzATIApAHQDZAkCgAoQGXBlAyB9QAEANACANIABAIIgBAJQgUC/s0CJIgpAGQhzATh5AQQsoBsw8AAQzdAAtyiPgAqCnaIANgBIAogBIgFABIgFAAIgKAAIgZABIgIAAg");
	this.shape_8.setTransform(301,269.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF66CC").s().p("AAlDSQgXgVgDghQgDgfAUgaQAVgXAhgDQAggCAXATQAZAVADAgQADAhgVAYQgUAZggACIgIABQgcAAgWgSgAF8C1QgYgVgCghQgDgfATgaQAWgXAhgDQAfgCAYATQAZAVADAgQADAggVAZQgVAZggACIgIABQgbAAgWgSgAnzi7QgHgGgBgKQgBgJAGgHQAGgHAJgBQAKAAAHAFQAHAGABAKQAAAJgGAHQgFAHgKABIgBAAQgJAAgGgFg");
	this.shape_9.setTransform(332.3,105.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("A2lLsIEMAWIj9AfIgQACgAVyLLIgKgBIhYmHIhPAMIAUicICoAqIAqHxIAAAEgAmFK0IBNgZIAHAmIATACIivAJgAjwLBIABAAIAAABgANbKrIgQmtIBqgcIBeCIIg5AIIgvE/gAwmFIIAAiHQBQAhBcAAQBTAABIgaIAACDQg1A9hfAbQhpgThKhIgAQTFqgAO1DiIBpgaIgMiUIASAAIAZgCQBLgGBAgcQhAAchLAGIgZACIgSAAQh9gChthKQjNonGGjZQEJBRBODYQAcBOgCDqQgHA2gOA8IAAADQgzA0g/AcIgDACIANCjIgUCcIiuAbgAQ5hkQBPAABFhTIACgBIACgDIABgBIgBABIgCADIgCABQhFBThPAAIAAAAIAAAAQhIAAhOhDIgDgCIADACQBOBDBIAAIAAAAIAAAAgANamBQggADgWAXQgUAaADAfQADAhAYAVQAZAUAggDQAggCAVgZQAUgYgDghQgDgggYgVQgVgRgbAAIgIAAgASymeQghADgWAXQgUAaADAfQADAhAYAVQAZAUAggDQAggCAUgZQAVgZgDggQgDgggZgVQgVgRgaAAIgHAAgAQXksQg8gRAAglQAAgWAWgcQgWAcAAAWQAAAlA8ARgANkn8QgPAJgNAPQANgPAPgJQAIgFAJgDQALgDANAAIALABQAPACASAGIAGADQAMADALAHQgLgHgMgDIgGgDIAihcIgiBcQgSgGgPgCIgLgBIgIhcIAIBcQgNAAgLADIg0hBIA0BBQgJADgIAFgAQxoDQANgPAOgJIACgBIABgBIACAAQAQgJAUAAIAAAAIAAAAIAJAAIABABIAAAAIACAAQAQACAXAJIAXALIgXgLQgXgJgQgCIgCAAIAAAAIgBgBIgJAAIAAAAIAAAAQgUAAgQAJIgCAAIgBABIgCABIguhGIAuBGQgOAJgNAPgASooaIAwg1gASBolIgHhNgAt6DiQhcAAhQghQhdgohNhVQiOicAAjfQFcmCIvB7QA+B1AACSQAADfiPCcQhTBdhoAnQhIAahTAAIAAAAgAtIAwQBMAAA6hvIABgCIABAAIAAgCIAAAAIABgCIgBACIAAAAIAAACIgBAAIgBACQg6BvhMAAIAAAAIgBAAQhLAAhchrQBcBrBLAAIABAAIAAAAgAvJk8QiZishJCsQAkhWA5AAQA4AABNBWgAn6laQhhidg8CdQAehOAnAAQAnAAAxBOgArfDIgAN1oEgAONoHgARMobgAECpYQgGgLgEgNQgFgRgCgUQghAIAihAQAEgYAJgUIA0ANQAfBGAGBRQgSAggZAAQgZAAgSgjgAEhquQgJABgHAHQgGAHABAJQABAKAHAGQAHAGAKgBQAJgBAGgHQAGgHgBgJQgBgKgHgGQgGgFgJAAIgBAAgAERrEQADgIAAgFQAAgGgDgCQgDgCgEABIgKADIAKgDQAEgBADACQADACAAAGQAAAFgDAIgAEmrRIgSAAgAERrZIAMgLgAEKraIAAgPgAhDphQgWgjAAgyIB+hWIABABIAGAMQAJATAEAWQANAUAFAcIgRAMQgCANgEAMIgEAMQgEAKgGAKQgWAjgeAAQgfAAgWgjgAAFrYIABgEQAGgQAMAAIAAAAIAAAAIAHABIABAAIAAABIABAAIgBAAIAAgBIgBAAIgHgBIAAAAIAAAAQgMAAgGAQIgBAEgAECr/QASgjAZAAQAWAAAUAgQgzg+glBHIADgGg");
	this.shape_10.setTransform(254.6,151.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgFABQgyh9mXhlQihgojYglIgqgGQhzgTh5gQQmhg3nrgaIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAeh8gPjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGQDeAEDfAVIAKABQm1gWnsAAQjqAAjdAFIgHAAIgRABIARgBIgIABIgJAAIhiADIgOAAIAOAAIgSABIAEgBIgnABIgNABIg9ABIA9gBIAHAAIhEACIAAgBIAAAAIgvACIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAiDQBognBThdQCPidAAjfQAAiSg+h1Qgfg/gyg3QhmhxiEgfQgzgNg5AAIgJAAQg6ABg2AQQh8AhhhBrQhnBzgmEKQgBDfCOCdQBNBVBdAoIAACHIgVAIIlhCOIgIEOIgCA2QhvAPhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgHAIgGAIQgKASAAAWQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAgWgLgSQgEgIgIgIQgXgXggAAQghAAgXAXgAs25dQhuBDAABfQAABfBuBDQBIAsBcAPQAwAIA2AAQA2AAAwgIQBcgPBIgsQBuhDAAhfQAAhfhuhDQhuhDicAAQicAAhuBDgAskg9g");
	this.shape_11.setTransform(323.8,228);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF33").s().p("AJJDsQhvjXAsjUQAtjWCohzQBLgoBOgZIAfgKIAKgBQB2gFBqAuQAXAKAXANQCdBUA0CWQAUA3AGBCQAODCgdB9QgFAcgpCNIgDALQgUA1hnDAIAmjcIAAgDQAOg7AHg2QACjpgchOQhOjYkJhSIgSjZIASDZQmGDaDNIlIBJDQQh9iRhvjYgA0MkVQBhhrB7giQA2gPA7gBIAJAAQA5AAAzANQCEAfBmBxQAxA3AgA+Qovh6lcGBQAnkJBnhzgAEci3QgGhQgfhHIg0gMQAlhHAzA+IACACQASAjAAAxIAAAGIAAABQgBARgCAOIgFA1IAFg1QADAzgIACIgEAAQgFAAgCgFgAiTk3QAFgeAPgXQAWgjAfAAQAeAAAWAiIh/BWQAAgRACgPg");
	this.shape_12.setTransform(260.6,110.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.5,1,1).p("AgDAMIARAAAgGAEIALgKAgNADIAAgO");
	this.shape_13.setTransform(282,76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AHN0hIgHhNAH00WIAwg1AGY0XIguhGAFfrHIAMCUIhqAaIBeCIIg5AIIgvE/QDeAEDfAVAEBoZIhqAcIAQGtIBQAGAIipIIgVCcIBPgMIBYGHAIipIICnAqIArHxIAAAEIg1gHIgLgBAIVrrIANCjAFfmRICugbAEFz6IAihcADZ0DIgIhcADB0AIg0hBEArXAF8QACgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVC/szCJQgVADgUADQh0ATh5AQQsoBsw7AAQzeAAtyiPQmVhBjbhOEArXAF8QAEAMACANAL0gtQHqAaGhA3QB5AQB0ATQAUADAVAEQDYAkChAoQGXBlAyB9Ar43GQAAgQACgPQAFgeAPgYQARgbAWgGQAHgCAHAAQAeAAAWAiQAAABABAAQAEAGACAGQAJATAEAWQANAUAFAcIgRAMQgBANgFAMQgCAGgCAGQgEAKgGAKQgWAjgfAAQgHAAgHgBQgWgHgRgbQgWgjAAgyIB/hWAp936QgFgCgDAAQgNgBgHAVAm53nQAGgDAEAAQAEgBADACQADACAAAGQAAAFgCAIAlh1lQgSAggZAAQgZAAgSgjQgGgLgEgNQgFgRgCgUQggAIAhhAQAEgYAJgUApq2RIARAAIgVAMIAVAAAlh1lIAIAiIAIhSQACgPABgQQAAgBAAAAQACg4gUgiQgBgCAAgBQg0g+glBHIA0ANQAfBGAGBRgAi027QAABfhuBDQhIAshcAPQgwAIg2AAQg2AAgwgIQhcgPhIgsQhuhDAAhfQAAhfBuhDQBuhDCcAAQCcAABuBDQBuBDAABfgEggSgQzQAnkKBnhzQBhhrB7ghQA2gQA7gBQAFAAAEAAQA5AAAzANQCEAfBmBxQAxA3AgA/QA+B1AACSQAADfiPCdQhTBdhoAmQhIAbhTAAQhcAAhQghIAACHIgVAIIliCOIgIEOIgBA2QhwAPhqARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAgWAKgSQAGgIAHgIQAXgXAgAAQAhAAAXAXQAHAIAFAIQALASAAAWgAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgA2TmwIAUADIFdA9IAUBkIAiCsIAHAmA4nlYQBfgbA1g9IAAiEA1LxWQA8idBhCdA59w4QiZishJCsA7ao6QhdgohNhVQiOidAAjfA9NAGQABAAAAAAQEVgdG2gYQBUgEBbgFQALAAAjgCIABAAIAAABIgBgBEghaAAnQAIgCAIAAID9gfEghZgAPIEMAVAskg9IBhgDQAFAAAEAAIAJgBQAEAAADAAQDdgFDpAAQHuAAG1AWArDhAIASgBAtmg7QAGgBAGAAIAogBIgEAAIASAAAtmg7QADAAAEAAQAMgBANAAQAFAAAFAAIAGgBAujg6QAYAAAlgBAvshgIhNAZIhIAYAsyg9QAHAAAHAAA7amzQBKBIBpATA1/mtIheCwIhKhbA7vmrIB6CuIBOhbAyH06Qovh7lcGCA1ztBQh0Dni9jdEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_14.setTransform(323.8,228);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ap4MLIkMgWIAIkOIFhiOIAWgIQBKBIBpATQBegbA1g9IAUADIFdA9IATBkQhfgThBAtQAIBFAKA2IAAADIABABQAEAaBfASIhJAYQm0AYkVAeIgBAAgAkJIHIBeiwIheCwIhJhbgAmgIHIBOhbIhOBbIh7iuIB7CugADQlKQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgRAAgMgMgAE4l6QgXgXAAggQAAgWALgSQAFgIAHgIQAXgXAhAAQAgAAAXAXQAIAIAFAIQAKASAAAWQAAAggXAXQgXAXggAAQghAAgXgXgANypgIABgDQALgUAEgZIgIBSgAJqqMIAQAAIgUAMIAEgMgAOFq2QAAgxgSgjQAVAigDA4IAAgGg");
	this.shape_15.setTransform(200.2,150.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF66CC").s().p("AAoDcQgXgVgDghQgDgfAUgaQAVgXAhgDQAggCAXATQAZAVADAgQADAhgVAYQgUAZggACIgIABQgcAAgWgSgAF/C/QgYgVgCghQgDgfATgaQAWgXAhgDQAfgCAYATQAZAVADAgQADAggVAZQgVAZggACIgIABQgbAAgWgSgAn2jFQgHgGgBgKQgBgJAGgHQAGgHAJgBQAKAAAHAFQAHAGABAKQAAAJgGAHQgFAHgKABIgBAAQgJAAgGgFg");
	this.shape_16.setTransform(332,104.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("A2lL2IEMAWIj9AfIgQACgAVyLVIgKgBIhYmHIhPAMIAUicICoAqIAqHxIAAAEgAmFK+IBNgZIAHAmIATACIivAJgAjwLLIABAAIAAABgANbK1IgQmtIBqgcIBeCIIg5AIIgvE/gAwmFSIAAiHQBQAhBcAAQBTAABIgaIAACDQg1A9hfAbQhpgThKhIgAQTF0gAO1DsIBpgaIgMiUIASAAIAZgCQBLgGBAgcQhAAchLAGIgZACIgSAAQh9gChthKQjNonGGjZQEJBRBODYQAcBOgCDqQgHA2gOA8IAAADQgzA0g/AcIgDACIANCjIgUCcIiuAbgAQ5haQBPAABFhTIACgBIACgDIABgBIgBABIgCADIgCABQhFBThPAAIAAAAIAAAAQhIAAhOhDIgDgCIADACQBOBDBIAAIAAAAIAAAAgANal3QggADgWAXQgUAaADAfQADAhAYAVQAZAUAggDQAggCAVgZQAUgYgDghQgDgggYgVQgVgRgbAAIgIAAgASymUQghADgWAXQgUAaADAfQADAhAYAVQAZAUAggDQAggCAUgZQAVgZgDggQgDgggZgVQgVgRgaAAIgHAAgAQXkiQg8gRAAglQAAgWAWgcQgWAcAAAWQAAAlA8ARgANknyQgPAJgNAPQANgPAPgJQAIgFAJgDQALgDANAAIALABQAPACASAGIAGADQAMADALAHQgLgHgMgDIgGgDIAihcIgiBcQgSgGgPgCIgLgBIgIhcIAIBcQgNAAgLADIg0hBIA0BBQgJADgIAFgAQxn5QANgPAOgJIACgBIABgBIACAAQAQgJAUAAIAAAAIAAAAIAJAAIABABIAAAAIACAAQAQACAXAJIAXALIgXgLQgXgJgQgCIgCAAIAAAAIgBgBIgJAAIAAAAIAAAAQgUAAgQAJIgCAAIgBABIgCABIguhGIAuBGQgOAJgNAPgASooQIAwg1gASBobIgHhNgAt6DsQhcAAhQghQhdgohNhVQiOicAAjfQFcmCIvB7QA+B1AACSQAADfiPCcQhTBdhoAnQhIAahTAAIAAAAgAtIA6QBMAAA6hvIABgCIABAAIAAgCIAAAAIABgCIgBACIAAAAIAAACIgBAAIgBACQg6BvhMAAIAAAAIgBAAQhLAAhchrQBcBrBLAAIABAAIAAAAgAvJkyQiZishJCsQAkhWA5AAQA4AABNBWgAn6lQQhhidg8CdQAehOAnAAQAnAAAxBOgArfDSgAN1n6gAONn9gARMoRgAD8piQgGgLgEgNQgFgRgCgUQghAIAihAQAEgYAJgUIA0ANQAfBGAGBRQgSAggZAAQgZAAgSgjgAEbq4QgJABgHAHQgGAHABAJQABAKAHAGQAHAGAKgBQAJgBAGgHQAGgHgBgJQgBgKgHgGQgGgFgJAAIgBAAgAELrOQADgIAAgFQAAgGgDgCIAMgLIgMALQgDgCgEABIAAgPIAAAPIgKADIAKgDQAEgBADACQADACAAAGQAAAFgDAIgAEgrbIgSAAgAgHpJQgWgHgRgbQgWgjAAgyIB+hWIABABIAGAMQAJATAEAWQANAUAFAcIgRAMQgCANgEAMIgEAMQgEAKgGAKQgWAjgfAAQgGAAgHgBgAAariQAGgUAMAAIAAAAIABAAIABAAIAIACIgIgCIgBAAIgBAAIAAAAQgMAAgGAUgAD8sJQASgjAZAAQAWAAAUAgQgzg+glBHIADgGg");
	this.shape_17.setTransform(254.6,150.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgFABQgyh9mXhlQihgojYglIgqgGQhzgTh5gQQmhg3nrgaIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAeh8gPjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGIAvk/IA5gIICugbIBPgMIBYGHIAKABQm1gWnsAAQjqAAjdAFIgHAAIgRABIARgBIgIABIgJAAIhiADIgOAAIAOAAIgSABIAEgBIgnABIgNABIg9ABIA9gBIAHAAIhEACIAAgBIAAAAIgvACIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAiDQBognBThdQCPidAAjfQAAiSg+h1Qgfg/gyg3QhmhxiEgfQgzgNg5AAIgJAAQg6ABg2AQQh8AhhhBrQhnBzgmEKQgBDfCOCdQBNBVBdAoIAACHIgVAIIlhCOIgIEOIgCA2QhvAPhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAK0gxQjfgVjegEQDeAEDfAVgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgHAIgGAIQgKASAAAWQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAgWgLgSQgEgIgIgIQgXgXggAAQghAAgXAXgAs25dQhuBDAABfQAABfBuBDQBIAsBcAPQAwAIA2AAQA2AAAwgIQBcgPBIgsQBuhDAAhfQAAhfhuhDQhuhDicAAQicAAhuBDgAskg9g");
	this.shape_18.setTransform(323.8,228);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF33").s().p("AJJDsQhvjXAsjUQAtjWCohzQBLgoBOgZIAfgKIAKgBQB2gFBqAuQAXAKAXANQCdBUA0CWQAUA3AGBCQAODCgdB9QgFAcgpCNIgDALQgUA1hnDAIAmjcIAAgDQAOg7AHg2QACjpgchOQhOjYkJhSIgSjZIASDZQmGDaDNIlIBJDQQh9iRhvjYgA0MkVQBhhrB7giQA2gPA7gBIAJAAQA5AAAzANQCEAfBmBxQAxA3AgA+Qovh6lcGBQAnkJBnhzgADxliIg0gMQAlhHAzA+IACACQASAjAAAxIAAAGIAAABQgBARgCAOQgFAagKAUIgBACQgGhQgfhHgAh+lLQAFgeAPgXQARgbAWgGQAHgCAHAAQAeAAAWAiIh/BWQAAgRACgPg");
	this.shape_19.setTransform(260.6,110.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AgGAEIALgKAgDAMIARAAAgNADIAAgO");
	this.shape_20.setTransform(276.8,78.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AH00WIAwg1AHN0hIgHhNAGY0XIguhGAFfrHIAMCUIhqAaIBeCIIg5AIIgvE/QDeAEDfAVAEBoZIhqAcIAQGtIBQAGAIipIICnAqIArHxIAAAEIg1gHIgLgBAIipIIgVCcIBPgMIBYGHAIVrrIANCjAFfmRICugbADB0AIg0hBADZ0DIgIhcAEFz6IAihcEArXAF8QAEAMACANQAAAFAAAFQAAAFAAAEQgVC/szCJQgVADgUADQh0ATh5AQQsoBsw7AAQzeAAtyiPQmVhBjbhOEArXAF8QACgBAEAAIAAAaAL0gtQHqAaGhA3QB5AQB0ATQAUADAVAEQDYAkChAoQGXBlAyB9AmW3+QgHgIgHgHQgBAAAAAAQgqgkggA8IA1ANQAAAAAAABQAfBGAFBQQgGALgHAHQgNAOgQAAQgZAAgTgjQgGgLgEgNQgFgRgBgUQghAIAihAQAEgYAIgUAry2yQAAgQACgPQAFgeAPgYQARgbAWgGQAHgCAHAAQAfAAAVAiQAAABABAAQADAGADAGQAJATAEAWQAOAUAFAcIgSAMQgCANgEAMQgBAGgDAGQgEAKgGAKQgWAjgfAAQgHAAgHgCQgWgGgRgbQgWgjAAgyIB/hWAp33mQgEgCgEAAQgNgBgHAVAnd3VQAEACAAAGQAAAFgDAIAnt3TQAFgDAFAAAmW1RIABAAIAAABIAHAeIAAADIABgDIACgXIAFg4QADgPAAgQQAAgBAAAAQADg4gVgiApo1xIAVAAApk19IARAAIgVAMAi027QAABfhuBDQhIAshcAPQgwAIg2AAQg2AAgwgIQhcgPhIgsQhuhDAAhfQAAhfBuhDQBuhDCcAAQCcAABuBDQBuBDAABfgEggIgRnQAnkKBnhzQBhhrB7giQA2gPA7gBQAFAAAEAAQA5AAAzANQCEAfBmBxQAxA3AgA+QA+B1AACTQAADfiPCcQhXBihuAlQhEAYhNAAQhhAAhTgmIgCAAIAADAIgVAIIliCOIgIEOIEMAVQABAAAAAAQEVgdG2gYQBUgEBbgFQALAAAjgCIABAAIAAABIgBgBAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAgWAKgSQAGgIAHgIQAXgXAgAAQAhAAAXAXQAHAIAFAIQALASAAAWgAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgA2TmwIAUADIFdA9IAUBkIAiCsIAHAmA2TmwIAAi1A4nlYQBfgbA1g9A1ByKQA8idBhCdA5zxsQiZithJCtA7YpzQhZgnhJhSQiOicAAjfEghZgAPIgBA2QAIgCAIAAID9gfEghaAAnQhwAPhqARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaArDhAIASgBQAEAAADAAQDdgFDpAAQHuAAG1AWArDhAQAFAAAEAAIAJgBAskg9IBhgDAsyg9IgEAAIASAAAtmg7QAGgBAGAAIAogBQAHAAAHAAAtmg7QADAAAEAAQAMgBANAAQAFAAAFAAIAGgBAujg6QAYAAAlgBAvshgIhNAZIhIAYA1/mtIheCwIhKhbA7amzQBKBIBpATA7vmrIB6CuIBOhbAx91vQovh6lcGCA1pt1Qh0Dni9jeEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_21.setTransform(323.8,228);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AjdGFIBJDQQh9iRhvjYQhvjXAsjUQAtjWCohzQBLgoBOgZQAPgFAQgFIASDZQEIBSBODYQAcBOgCDpQgHA2gOA7AArhkQANgPAOgJQAXgOAeADQAQADAXAIQALAFAMAGAjdGFQBtBMB8ACQAJAAAJAAQALgBAOgBQBLgHBAgbQACgCABAAQA/geAzg0IgmDcQBnjAAUg1QACgGABgFQApiNAFgcQAdh9gOjCQgGhCgUg3Qg0iWidhUQgXgNgXgKQhqguh1AFAgUAJQg6BNBfAcAi9hGQANgPAPgJQAIgFAJgCQALgEANAAQAFAAAGABQAPADASAGQAEABACABQAMAEALAHAgkl6QmGDaDNIl");
	this.shape_22.setTransform(357.6,110.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ArFNUIkMgXIAIkOIFhiOIAWgIQBKBJBpASQBegbA1g8IAUACIFdA+IATBjQhfgShAAsQAIBFAKA3IAAACIABABQAEAaBeATIhJAYQm0AXkVAfIgBAAgAlWJQIBeixIheCxIhJhcgAntJQIBOhcIhOBcIh7ivIB7CvgACDkCQgMgMAAgRQAAgQAMgMQAMgNARAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgRAAgMgNgADrkxQgXgXAAghQAAgWALgSQAFgIAHgHQAXgYAhAAQAgAAAXAYQAIAHAFAIQAKASAAAWQAAAhgXAXQgXAXgggBQghABgXgXgAH0mRQhcgPhIgrQhuhDAAhfQAAhfBuhDQBuhECcAAQCcAABuBEQBuBDAABfQAABfhuBDQhIArhcAPQgwAJg2gBQg2ABgwgJgAL5niIAAgCIAAACIgBgDIABADgAL4nlIABABIAIAAQAYAAASggIABgDQALgTAEgaQADgPAAgQIAAgBIAAgGQAAgxgSgjIgBgDQgVgfgVAAQgSAAgOAQQgqgkgfA8QgJAUgEAYQgiBAAhgIQACAUAFARQAEANAGALQASAkAZgBQAQABAOgOQAJAKALACgAHSrbQgXAGgRAbQgOAYgFAeQgDAPAAARQAAAxAWAjQARAcAXAGQAGABAHAAQAfAAAWgjQAGgKAFgKIAEgLQAEgNACgNIARgMQgFgbgNgVQgEgWgJgTIgHgMIAAgBQgWghgfgBQgHAAgGACgAKCoTIAPgMIgTAAIATAAgAIzokIgUAAIAUgLIgQAAIAQAAIgUALgAIfokg");
	this.shape_23.setTransform(207.9,143.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#773300").s().p("EghPAFXQmWhBjahOQj+hagEhrIAAgFQAFiQHLhyQCvgsDzgnQBqgRBvgPIARgCID9geIABAAQEVgfG2gXICugJIAvgDIAAABIBFgCIgIAAIANgBIAogBIgFABIASgBIBigDIAJAAIAIAAIAIgBQDdgFDoAAQHuAAG1AWIA1AHIAAgEQHqAbGiA3QB5AQBzATIApAHQDZAkCgAoQGXBlAyB9QAEANACANIABAIIgBAJQgUC/s0CJIgpAGQhzATh5AQQsoBsw8AAQzdAAtyiPgApXnbIgKAAIgZABIAZgBIAKAAIAFAAg");
	this.shape_24.setTransform(301,269.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF66CC").s().p("ABDDSQgYgVgDghQgDgfAUgaQAWgXAggDQAhgCAXATQAYAVADAgQADAhgUAYQgVAZggACIgIABQgcAAgVgSgAGaC1QgYgVgDghQgDgfAUgaQAWgXAhgDQAfgCAXATQAZAVADAgQADAggVAZQgUAZggACIgIABQgcAAgVgSgAoQi7QgHgGgBgKQgBgJAGgHQAFgGAIgBIACgBQAKAAAHAFQAHAGABAKQAAAJgGAHQgCAEgEACQgEACgFAAIgBAAQgJAAgGgFg");
	this.shape_25.setTransform(329.3,105.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC99").s().p("A2lLnIEMAXIj9AeIgQACgAVyLGIgKgBIhYmHIhPAMIAUicICoArIAqHwIAAAEgAmFKwIBNgaIAHAmIATADIivAJgAjwK8IABAAIAAABgANbKnIgQmuIBqgcIBeCIIg5AIIgvFAgAwmFDIAAjAIABAAQBUAmBhAAQBNAABEgXIAAC1Qg1A8hfAbQhpgShKhJgAQTFlgAO1DdIBpgaIgMiTIASAAIAZgCQBLgHBAgbQhAAbhLAHIgZACIgSAAQh9gDhthKQjNonGGjZQEJBRBODZQAcBNgCDrQgHA1gOA8IAAADQgzA0g/AdIgDACIANCiIgUCcIiuAbgAQ5hpQBPAABFhSIACgCIACgCIABgBIgBABIgCACIgCACQhFBShPAAIAAAAIAAAAQhIAAhOhDIgDgCIADACQBOBDBIAAIAAAAIAAAAgANamGQggADgWAYQgUAZADAfQADAhAYAVQAZAUAggDQAggCAVgZQAUgYgDghQgDgfgYgVQgVgSgbAAIgIAAgASymiQghACgWAYQgUAZADAfQADAhAYAVQAZAUAggCQAggDAUgZQAVgYgDghQgDgggZgUQgVgSgaAAIgHABgAQXkwQg8gSAAgkQAAgWAWgdQgWAdAAAWQAAAkA8ASgANkoBQgPAJgNAPQANgPAPgJQAIgFAJgCQALgEANAAIALABQAPADASAFIAGADQAMADALAIQgLgIgMgDIgGgDIAihcIgiBcQgSgFgPgDIgLgBIgIhcIAIBcQgNAAgLAEIg0hCIA0BCQgJACgIAFgAQxoHQANgPAOgJIACgBIABgBIACgBQAQgJAUAAIAAAAIAAAAIAJABIABAAIAAAAIACAAQAQADAXAIIAXALIgXgLQgXgIgQgDIgHhNIAHBNIgCAAIAAAAIgBAAIgJgBIAAAAIAAAAQgUAAgQAJIgCABIgBABIgCABIguhHIAuBHQgOAJgNAPgASoofIAwg1gAtwCpQhhAAhUgmQhYgnhJhRQiOicAAjfQFcmCIvB6QA+B2AACSQAADfiPCcQhXBhhuAmQhEAXhNAAIAAAAgAs+gIQBOAAA7h2Qg7B2hOAAIAAAAIgBAAQhIAAhYhkIAAAAIgCgCIgEgFIgBgCIABACIAEAFIACACIAAAAQBYBkBIAAIABAAIAAAAgAu/l1QiZishJCsQAkhWA5AAQA4AABNBWgAnwmTQhhidg8CdQAehPAnAAQAnAAAxBPgArfCSgAN1oIgAONoMgARMofgASBoqIAAAAgADHpdQgGgLgEgNQgFgRgCgUQggAIAihAQADgYAJgUIA1ANIAAABQAeBGAGBQQgGALgHAIQgNAOgQgBQgaABgSgkgADmqyIgCAAQgIABgFAGQgGAIABAIQABAKAHAGQAHAGAJAAQAFgBAEgCQAEgCACgDQAGgIAAgJQgBgJgHgHQgHgFgIAAIgCABgADXrJQACgHAAgFQAAgHgDgCIAMgLIgMALQADACAAAHQAAAFgCAHgADrrVIgSAAgADGrcIAJgDIgJADgADPrfIAAgPgAgBpEQgWgGgRgcQgWgjAAgxIB+hXIABABIAGAMQAJATAEAWQANAVAFAbIgRAMQgCANgEANIgEALQgEAKgGAKQgWAjgfAAQgHAAgGgBgAAgrdIAAgBIAAAAQAHgSALgBIABAAIABAAQADAAAFACQgFgCgDAAIgBAAIgBAAQgLABgHASIAAAAIAAABg");
	this.shape_26.setTransform(254.6,152.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgFABQgyh9mXhlQihgojYglIgqgGQhzgTh5gQQmhg3nrgaIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAeh8gPjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGIAvk/IA5gIICugbIBPgMIBYGHIAKABQm1gWnsAAQjqAAjdAFIgHAAIgRABIhiADIgOAAIgnABIgNABIg9ABIA9gBIAHAAIhEACIAAgBIAAAAIgvACIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi1QBuglBXhiQCPicAAjfQAAiTg9h1Qghg+gxg3QhmhxiDgfQg0gNg4AAIgKAAQg6ABg3APQh7AihhBrQhnBzgmEKQAADfCNCcQBJBSBZAnIgCAAIAADAIgVAIIlhCOIgIEOIgCA2QhvAPhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAK0gxQjfgVjegEQDeAEDfAVgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgHAIgGAIQgKASAAAWQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAgWgLgSQgEgIgIgIQgXgXggAAQghAAgXAXgAs25dQhuBDAABfQAABfBuBDQBIAsBcAPQAwAIA2AAQA2AAAwgIQBcgPBIgsQBuhDAAhfQAAhfhuhDQhuhDicAAQicAAhuBDgAsyg9IAOAAIgSABgAskg9gArChAIARgBIgIABIgJAAgAqxhBg");
	this.shape_27.setTransform(323.8,228);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF33").s().p("AJEDsQhvjXAsjUQAtjWCohzQBLgoBOgZIAfgKIAKgBQB2gFBqAuQAXAKAXANQCdBUA0CWQAUA3AGBCQAODCgdB9QgFAcgpCNIgDALQgUA1hnDAIAmjcIAAgDQAOg7AHg2QACjpgchOQhOjYkJhSIgSjZIASDZQmGDaDNIlIBJDQQh9iRhvjYgA0HlKQBhhrB7ghQA2gQA7gBIAJAAQA5AAAzANQCEAfBmBxQAxA3AgA/Qovh7lcGBQAnkJBnhzgADdi1IAAgBIgBgBQgGhPgehGIAAgCIg1gMQAgg9AqAkIABABIAOAPIABACQASAjAAAxIAAAGIAAABQAAARgDAOIgFA4IgCABIAAAAQgGAAgCgHgADnivgADsjnQAAAygFAGgAh9k3QAFgeAPgXQARgbAWgGQAHgCAHAAQAeAAAWAiIh/BWQAAgRACgPg");
	this.shape_28.setTransform(261.1,110.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(1,1,1).p("AgIADIARAFIgRgP");
	this.shape_29.setTransform(269,88.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AAEgFIgRAIIAAgOAgDAMIARAA");
	this.shape_30.setTransform(273.1,78.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AH00WIAwg1AHN0hIgHhNAGY0XIguhGAFfrHIAMCUIhqAaIBeCIIg5AIIgvE/QDeAEDfAVAEBoZIhqAcIAQGtIBQAGAIipIIgVCcIBPgMIBYGHAIipIICnAqIArHxIAAAEIg1gHIgLgBAIVrrIANCjAFfmRICugbAEFz6IAihcADZ0DIgIhcADB0AIg0hBEArXAF8QAEAMACANQAAAFAAAFQAAAFAAAEQgVC/szCJQgVADgUADQh0ATh5AQQsoBsw7AAQzeAAtyiPQmVhBjbhOEArXAF8QACgBAEAAIAAAaAL0gtQHqAaGhA3QB5AQB0ATQAUADAVAEQDYAkChAoQGXBlAyB9ApM4IQAAABAAAAQAEAGADAGQAJATAEAWQAJAOAFAQQAEgJAGgMQADgYAJgUIA1ANQABAAAAABQAeBGAFBQQgFALgIAHQgFAGgGADQgIAFgKAAQgaAAgRgjQgHgLgDgNQgFgRgDgUQgPAEgBgNIgFAEQgCANgEAMQgCAGgCAGQgFAKgGAKQgWAjgfAAQgHAAgGgBQgDgBgDgCQgTgHgPgYQgWgjAAgyQAAgQADgPQAFgeAOgYQAPgXATgIQADgBADgBQAGgCAHAAQAfAAAWAigAm73+QgHgIgHgGQgBgBAAAAQgFgFgGgDQgjgUgcA0ApR3mQgEgCgEAAQgFAAgFADQgGAFgEAMAm61QIAAABIAAAAIAHAbIABACIAAgCIACgVIAFg4QADgPABgQQAAgBAAAAQACg4gVgiAoS3TQAFgDAEAAQAKADAAAGQAAAFgCAIAoy2aQABgJAHgRAo919IAQAAIgUAMIAVAAArM2yICAhWAi027QAABfhuBDQhIAshcAPQgwAIg2AAQg2AAgwgIQhcgPhIgsQhuhDAAhfQAAhfBuhDQBuhDCcAAQCcAABuBDQBuBDAABfgEggbgRtQAmkKBnhzQBhhrB8giQA2gPA6gBQAFAAAFAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACTQAADfiPCcQhZBlhxAkQhBAWhKAAQhXAAhMgeIAAC+IgVAIIliCOIgIEOIgBA2QhwAPhqARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAgWAKgSQAGgIAHgIQAXgXAgAAQAhAAAXAXQAHAIAFAIQALASAAAWgAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgA2TmwIAUADIFdA9IAUBkIAiCsIAHAmA4nlYQBfgbA1g9IAAi4IgZgBA1VyQQA8idBhCdA6GxyQiaithJCtA7apxQhjgnhRhaQiNicAAjfA9NAGQABAAAAAAQEVgdG2gYQBUgEBbgFQALAAAjgCIABAAIAAABIgBgBEghaAAnQAIgCAIAAID9gfEghZgAPIEMAVAskg9IBhgDQAFAAAEAAIAJgBQAEAAADAAQDdgFDpAAQHuAAG1AWArDhAIASgBAtmg7QAGgBAGAAIAogBIgEAAIASAAAtmg7QADAAAEAAQAMgBANAAQAFAAAFAAIAGgBAujg6QAYAAAlgBAvshgIhNAZIhIAYAsyg9QAHAAAHAAA7amzQBKBIBpATA1/mtIheCwIhKhbA7vmrIB6CuIBOhbAyQ11Qowh6lbGCA18t7Qh0Dni+jeEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_31.setTransform(323.8,228);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ArFNUIkMgXIAIkOIFhiOIAWgIQBKBJBpASQBegbA1g8IAUACIFdA+IATBjQhfgShAAsQAIBFAKA3IAAACIABABQAEAaBeATIhJAYQm0AXkVAfIgBAAgAlWJQIBeixIheCxIhJhcgAntJQIBOhcIhOBcIh7ivIB7CvgACDkCQgMgMAAgRQAAgQAMgMQAMgNARAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgRAAgMgNgADrkxQgXgXAAghQAAgWALgSQAFgIAHgHQAXgYAhAAQAgAAAXAYQAIAHAFAIQAKASAAAWQAAAhgXAXQgXAXgggBQghABgXgXgAH0mRQhcgPhIgrQhuhDAAhfQAAhfBuhDQBuhECcAAQCcAABuBEQBuBDAABfQAABfhuBDQhIArhcAPQgwAJg2gBQg2ABgwgJgALGnkQAHAAAHgCIAAAAIAAABIAAgBIAAABIAAgBIACgWIAGg4QACgPABgQIAAgBQACg3gUgjIgCgDQgHgIgHgGIgBgBIgLgIQgjgUgbA0QgJAUgEAYIgKAWQgFgRgJgOQgEgWgJgTIgGgMIgBgBQgWghgegBQgHABgHACIgFABQgTAIgPAXQgPAYgFAeQgCAPAAARQAAAxAWAjQAOAYATAIIAGACQAHACAHgBQAfAAAWgjQAGgKAEgKIAEgLQAEgNACgNIAGgEQAAANAQgEQACAUAFARQAEANAGALQASAkAZgBQAKABAJgGQAIAGAKgBgAL7n8QAGgGAAgygAJsofIgSgQIASAQIgSgFIASAFgAJFokIAVAAIgVAAIAVgLIgRAAIARAAIgVALgAJsofg");
	this.shape_32.setTransform(207.9,143.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#773300").s().p("EghPAFXQmWhBjahOQj+hagEhrIAAgFQAFiQHLhyQCvgsDzgnQBqgRBvgPIARgCID9geIABAAQEVgfG2gXICugJIAvgDIAAABIBFgCIgIAAIANgBIAogBIgFABIgFAAIgKAAIgZABIAZgBIAKAAIAFAAIASgBIBigDIAJAAIAIAAIAIgBQDdgFDoAAQHuAAG1AWIA1AHIAAgEQHqAbGiA3QB5AQBzATIApAHQDZAkCgAoQGXBlAyB9QAEANACANIABAIIgBAJQgUC/s0CJIgpAGQhzATh5AQQsoBsw8AAQzdAAtyiPg");
	this.shape_33.setTransform(301,269.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF66CC").s().p("ABVDSQgXgVgDghQgDgfAUgaQAVgXAhgDQAggCAXATQAZAVADAgQADAhgVAYQgUAZggACIgJABQgbAAgWgSgAGsC1QgYgVgCghQgDgfATgaQAWgXAhgDQAfgCAYATQAZAVADAgQADAggVAZQgVAZggACIgIABQgbAAgWgSgAofi4IgEgDQgGgGgCgJIAAgBQgBgJAGgHQAGgGAIgBIACgBQAJAAAHAFQAHAGABAKQABAJgGAHQgDAEgDACQgEACgFAAIgCAAQgGAAgFgCg");
	this.shape_34.setTransform(327.5,105.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("A2lLnIEMAXIj9AeIgQACgAVyLGIgKgBIhYmHIhPAMIAUicICoArIAqHwIAAAEgAmFKwIBNgaIAHAmIATADIivAJgAjwK8IABAAIAAABgANbKnIgQmuIBqgcIBeCIIg5AIIgvFAgAwmFDIAAi+QBMAeBXAAQBJAABCgVQhCAVhJAAQhXAAhMgeQhjgnhRhZQiNicAAjfQFbmCIwB7QA9B0AACTQAADfiPCcQhZBkhxAlIAZAAIAAC5Qg1A8hfAbQhpgShKhJgAtSgOQBNAAA6hwIAAgBIADgFIgDAFIAAABQg6BwhNAAIAAAAIAAAAQhLgBhdhrQBdBsBLAAIAAAAIAAAAgAvSl7QiaithJCtQAlhWA4AAQA5AABNBWgAoEmZQhhidg8CdQAehOAoAAQAnAAAwBOgAQTFlgAO1DdIBpgaIgMiTIASAAIAZgCQBLgHBAgbQhAAbhLAHIgZACIgSAAQh9gDhthKQjNonGGjZQEJBRBODZQAcBNgCDrQgHA1gOA8IAAADQgzA0g/AdIgDACIANCiIgUCcIiuAbgAQ5hpQBPAABFhSIACgCIACgCIABgBIgBABIgCACIgCACQhFBShPAAIAAAAIAAAAQhIAAhOhDIgDgCIADACQBOBDBIAAIAAAAIAAAAgANamGQggADgWAYQgUAZADAfQADAhAYAVQAZAUAggDQAggCAVgZQAUgYgDghQgDgfgYgVQgVgSgbAAIgIAAgASymiQghACgWAYQgUAZADAfQADAhAYAVQAZAUAggCQAggDAUgZQAVgYgDghQgDgggZgUQgVgSgaAAIgHABgAQXkwQg8gSAAgkQAAgWAWgdQgWAdAAAWQAAAkA8ASgANkoBQgPAJgNAPQANgPAPgJQAIgFAJgCQALgEANAAIALABQAPADASAFIAGADQAMADALAIQgLgIgMgDIgGgDIAihcIgiBcQgSgFgPgDIgLgBIgIhcIAIBcQgNAAgLAEIg0hCIA0BCQgJACgIAFgAQxoHQANgPAOgJIACgBIABgBIACgBQAQgJAUAAIAAAAIAAAAIAJABIABAAIAAAAIACAAQAQADAXAIIAXALIgXgLQgXgIgQgDIgCAAIAAAAIgBAAIgJgBIAAAAIAAAAQgUAAgQAJIgCABIgBABIgCABIguhHIAuBHQgOAJgNAPgASoofIAwg1gASBoqIgHhNgAN1oIgAONoMgARMofgACipdQgGgLgEgNQgFgRgCgUQgPAEgBgNQAAgJAHgQQgHAQAAAJIgFAEQgCANgEANIgEALQgFAKgGAKQgWAjgfAAQgHABgGgCIgGgCQgTgIgOgYQgWgjAAgxIB/hXIAAABIAHAMQAJATAEAWQAIAOAFARIALgWQADgYAJgUIA1ANIAAACQAeBFAGBQQgGALgHAIQgFAFgGADQgJAGgJgBQgaABgSgkgADBqyIgCAAQgIACgFAFQgGAIABAIIAAABQABAJAHAGIAEADQAFADAHAAQAFgBAEgCQAEgCACgDQAGgIAAgJQgBgJgHgHQgHgFgIAAIgCABgACyrJQACgHAAgFQAAgHgKgDIASgJIgSAJIAAgPIAAAPIgJADIAJgDQAKADAAAHQAAAFgCAHgADGrVIgSAAgABQrtQgGAEgEAMQAEgMAGgEQAEgDAFgBIAAAAIABABIAIABIgIgBIgBgBIAAAAQgFABgEADgACqrfgACqrfIAAAAg");
	this.shape_35.setTransform(254.6,152.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgFABQgyh9mXhlQihgojYglIgqgGQhzgTh5gQQmhg3nrgaIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAeh8gPjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGIAvk/IA5gIICugbIBPgMIBYGHIAKABQm1gWnsAAQjqAAjdAFIgHAAIgRABIARgBIgIABIgJAAIhiADIgOAAIAOAAIgSABIAEgBIgnABIgNABIAHAAIhEACIAAgBIAAAAIgvACIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi4IgZgBQBxgkBZhlQCQicgBjfQAAiTg9h1Qggg+gyg3QhlhxiEgfQg0gNg4AAIgKAAQg6ABg2APQh7AihiBrQhmBzgnEKQAADfCNCcQBRBaBjAnIAAC+IgVAIIlhCOIgIEOIgCA2QhvAPhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAK0gxQjfgVjegEQDeAEDfAVgAujg6IA9gBIg9ABgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgHAIgGAIQgKASAAAWQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAgWgLgSQgEgIgIgIQgXgXggAAQghAAgXAXgAs25dQhuBDAABfQAABfBuBDQBIAsBcAPQAwAIA2AAQA2AAAwgIQBcgPBIgsQBuhDAAhfQAAhfhuhDQhuhDicAAQicAAhuBDgAskg9g");
	this.shape_36.setTransform(323.8,228);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF33").s().p("AJODsQhvjXAsjUQAtjWCohzQBLgoBOgZIAfgKIAKgBQB2gFBqAuQAXAKAXANQCdBUA0CWQAUA3AGBCQAODCgdB9QgFAcgpCNIgDALQgUA1hnDAIAmjcIAAgDQAOg7AHg2QACjpgchOQhOjYkJhSIgSjZIASDZQmGDaDNIlIBJDQQh9iRhvjYgA0RlQQBhhrB8ghQA2gQA6gBIAKAAQA4AAA0ANQCEAfBlBxQAyA3AgA/Qowh7lbGBQAmkJBnhzgADCi0IAAgBIAAAAIAAgBIgBgBQgGhQgehFIAAgCIg1gMQAcg1AjAVIALAHIABABQAHAGAHAJIABACQASAjAAAxIAAAGIAAABQAAARgDAOIgFA4IgCABIgBAAQgFAAgCgGgAhMk3QAFgeAOgXQAPgYATgHIAGgCQAGgCAHAAQAeAAAWAiIh/BWQAAgRADgPg");
	this.shape_37.setTransform(260.1,110.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:278.5,y:89.7}}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_8},{t:this.shape_7},{t:this.shape_15},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_13},{t:this.shape,p:{x:277.9,y:87.7}}]},17).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_7},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_2},{t:this.shape_20},{t:this.shape,p:{x:272.6,y:89.7}}]},14).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_7},{t:this.shape_32},{t:this.shape_22},{t:this.shape_31},{t:this.shape_2},{t:this.shape_30},{t:this.shape_29}]},11).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,649.6,458.1);


(lib.HAND2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHPlyICThUQApgHgoAjIiTBeApOH0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZQABASAAAUApNH0IMdqTID+hiQAAgbACgw");
	this.shape.setTransform(68.8,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ApOH0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIgCBLIj+BiIsdKTgAHQlMIAAAAgAHQlWIgBgcICThUQApgHgoAjIiTBeIAAgKg");
	this.shape_1.setTransform(68.8,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AHrlSIBkiKQAhgbgRAyIh0C1Ao8H0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZQABASAAAUQgCAwAAAbIj+BiIsdKT");
	this.shape_2.setTransform(67,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("Ao8H0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIAKgGIAAAmIgJAGIAAgKIgBgcIABAcIAAAKIgCBLIj+BiIsdKTgAHrlSIBkiKQAhgbgRAyIh0C1g");
	this.shape_3.setTransform(67,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AHPlyICThUQApgHgoAjIiTBeAHPlyQABASAAAUApNH0IMdqTID+hiQAAgbACgwApOH0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZ");
	this.shape_4.setTransform(68.8,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("ApOH0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIAAgKIgBgcICThUQApgHgoAjIiTBeIgCBLIj+BiIsdKTg");
	this.shape_5.setTransform(68.8,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("Ao8H0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIAAgKIgBgcIAKgGIAAAmIgJAGIgCBLIj+BiIsdKTgAHrlSIBkiKQAhgbgRAyIh0C1g");
	this.shape_6.setTransform(67,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},12).to({state:[{t:this.shape_5},{t:this.shape_4}]},16).to({state:[{t:this.shape_6},{t:this.shape_2}]},17).to({state:[{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_3},{t:this.shape_2}]},17).to({state:[{t:this.shape_5},{t:this.shape_4}]},16).to({state:[{t:this.shape_3},{t:this.shape_2}]},17).to({state:[{t:this.shape_5},{t:this.shape_4}]},16).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-1,128.2,102);


(lib.HAND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHPlyICThUQApgHgoAjIiTBeApOH0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZQABASAAAUApNH0IMdqTID+hiQAAgbACgw");
	this.shape.setTransform(68.8,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ApOH0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIgCBLIj+BiIsdKTgAHQlMIAAAAgAHQlWIgBgcICThUQApgHgoAjIiTBeIAAgKg");
	this.shape_1.setTransform(68.8,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AHrlSIBkiKQAhgbgRAyIh0C1Ao8H0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZQABASAAAUQgCAwAAAbIj+BiIsdKT");
	this.shape_2.setTransform(67,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("Ao8H0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIAKgGIAAAmIgJAGIAAgKIgBgcIABAcIAAAKIgCBLIj+BiIsdKTgAHrlSIBkiKQAhgbgRAyIh0C1g");
	this.shape_3.setTransform(67,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AHPlyICThUQApgHgoAjIiTBeAHPlyQABASAAAUApNH0IMdqTID+hiQAAgbACgwApOH0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZ");
	this.shape_4.setTransform(68.8,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("ApOH0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIAAgKIgBgcICThUQApgHgoAjIiTBeIgCBLIj+BiIsdKTg");
	this.shape_5.setTransform(68.8,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("Ao8H0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAcIAAAKIAAgKIgBgcIAKgGIAAAmIgJAGIgCBLIj+BiIsdKTgAHrlSIBkiKQAhgbgRAyIh0C1g");
	this.shape_6.setTransform(67,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AHLl4ICqABQAnAPg0AKIinAHQAAAFAAAGQgCAwAAAbIj+BiIsdKTApdH0QAch+hEjWILXngIBuirQARgCAPgCQA5gHAqAHQAUADARAGQBNAbALBZQABAHAAAI");
	this.shape_7.setTransform(70.3,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ApdH0QAch+hEjWILXngIBuirIAggEQA5gHAqAHQAUADARAGQBNAbALBZIABAPIAKgVICqABQAnAPg0AKIinAHIAAALIgCBLIj+BiIsdKTg");
	this.shape_8.setTransform(70.3,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},12).to({state:[{t:this.shape_5},{t:this.shape_4}]},16).to({state:[{t:this.shape_6},{t:this.shape_2}]},17).to({state:[{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.shape_8},{t:this.shape_7}]},17).to({state:[{t:this.shape_5},{t:this.shape_4}]},16).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-1,128.2,102);


(lib.glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgMgDQAmAAAdg+QACgEACgFQAMgaAKglQAFgUAGgWABdi6QANg6AKhLAh3jEQAAAAAAABQAHAkAIAeQAjB/A5gBAiKlEQAIBFAKA3AiKlEQCRA6Btg1AAgELQAnADAeAJQAqAOAAASQAAATgqANQgqANg7AAQg6AAgqgNQgqgNAAgTQAAgSAqgOQAbgIAjgDAgMC2IgzAAIADAMIABAEIAVBGAAgELIguAmIgCABIgJAHIgDgKIgCgHIgIgcABBCxIhNAFIAAi5ABTDjIgzAoAiKlEQBehACgBF");
	this.shape.setTransform(14.3,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgkA/IgCgCIgDgIIAAAAIAAgFIgBgJQgFgJAAgEIABgDIgDgGIgHgSIgCgHIgBgJQgEgDABgGIABgDIABgBQgFgFgBgGIgDgDIgBgEIAAgDIABgEQAFgHAHADIADACQAGgCAGAEIADgCIAKgBIAtgDIAJADIADgBQAFgDAGgBQAIgBAGADIAEABQAGACADAGIAEANQABAFAAAFQABAHgEAEIAAABIgBAAIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgBABIAAABIgBABIgBABIgBABIgCABIgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgCAAQgDADgEABQgFAIgEADIgIAFIgEACIgHAGIgEACQgBADgDADQgDADgEAAIgBABIgFAEIgFAEQgBADgCACIgGAEIgEAFQgBADgDACIgCACIgDAAIgGgBg");
	this.shape_1.setTransform(15.4,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgKB3QgFgBgDgDIgCgCIAAgBIgBgBIgBgBQgTgJgJgRIgGgKIgOgSQgEgHgEgOIgGgWIgEgJIgGgXQgFgMAAgFIAAgDIgBgDIgCgFIAAgKIgFgOIAAgBIAAABIAAgBIAAAAIgBgCIAAgCQgBgEABgDQABgGAHgEQABgHAFgDQAEgDAJAAQALAAAEgBIAMgHQAHgDAIAAQAHAAAOAEQAMABAWgGQAPgCAUAGQAPADAFAAIAKAAIAKABQAFABAHAHQAIAIgCAIQAAAGgEADIAAAHIgBAEIABAGIgBADIAAACIgGAPIgDAQQgBAKgEAGIgCADQABACgBADQAAAFgDAGIgGAJQgDAFgDAPIgCAJIgEAJIgBABIgEADIgDACIAAABQgMAfgTALQgJAGgMACIAAAAIgFADIgBAAIgCABIgBAAIgEAAg");
	this.shape_2.setTransform(13.1,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99CCFF").s().p("AhkFXQgqgNAAgTQAAgSAqgOQAcgIAigDIAIAcIACAHIADAKIAJgHIACgBIAugmQAnADAeAJQAqAOAAASQAAATgqANQgqANg7AAQg6AAgqgNgABci+IABgEIABgHQADgDAAgGQACgIgHgIQgHgHgGgBIgKgBIgKAAQgEAAgPgDQgVgGgPACQgWAGgMgBQgOgEgGAAQgJAAgGADIgNAHQgDABgMAAQgJAAgDADQgGADAAAHQgIAEgBAGQgBADABAEQgKg3gIhFIADABQBKAdBAAAIAAAAIAAAAQA6AAAygXIABgBIADgBQgKBLgLA6IgBACIgBgGgAADkmQhAAAhKgdIgDgBQBehACfBFIgDABIgBABQgyAXg6AAIAAAAIAAAAg");
	this.shape_3.setTransform(14.3,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glass, new cjs.Rectangle(-1,-1,30.6,73.2), null);


(lib.Girlprofile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ADxguQlfEaiBlA");
	this.shape.setTransform(131.3,195.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6633FF").ss(1,1,1).p("AMDAAI4FAA");
	this.shape_1.setTransform(77.1,350.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AA2CGIjyAAAC8AeIAAijABeApIihh4");
	this.shape_2.setTransform(112.2,72);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AA3MWQD2hEC6knQBSh+A2iOQBCi6AcjbQG1BYnKq5QgukMh6jWAH8vKQhKgbg2gGQg2gFgoAQQgpAWAABIQAAA2AiBYAqdHHIhsF6IhsuIQgiifgGi0QAAgGAAgFQgiphEUl6QAHgRANgLQK1qnHyMKIrCCJQmbMFhQNyQCqD6DWBKQBaAgBiAAQBPAABJgVIAACaQgFgCgEgBQhSgahcgEQheACg/AKAECQeQhShAhbgjQgPgGgPgFAHuU5QgthTg9hKQg9hJhFg1IAAEGAkdMLIAACQQgfAEgXAHQgMADgMAEQhDAVg+AkQhzBChiB0QgdAjgZAkQiXDagTEcAnsT1IkLgSAJjbZQgPjmhmi6AnsPmIAAEPIPaBE");
	this.shape_3.setTransform(93,175.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999966").s().p("AsCD7QATkbCYjaIELASIPaBDQBmC6APDmg");
	this.shape_4.setTransform(77.1,325.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB7ntQjxGBAAIYIAABCQgipgETl7g");
	this.shape_5.setTransform(12.3,83.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF66CC").s().p("AgbD3Qh/gLhLhNQhQhNAHhnQAMhoBfhCQBeg8B/AFQB5ALBYBIQBRBSgOBhQgNBpheBBQhYA9hyAAIgUAAg");
	this.shape_6.setTransform(97.4,148.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF33").s().p("AquGFQghifgHi1IAAgLIAAhBQAAoZDzmAQAGgQANgLQK1qoHyMLIrCCJQmaMEhRNyIhsF6g");
	this.shape_7.setTransform(73.1,129.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ApBT1IAAkPQA+gkBDgVIAXgHQAXgGAfgFIAAiPQBaAfBjAAQBPAABKgUIAACaIAdAKQBbAkBRA/IAAEHIAAkHQBFA1A9BKQA+BKAtBSgAgnOtIAKAEIgKgEQhTgahbgEQhfADg/AJQA/gJBfgDQBbAEBTAagAtMTkQAZglAdgiQBhh1B0hCIAAEPgApBPmgAi2MrQhjAAhagfQjWhLiqj6QBRtxGbsFILBiJQB6DVAvENQHKK4m2hYQgbDchDC5IgBACIgFADQigB/hxABIgBAAIAAAAQiBAAhFikIAAAAIgBgCIAAgBIgCgEIACAEIAAABIABACIAAAAQBFCkCBAAIAAAAIABAAQBxgBCgh/IAFgDIABgCQg2CPhRB+Qi6Enj1BEQhKAUhPAAIAAAAgAjsnLQhfBBgNBpQgHBoBRBNQBKBMCAALQB/AGBehCQBehCAOhoQANhjhQhSQhYhHh4gLIgVgBQhzAAhWA4gACguCQAAA3AiBYQgihYAAg3QAAhHAogWIACgBIABAAQAegLAkAAIAAAAIABAAIAWABIAAAAIACAAQA2AFBKAcQhKgcg2gFIgCAAIAAAAIgWgBIgBAAIAAAAQgkAAgeALIgBAAIgCABIiih5ICiB5QgoAWAABHIAAAAgACguCIjyAAgAEmvqIAAikgAgdMXgAIZCfIAAAAgADIvfg");
	this.shape_8.setTransform(101.6,175.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Girlprofile, new cjs.Rectangle(-1,-1,188.1,352.7), null);


(lib.girlinbad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AHJqoIhSgfIg5BCIADhXIhRgiIBUgYIAIhXIAwBIIBWgTIg2BFgAg8oLIhKgoIg/A3IAPhSIhIgrIBTgMIAThRIAkBLIBUgHIg8A6gAApj4IglANIgBAoIgXggIgmALIAWggIgWghIAlALIAYgeIABAmgAmNgrIh7gXIhABoIgPh6Ih4gdIBvg0IgJh7IBUBZIByguIg7BrgAoMHSIgqAOIgBAsIgcgjIgrANIAZgkIgZgmIArANIAcgjIABAsgAKlCnIhpg7IhbBMIAYh1Ihlg/IB3gNIAdhzIAyBsIB2gHIhYBPgAAiEdIhRgrIhFA7IAQhZIhOgwIBbgLIAUhZIAoBSIBZgJIhABAgAg0KOIg7AUIgCA+IglgxIg7ARIAjgyIgjgzIA7ARIAlgxIACA/gAHZHKIgMggIgigBIAbgVIgJghIAcAUIAbgUIgJAhIAaAVIgiABgAGiMzIgrAOIgBAtIgcgkIgrAOIAZglIgZgmIArANIAcgjIABAtgAInk2IgTg3Ig4AAIAsgjIgQg2IAvAgIAuggIgQA2IAsAjIg4AAg");
	this.shape.setTransform(110.4,310);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AHnN8ILfpdIDdsuQh+gDgUi+QAIh4DNgVQDQgRAsCuQgMC7i9AKIioORIr9LJAxZh4QgBAFAAADAxZh4IGJBaAHnN8QA7AHAmARQB5A0hNCXADcC2QB5BmgDE0QgDCvgpDyQgBAHgBAGQgIArgJAuQghClgyDCQg/D3hbElAxZh4UACfgkKAPOAIJUASQgB/gJpAj+IlfhQIt0jIQgdgGgbgGUgHLgBdgJGAhVADAW/IG0lgAEkP+IDDiC");
	this.shape_1.setTransform(176.2,201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("Ay5P+UAJGghVAHLABeIA4AMIN0DIQB5BmgDE1QgDCvgpDwIgCAOIDDiBQA7AHAmAQQB5A0hNCWIm0FhIAAgBQg/D3hbEkgAELPUIABgsIArgPIgrgPIgBgtIgcAkIgqgNIAZAlIgZAlIAqgNgAjcNHIACg+IA7gVIg7gUIgCg+IglAxIg7gSIAjAzIgjAzIA7gRgAqiJzIABgsIArgPIgrgPIgBgsIgbAiIgrgMIAZAlIgZAlIArgNgAFAIQIAiAAIAMAhIgMghIgiAAIAbgVIgJghIAcATIAbgTIgJAhIAaAVIghAAIgLAhIALghIAhAAIgagVIAJghIgbATIgcgTIAJAhIgbAVgAM7B8QghClgyDCQAyjCAhilQAQgiABg3IgRBZIAAAAgAjfGUIBFg7IBSArIglhUIBBhAIhaAIIgohSIgUBZIhbAMIBOAwIgQBZgAF2EeIBbhLIBpA7IgthvIBYhRIh2AIIgyhrIgdByIh3AOIBlA/IgYB0gAs6gKIB4AcIAQB6IBAhoIB6AWIhRhdIA7hsIhxAvIhVhaIAKB8IhwA0gAhnhdIABgnIAlgNIglgOIgBgnIgZAfIglgLIAWAhIgWAgIAmgLgAFxkHIA4ABIATA2IgTg2Ig4gBIAsgiIgQg2IAvAgIAuggIgQA2IAsAiIg4ABIgSA2IASg2IA4gBIgsgiIAQg2IguAgIgvggIAQA2IgsAigAkwmVIA/g3IBKAoIgghNIA8g7IhUAIIgkhLIgTBRIhTAMIBIArIgPBSgADToeIA5hCIBSAfIgthLIA2hFIhWATIgwhIIgIBXIhUAYIBRAiIgDBXgADvOxIgqANIAZglIgZglIAqANIAcgkIABAtIArAPIgrAPIgBAsgAE3OZgAkBMWIg7ARIAjgzIgjgzIA7ASIAlgxIACA+IA7AUIg7AVIgCA+gAifL0gAq9JQIgrANIAZglIgZglIArAMIAbgiIABAsIArAPIgrAPIgBAsgAp2I4gAjPE7IhOgwIBbgMIAUhZIAoBSIBagIIhBBAIAlBUIhSgrIhFA7gAGOCqIhlg/IB3gOIAdhyIAyBrIB2gIIhYBRIAtBvIhpg7IhbBLgArCASIh4gcIBwg0IgKh8IBVBaIBxgvIg7BsIBRBdIh6gWIhABogAh/h8IgmALIAWggIgWghIAlALIAZgfIABAnIAlAOIglANIgBAngAhBiRgAkhnnIhIgrIBTgMIAThRIAkBLIBUgIIg8A7IAgBNIhKgoIg/A3gADWp1IhRgiIBUgYIAIhXIAwBIIBWgTIg2BFIAtBLIhSgfIg5BCg");
	this.shape_2.setTransform(121,299.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF33").s().p("AGAQgItzjJIg4gMImJhaUACfgkJAPOAIJUASQgB/gJqAj+g");
	this.shape_3.setTransform(159.7,113.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AobMUQgngQg7gHILepeIDdstQh+gDgTi+QAHh4DOgWQDQgRAsCvQgMC6i9AKIioORIr9LJQBNiXh4g0g");
	this.shape_4.setTransform(288.7,213.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.girlinbad, new cjs.Rectangle(-1,-1,354.5,404), null);


(lib.girl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiWAAQC5B/B0iz");
	this.shape.setTransform(55.1,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag5pPIgPhLAhro+Ig3hBAgQpIIApg6Ak+oPIg8g7AkooWIgShaAj6oRIAXhgABNgkIAgCfIgDCeIBNgVICDF6AhiAUIAcCQIhmAnIBtB8ICpguAg/FHIg3AOIgMFDQDcgWDggEAisDLIhlAnIA/GpIBQgDABtB7ICsAXIBiHtIhBgB");
	this.shape_1.setTransform(63.8,103.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AiqGUQB0A/B8gMQAJgCAJgBQAKgCAOgDQBKgOA9gjQABgBACgBQA7glAtg5IgNDfQBQjLAOg3QABgGABgFQAZiRACgcQAPh+gljBQgNhBgag0QhFiPilhCQgYgKgZgIQhughh0ASAhJl7QEQAzBlDOQAlBKAYDoQAAA2gHA9AAlhxQALgQANgKQAVgRAeAAQARABAXAGQAMADAMAFAiqGUIBfDGQiMiCiGjLQiHjIATjYQAVjaCaiFQBGgwBKgiQAPgGAPgHIArDWQlrEEEKILgAi+g4QALgQAOgLQAHgGAJgDQALgFAMgCQAFAAAHAAQAPABASAEQAEABADABQALACANAGAgNAEQgxBSBhAR");
	this.shape_2.setTransform(46.8,60.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999966").s().p("AjSh4IA3gOICqguIBMgVICEF5QjfAEjeAWg");
	this.shape_3.setTransform(73,149.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF66CC").s().p("AjTBiQgagSgGggQgHgfARgaQATgaAggGQAggGAZAQQAbATAGAeQAHAggSAbQgRAaggAGQgJACgIAAQgWAAgUgNgAB+AfQgagSgHgfQgGgfARgcQATgZAggHQAfgGAZARQAbASAHAfQAGAggSAaQgRAbgfAGQgJACgIAAQgXAAgTgNg");
	this.shape_4.setTransform(48.9,68.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AjsE8IBlgnIBtB8Ig3AOIgMFDIhQADgAFfLIIiDl6IhNAVIADieICsAXIBiHtgAiHEVIBmgnIgciQIARgDIAYgFQBJgOA9gjQg9AjhJAOIgYAFIgRADQh9AMh0g/QkKoLFqkEQEQAzBmDOQAlBKAYDpQgBA2gHA9IAAADQgtA5g7AkIgDACIAgCgIgDCeIipAugAg6g9QBZAABChkIABgCIABgBIACgDIgCADIgBABIgBACQhCBkhZAAIAAAAIAAAAQg/AAhLgyIAAAAIgEgDIAEADIAAAAQBLAyA/AAIAAAAIAAAAgAkllAQggAGgTAaQgRAbAGAfQAHAgAaASQAbASAggHQAfgGASgaQARgbgGggQgHgfgagTQgTgMgWAAQgIAAgIACgAArmEQggAHgSAZQgRAcAHAfQAGAgAZASQAbARAggGQAfgGASgbQASgbgHggQgGgfgbgSQgTgMgWAAQgHAAgJABgAhgkBQhCgLAAgpQAAgUAQgbQgQAbAAAUQAAApBCALgAkqm8QgNALgLAQQALgQANgLQAIgGAJgDQAKgFAMgCIAMAAQAPABATAEIAGACQAMACAMAGQgMgGgMgCIgGgCIAXhgIgXBgQgTgEgPgBIgMAAIgShaIASBaQgMACgKAFIg8g7IA8A7QgJADgIAGgAhGn0QgOAKgLAQQALgQAOgKQAVgRAdAAQASABAWAGIAYAIIgYgIQgWgGgSgBQgdAAgVARgAhGn0Ig3hBgAAUn+IAqg6gAgUoFIgPhLgAkZnFgAkDnMg");
	this.shape_5.setTransform(60.1,96.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF33").s().p("AldENQiHjIATjYQAVjaCaiFQBGgwBKgiIAegNIAKgCQB0gSBuAhQAZAIAYAKQClBCBFCPQAaA0ANBBQAlDBgPB+QgCAcgZCRIgCALQgOA3hQDLIANjfIAAgDQAHg9AAg2QgYjoglhKQhljOkQgzIgrjWIArDWQlrEEEKILIBfDGQiMiCiGjLg");
	this.shape_6.setTransform(46.8,60.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC0000").ss(2,1,1).p("ACggbQhOgJhMANQgpAHgqAOQgJACgJAEQggALggAR");
	this.shape_7.setTransform(54.5,80.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiWAAQAHAFAGAEQAGADAFADQBdA3BJgZIAAAAQADgBADgBQABgBAAAAQACgBADgBQABAAACgBQAQgIAPgLQATgOASgVQAPgQANgV");
	this.shape_8.setTransform(55.1,84.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgQpIIApg6Ahro+Ig3hBAg5pPIgPhLAkooWIgShaAj6oRIAXhgAk+oPIg8g7ABNgkIAgCfIgDCeIBNgVICDF6AhiAUIAcCQIhmAnIBtB8ICpguAg/FHIg3AOIgMFDQDcgWDggEAisDLIhlAnIA/GpIBQgDABtB7ICsAXIBiHtIhBgB");
	this.shape_9.setTransform(63.8,103.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AiqGUQB0A/B8gMQAJgCAJgBQAKgCAOgDQBKgOA9gjQABgBACgBQA7glAtg5IgNDfQBQjLAOg3QABgGABgFQAZiRACgcQAPh+gljBQgNhBgag0QhFiPilhCQiFg4iOAXAhJl7QEQAzBlDOQAlBKAYDoQAAA2gHA9AAlhxQALgQANgKQAVgRAeAAQARABAXAGQAMADAMAFAiqGUIBfDGQiMiCiGjLQiHjIATjYQAVjaCaiFQBUg5BagmIArDWQlrEEEKILgAi+g4QALgQAOgLQAHgGAJgDQALgFAMgCQAFAAAHAAQAPABASAEQAEABADABQALACANAGAgNAEQgxBSBhAR");
	this.shape_10.setTransform(46.8,60.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6666").s().p("AAaAlQgKgEgJADQgyALg/gYIgLgGIALAGIgjgCIAYgEIApgHIgWgCQhOgFAggDQAhgEARgMQAQgNgDgCIASgGIgSAGQgNgIAfACQAbABAygOIAGgIICGAAQgFAegGAVQgSAVgTAOQgOgBgBACQgBADgRADIACAMQABALgEgKIADgBIgDABQgGgNABAPIgBAAQgFABgIgDIgJgGIAQAKIgagMIgFATgABCAyIAAAAgABDAyIAAAAIgBAAIABAAgABDAygABwAiIgGgGQATgOASgVQgLAsgNAAQgEAAgDgDgACPgHIAAAAg");
	this.shape_11.setTransform(53.1,84);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AjsE8IBlgnIBtB8Ig3AOIgMFDIhQADgAFfLIIiDl6IhNAVIADieICsAXIBiHtgAiHEVIBmgnIgciQIARgDIAYgFQBJgOA9gjQg9AjhJAOIgYAFIgRADQh9AMh0g/QkKoLFqkEQEQAzBmDOQAlBKAYDpQgBA2gHA9IAAADQgtA5g7AkIgDACIAgCgIgDCeIipAugAg6g9QAaAAAXgJIABAAIAFgCIgFACIgBAAQgXAJgaAAIAAAAIgBAAQgzAAg7ghIgBgBIAAAAIgCgBIgCgBIgBgBIgBgBIABABIABABIACABIACABIAAAAIABABQA7AhAzAAIABAAIAAAAgAgqhVIACAWIAFgTIAaAMIgPgKIAJAGQAHADAFgBIABAAIAAAAQgBgPAFANQAEAKgBgLQAQgIAPgLQgPALgQAIIgCgMQARgDABgDQABgCAOABIAGAGQARAOAPg4QAFgVAFgeIiFAAIAKgCQAngGApAAIAAAAIAAAAQAaAAAbADIADAAIAHABIgHgBIgDAAQgbgDgaAAIAAAAIAAAAQgpAAgnAGIgKACQgqAHgpAOQgggCANAIQADACgQANQgRAMggAEQghAEBPAFIAVACIgoAHIgOgJIAOAJIgZAEIAjACQA/AYAzgLIAIgBQAGAAAGACgAgChIIAEgCIgEACgAjXh+QAggQAggMQggAMggAQgABKiCQAOgQANgVQgNAVgOAQgAkllAQggAGgTAaQgRAbAGAfQAHAgAaASQAbASAggHQAfgGASgaQARgbgGggQgHgfgagTQgTgMgWAAQgIAAgIACgAArmEQggAHgSAZQgRAcAHAfQAGAgAZASQAbARAggGQAfgGASgbQASgbgHggQgGgfgbgSQgTgMgWAAQgHAAgJABgAhgkBQhCgLAAgpQAAgUAQgbQgQAbAAAUQAAApBCALgAkqm8QgNALgLAQQALgQANgLQAIgGAJgDQAKgFAMgCIAMAAQAPABATAEIAGACQAMACAMAGQgMgGgMgCIgGgCIAXhgIgXBgQgTgEgPgBIgMAAIgShaIASBaQgMACgKAFIg8g7IA8A7QgJADgIAGgAhfnaQALgQAOgKQAVgRAdAAQASABAWAGIAYAIIgYgIQgWgGgSgBIgPhLIAPBLQgdAAgVARIg3hBIA3BBQgOAKgLAQgAAUn+IAqg6gAiEigQApgOAqgHIgGAIQgvANgaAAIgEAAgAgxi1gAkZnFgAkDnMgAhGn0gAgUoFg");
	this.shape_12.setTransform(60.1,96.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF33").s().p("AldENQiHjIATjYQAVjaCaiFQBUg5BagmIAKgCQCOgXCFA4QClBCBFCPQAaA0ANBBQAlDBgPB+QgCAcgZCRIgCALQgOA3hQDLIANjfIAAgDQAHg9AAg2QgYjoglhKQhljOkQgzIgrjWIArDWQlrEEEKILIBfDGQiMiCiGjLg");
	this.shape_13.setTransform(46.8,60.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CC0000").ss(2,1,1).p("AiLASIBXgLIAdgEIAfgEIAigEIAQgCIBHgIIALgC");
	this.shape_14.setTransform(55.5,81.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiIgGQBPA2A/gFQAQgBAQgFIAAAAQADgBADgBQAAgBABAAQACgBACgBQACAAABgBQAQgHAPgMQAUgNAjgq");
	this.shape_15.setTransform(55.4,85.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("Ag5pPIgPhLAhro+Ig3hBAgQpIIApg6Aj6oRIAXhgAkooWIgShaAk+oPIg8g7ABNgkIAgCfIgDCeIBNgVICDF6AhiAUIAcCQIhmAnIBtB8ICpguAg/FHIg3AOIgMFDQDcgWDggEAisDLIhlAnIA/GpIBQgDABtB7ICsAXIBiHtIhBgB");
	this.shape_16.setTransform(63.8,103.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6666").s().p("AAPAdQgKgEgJADQgzALhHgmQACAHgJgDIgNAGQACgDgBgEIgCgGIAMACQAgAFAPgDIgVgCIgYgBQALgHgFgIIBXgLIAdgEIAfgEIgDABIgOAKIAWgHQAMADAOgLIADAAIAQgCIBHgJQAAAPAIAAQgjApgUAOQgOgBgBACQgBADgRADIACAMQABALgEgKIADgBIgDABQgGgMABAOIgBABQgFAAgHgDIgJgFIAPAJIgagMIgFATgAA2ArIAAAAgAA3AqIAAAAIgBABIABgBgAA3AqgABkAaIgGgGQAUgOAjgpQgbA/gQAAQgDAAgDgCgACVgjIAAAAg");
	this.shape_17.setTransform(54.3,84.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AjsE8IBlgnIBtB8Ig3AOIgMFDIhQADgAFfLIIiDl6IhNAVIADieICsAXIBiHtgAiHEVIBmgnIgciQIARgDIAYgFQBJgOA9gjQg9AjhJAOIgYAFIgRADQh9AMh0g/QkKoLFqkEQEQAzBmDOQAlBKAYDpQgBA2gHA9IAAADQgtA5g7AkIgDACIAgCgIgDCeIipAugAgzg/IAJAAIACAAQAQgBAPgGIABAAIAFgCIgFACIgBAAQgPAGgQABIgCAAIgJAAIAAAAIgBAAQg7AAhJgyQBHAmAzgLQAKgDAKAEIACAWIAFgTIAaAMIgPgKIAJAGQAHADAFgBIABAAIAAAAQgBgPAFANQAEAKgBgLQAQgIAPgLQgPALgQAIIgCgMQARgDABgDQABgCAOABIAGAGQARAOAfhMQgIAAABgPQAAgHgZAJIguAHIgPACIgiADIAMgGIgjAFQgEADgFADIgdAEIgCgBIgTgBIgxAHIgRAGQAFAIgLAHIAYACIAVACQgPACgggFIgNgCIADAHQABAEgCADIANgGQAJADgCgHQBJAyA7AAIABAAIAAAAgAgChIIAEgCIgEACgAiliKIAWgFIgVAEIAAAAIgBABgABTilIALgCgAkllAQggAGgTAaQgRAbAGAfQAHAgAaASQAbASAggHQAfgGASgaQARgbgGggQgHgfgagTQgTgMgWAAQgIAAgIACgAArmEQggAHgSAZQgRAcAHAfQAGAgAZASQAbARAggGQAfgGASgbQASgbgHggQgGgfgbgSQgTgMgWAAQgHAAgJABgAhgkBQhCgLAAgpQAAgUAQgbQgQAbAAAUQAAApBCALgAkqm8QgNALgLAQQALgQANgLQAIgGAJgDQAKgFAMgCIAMAAQAPABATAEIAGACQAMACAMAGQgMgGgMgCIgGgCIAXhgIgXBgQgTgEgPgBIgMAAIgShaIASBaQgMACgKAFIg8g7IA8A7QgJADgIAGgAhGn0QgOAKgLAQQALgQAOgKQAVgRAdAAQASABAWAGIAYAIIgYgIIAqg6IgqA6QgWgGgSgBQgdAAgVARgAhGn0Ig3hBgAgUoFIgPhLgAi4hxIAAAAgAgoiVIADgCIAigDIgDAAQgOALgMgDIgXAHIAPgKgAkZnFgAkDnMgAAUn+IAAAAg");
	this.shape_18.setTransform(60.1,96.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("Ag5pPIgPhLAhro+Ig3hBAgQpIIApg6Ak+oPIg8g7Aj6oRIAXhgAkooWIgShaABNgkIAgCfIgDCeIBNgVICDF6AhiAUIAcCQIhmAnIBtB8Ig3AOIgMFDQDcgWDggEAg/FHICpguAisDLIhlAnIA/GpIBQgDABtB7ICsAXIBiHtIhBgB");
	this.shape_19.setTransform(63.8,103.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AjsE8IBlgnIBtB8Ig3AOIgMFDIhQADgAFfLIIiDl6IhNAVIADieIgDCeIipAuIhth8IBmgnIgciQIARgDIAYgFQBJgOA9gjQg9AjhJAOIgYAFIgRADQh9AMh0g/QkKoLFqkEQEQAzBmDOQAlBKAYDpQgBA2gHA9IAAADQgtA5g7AkIgDACIAgCgICsAXIBiHtgAg6g9QAaAAAXgJIABAAIAFgCIgFACIgBAAQgXAJgaAAIAAAAIgBAAQgzAAg7ghIgBgBIAAAAIgCgBIgCgBIgBgBIgBgBIABABIABABIACABIACABIAAAAIABABQA7AhAzAAIABAAIAAAAgAgqhVIACAWIAFgTIAaAMIgPgKIAJAGQAHADAFgBIABAAIAAAAQgBgPAFANQAEAKgBgLQAQgIAPgLQgPALgQAIIgCgMQARgDABgDQABgCAOABIAGAGQARAOAPg4QAFgVAFgeIiFAAIAKgCQAngGApAAIAAAAIAAAAQAaAAAbADIADAAIAHABIgHgBIgDAAQgbgDgaAAIAAAAIAAAAQgpAAgnAGIgKACQgqAHgpAOQgggCANAIQADACgQANQgRAMggAEQghAEBPAFIAVACIgoAHIgOgJIAOAJIgZAEIAjACQA/AYAzgLIAIgBQAGAAAGACgAgChIIAEgCIgEACgAjXh+QAggQAggMQggAMggAQgABKiCQAOgQANgVQgNAVgOAQgAkllAQggAGgTAaQgRAbAGAfQAHAgAaASQAbASAggHQAfgGASgaQARgbgGggQgHgfgagTQgTgMgWAAQgIAAgIACgAArmEQggAHgSAZQgRAcAHAfQAGAgAZASQAbARAggGQAfgGASgbQASgbgHggQgGgfgbgSQgTgMgWAAQgHAAgJABgAhgkBQhCgLAAgpQAAgUAQgbQgQAbAAAUQAAApBCALgAkqm8QgNALgLAQQALgQANgLQAIgGAJgDQAKgFAMgCIAMAAQAPABATAEIAGACQAMACAMAGQgMgGgMgCIgGgCIAXhgIgXBgQgTgEgPgBIgMAAIgShaIASBaQgMACgKAFIg8g7IA8A7QgJADgIAGgAhGn0QgOAKgLAQQALgQAOgKQAVgRAdAAQASABAWAGIAYAIIgYgIIAqg6IgqA6QgWgGgSgBQgdAAgVARgAhGn0Ig3hBgAgUoFIgPhLgACPFjgAiEigQApgOAqgHIgGAIQgvANgaAAIgEAAgAgxi1gAkZnFgAkDnMgAAUn+IAAAAg");
	this.shape_20.setTransform(60.1,96.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgQpIIApg6Ahro+Ig3hBAg5pPIgPhLAk+oPIg8g7AkooWIgShaAj6oRIAXhgABNgkIAgCfIgDCeIBNgVICDF6AhiAUIAcCQIhmAnIBtB8Ig3AOIgMFDQDcgWDggEAg/FHICpguAisDLIhlAnIA/GpIBQgDABtB7ICsAXIBiHtIhBgB");
	this.shape_21.setTransform(63.8,103.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AjsE8IBlgnIBtB8Ig3AOIgMFDIhQADgAFfLIIiDl6IhNAVIADieIgDCeIipAuIhth8IBmgnIgciQIARgDIAYgFQBJgOA9gjQg9AjhJAOIgYAFIgRADQh9AMh0g/QkKoLFqkEQEQAzBmDOQAlBKAYDpQgBA2gHA9IAAADQgtA5g7AkIgDACIAgCgICsAXIBiHtgAgzg/IAJAAIACAAQAQgBAPgGIABAAIAFgCIgFACIgBAAQgPAGgQABIgCAAIgJAAIAAAAIgBAAQg7AAhJgyQBHAmAzgLQAKgDAKAEIACAWIAFgTIAaAMIgPgKIAJAGQAHADAFgBIABAAIAAAAQgBgPAFANQAEAKgBgLQAQgIAPgLQgPALgQAIIgCgMQARgDABgDQABgCAOABIAGAGQARAOAfhMQgIAAABgPQAAgHgZAJIguAHIgPACIgiADIAMgGIgjAFQgEADgFADIgdAEIgCgBIgTgBIgxAHIgRAGQAFAIgLAHIAYACIAVACQgPACgggFIgNgCIADAHQABAEgCADIANgGQAJADgCgHQBJAyA7AAIABAAIAAAAgAgChIIAEgCIgEACgAiliKIAWgFIgVAEIAAAAIgBABgABTilIALgCgAkllAQggAGgTAaQgRAbAGAfQAHAgAaASQAbASAggHQAfgGASgaQARgbgGggQgHgfgagTQgTgMgWAAQgIAAgIACgAArmEQggAHgSAZQgRAcAHAfQAGAgAZASQAbARAggGQAfgGASgbQASgbgHggQgGgfgbgSQgTgMgWAAQgHAAgJABgAhgkBQhCgLAAgpQAAgUAQgbQgQAbAAAUQAAApBCALgAkqm8QgNALgLAQQALgQANgLQAIgGAJgDQAKgFAMgCIAMAAQAPABATAEIAGACQAMACAMAGQgMgGgMgCIgGgCIAXhgIgXBgQgTgEgPgBIgMAAIgShaIASBaQgMACgKAFIg8g7IA8A7QgJADgIAGgAhfnaQALgQAOgKQAVgRAdAAQASABAWAGIAYAIIgYgIQgWgGgSgBIgPhLIAPBLQgdAAgVARIg3hBIA3BBQgOAKgLAQgAAUn+IAqg6gACPFjgAi4hxIAAAAgAgoiVIADgCIAigDIgDAAQgOALgMgDIgXAHIAPgKgAkZnFgAkDnMgAhGn0gAgUoFg");
	this.shape_22.setTransform(60.1,96.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_4},{t:this.shape_11},{t:this.shape_3},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},24).to({state:[{t:this.shape_13},{t:this.shape_18},{t:this.shape_4},{t:this.shape_17},{t:this.shape_3},{t:this.shape_10},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_13},{t:this.shape_20},{t:this.shape_4},{t:this.shape_11},{t:this.shape_3},{t:this.shape_10},{t:this.shape_19},{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_4},{t:this.shape_17},{t:this.shape_3},{t:this.shape_10},{t:this.shape_21},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_13},{t:this.shape_20},{t:this.shape_4},{t:this.shape_11},{t:this.shape_3},{t:this.shape_10},{t:this.shape_19},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_4},{t:this.shape_17},{t:this.shape_3},{t:this.shape_10},{t:this.shape_21},{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_13},{t:this.shape_20},{t:this.shape_4},{t:this.shape_11},{t:this.shape_3},{t:this.shape_10},{t:this.shape_19},{t:this.shape_8},{t:this.shape_7}]},5).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_4},{t:this.shape_17},{t:this.shape_3},{t:this.shape_10},{t:this.shape_21},{t:this.shape_15},{t:this.shape_14}]},4).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,103.7,172.5);


(lib.Eveningsight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiYgoQCcCgCViZ");
	this.shape.setTransform(49,87.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AA0pVIgphLABppcIAAhNACPpNIA1gwAiMpSIAAhcAikpRIguhFAhhpFIAqhZACAgiIAACjICkA4IAAH2Ig/gNAg3gNIAACTIhsASIhrASIgVGuIBPANQDcAVDdAoAhREmICvgLACACBIgiCaIBQgFIA3GMAijCYIBSCOIg4AEIhLE7");
	this.shape_1.setTransform(48.8,107.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AkEF3QBmBUB9AMQAJABAIAAQALAAANAAQBLAABDgWQACgBABAAQBBgZA4guIg5DXQB2i3AZgzQACgGACgFQA1iJAIgbQAnh6ACjDQAAhCgQg5QgniZiVhiQh3hQiQgFAkEF3IA2DVQhwichcjhQhcjdA9jSQA/jRCxhlQBegnBggTIAADZQEABoA7DeQAWBOgWDqQgLA1gTA7AAshcQAOgNAPgIQAYgMAdAGQARAEAVAKQALAGALAHAi9hRQAOgNAPgIQAJgEAJgCQALgDAMABQAGABAGABQAPAEARAHQADACADABQALAGALAHAgcANQhABHBcAkAgLl3QmXC5CeI1");
	this.shape_2.setTransform(46.6,59.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999966").s().p("AjcCJIBLk6IA4gEICwgLIBQgFIA2GLQjdgojcgVg");
	this.shape_3.setTransform(49.6,155.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF66CC").s().p("AB1A3QgWgXAAggQAAggAWgXQAXgVAhAAQAgAAAWAVQAWAXAAAgQAAAggWAXQgWAWggAAQghAAgXgWgAjiA3QgWgXAAggQAAggAWgXQAXgVAhAAQAgAAAWAVQAWAXAAAgQAAAggWAXQgWAWggAAQghAAgXgWg");
	this.shape_4.setTransform(45.7,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AD1L5Ig2mNIhQAFIAiiZIgiCZIivAMIhSiOIBSCOIg5AEIhLE7IhOgNIAUmuIBsgSIBrgSIABiUIARABIAYAAQBLAABDgWQhDAWhLAAIgYAAIgRgBQh9gMhmhTQieo2GXi5QEABoA7DeQAWBPgWDqQgLA1gTA7IAAADQg4AthBAZIgDABIAACkICjA4IAAH2gAAYhLQBIAABGhFIAGgGIgGAGQhGBFhIAAIAAAAIAAAAQhMAAhOhPIgDgDIADADQBOBPBMAAIAAAAIAAAAgABmlkQgWAXAAAgQAAAgAWAXQAYAXAgAAQAgAAAWgXQAXgXAAggQAAgggXgXQgWgWggAAQggAAgYAWgAjxlkQgWAXAAAgQAAAgAWAXQAYAXAgAAQAgAAAWgXQAXgXAAggQAAgggXgXQgWgWggAAQggAAgYAWgAgEkVQg3gVAAgiQAAgXAagdQgaAdAAAXQAAAiA3AVgAhKnsQALAGALAHQgLgHgLgGIgGgDIAqhZIgqBZQgRgHgPgEIgMgCIgDAAIgCAAIgBAAIAAAAQgJAAgIACIgvhFIAvBFQgJACgJAEQgPAIgOANQAOgNAPgIQAJgEAJgCQAIgCAJAAIAAAAIABAAIACAAIADAAIAMACQAPAEARAHIAGADgAC1nqQgLgHgLgGIA1gwIg1AwQgVgKgRgEIAAhNIAABNIgBAAIgCgBIgOgBIgBAAIAAAAQgRAAgPAHIgBAAIAAAAIgBABIgBAAIgphKIApBKQgPAIgOANQAOgNAPgIIABAAIABgBIAAAAIABAAQAPgHARAAIAAAAIABAAIAOABIACABIABAAQARAEAVAKQALAGALAHgAh8n8IAAhcgABvFxgAiTn6gABEn/gAB5oFIAAAAg");
	this.shape_5.setTransform(47.1,99.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF33").s().p("AESF6IAAgDQATg7ALg1QAWjqgWhOQg7jekAhoIAAjZIAADZQmXC5CeI1IA2DVQhwichcjhQhcjdA9jSQA/jRCxhlQBegnBggTIAKAAQCQAFB3BQQCVBiAnCZQAQA5AABCQgCDDgnB6QgIAbg1CJIgEALQgZAzh2C3g");
	this.shape_6.setTransform(46.6,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eveningsight, new cjs.Rectangle(-1,-1,95.2,178.5), null);


(lib.boy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHr2gQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CEQgWCUgsCCQgWBCgWA8QgOAhgPAfQgnBRgvBLQiSDsi3BdQh2A8iFAAQgwAAgugIIAADNQAQgIAQgGQBDgaBLgEQBxADA6AUQAKADAJAEQCcA8B7CzQCkDyASFLIzmAAQASlLCkjyQBuigCJhBAG5wwQjWhYhdEdAuKnxQAAi1AbikQA3lJCfkCQDxl/FUAAQFNAADyF0AuKnxIV1uvACnL2IAADsAiyMqQkYgvjPlOQjxmAAAoeAJjDRQlVDMhymy");
	this.shape.setTransform(90.7,181.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApyGlQARlLCkjxQBuigCJhBIAggOQBEgaBKgEQBxADA7AUIASAHQCdA8B6CzQClDxARFLg");
	this.shape_1.setTransform(92.7,320.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAAIAYAAIAZAAg");
	this.shape_2.setTransform(135.8,299.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF33").s().p("AqeE4QA2lICfkBQDymAFTAAQFNAADyF1I11OuQAAi1Acilg");
	this.shape_3.setTransform(69.9,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AiyP/QkYgvjPlOQjxmAAAoeIV1uvQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CDQgWCUgsCDQgWBCgWA8IgHAEQhoA9hTAAIAAAAIgBAAQi0AAhOkhIAAgBIAAAAIAAAAIgBgDIgBgDIABADIABADIAAAAIAAAAIAAABQBOEhC0AAIABAAIAAAAQBTAABog9IAHgEIgdBAQgnBRgvBLQiSDsi3BdQh2A8iFAAQgwAAgugIQAuAIAwAAQCFAAB2g8IAADsQg6gUhxgDQhLAEhDAaIggAOgACGqWIACgHIABAAIAAgDQBHjQCLAAIAAAAIAAAAQAqAAAwATIABAAIAAABIADABIgDgBIAAgBIgBAAQgwgTgqAAIAAAAIAAAAQiLAAhHDQIAAADIgBAAIgCAHg");
	this.shape_4.setTransform(90.7,160);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AHr2gQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CEQgWCUgsCCQgBAEgBADAG5wwQjWhYhdEdAuKnxQAAi1AbikQA3lJCfkCQDxl/FUAAQFNAADyF0AuKnxIV1uvAJjDRQgOAhgPAfQgGAMgFAMQgjBEgoBAQiSDsi3BdQh2A8iFAAQgwAAgugIIAADNQAQgIAQgGQBDgaBLgEQBxADA6AUQAKADAJAEQCcA8B7CzQCkDyASFLIzmAAQASlLCkjyQBuigCJhBACnL2IAADsAiyMqQkYgvjPlOQjxmAAAoeAJjDRICig6Ih4g9QgVA+gVA5ICiAhIjKA3");
	this.shape_5.setTransform(90.7,181.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhZBQIAdhAIAqh2IB3A9IihA5IChAhIjJA2IALgXg");
	this.shape_6.setTransform(157.9,200.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AiyP/QAuAIAwAAQCFAAB2g8IAADsQg6gUhxgDQhLAEhDAaIggAOgAiyP/QkYgvjPlOQjxmAAAoeIV1uvQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CDQgWCUgsCDIgCAHIgqB3IgdBAIgMAYQgiBEgoBAQiSDsi3BdQh2A8iFAAQgwAAgugIgACGqWIACgHIABAAIAAgDQBHjQCLAAIAAAAIAAAAQAqAAAwATIABAAIAAABIADABIgDgBIAAgBIgBAAQgwgTgqAAIAAAAIAAAAQiLAAhHDQIAAADIgBAAIgCAHg");
	this.shape_7.setTransform(90.7,160);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AHr2gQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CEQgWCUgsCCQgBAEgBADQgVA+gVA5QgOAhgPAfQgGAMgFAMQgjBEgoBAQiSDsi3BdQh2A8iFAAQgwAAgugIIAADNQAQgIAQgGQBDgaBLgEQBxADA6AUQAKADAJAEQCcA8B7CzQCkDyASFLIzmAAQASlLCkjyQBuigCJhBAG5wwQAIE1k7hwAuKnxQAAi1AbikQA3lJCfkCQDxl/FUAAQFNAADyF0AInD7QgPAagQAVQgSAWgVAQQgDACgDADQgrAfgagPQgagPAGg1QADgfAOgjQAKgVANgXQAhg7AqgfQAQgLANgFQAXgJARAKQAaAPgGA0QgFA0giA6gAuKnxIV1uvACnL2IAADsAiyMqQkYgvjPlOQjxmAAAoe");
	this.shape_8.setTransform(90.7,181.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8A8A").s().p("AEVEXIhLgvImxhLQiZgeBugtIFvA/ImNicQhTheBYABIFvCwImIkIQgEg+BJAIIFXEDIiwj+QAUhAA7AxIB+DdIAAjFQAQg4AmA4IAADUICuBeIAADNg");
	this.shape_9.setTransform(69.7,187);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhRCOQgagPAGg1QADggAPgiQAJgVANgWQAhg7ApgfQAQgLANgFQAXgJARAKQAaAPgGA0QgFA0giA5QgPAagQAUQgSAXgUAQIgGAFQgdAUgVAAQgKAAgJgEg");
	this.shape_10.setTransform(139.5,202.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AiyP/QkYgvjPlOQjxmAAAoeIV1uvQAAAGAFAFQAmA9AhBBQBjDRAsD2QCODcA3EtIi6CDQgWCUgsCDIgCAHIgqB3IgdBAIgMAYQgiBEgoBAQiSDsi3BdQh2A8iFAAQgwAAgugIQAuAIAwAAQCFAAB2g8IAADsQg6gUhxgDQhLAEhDAaIggAOgAISEeQgNAFgQALQgqAfghA7QgNAXgJAVQgPAjgDAfQgGA1AaAPQAaAPArgfIAGgFQAWgGARggQAQgVAPgaQAig6AFg0QAGg0gagPQgJgFgKAAQgKAAgLAEgAm6GrIGzBLIBJAvIBEAAIAAjNIishfIAAjUQgmg3gQA3IAADFIiAjdQg7gwgTA/ICwD/IlXkEQhJgIAEA+IGJEJIlwixQhYgBBTBeIGNCdIlwg/QhtAtCYAegAEXp4QCjgBgBjWIAAgMIAAAMQABDWijABIAAAAIAAAAQg7gBhPgbIgBAAIgDgBIgDgBIADABIADABIABAAQBPAbA7ABIAAAAIAAAAg");
	this.shape_11.setTransform(90.7,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6},{t:this.shape_5}]},15).to({state:[{t:this.shape_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},45).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.5,364.7);


(lib.boysface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAhOgEQiaithJCtAC7DyQh0Dni9jdAGnkHQovh6lbGBADigiQA8idBhCd");
	this.shape.setTransform(48.4,53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AlWEBQiNicAAjeQFbmCIvB6QA9B1AACTQAADeiPCcQiNCfjIAAQjHAAiPifgAAyDtQBMAAA6hxIABAAIAAgBIABgCIAAAAIABgBIgBABIAAAAIgBACIAAABIgBAAQg6BxhMAAIgBAAIAAAAQhHAAhZhkIAAAAIgBgCIgFgFIgBgBIABABIAFAFIABACIAAAAQBZBkBHAAIAAAAIABAAgAhOh+QiaithJCtQAlhXA4AAQA5AABNBXgAF/icQhhidg8CdQAehPAoAAQAnAAAwBPg");
	this.shape_1.setTransform(48.4,66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF33").s().p("Ak3hvQBhhrB7giQA3gPA5gBIAKAAQA4AAA0ANQCEAfBlBxQAxA3AhA9Qovh5lcGBQAnkKBnhyg");
	this.shape_2.setTransform(45.4,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAgtFCQBog4BYAnQhSBlhuhUgAhOgEQiaithJCtAGnkHQovh6lbGBADigiQA8idBhCd");
	this.shape_3.setTransform(48.4,53.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AhggCQBpg3BYAnQgtA1g0AAQgtAAgzglg");
	this.shape_4.setTransform(53.5,86.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AlWEBQiNicAAjeQFbmCIvB6QA9B1AACTQAADeiPCcQiNCfjIAAQjHAAiPifgAgtDHQBuBUBShkQgkgQgoAAQg4AAg8AggAhOh+QiaithJCtQAlhXA4AAQA5AABNBXgAF/icQhhidg8CdQAehPAoAAQAnAAAwBPg");
	this.shape_5.setTransform(48.4,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAhGFCQCBg4COAgQiIBsiHhUgAhOgEQiaithJCtAGnkHQovh6lbGBADigiQA8idBhCd");
	this.shape_6.setTransform(48.4,53.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AiHAAQCCg3CNAfQhNA8hLAAQg7AAg8gkg");
	this.shape_7.setTransform(54.9,86);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AlWEBQiNicAAjeQFbmCIvB6QA9B1AACTQAADeiPCcQiNCfjIAAQjHAAiPifgAhGDIQCHBTCIhsQgzgLgyAAQhYAAhSAkgAhOh+QiaithJCtQAlhXA4AAQA5AABNBXgAF/icQhhidg8CdQAehPAoAAQAnAAAwBPg");
	this.shape_8.setTransform(48.4,66);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAC7DyQh0Dni9jdAhOgEQiaithJCtADigiQA8idBhCdAGnkHQovh6lbGB");
	this.shape_9.setTransform(48.4,53.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAgtFCQBog4BYAnQhSBlhuhUgAhOgEQiaithJCtADigiQA8idBhCdAGnkHQovh6lbGB");
	this.shape_10.setTransform(48.4,53.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AnjAAQAmkJBnhzQBhhrB8giQA2gPA6gBQAFAAAEAAQA4AAA0ANQCEAfBlBxQAyA3AgA+QA9B1AACSQAADfiPCdQiNCejIAAQjHAAiPieQiNidAAjfgAhGFCQCBg4COAgQiIBsiHhUgAhOgEQiaithJCtADigiQA8idBhCdAGnkHQovh6lbGB");
	this.shape_11.setTransform(48.4,53.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},49).to({state:[{t:this.shape_2},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},5).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_10}]},24).to({state:[{t:this.shape_2},{t:this.shape_8},{t:this.shape_7},{t:this.shape_11}]},5).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_10}]},4).to({state:[{t:this.shape_2},{t:this.shape_8},{t:this.shape_7},{t:this.shape_11}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,98.9,109.6);


(lib.girl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6633FF").ss(1,1,1).p("ApyAAITmAA");
	this.shape.setTransform(88.7,350.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AjDguQEdEaBqlA");
	this.shape_1.setTransform(44.6,195.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AgrCGIDFAAAiZAeIAAijAhMApICDh4");
	this.shape_2.setTransform(60.2,72);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AIiHHIBYF6IBXuIQAcifAFi0QAAgGAAgFQAcphjhl6QgGgRgLgLQozqnmWMKAmcvKQA8gbAsgGQAsgFAgAQQAhAWAABIQAAA2gbBYAgsMWQjIhEiYknQhCh+gsiOQg2i6gWjbQllBYF1q5QAmkMBjjWII/CJQFOMFBCNyQiLD6iuBKIAACQQAZAEATAHQAKADAJAEQA3AVAyAkQBeBCBQB0QAXAjAVAkADpMLQhJAghQAAQhBAAg7gVIAACaQAEgCAEgBQBCgaBLgEQBNACAzAKAmRU5QAkhTAyhKQAyhJA4g1QBDhABKgjQAMgGAMgFAnxbZQANjmBTi6AGRT1IDagSQB7DaAPEcAjRQeIAAEGAGRPmIAAEPIsiBE");
	this.shape_3.setTransform(75.7,175.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999966").s().p("ApzD7QANjmBTi6IMihDIDagSQB7DaAQEbg");
	this.shape_4.setTransform(88.7,325.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABhGsQAAoYjEmBQDgF7gcJgIAAhCg");
	this.shape_5.setTransform(141.4,83.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF66CC").s().p("AidC6QhNhBgLhpQgLhhBChSQBHhIBjgLQBngFBNA8QBNBCAKBoQAGBnhCBNQg8BNhoALIgQAAQhdAAhHg9g");
	this.shape_6.setTransform(72.1,148.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("Aj1SdQAyhKA4g1QBCg/BKgkIAYgKIAAiaQjIhEiXknQhCh+gsiPIABABIACADQCDCABdABIABAAIAAAAQBpAAA4ilIABgDIAAAAIAAAAIABgDIgBADIAAAAIAAAAIgBADQg4ClhpAAIAAAAIgBAAQhdgBiDiAIgCgDIgBgBQg3i5gWjcQlkBYF1q4QAmkNBjjVII+CJQFPMFBBNxQiKD6iuBLQhKAfhQAAQhAAAg8gUQA8AUBAAAQBQAABKgfIAACPQAZAFATAGIATAHQA2AVAzAkQBeBCBPB1QAYAiAUAlIjZARIAAkPIAAEPIsjBEQAlhSAyhKgAiLUlIAAkHgAAgOtIgHAEIAHgEQBEgaBKgEQBNADA0AJQg0gJhNgDQhKAEhEAagAAMoCQhhALhIBHQhBBSALBjQALBoBMBCQBNBCBngGQBogLA9hMQBBhNgFhoQgLhphNhBQhGg4heAAIgRABgAidrzQAchYAAg3QAAhHghgWIgBgBIgCgBQgYgKgdAAIgBAAIAAAAIgSABIAAAAIgCAAQgsAFg8AcQA8gcAsgFIACAAIAAAAIASgBIAAAAIABAAQAdAAAYAKIACABIABABQAhAWAABHQAAA3gcBYgABDuCIjEAAgAiivfICEh5gAjvvqIAAikgAHXT1gAm0CfIAAAAg");
	this.shape_7.setTransform(68.8,175.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF33").s().p("AGAOTQhCtylOsEIo/iJQGWsLIzKoQALALAFAQQDGGAAAIZIAABBIAAALQgFC1gcCfIhXOIg");
	this.shape_8.setTransform(92,129.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(1,1,1).p("AAvgaQAjA8AMA0QALA0gTALQgTALgngjQgVgTgTgbQgRgXgRgdQgjg8gMg0QgLg0ATgLQATgLAoAkQAcAbAcArQAIANAJAOg");
	this.shape_9.setTransform(42.6,206.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AIiHHIBYF6IBXuIQAcifAFi0QAAgGAAgFQAcphjhl6QgGgRgLgLQozqnmWMKII/CJQFOMFBCNyQiLD6iuBKIAACQQAZAEATAHQAKADAJAEQA3AVAyAkQBeBCBQB0QAXAjAVAkQB7DaAPEcIzmAAQANjmBTi6QAkhTAyhKQAyhJA4g1QBDhABKgjQAMgGAMgFQAEgCAEgBQBCgaBLgEQBNACAzAKAmavfQAAAuAGAjIhcAgAmUuOQAJA7AZAaQApArBUgsQAlgUAuglAgsMWQjIhEiYknQhCh+gsiOQg2i6gWjbQllBYF1q5QAmkMBjjWAlys5IgwBUAj1s6IAXBkADpMLQhJAghQAAQhBAAg7gVIAACaAGRT1IDagSAjRQeIAAEGAGRPmIAAEPIsiBE");
	this.shape_10.setTransform(75.7,175.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6666").s().p("AAcB9QgVgTgTgbQgRgXgRgdQgjg8gMg0QgLg0ATgLQATgLAoAkQAcAbAcArIARAbQAjA8AMA0QALA0gTALQgFADgGAAQgSAAgdgbg");
	this.shape_11.setTransform(42.6,206.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("Aj1SdQAyhKA4g1QBCg/BKgkIAYgKIAAiaQjIhEiXknQhCh+gsiPQg3i5gWjcQlkBYF1q4QAmkNBjjVII+CJQFPMFBBNxQiKD6iuBLQhKAfhQAAQhAAAg8gUQA8AUBAAAQBQAABKgfIAACPQAZAFATAGIATAHQA2AVAzAkQBeBCBPB1QAYAiAUAlIjZARIAAkPIAAEPIsjBEQAlhSAyhKgAiLUlIAAkHgAAgOtIgHAEIAHgEQBEgaBKgEQBNADA0AJQg0gJhNgDQhKAEhEAagAlbCnQgTALALA0QAMA0AjA9QARAdARAXQAUAbAVATQAnAjATgLQATgLgLg0QgMg0gjg9IgRgbQgcgrgdgbQgfgcgSAAQgFAAgFADgAAMoCQhhALhIBHQhBBSALBjQALBoBMBCQBNBCBngGQBogLA9hMQBBhNgFhoQgLhphNhBQhGg4heAAIgRABgAiws6IAYBlIgYhlQAmgUAuglQguAlgmAUIAAAAgAlcrkIAvhVIABABIAAAAQAUAUAeAAIAAAAIABAAQAfAAAqgWQgqAWgfAAIgBAAIAAAAQgeAAgUgUIAAAAIgBgBgAkts5QgZgagJg6QAJA6AZAagAmqttIBbggQgFgiAAgtIAAgDIAAADQAAAtAFAigAHXT1g");
	this.shape_12.setTransform(68.8,175.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1,1,1).p("AAvgaQAjA8AMA0QALA0gTALQgTALgngjQgVgTgTgbQgRgXgRgdQgjg8gMg0QgLg0ATgLQATgLAoAkQAcAbAcArQAJAMAIAPg");
	this.shape_13.setTransform(2.1,206.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AaYHVIBYF6IBXuIQAcifAFi0QAAgGAAgFQAcphjhl6QgGgRgLgLQjnkWjMgiQg5gJg2AJQjmAojCFzIJACJQFOMFBCNyQiLD6iuBKIAACQQAZAEATAHQAKADAJAEQA3AVAyAkIAAEPIDagSQBABxApErIzJA/QBBk6AihLQAkhTAyhKQAyhJA4g1QBDhABKgjQAMgGAMgFAOAssQAlgUAuglAOAssIAXBkARJMkIAACaQAEgCAEgBQBDgaBLgEQBNACAzAKAVfMZQhJAghQAAQhBAAg8gVQjIhEiYknQhCh+gsiOQg2i6gWjbQllBYF1q5QAmkMBjjWAOkQsIAAEGAYHP0QBeBCBQB0QAXAjAVAkALbvRQAAAuAGAjIhcAgALhuAQAJA7AZAaIgwBUAOkQsMgiCgS+IiIiBIAAicQgmg4gQA4IAADEIh/jdQg7gxgUBAICxD/IlYkEQhJgHAEA9IGJEJIlwiwQhYgCBTBfIGOCdIlwhAQhuAtCZAeIGyBKMAgrAUnA62BZIAIBdA8DA7IhNAAA2ipZIBGg9A1cojIBzgQA32qPIAXhcA5aBwIA2A2AMDsrQApArBUgsAYHUDIsjBE");
	this.shape_14.setTransform(-79,173.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999966").s().p("AoBiXIMjhEIDZgRQBABxAqEqIzJA+QBCk4AhhMg");
	this.shape_15.setTransform(46.4,324.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("A0CATImyhKQiZgeBugtIFwA/ImOidQhTheBYABIFwCxImJkJQgDg+BIAIIFYEEIixj/QAUhAA7AxIB/DdIAAjFQAQg4AmA4IAACdICICAMAiCAS+Qg4A1gyBKQgyBKgkBSgAN/SdQAyhKA4g1IAAEHIAAkHQBDg/BKgkIAYgKIAIgEQBDgaBLgEQBNADAzAJQgzgJhNgDQhLAEhDAaIgIAEIAAiaQA8AUBBAAQBQAABJgfIAACPQAZAFATAGIATAHQA3AVAyAkIAAEPIsjBEQAkhSAyhKgAZMT1IAAkPQBeBCBQB1QAXAiAVAlIjaARgAPpQegASOMXQjIhEiYknQhCh+gsiPQg2i5gWjcQllBYF1q4QAmkNBjjVIJACJQFOMFBCNxQiLD6iuBLQhJAfhQAAQhBAAg8gUgAMaCnQgUALAMA0QALA0AkA9QAQAdASAXQAUAbAUATQAnAjAUgLQATgLgLg0QgMg0gkg9IgQgbQgcgrgegbQgegcgSAAQgGAAgEADgASCoCQhjALhHBHQhCBSALBjQALBoBNBCQBNBCBogGQBogLA8hMQBChNgGhoQgKhphNhBQhGg4heAAIgRABgAPcrVIgXhlQAlgUAuglQguAlglAUIgCABIgBABIgBAAIgBABQgnATgeABIAAAAIAAAAQgdgBgTgSIgBgBIgBAAIgBgCQgZgagJg6QAJA6AZAaIgwBVIAwhVIABACIABAAIABABQATASAdABIAAAAIAAAAQAegBAngTIABgBIABAAIABgBIACgBgALKttIBcggQgGgjAAgvQAAAvAGAjg");
	this.shape_16.setTransform(-85.9,175.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF33").s().p("AGAOTQhCtylOsEIo/iJQDBl0DmgnQA3gKA5AKQDLAiDnEWQALALAGAQQDFGAAAIZIAABBIAAALQgFC1gcCfIhXOIg");
	this.shape_17.setTransform(51.5,129.3);

	this.instance = new lib.Girlprofile();
	this.instance.parent = this;
	this.instance.setTransform(75.6,175.3,1,1,0,0,0,93,175.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:72.1}},{t:this.shape_5,p:{x:141.4}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_12},{t:this.shape_6,p:{x:72.1}},{t:this.shape_5,p:{x:141.4}},{t:this.shape_11,p:{x:42.6}},{t:this.shape_4},{t:this.shape_10},{t:this.shape_9}]},20).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_6,p:{x:31.6}},{t:this.shape_11,p:{x:2.1}},{t:this.shape_5,p:{x:100.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},21).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(4).to({x:88.7},0).wait(1).to({x:101.8},0).wait(1).to({x:114.9},0).wait(1).to({x:128},0).wait(1).to({x:141.1},0).wait(1).to({x:154.2},0).wait(1).to({x:167.3},0).wait(1).to({x:180.4},0).wait(1).to({x:193.5},0).wait(1).to({x:206.6},0).wait(1).to({x:219.7},0).wait(1).to({x:232.8},0).wait(1).to({x:245.9},0).wait(1).to({x:259},0).wait(1).to({x:272.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,153.5,352.7);


(lib.girlsface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Eveningsight();
	this.instance.parent = this;
	this.instance.setTransform(62.2,90,1,1,0,0,0,46.6,88);

	this.instance_1 = new lib.girl2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123.3,81.1,1,1,0,0,0,50.6,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.4,x:55,y:88.7},0).wait(1).to({rotation:-0.9,x:47.8,y:87.6},0).wait(1).to({rotation:-1.3,x:40.6,y:86.6},0).wait(1).to({rotation:-1.8,x:33.4,y:85.5},0).wait(1).to({rotation:-2.2,x:26.1,y:84.6},0).wait(1).to({rotation:-2.6,x:18.9,y:83.7},0).wait(1).to({rotation:-3.1,x:11.6,y:82.9},0).wait(1).to({rotation:-3.5,x:4.3,y:82.3},0).wait(1).to({rotation:-3.9,x:-3,y:81.7},0).wait(1).to({rotation:-4.4,x:-10.3,y:81.2},0).wait(1).to({rotation:-4.8,x:-17.5,y:80.7},0).wait(1).to({rotation:-5.3,x:-24.9,y:80.4},0).wait(1).to({rotation:-5.7,x:-32.2,y:80},0).wait(1).to({rotation:-6.1,x:-39.5,y:79.8},0).wait(1).to({rotation:-6.6,x:-46.8,y:79.7},0).wait(1).to({rotation:-7,x:-54.1,y:79.6},0).wait(1).to({rotation:-7.4,x:-61.4,y:79.7},0).wait(1).to({rotation:-7.9,x:-68.7,y:79.8},0).wait(1).to({rotation:-8.3,x:-76,y:80},0).wait(1).to({rotation:-8.8,x:-83.3,y:80.2},0).wait(1).to({rotation:-9.2,x:-90.6,y:80.6},0).wait(1).to({rotation:-9.6,x:-97.9,y:81.1},0).wait(1).to({rotation:-10.1,x:-105.2,y:81.6},0).wait(1).to({rotation:-10.5,x:-112.5,y:82.2},0).wait(1).to({rotation:-11,x:-119.8,y:82.9},0).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,1,95.2,178);


// stage content:
(lib.datingissues1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		self.PLAYLOVE.addEventListener("click", clickPlayStart);
		
		function clickPlayStart()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("Haddaway");
	}
	this.frame_756 = function() {
		var self = this;
		self.stop();
		
		self.AGAIN.addEventListener("click", clickRestart);
		
		function clickRestart()
		{
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(755).call(this.frame_756).wait(12));

	// start
	this.PLAYLOVE = new lib.LOVE();
	this.PLAYLOVE.parent = this;
	this.PLAYLOVE.setTransform(276.1,191.2,1,1,0,0,0,261.1,131.8);
	new cjs.ButtonHelper(this.PLAYLOVE, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.PLAYLOVE).to({_off:true},1).wait(767));

	// girl in bad
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAbIAGgCQAZArAegJQAMgCAIgLQAIgLgDgKQgDgJgHgDQgHgDgaADQgsAFgKghQgEgRAIgPQAJgPARgEQASgEAOAIIAEgLIAFgBIAJAkIgGACQgQgegaAIQgMADgGAIQgGAJACAIQACAIAHACQAGADAWgDQAvgGAKAmQAFASgIARQgJAQgSAEQgRAFgUgLIgIANIgFABg");
	this.shape.setTransform(511.4,90.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhnBSIAWgGIgehvIgWAGIgCgIIANgDQAZgHAOgGIAIAfIABAAQADgjAfgIQAjgJALAgIABAAQAEglAggIQANgEAMAFQALAFAFAJQAEAJAGAWIASBBIAWgGIACAJIhIATIgBgJIATgFIgVhQQgGgTgDgGQgFgHgJACQgMAEgJASQgKATAMApIALAqIAVgGIACAJIhGATIgBgJIASgFIgQg+QgKglgEgHQgEgGgKADQgOADgFAPQgHAPAAAMQABAMAHAZIALApIAUgGIACAJIhHATg");
	this.shape_1.setTransform(492.7,96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBGQgMgHgDgNQgLgqBLgYIgEgQQgFgVgFgFQgFgGgNAEQgZAHADAKQAAADADADQADADABAFQACAGgDAFQgDAEgFACQgHACgFgEQgFgDgCgGQgDgNAMgNQAMgNAagHQAUgGAKADQALADAFAHQAEAHADANIAQA7QAEANADADQACADAEgBQAGgBACgKIAEgBQADAZgXAGQgVAGgLgZQgLAfgYAGIgLACQgJAAgIgEgAgbAKQgHAKAEAPQADALAHAFQAHAEAHgCQAIgCAGgIQAFgIABgIQABgHgDgLIgFgRQgbAIgHAKg");
	this.shape_2.setTransform(472.7,101.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_3.setTransform(457.6,104.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYBFIAYgHIgdhvIgZAHIgDgIIAagHQATgFAKgFIAHAfIABAAQACgiAVgGQAKgCAHAEQAIAFACAIQABAIgCAGQgEAGgHACQgOAEgDgOIgBgIQgCgEgDABQgFACgEAQQgDARAIAdIANAyIAagHIABAJIhPAVg");
	this.shape_4.setTransform(443.5,108.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag/B1IAggIIg2jJIghAIIgCgIIBigaQAggJAZAEQAaADAXAZQAXAXAJAiQAJAjgJAfQgKAggTAQQgUAPggAJIhgAagAgVhtIgcAHIA2DJIAbgHQAVgGAMgHQAMgIAFgQQAFgQgCgWQgDgVgJgiQgLgogPgSQgPgSgQAAIgGgBQgMAAgTAGg");
	this.shape_5.setTransform(424.2,109.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAHBSQgIgEgEgHQgEgJgEgOIgVhOIgbAHIgDgIIAcgHIgJgiQAPgFAOgHIAKAmIAjgKIADAIIgkAKIAVBQQAFASAEAFQAEAHAKgEQAHgBAFgHQAGgIAAgLIAHgCQABAigkAJQgHACgGAAQgGAAgEgCg");
	this.shape_6.setTransform(483.8,51.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_7.setTransform(471.8,56.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_8.setTransform(458.3,59.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhVgZIgTAGIgCgIIBIgUIACAIIgUAGIA0BHIAKhhIAEgBIA7BOIAIhXIgXAGIgDgIIAxgNIADAIIgTAFIgMCHIgFABIg7hOIgKBhIgEABg");
	this.shape_9.setTransform(438.6,64.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag2BCIAHgCQARAaAUAKQATALATgFQAUgGAMgRQANgSgGgUQgEgSgPgJQgOgIgaABQgaADgPgDQgPgCgNgLQgOgMgFgTQgGgZAMgXQALgYAcgIQAYgGAYAKQAFgHABgJIAHgBIAQA4IgHACQgdgvgmAKQgWAHgJAPQgIAQADAOQAEAMAMAGQAMAHAcgDQAbgCAPADQAQADAOAOQAOANAGAUQAIAhgOAaQgOAbgdAIQgYAHgcgNIgLASIgGABg");
	this.shape_10.setTransform(419.3,65.7);

	this.instance = new lib.HAND();
	this.instance.parent = this;
	this.instance.setTransform(254.2,216.7,1,1,0,0,0,65.9,50);

	this.instance_1 = new lib.phone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.3,132.9,1,1,0,0,0,47.8,76.6);

	this.instance_2 = new lib.girlinbad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(263.8,206.7,1,1,0,0,0,275.1,201);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AEN8TQSHihQPChQCLMGiLLmQxLCzxLizQidr2Cdr2gEAr1gAfIA8QWIAARLEgmegcWQSHiiQPCiQCLMFiLLmQxLC0xLi0Qidr2Cdr1gEgswgAiUAsTgEcAsSAEfEgswAP7UAswAEbAsxgEfEApqghBMACLAgi");
	this.shape_11.setTransform(287.9,207.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B79999").s().p("EgswAR5IAAxHIAAwdUAsTgEcAsSAEfIA8QXIgdACIgKABIgOACIgEAAQ2ECL2CAAIAAAAIAAAAQ2RAA2RiNQWRCNWRAAIAAAAIAAAAQWCAAWEiLIAEAAIAOgCIAKgBIAdgCIAARKgEAsxAAvg");
	this.shape_12.setTransform(287.9,304.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A59999").s().p("EgsSAQOMAAAggeMBWaAAAMACLAghUgsTgEfgsSAEcgAErrhQidL0CdL2QRLCzRLizQCLrmiLsEQoHhRomAAQolAApEBRgEgmAgLmQidL1CdL2QRLCzRLizQCLrliLsGQoHhQomAAQomAApDBQg");
	this.shape_13.setTransform(284.9,100.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9999").s().p("AEPLzQicr0Ccr2QSIiiQPCiQCLMEiLLmQomBaomAAQolAAomhagEgmcALvQicr0Ccr2QSIiiQPCiQCLMFiLLlQomBaolAAQomAAomhag");
	this.shape_14.setTransform(287.7,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},127).wait(640));

	// in love
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AgsmpQAAhMA1g2QA2g3BMAAQBNAAA2A3QARAQALATQAKgOAOgOQA2g2BMAAQBNAAA2A2QA2A3AABMQAAA+gjAvIk0EbIkokaQgOgRgJgSQgEgIgEgKQgLgeAAgjgAMGQKIixKmQFbo7BMieQBLieBtlWQBtlWAEooQABi7grikQhwmwmmkRQlpj2mZADIAAJjQUSINnsZAIgDAIQlGEQmoAAQmtAAlJkYICVJZQk7m4kEp5QkFp4CvpQQCvpQHykfIAygcQDchQESg1AqMmQQAAg6ApgqQAqgpA6AAQA7AAAqApQAMANAJAPQAIgLAKgLQAqgpA6AAQA7AAApApQAqAqAAA6QAAAwgbAkIjsDZIjkjYQgKgNgIgOQgDgHgCgHQgJgXAAgbgAgdxLQyEINHDZAAhPAAQi1DLEFBlAmQKAIOJAAQmFO+oEu+g");
	this.shape_15.setTransform(285.3,196.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6666").s().p("AnEjuIOJAAQjCHdjjAAQjhAAkDndg");
	this.shape_16.setTransform(290.5,284.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAFAKQgNgQgJgRIgIgSQgLgfAAgjQAAhMA1g2QA2g3BMABQBNgBA2A3QARARALATQAKgPAOgNQA2g2BMAAQBNAAA2A2QA2A2AABMQAAA+gjAuIk0EcgApkAIQgKgMgIgOIgFgNQgJgYAAgbQAAg6ApgqQAqgpA6AAQA7AAAqApQAMANAJAPQAIgLAKgKQAqgqA6AAQA7AAApAqQAqApAAA7QAAAvgbAjIjsDZg");
	this.shape_17.setTransform(284.5,164.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF33").s().p("AMGQKIADgIQHs5A0SoNIAApjQGZgDFpD2QGmERBwGwQArCkgBC7QgEIohtFWQhtFWhLCeQhMCelbI7gAyIIqQkFp4CvpQQCvpQHykfIAygcQDchQESg1IAAJjQyEINHDZAICVJZQk7m4kEp5g");
	this.shape_18.setTransform(285.3,196.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("Ar3TNQnD4/SEoOQUSIOnsY/IgDAJQlGEQmnAAQmuAAlJkZgAHgNMIuJAAQIEO9GFu9gAgXH7Qibg8AAhfQAAhCBKhSQhKBSAABCQAABfCbA8gAgPlgQg2A2AABMQAAAjALAfIAIASQAJARAOARIEoEaIE0kbQAjgvAAg+QAAhMg2g2Qg2g2hNAAQhMAAg2A2QgOANgKAPQgLgTgRgRQg2g3hNABQhMgBg1A3gAp8kpQgpAqAAA6QAAAbAJAYIAFANQAIAOAKANIDkDXIDsjYQAbgkAAgvQAAg7gqgpQgpgqg7AAQg6AAgqAqQgKAKgIALQgJgPgMgNQgqgpg7AAQg6AAgqApgAg23jQAbgCAbAAQGRAAE7D2Qlpj3mZADgAg23jQkSA2jcBPQDjh6ELgLg");
	this.shape_19.setTransform(287.8,176);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AAfmQQAAg8AqgqQArgqA7AAQA7AAAqAqQANANAJAPQAIgLAKgLQAqgqA8AAQA7AAAqAqQAqAqAAA7QAAAxgbAkIjvDcIjnjbQgLgNgHgOQgDgGgDgIQgJgXAAgbgAMGQKIixKmQFbo7BMieQBLieBtlWQBtlWAEooQABi7grikQhwmwmmkRQlpj2mZADIAAJjQUSINnsZAIgDAIQlGEQmoAAQmtAAlJkYICVJZQk7m4kEp5QkFp4CvpQQCvpQHykfIAygcQDchQESg1AqtmjQAAhIAzgzQAzg0BIAAQBJAAAzA0QAQAQALASQAJgOANgNQAzgzBIAAQBIAAA0AzQAmAmAKAyQADARAAASQAAAMgBALQgFAtgbAjIkkENIkYkLQgNgQgJgSQgEgIgDgIQgLgdAAghgAgdxLQyEINHDZAAhPAAQi1DLEFBlAmQKAIOJAAQmFO+oEu+g");
	this.shape_20.setTransform(285.3,196.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("ApHAKQgNgPgJgSIgHgQQgLgdAAghQAAhIAzgzQA0g0BIAAQBJAAAzA0QAPAQALASQAKgOAMgNQA0gzBIAAQBIAAAzAzQAmAmAJAyQAEARAAASIgBAXQgGAtgZAiIkkENgAB/AIQgLgMgHgOIgGgOQgJgXAAgbQAAg8AqgqQAqgqA7AAQA8AAAqAqQANANAJAPQAHgLALgLQAqgqA7AAQA8AAAqAqQAqAqAAA7QAAAxgbAjIjwDcg");
	this.shape_21.setTransform(279,164.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("Ar3TNQnD4/SEoOQUSIOnsY/IgDAJQlGEQmnAAQmuAAlJkZgAHgNMIuJAAQIEO9GFu9gAgXH7Qibg8AAhfQAAhCBKhSQhKBSAABCQAABfCbA8gAqTlTQgzAzAABIQAAAhALAdIAHARQAJARANAQIEYEKIEkkMQAbgjAFgtIABgWQAAgTgDgRQgKgxgmgnQg0gzhIAAQhIAAgzAzQgNAOgJANQgLgSgQgQQgzgzhJAAQhIAAgzAzgAAwkqQgqApAAA8QAAAbAJAYIAGANQAHAOALANIDnDbIDvjcQAbgkAAgwQAAg7gqgrQgqgqg7ABQg8gBgqAqQgKALgIALQgJgOgNgNQgqgrg7AAQg7AAgrArgAg23jQAbgCAbAAQGRAAE7D2Qlpj3mZADgAg23jQkSA2jcBPQDjh6ELgLg");
	this.shape_22.setTransform(287.8,176);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AgsmpQAAhMA1g2QA2g3BMAAQBNAAA2A3QARAQALATQAKgOAOgOQA2g2BMAAQBNAAA2A2QA2A3AABMQAAA+gjAvIk0EbIkokaQgOgRgJgSQgEgIgEgKQgLgeAAgjgAMGQKIixKmQFbo7BMieQBLieBtlWQBtlWAEooQABi7grikQhwmwmmkRQlpj2mZADIAAJjQUSINnsZAIgDAIQlGEQmoAAQmtAAlJkYICVJZQk7m4kEp5QkFp4CvpQQCvpQHykfIAygcQDchQESg1AqMmQQAAg6ApgqQAqgpA6AAQA7AAAqApQAMANAJAPQAIgLAKgLQAqgpA6AAQA7AAApApQAqAqAAA6QAAAwgbAkIjsDZIjkjYQgKgNgIgOQgDgHgCgHQgJgXAAgbgAhPAAQi1DLEFBlAgdxLQyEINHDZAAmQKAIOJAAQmFO+oEu+g");
	this.shape_23.setTransform(285.3,196.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("AAfmQQAAg8AqgqQArgqA7AAQA7AAAqAqQANANAJAPQAIgLAKgLQAqgqA8AAQA7AAAqAqQAqAqAAA7QAAAxgbAkIjvDcIjnjbQgLgNgHgOQgDgGgDgIQgJgXAAgbgAMGQKIixKmQFbo7BMieQBLieBtlWQBtlWAEooQABi7grikQhwmwmmkRQlpj2mZADIAAJjQUSINnsZAIgDAIQlGEQmoAAQmtAAlJkYICVJZQk7m4kEp5QkFp4CvpQQCvpQHykfIAygcQDchQESg1AqtmjQAAhIAzgzQAzg0BIAAQBJAAAzA0QAQAQALASQAJgOANgNQAzgzBIAAQBIAAA0AzQAmAmAKAyQADARAAASQAAAMgBALQgFAtgbAjIkkENIkYkLQgNgQgJgSQgEgIgDgIQgLgdAAghgAhPAAQi1DLEFBlAgdxLQyEINHDZAAmQKAIOJAAQmFO+oEu+g");
	this.shape_24.setTransform(285.3,196.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},128).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18},{t:this.shape_16},{t:this.shape_20}]},6).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_23}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18},{t:this.shape_16},{t:this.shape_24}]},6).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18},{t:this.shape_16},{t:this.shape_20}]},6).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18},{t:this.shape_16},{t:this.shape_20}]},6).to({state:[]},6).wait(592));

	// mirorr
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("Eg9HgumMB7mAAAIAAOgMAAAA5pMgsGAAAImvAAQgIAVgJAWQg1B/g5BgQitEfjeAAQjeAAiskfQhJg4ieowIFGlMIgIhQIiQgQID1ASQCe1soAhyQAZhQAfhLQDRn9EnAAQEnAADSH9QDRH+AALQQAACwgNCjID8AAIAANQIAAEKIAAHFEgtOggGIv5ugEgtOAZjI2cAAMAAAhIJIGjAAEg6sAdtIMcAAIsFQ6AlQpzQh2gbiXAoQrtkLCFZ+IGtAhIAACdIhXAmIjhBlIAAINIAAEKIAAB4QhrAxANAxQCGB3Bxh3QgehsgyAVIAUiDIBKAAIAAH5IDYAAICEAAIC8AAIAABlIAAE9IiVAHIACAlAIfCMIgjguIAZgwQAMArgCAzgAJNDJQAEgNAFgQQAUhCABhpQAAgigHgfQgWhShQg1QhAgrhIgDIgGAAQgDAAgCAAIAAB1QjcBjBWEwIAdBzQg9hUgxh5Qgyh4AhhwQAihxBeg2IAKgGQAqgPA0gKAGJAXQAegeAuAeAFSAcQgvgfgWAfAIVDXIhJhkIgmAAQAlg5BKgMAHDE7QgkANgqAAQgHAAgGAAQhJgEg6gxAElDKICrAAQhKC2hhi2gAEIG3Ih3A0IAAHkQg4AaAHAaQBGA/A8g/QgPg5gbALIAylXIAAIdIByAAIBGAAIAVDiAHDE7IAABoIAZB4IAOBDQh/CGiBhmAE2FPIAABUIguAUIgeDHAI2EFIghguQgHAdgJAfIgBACIgfB0IAJgHIBohQgAHuGCQA3hcAOgbQABgDACgDAJNDJIgug9AHcIbIDSjPIhhiDAFiBQQgjAmAyAUAIEEVQgeAZgjANAHDGjIAigaAFriAQCKA4AgB2AtvPxIg6F5IAAD5IgkAAIAkj5AupZjIAAEKAvzdtIAmkKAFcSbIgdDoADqSbIAADoAIGSbIAADdAGiSbIBkAAAnYP6IA3AvIC/iTIgBg9AoPPLIA3AvQAHhdgHhWID1ASAoPNCIA3AFAoPNCIAACJIBIFhQj8BFjmgHAmRUcQgbAIgbAIAmRUFIAAAXIAAJRIAAGZIAABgAmRdtIDnAAAGoIsQguASgTBAQgJg+gmgHAHqJeIAcI9AsYMuIEJAUEgMJAsbIgEAdEgOpAlmIAAG1ICgAAIBuAAAJrdtIIuAAMAxSAAAEgGRAnLQNiFWLInvEgGRAkGQNRi/LZDrEgLRAlmIg4G1EgJNAlmIAnGpAOdMTQgkHfiPFxEgtOggGMAAAA5pEguQAdtIdAAAAxQZjI7+AAEgtOggGMBrtAAAIE2AA");
	this.shape_25.setTransform(236.1,137.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999966").s().p("Al7OEIiFAAIjXAAIAAn5IAAkKIAAj4QDmAHD8hFIA2gQIAAJQIAAGZIAABggAJ0lGIhHAAIhyAAIAAodQCBBnCAiHIAcI9g");
	this.shape_26.setTransform(215.2,287.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6666").s().p("AhVgtICrAAQglBagrAAQgqAAgxhag");
	this.shape_27.setTransform(274,162.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AqoYJIAAm2IDYAAIg4G2gAlMRTIC8AAIAABlIAAE9IiVAHgAutM0QgNgxBrgxIAAh4IAAkKIAAoMIDhhkIg6F3IgkD5IgmEKIgUCDQAygVAeBsQg5A8g9AAQg+AAhDg8gAHrBwIAAjnIByAAIgdDngAKjh3IBkAAIAADcIhPAFgAqoBXIA6l3IBXgmIAAidIEJAUIAACJIA3AuIA3AvIC+iTIgBg9ICQAQIAIBQIlFFMIAAAWIg2AQIhIlfIBIFfQjjA+jRAAIguAAgAFhkPQgHgZA4gbIAAnjIB3g0IAugVIAAhTIAygHIANAAQAqAAAkgOQgkAOgqAAIgNAAQhJgFg6gwQhWkxDchkQCKA4AgB4QAMArgDAyIgiguIAZgvQhKAMglA4IAmAAIBJBlIhJhlIgmAAQAlg4BKgMIgZAvIAiAuIAvA+IBhCCIjSDPIAOBDQh/CHiBhnIAejGIgeDGIgyFXQAbgLAPA5QgeAgghAAQggAAgjgggAJoqUQATg/AugSQguASgTA/QgJg+gmgHQAmAHAJA+gALdr3IgZh4gAMGv+IgBABQgeAZgjANIAABoIAigZIgDAMIAMgTIBohRIgggsIghguQgHAcgJAggALRxIIisAAQBiC2BKi2gAJyyIQgegLAAgSQABgNAOgQQgOAQgBANQAAASAeALgAJTz2QgvgggWAgQALgQARAAQARAAAYAQgALWz6QgugfgeAfQAPgQATAAQATAAAXAQgApukggAJ34HIgHAAIgEAAIAKgBIATABQBBAFA1ApQhAgrhIgDgAJs4HQg0AKgqAPQArgXAzgCg");
	this.shape_28.setTransform(210.4,267.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF33").s().p("ABULpIj1gSIg2gEIkKgUImtghQiF5/LuELQCXgnB1AaQIBByieVsgAMdEaIAfh1IAAgBQAKggAGgcIAhAuIgDAFQgNAbg4BdIgIAHIAIgHIgMATgAHLBKQgxh4AhhwQAhhxBfg2IAKgGQAqgPAzgKIAAB0QjcBkBWEwIAdByQg8hUgyh4gANWAcQACgxgMgrQggh4iKg4IAAh0IAFAAIAGAAQBIADBAArQBQA0AWBSQAIAfAAAkQgBBpgVBAIgJAegAKilkg");
	this.shape_29.setTransform(205,148.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#99CCCC").s().p("AmTWsQhIg3ieoxIFGlMIgIhQIiQgPID2ASQCe1soBhyQAZhQAfhLQDRn9EnAAQEnAADRH9QDSH+AALQQAACwgNCjQgkHeiPFyIgSArQg0B/g5BfQitEgjeAAQjdAAiukggAABLbIAADnIBWAAIAcjnIBHAAIAUDhIBQgEIAAjdIgco9IgOhDIDSjOIhhiDIAJgdQAUhCABhpQAAgjgIgfQgVhShQg1Qg1gphBgFIgTAAIgKAAQgzACgrAXIgKAGQhdA2giBxQghBxAyB4QAxB5A7BUIgbhzQA5AxBIAEIgxAHIAABUIguAUIh2AzIAAHkQg5AaAHAaQBGA/A8g/QgPg5gaALIAwlXgArAI6QAHhdgHhWID1ASIAAA8Ii+CTgADbiEQAjgNAegZIgfB0IgiAagAFLi0IACgGIAhAtIhpBQQA4hcAOgbg");
	this.shape_30.setTransform(259.4,182.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3366").s().p("EAU/AkFIAAtQIj8AAQANijAAivQAArSjRn9QjSn9knABQkogBjQH9QgfBMgZBOQh2gbiXAoQrtkKCFZ/IGtAhIAACcIhXAmIjhBkIAAIOI7+AAMAAAg5pIv5ugMB7mAAAIAAOgMhrtAAAMBrtAAAMAAAA5pgEAOQAkFQCPlyAkneID8AAIAANQgEgMnAkFIAkj5IAAD5gEhBEAkFMAAAhIJIGjAAIP5OgMAAAA5pgAlpZtIAAiIIA3AEQAHBWgHBdgARDW1gEgqogVkg");
	this.shape_31.setTransform(219.5,69.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("Eg96gvNMB9OAAAIAAOsMAAAA6ZMgsrAAAIm1AAQgIAWgKAWQg1CBg5BhQiwEjjhAAQjhAAivkjQhJg5igo4IFKlQIgIhRIiSgQID5ASQCg1+oIh0QAahQAghMQDToDErAAQErAADUIDQDUIFAALZQAACygMClID/AAIAANbIAAEOIAAHLEgt0gghIwGusEgt0AZ4I2vAAMAAAhJFIGpAAEg7dAeGIMmAAIsPRIAlVp8Qh2gaiaAoQr3kPCHaVIGyAhIAACfIhXAnIjkBlIAAIUIAAEOIAAB5QhsAyAMAyQCIB4Byh4QgdhugzAVIAUiEIBLAAIAAH/IDaAAICHAAIC+AAIAABmIAAFCIiYAHIADAlAImCOIgkgvIAagwQAMArgCA0gAJUDMQAFgOAFgQQAVhCABhrQAAgjgIgfQgWhThRg1QhBgshJgDIgGAAQgDAAgCAAIAAB2QjfBlBXE0IAdB0Qg9hVgyh6Qgyh6AhhxQAihzBgg3IAKgFQAqgQA1gKAGOAYQAfgfAvAfAFWAcQgvgfgWAfAEoDNICvAAQhLC4hki4gAIcDaIhKhmIgmAAQAlg5BLgMAHJE/QgkAOgrAAQgHAAgGAAQhKgFg7gxAEMG9Ih5A1IAAHpQg5AbAHAaQBHBAA9hAQgPg5gbALIAylcIAAIkIB0AAIBHAAIAVDlAHJGoIAaB6IDUjSIhjiEIgug+AHJE/IAABpIAjgaIAIgHIBqhRIghgtIghgvQgGAdgKAgIgBABIgfB2AE7FUIAABUIgvAVIgfDJAH0GHQA5hdANgcQACgCABgDAFmBRQgjAnAzAUAILEYQgeAagkANAFwiCQCLA5AhB4At6P/Ig7F9IAAD8IglAAIAlj8Au1Z4IAAEOAwAeGIAmkOAFhSqIgeDrADtSqIAADrAINSqIAADgAHwJmQiACIiDhoAGoSqIBlAAAHwJmIAdJEAneQHIA4AwIDBiVIgBg+AoVPYIA3AvQAHhegHhXID4ASAoVNNIA3AFAoVNNIAACLIBIFlQj/BGjpgHAmWUtQgbAJgcAHAmWUVIAAAYIAAJZIAAGdIAABiAmWeGIDpAAAGuI0QgvASgTBAQgJg/gngHAHjIiIANBEAsjM5IEOAUEgMTAtBIgEAcEgO1AmFIAAG8ICiAAIBwAAAJ0eGII1AAMAx7AAAEgGWAnrQNtFbLSn1EgGWAkjQNcjALjDuEgLbAmFIg4G8EgJUAmFIAmGvAOqMdQglHliRF2Egt0gghMAAAA6ZEgu3AeGIdZAAAxeZ4I8WAAEgt0gghMBtIAAAIE5AA");
	this.shape_32.setTransform(235.1,137);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999966").s().p("AmAOPIiGAAIjaAAIAAn/IAAkNIAAj8QDoAIEAhGIA2gQIAAJXIAAGeIAABhgAJ8lKIhHAAIh0AAIAAokQCDBoCAiJIAeJFg");
	this.shape_33.setTransform(213.9,289.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF66CC").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMg");
	this.shape_34.setTransform(262.6,149.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6666").s().p("AhWgtICtAAQglBbgsAAQgrAAgxhbg");
	this.shape_35.setTransform(273.4,162.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF33").s().p("ABVLzIj4gSIg3gFIkNgUImzghQiG6VL3EPQCZgoB3AaQIHB0igV+gAMnEdIAfh2IABgBQAKggAGgdIAiAvIgDAFQgOAcg4BdIgJAHIAJgHIgMAUgAHRBLQgyh5AihyQAhhzBhg3IAJgFQArgQA0gKIAAB2QjeBlBWE0IAdB0Qg8hVgzh6gANhAdQACgzgMgrQggh5iMg5IAAh2IAFAAIAGAAQBJADBBAsQBRA1AWBTQAIAfAAAkQgBBrgVBBIgJAegAKrlpg");
	this.shape_36.setTransform(203.5,148.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AqwYdIAAm8IDaAAIg5G8gAlQRhIC/AAIAABnIAAFBIiYAHgAu5M/QgNgyBsgyIAAh5IAAkNIAAoUIDkhlIg6F8IglD9IgnENIgUCEQAzgUAeBtQg6A8g+AAQg/AAhDg8gAHxBxIAAjqIB0AAIgdDqgAKth5IBlAAIAADfIhRAFgAqwBYIA6l8IBYgnIAAifIENAVIAACKIA4AvIA4AwIC/iVIAAg+ICSAQIAIBRIlJFQIAAAXIg3ARIhJllIBJFlQjnA/jUAAIgtgBgAFmkTQgIgaA6gbIAAnpIB4g1IAvgUIAAhVIAygHQhKgEg7gyQhWk0DehmQCMA5AgB5QAMArgCA0IgjgvIAZgwQhKAMgmA6IAnAAIBJBlIhJhlIgnAAQAmg6BKgMIgZAwIAjAvIAvA+IBjCEIjVDSIgZh5IAigbIgDANIAMgUIBphRIgggtIgigvQgGAegKAfIgBACQgeAZgjANQglAOgqAAIgOAAIAOAAQAqAAAlgOIAABqIAZB5IAOBEQiBCJiDhoIAfjKIgfDKIgyFbQAbgLAQA5QgfAgghAAQghAAgjgggAJxqdQAThAAugSQguASgTBAQgKg/gngHQAnAHAKA/gALbxWIiuAAQBjC5BLi5gAH5zCQgMANAAASQAAARAMAMQANANASAAQARAAAMgNQANgMAAgRQAAgSgNgNQgMgMgRAAQgSAAgNAMgAJ6yXQgegMAAgSQAAgNAPgPQgPAPAAANQAAASAeAMgAJb0GQgwghgWAhQALgRASAAQARAAAYARgALg0LQgugfggAfQAQgQATAAQAUAAAXAQgAp2kkgALOt6gAJ/4cIgGAAIgFAAIALAAIATAAQBCAFA1AqQhBgrhJgEgAJ04cQg0ALgrAPQAsgXAzgDg");
	this.shape_37.setTransform(209,268.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#99CCCC").s().p("AmYW/QhJg4igo4IFKlRIgIhRIiSgPID5ASQCg1+oIh0QAahRAfhLQDUoEErABQErgBDUIEQDUIEAALaQAACygNClQglHliQF2IgSAsQg1CAg6BhQiwEkjgAAQjgAAiwkkgAABLkIAADqIBXAAIAdjqIBIAAIAUDkIBRgEIAAjgIgdpFIgOhDIDVjRIhjiEIAJgeQAVhCABhrQAAgkgIgfQgWhThRg1Qg1gqhCgFIgTAAIgLAAQgzACgsAXIgJAGQhgA3ghBzQgiBxAyB6QAzB7A7BUIgch0QA6AyBKAEIgyAIIAABUIgvAVIh3A0IAAHpQg6AbAIAaQBHBAA9hAQgQg5gbALIAxlcgArJJBQAHhegIhXID5ASIAAA+IjACUgADeiGQAjgNAegaIgfB2IgiAagAFPi3IADgFIAgAtIhpBRQA4hdAOgcg");
	this.shape_38.setTransform(258.6,182.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF3366").s().p("EAVQAkjIAAtbIj+AAQAMilAAiyQAArbjUoDQjUoEkrABQksgBjTIEQgfBLgaBQQh3gbiZAoQr3kNCGaUIGzAiIAACfIhXAnIjlBkIAAIVI8VAAMAAAg6ZIwGusMB9OAAAIAAOsMhtIAAAMBtIAAAMAAAA6ZgEAOcAkjQCQl2AmnlID+AAIAANbgEgMyAkjIAlj9IAAD9gEhB7AkjMAAAhJFIGpAAIQGOsMAAAA6ZgAluaDIAAiLIA3AFQAIBXgHBegARSXIgEgrMgV2g");
	this.shape_39.setTransform(218.3,68.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("Eg9tgvDMB80AAAIAAOpMAAAA6NMgsiAAAImzAAQgJAWgJAWQg1CAg6BhQivEijgAAQjgAAiukiQhJg5ifo2IFJlPIgIhRIiSgPID4ASQCf16oGhzQAbhQAfhMQDToCEpAAQErAADTICQDTIDAALXQAACxgMClID+AAIAANYIAAENIAAHJEgtqggaIwDupEgtqAZzI2qAAMAAAhI2IGnAAEg7QAeAIMjAAIsNREAlUp5Qh2gbiZAoQr0kNCGaPIGxAhIAACeIhXAnIjkBkIAAITIAAENIAAB5QhrAyAMAxQCHB4Byh4QgdhtgzAVIAUiEIAnkNIAkj8IAAD8IgkAAAIkCOIgjgvIAZgwQAMArgCA0gAJSDMQAFgOAFgQQAVhCAAhqQAAgjgHgfQgWhThRg1QhBgshIgDIgHAAQgDAAgCAAIAAB2QCMA4AgB4ADnEWIAdB0Qg9hVgxh5Qgyh6AhhxQAhhyBgg3IAKgFQAqgQA0gKAIaDaIg4hOIgRgYIgXAAQAIgOAMgKQACgCABgBQAigjAngHAGNAYQAfgfAuAfAFVAcQgvgfgWAfAHIE+QglAOgqAAQgHAAgGAAQhKgEg7gyAEnDMICuAAQhKC4hki4gAELG8Ih4A1IAAHoQg5AaAHAaQBHBAA8hAQgPg5gbALIAylbIAAIjIB0AAIBHAAIAUDjAHIGnIAZB5IDUjRIhjiDIgug+AHIE+IAABpIAigaIAJgHQA4hdANgbQACgDABgDIghguQgGAdgKAfIgBACIgfB1AE6FTIAABUIgvAVIgfDIAHzGGIBphRIghgtAFlBRQgjAnAzAUAIJEYQgeAZgjANAFuiBQjdBlBWEyAt3P8Ig7F7Av9eAIBLAAAuyZzIAAENIAAH9IDaAAICGAAIC+AAIAABmIAAFBIiYAHIADAlADsSnIAADqAFgSnIgeDqAILSnIAADfAHuJkQiACIiChoAGnSnIBkAAAHuJkIAdJDAncQEIA4AvIDAiUIgBg9AoUNLIAACKIA4AvQAHhdgIhYID4ATAoUNLIA3AEAmUURIAAAYQgcAJgbAHQj/BGjogIAoUPVIBJFkEgGUAkcIAABhAmUeAIAAGcQNZjALgDtAmUeAIDoAAAmUUpIAAJXAGsIyQguASgTBAQgJg+gngIAHhIgIANBEAsgM3IEMAUEgMQAs3IgEAdEgOyAl9IAAG6ICiAAIBvAAAOnMbQglHjiQF1EgJSAl9IAmGuEgLYAl9Ig4G6EgGUAnjQNqFaLPn0AJxeAII0AAMAxwAAAAxbZzI8PAAEgutAeAIdSAAEgtqggaMAAAA6NEgtqggaMBsxAAAIE4AA");
	this.shape_40.setTransform(235.2,138.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999966").s().p("Al+OMIiGAAIjaAAIAAn9IAAkNIAAj6QDnAHEAhGIA3gQIAAJWIAAGdIAABggAJ7lJIhHAAIh0AAIAAojQCCBoCAiHIAdJCg");
	this.shape_41.setTransform(214,290.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6666").s().p("AhWgtICtAAQglBbgsAAQgqAAgyhbg");
	this.shape_42.setTransform(273.4,163.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF66CC").s().p("AhwAeQgMgMAAgSQAAgRAMgMQANgMASAAQARAAAMAMQAMAMAAARQAAASgMAMQgMAMgRAAQgSAAgNgMgABOAmQgNgCgKgKQgMgMABgRQAAgRANgLQALgJAWgBIADAAIAGAAQgOACAAAdIAAAKIAoANQgDAHgHAGQgMANgSAAIgHgBg");
	this.shape_43.setTransform(270.9,150.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF33").s().p("ABVLxIj3gTIg3gEIkMgUImxghQiH6PL1ENQCZgoB2AbQIGBzigV6gAMlEcIAIgHIgMAUgANECnIAAgCQAKgfAHgdIAhAuIgDAGQgNAbg5BdIgIAHgAHQBLQgyh5AhhyQAihyBgg3IAKgFQAqgQA0gKIAFAAIAGAAQBJADBAAsQBRA1AWBTQAIAfAAAkQgBBqgVBBIgJAeIgug+QACgzgMgrQghh5iLg4IAAh2IAAB2QjeBlBXEyIAdB0Qg9hVgyh5gAMtEVIAAAAg");
	this.shape_44.setTransform(203.7,149.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("AquYYIAAm6IDZAAIg4G6gAlPReIC+AAIAABmIAAFAIiXAHgAu2M8QgNgxBsgyIAAh5IAAkMIAAoSIDjhlIBYgmIAAifIEMAVIAACKIA3AvIA4AvIC/iVIAAg9ICRAQIAIBQIlIFQIAAAXIg3AQIhIljIBIFjQj/BFjngHIA6l7Ig6F7IglD8IgnEMIgTCEQAygVAeBtQg5A8g/AAQg+AAhDg8gAHwBxIAAjpIBzAAIgdDpgAKqh4IBlAAIAADfIhQAEgAFkkRQgHgaA5gbIAAnoIB5g1IAugUIAAhVIAygHQhKgEg6gxQhXk0DehlQCLA5AhB5QAMArgCAzIgkguIAagwQgnAGgjAjIgCADQgMALgJAOQAAgeAOgBIgFAAIgDAAQgXABgLAJQgNAKAAASQAAASAMAMQAJAJANADIAIAAQARAAAMgMQAHgHADgHIgogOIAAgJIAXAAIARAXIA5BOIg5hOIgRgXIgXAAQAJgOAMgLIACgDQAjgjAngGIgaAwIAkAuIAuA+IBjCEIjUDRIgah5IAjgaIgEANIAMgUIBphRIgggtIghgvQgHAdgKAgIAAABQgfAagjANQgkANgrAAIgNAAIANAAQArAAAkgNIAABpIAaB5IANBEQiACHiChnIAfjJIgfDJIgyFaQAagLAQA6QgfAfggAAQghAAgkgfgAJuqbQATg/AvgSQgvASgTA/QgJg+gngHQAnAHAJA+gALZxSIiuAAQBjC4BLi4gAH3y+QgMANAAARQAAASAMAMQANANASAAQARAAAMgNQANgMAAgSQAAgRgNgNQgMgMgRAAQgSAAgNAMgAJ4yTQgegMAAgSQAAgMAPgQQgPAQAAAMQAAASAeAMgAJZ0CQgwgggVAgQAKgQASAAQARAAAYAQgALe0GQgvgggfAgQAQgQATAAQATAAAYAQgALLt3gAJ94WIgGAAIgFAAIAKgBIATABQBDAFA0ApQhAgrhJgDgAJy4WQg0AKgqAPQArgXAzgCg");
	this.shape_45.setTransform(209.2,269.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#99CCCC").s().p("AmXW7QhJg5ifo2IFJlPIgIhRIiRgPID4ASQCg16oIhzQAbhQAfhMQDToCEqAAQEqAADTICQDTIDABLXQAACxgNClQglHjiQF1IgSAsQg0CAg6BhQivEijgAAQjfAAiwkigAACLiIAADqIBVAAIAejqIBHAAIAVDjIBPgEIAAjfIgdpDIgMhEIDTjQIhjiDIAKgeQAVhCABhqQAAgkgIgfQgWhThRg1Qg0gqhDgFIgTAAIgLAAQgyADgrAXIgLAFQhfA3ghByQghByAyB6QAyB5A7BVIgch0QA6AyBKAEIgyAHIAABUIgvAVIh3A0IAAHoQg5AaAHAaQBHBAA9hAQgQg5gaALIAxlbgArHI/QAHhdgIhYID5ATIAAA9IjACUgADdiGQAjgNAegZIgeB1IgjAagAFNi2IAEgGIAgAtIhpBRQA4hdANgbg");
	this.shape_46.setTransform(258.7,183.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF3366").s().p("EAVMAkbIAAtXIj+AAQANimAAixQgBrYjToBQjToCkrAAQkqAAjSICQgfBLgbBPQh1gaiaAoQr0kNCGaPIGxAhIAACfIhXAmIjkBkIAAITI8PAAMAAAg6NMBsxAAAMAAAA6NgEAOZAkbQCQl1AlniID+AAIAANXgEgMvAkbIAkj7IAAD7gEgrDAkbI2qAAMAAAhI1IGnAAIQDOoIwDuoMB80AAAIAAOoMhsxAAAMAAAA6NgAltZ+IAAiLIA3AFQAIBXgHBegAROXEgEBBugVyg");
	this.shape_47.setTransform(218.5,70.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(2,1,1).p("ABWgkQhJC2hii2QAagaA7AaQAzgfAjAY");
	this.shape_48.setTransform(270.5,162.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("Eg9xgvLMB+GAAAIAAGEEA/TgoYIAAInMAAAA51MgsQAAAImwAAQgIAVgKAVQg0CAg6BgQiuEgjfAAQjeAAitkgQhJg4ieoyIFHlNIgIhRIiRgPID2ASQCf1xoDhyQAahQAfhLQDSn+EnAAQEpAADSH+QDSH/AALTQAACwgMCjID8AAIAANUIAAEKIAAHGEhAwAacIjuAAMAAAhJnIGtAAEgsxgfxIpbonEg3JgpHImomEEg6SAeOIMeAAIsIQ+EgsxAaEIy4AAAkspaQh1gbiYAoQrwkMCGaEIGuAhIAACdIhWAnIjjBkIAAIQIAAEKIAAB4QhqAyAMAxQCGB2Byh2QgehtgyAVIATiDIBLAAIAAH6IDYAAICFAAIC9AAIAABmIAAE+IiWAHIADAlAJ1DlQAEgOAFgPQAVhCAAhpQAAgjgHgfQgWhShRg1QhAgshIgCIgGAAQgDAAgCAAIAAB0QCKA5AgB3QAMArgBAyIgkguIAZgvAELEvIAdBzQg8hUgyh5Qgxh5AghvQAihyBfg3IAKgFQAqgQA0gJAGwAyQAfgfAuAfAI8DzIg3hOIgSgXIgWAAQAIgOAMgKQABgBABgCQAjgjAmgGAF5A3QgvgggWAgAHrFXQgkANgrAAQgGAAgHAAQhKgEg6gxAEvHUIh3A0IAAHlQg5AaAHAaQBHA/A8g/QgPg5gbALIAxlYIAAIfIBzAAIBHAAIAUDiAHrG/IAigZIAJgHQA3hdANgbQACgDABgDIghguQgFAdgKAfIgBACIgfB1AHrG/IAZB5IDTjQIhiiDIgug+AFdFsIAABTIguAVIgfDHAHrFXIAABoAIWGfIBohRIghgtAGJBrQgjAnAyATAIsExQgfAZgiANAGShmQjcBkBVExAtLQQIg7F5IAAD7IgkAAIAkj7AvReOIAnkKAuGaEIAAEKAIRJ7Qh/CHiChnAEQS6IAADoAGDS6IgdDoAIuS6IAADeAHKS6IBkAAAIRJ7IAdI/AmzQYIA3AvIC/iTIgBg9AnrNgIAACJIA4AvQAHhdgIhXID2ATAnrNgIA3AEAlsUkIAAAXQgcAJgbAHQj9BGjmgIAnrPpIBIFiEgFsAkoIAABgAlseOIAAGaQNUi/LbDrAlseOIDnAAAlsU7IAAJTAHQJJQgvATgTA+QgJg9gngIAIEI4IANBDAr1NMIEKAUEgLmAtAIgDAbEgOGAmIIAAG4ICgAAIBvAAAPHMwQglHgiPF0EgIpAmIIAnGrEgKuAmIIg4G4EgFsAnuQNlFXLKnxAKTeOIIwAAMAxcAAAEgsxgfxMAAAA51AwuaEI8DAAEgt0AeOIdGAAEgsxgfxMBsEAAAIE2AA");
	this.shape_49.setTransform(228.7,136);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999966").s().p("Al8OHIiFAAIjYAAIAAn7IAAkKIAAj6QDmAID9hGIA3gPIAAJRIAAGaIAABhgAJ3lHIhHAAIhzAAIAAoeQCBBnB/iIIAdI/g");
	this.shape_50.setTransform(211.5,289.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6666").s().p("AhVgmQAagaA7AaQA7gTAbATQgkBagsAAQgqAAgxhag");
	this.shape_51.setTransform(270.5,162.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF66CC").s().p("AhvAeQgMgMAAgSQAAgQAMgNQAMgMASAAQARAAAMAMQANANAAAQQAAASgNAMQgMAMgRAAQgSAAgMgMgABNAmQgMgCgKgKQgMgMAAgRQAAgQANgMQAMgJAWAAIADAAIAFAAQgOACAAAcIAAAJIAoAOQgDAHgHAGQgLANgSAAIgIgBg");
	this.shape_52.setTransform(268,151.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC99").s().p("AqqYOIAAm3IDYAAIg4G3gAlNRXIC9AAIAABlIAAE+IiWAHgAuwM3QgMgxBqgxIAAh5IAAkKIAAoPIDjhkIBWgmIAAieIEKAVIAACJIA4AuIA3AvIC+iTIgBg9ICRAQIAIBQIlGFNIAAAWIg3AQIhIlgIBIFgQj9BGjmgIIA7l4Ig7F4IgkD7IgnEKIgTCDQAygUAeBsQg5A7g+AAQg+AAhDg7gAHsBwIAAjnIBzAAIgdDngAKmh3IBkAAIAADdIhQAEgAFikQQgHgZA5gbIAAnlIB3g0IAugVIAAhTIAygIQhKgDg6gyQhVkxDchlQCKA5AgB4QgmAHgjAiIgCADQgMAKgJAOIAXAAIASAYIgpgPIAAgJQAAgcAOgCIgFAAIgDAAQgWAAgLAJQgNAMAAAQQAAASALAMQAKAKAMACIAIABQASAAAMgNQAGgGAEgHIA3BOQgGAcgKAfIAAACQgfAZgiAOQgkANgrgBIgNAAIANAAQArABAkgNIAABnIAZB5IgZh5IAigZIgDAMIALgTIBphRIghgsIghguIg3hOIgSgYIgXAAQAJgOAMgKIACgDQAjgiAmgHQAMArgBAyIAtA+IBiCDIjSDQIANBDQh/CHiChmIAfjIIgfDIIgxFXQAbgLAPA5QgeAgghAAQghAAgjgggAJqqWQATg/AvgTQgvATgTA/QgJg+gngIQAnAIAJA+gAInxLQBjC3BKi3QgcgTg7ATIACgBQAcgRAXAAIAAAAIAAAAQARAAAOAJIACABIAAAAIABAAIgBAAIAAAAIgCgBQgOgJgRAAIAAAAIAAAAQgXAAgcARIgCABQgegNgVAAQgWAAgNANgAH0y2QgMANAAARQAAASAMAMQAMAMASAAQASAAAMgMQAMgMAAgSQAAgRgMgNQgMgMgSAAQgSAAgMAMgAL/y4IAkAuIgkguIAZgvIgZAvgAJ0yLQgegMAAgSQAAgNAPgPQgPAPAAANQAAASAeAMgAJVz5QgvghgWAhQALgRARAAQARAAAYARgALZz/QgugegfAeQAPgPAUAAQATAAAXAPgAMYznIAAAAgAJ54MIgGAAIgFAAIAKgBIAUABQBBAFA0ApQhAgshIgCgAJu4MQg0AJgqAQQAsgXAygCg");
	this.shape_53.setTransform(206.7,269);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF33").s().p("ABULsIj1gTIg3gEIkKgUImvghQiF6ELvEMQCYgoB2AbQIDByifVxgAMgEbIAIgHIgMATgAM+CmIABgCQAKgfAGgdIAhAuIgDAGQgNAbg4BdIgIAHgAHNBKQgyh4AhhwQAihyBfg3IAKgFQApgQA0gJIAFAAIAGAAQBJACBAAsQBQA1AWBSQAIAfAAAkQgBBpgVBBIgJAdIgug+QACgxgMgrQggh4iLg5IAAh0IAAB0QjcBkBWExIAcBzQg8hUgxh5gAMoEUIAAAAg");
	this.shape_54.setTransform(201.3,149.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#99CCCC").s().p("AmUWxQhJg3ieozIFHlNIgIhQIiRgQID3ASQCf1xoEhyQAahQAfhLQDSn+EoAAQEoAADSH+QDSIAAALSQAACwgMCjQglHhiPFzIgSArQg0B/g6BgQiuEgjeAAQjeAAiukggAABLdIAADoIBWAAIAdjoIBHAAIAUDiIBQgEIAAjeIgdo/IgNhDIDSjPIhiiDIAKgdQAVhCAAhpQAAgkgIgfQgVhShRg1Qg0gphBgFIgUgBIgKABQgyACgsAXIgKAGQheA2giByQggBwAxB5QAyB5A7BUIgchzQA5AyBKADIgyAIIAABTIguAVIh2AzIAAHlQg5AbAHAZQBHBAA8hAQgPg5gbALIAwlXgArCI7QAHhcgIhYID2ATIABA9Ii/CTgADciEQAigOAfgZIgfB1IgiAZgAFLi1IADgFIAhAsIhpBRQA4hdANgbg");
	this.shape_55.setTransform(255.8,183.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF3366").s().p("EhCYAk0MAAAhJnIGsAAIGoGEIpnAAMAAABDjgEAVIAkcIAAtUIj8AAQAMijAAiwQAArUjSn+QjRn+kpAAQkpAAjRH+QgeBLgbBPQh1gbiYAoQrwkLCGaEIGuAhIAACdIhWAnIjiBkIAAIQI8EAAIy4AAMAAAhCcIJdAAIJbInMAAAA51MAAAg51MBsEAAAMhsEAAAIpbonMB1fAAAIAAInMAAAA51gEAVIAkcImwAAQCPl0AlngID8AAIAANUgEgMlAkcIAkj7IAAD7gAllaBIAAiJIA2AEQAJBXgIBdgEgqsgVZgEg0HgeAgEg1EgevImomEMB+FAAAIAAGEg");
	this.shape_56.setTransform(215.4,69.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AAWAZIAcgZAABARIAAgpAgbAVIgWgo");
	this.shape_57.setTransform(276.7,138.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(2,1,1).p("ABYgkQhMC4hji4QAbgaA8AaQAzggAlAY");
	this.shape_58.setTransform(270.9,163.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("Eg+YgvXMB98AAAIAAJnEA/zglwIAAE8MAAAA6vMgs8AAAIm3AAQgJAWgJAWQg1CBg7BiQixEkjhAAQjiAAiwkkQhKg5iho7IFMlTIgIhRIiTgQID6ASQCi2GoLh0QAahRAfhMQDVoHEtAAQEtAADVIHQDVIHAALeQAACzgMCmIEAAAIAANgIAAEPIAAHNAlPqGQh4gbiaAoQr8kQCIaeIG1AiIAACfIhYAoIjmBlIAAIYIAAEPIAAB6QhsAyAMAyQCJB5Bzh5QgehugzAVIAUiFIBMAAIAAICIDbAAICHAAIDAAAIAABnIAAFDIiZAHIADAmAJgDGQADgOAFgQQAWhDAAhqQAAgkgHgfQgWhUhSg1QhCgshJgDIgGAAQgDAAgCAAIAAB2QCNA5AhB5QAMAsgCA0IgkgvIAagxADwERIAeB1Qg9hVgzh7Qgyh7AhhyQAihzBhg3IAKgGQAqgPA1gKAGYARQAIgIAIgDQANgGAQACQAKACALAGQAFADAHAEAFfAVQgvgggWAgAInDUIg6hPIgRgXIgXAAQAIgOANgLQABgBABgCQAjgjAogHAHUE6QglANgrAAQgHAAgHAAQhLgEg7gyAEVG4Ih6A2IAAHsQg5AbAHAaQBIBAA9hAQgPg6gcALIAzldIAAInIB0AAIBIAAIAUDmAFEFPIAABVIgvAUIgfDLAHUGkIAigbIAJgHIBphRIggguAHUGkIAZB6IDWjTIhjiFIgvg+AHUE6IAABqAInDUQgHAdgKAgIgBACQgeAZgjAOAH/GCQA5hdANgcQACgDABgDIghgvAFwBKQgjAoAyATAIVETIgfB2AF5iKQjgBmBXE1At4P+Ig7F/IAAD+IglAAIAlj+Av/eKIAnkPAuzZ7IAAEPAH6JiQiBCJiDhoAD2SqIAADsAFqSqIgdDsAIYSqIAADhAGySqIBmAAAH6JiIAeJIAnZQGIA4AwIDCiWIgBg+AoRNLIAACLIA4AwQAHhegIhZID6ATAoRNLIA3AEAmRUWIAAAYQgcAIgbAIQkBBGjqgHAoRPWIBJFoEgGRAkqIAABiAmReKIAAGgQNhjCLnDvAmReKIDrAAAmRUuIAAJcAG3IwQguASgUBAQgJg+gmgIAHtIeIANBEAsgM3IEPAUEgMQAtKIgEAdEgOzAmMIAAG+ICjAAIBwAAAO3MbQgmHniRF5EgJRAmMIAnGxEgLYAmMIg4G+EgGRAnzQNyFdLWn5AJ+eKII5AAMAyOAAAEA/zgg0IE7AAEgt+AZ7I23AAMAAAg/dIAAgOEhFEgliIAAp1IGsAAEgt+gg0Ilak8Egz2glwIqipnEg7sAeKIMrAAIsUROEgt+gg0MAAAA6vAxeZ7I8gAAEgvBAeKIdjAAEgt+gg0MBtxAAA");
	this.shape_59.setTransform(231.6,140.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999966").s().p("AmCOVIiHAAIjcAAIAAoCIAAkPIAAj9QDqAHEBhGIA4gQIAAJbIAAGgIAABigAKAlMIhIAAIh0AAIAAonQCDBoCCiJIAdJIg");
	this.shape_60.setTransform(210.9,292.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6666").s().p("AhXgnQAbgaA8AaQA8gTAcATQgmBcgsAAQgrAAgyhcg");
	this.shape_61.setTransform(270.9,164.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF66CC").s().p("AhxAdQgMgLAAgSQAAgRAMgNQANgMARABQATgBAMAMQAMANAAARQAAASgMALQgMANgTAAQgRAAgNgNgABOAmQgMgCgKgKQgMgMAAgRQAAgSANgKQAMgJAXgBIACAAIAFAAQgOACAAAdIAAAKIApAMQgEAIgGAGQgMANgSAAIgIgBg");
	this.shape_62.setTransform(268.3,152.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC99").s().p("Aq1YmIAAm+IDcAAIg5G+gAlSRoIDAAAIAABnIAAFDIiZAHgAu/NEQgNgyBtgyIAAh6IAAkPIAAoXIDlhlIg7F+IglD+IgnEPIgUCFQA0gVAdBuQg5A8g/AAQg/AAhEg8gAH0ByIAAjrIB0AAIgdDrgAKwh5IBmAAIAADgIhRAFgAq1BZIA7l+IBYgoIAAifIEPAUIAACLIA4AwIA4AwIDBiWIAAg+ICTAQIAHBRIlKFTIAAAXIg4AQIhJlnIBJFnQjoA/jVAAIguAAgAFnkUQgHgaA6gbIAAnsIB5g2IgfDLIgyFdQAbgLAPA6QgeAgghAAQgiAAgkgggAp6klgAH0qgIAfjLIAvgUIAAhVIAzgIQhLgEg7gyQhXk2DfhmQCNA5AhB6QgnAHgjAjIgDADQgMALgJAOIAYAAIARAXIgpgOIAAgJQAAgeAOgBIgFAAIgDAAQgXAAgLAKQgNAKAAASQAAASAMAMQAKAKAMACIAIABQASAAAMgNQAGgGAEgIIA5BPIg5hPIgRgXIgYAAQAJgOAMgLIADgDQAjgjAngHQAMAsgCA0IgkgvIAagxIgaAxIAkAvIAvA+IBjCFIjWDTIAOBEQhKBOhKAAQg4AAg5gtgAJ0qhQAThAAvgSQgvASgTBAQgJg+gngIQAnAIAJA+gALSt/IAZB6IgZh6IAigbIgDANIAMgUIBqhRIghguIghgvQgHAdgKAgIAAACQgfAZgjAOIAABqgAKCvcQArAAAlgNQglANgrAAIgNAAIANAAgAIwxcQBkC5BLi5QgcgTg8ATIACgBIAEgDQAagOAWgBIAAAAIABAAQARABAOAIIABABIABABIgBgBIgBgBQgOgIgRgBIgBAAIAAAAQgWABgaAOIgEADIgCABQgegNgWAAQgWAAgNANgAH8zJQgMANAAASQAAARAMAMQANANARAAQASAAAMgNQANgMAAgRQAAgSgNgNQgMgMgSAAQgRAAgNAMgAJ+yeQgegLAAgTQAAgNAOgQQgOAQAAANQAAATAeALgAJe0OQgwghgWAhQALgQASAAQARAAAYAQgALk0SIgMgHIAcgaIgcAaQgLgGgKgCIAAgrIAAArIgBAAIgHgBIgBAAIgBAAQgKAAgJAFIgWgqIAWAqQgIADgIAIQAIgIAIgDQAJgFAKAAIABAAIABAAIAHABIABAAQAKACALAGIAMAHgAMlz7IAAAAgAKm0dgALD0hIAAAAgAKD4kIgHAAIgFAAIALgBIATABQBDAFA1AqQhBgshJgDgAJ34kQg0AKgrAPQAsgXAzgCg");
	this.shape_63.setTransform(206.1,271.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF33").s().p("ABVL3Ij5gSIg3gEIkPgVIm1ghQiI6fL8ERQCagpB4AbQIKB1ihWGgAMsEfIAfh3IABgBQAKggAGgdIAiAvIgDAFQgOAcg5BeIgIAHIAIgHIgMAUgAHUBLQgyh6AhhyQAihzBhg4IAKgFQAqgQA1gKIAAB3QjgBlBXE2IAeB0Qg9hVgzh7gANmAdQACgzgMgrQggh6iNg5IAAh3IAFAAIAGAAQBJADBCAsQBSA1AWBUQAHAfAAAlQAABrgWBCIgJAegAKvlrg");
	this.shape_64.setTransform(200.6,150.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#99CCCC").s().p("AmbXIQhJg5iho7IFMlSIgIhSIiTgQID7ATQCh2GoMh1QAahRAghMQDVoHEtAAQEsAADVIHQDWIHAALeQAACzgNCmQglHoiSF4IgSAsQg0CCg7BhQixEljhAAQjiAAixklgAABLpIAADsIBXAAIAejsIBHAAIAVDlIBRgEIAAjhIgdpIIgNhFIDVjSIhjiEIAJgeQAVhDABhrQAAglgHgfQgXhUhSg1Qg1gqhCgFIgTgBIgLABQg0ACgsAYIgJAFQhgA4giBzQghByAyB7QAyB7A9BVIgdh0QA6AyBLAEIgyAHIAABVIgvAVIh5A0IAAHtQg6AbAHAaQBJBAA8hAQgPg6gbALIAxlegArOJFQAIhfgIhYID6ASIABA+IjDCWgADfiHQAjgNAfgaIgfB3IgjAagAFQi4IAEgFIAgAtIhqBSQA5heANgcg");
	this.shape_65.setTransform(256,185.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF3366").s().p("EAVgAkpIAAtgIkBAAQANilAAizQAArgjVoGQjVoGktAAQkuAAjUIGQgfBNgaBQQh4gbiaAoQr8kQCIafIG1AhIAACgIhYAnIjmBmIAAIXI8gAAMAAAg6vIlak8IFaE8MAAAA6vI23AAMAAAg/cIgPAAIAAp1IGsAAMB98AAAIAAJmIAPAAIAAE8MhtxAAAMBtxAAAMAAAA6vgEhCMgazIAAgPgEgxNgbCIqipmgEAOpAkpQCRl4AlnoIEBAAIAANggEgMvAkpIAlj9IAAD9gAloaFIAAiLIA3AEQAIBZgHBegARfXJgEBCcgWGg");
	this.shape_66.setTransform(214.7,71.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,1,1).p("AhZAVIgWgkAgxAdIAYgwABTAYIAdgZAhIAUIAAgwAAhAUIgXgoAA+AQIAAgp");
	this.shape_67.setTransform(271,138.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(2,1,1).p("ABYgkQhLC4hki4QAbgbA8AbQA0ghAkAY");
	this.shape_68.setTransform(271.2,163.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("EA1DgnjIDcAAACjFwIEBAAIAANhIAAEOIAAHPAxkw0QAahRAfhMQDWoHEtAAQEuAADWIHQDUIIAALfQAACzgNCnQglHoiQF5QgJAWgJAVQg1CCg7BhQixEljjAAQjiAAixklQhKg4igo9IFMlSIgIhSIiTgPID6ASQCi2IoMh1Qh4gbiaApQr8kRCHahIG1AhIAACgIhXAnIjmBmIAAIZIAAEOIAAB7QhtAyAMAyQCJB5B0h5QgfhugzAWIAUiHIBNAAIAAIDIDbAAICIAAIDAAAIAABoQN0FdLVn5EAsDATRMglfAAAIm2AAAGkXfMAlfAAAAi0jlQAFgOAFgQQAVhDABhrQAAglgIgfQgWhUhSg2QhBgshKgDIgGAAQgDAAgCAAIAAB4QjgBlBXE3IAeB1Qg+hVgyh8Qgzh6AihzQAihzBhg4IAKgGQAqgPA1gLAmzmWQgFgEgGgDQgMgHgLgCQgJgBgIACQgLADgIAMAjsjXIg5hPIgRgXIgYAAQAJgPAMgLQABgBACgBQAjgkAngGQAMArgDA0IgjgvIAagwAl7mbQAHgHAJgEQANgHAQADQAJADAMAFQAGADAGAEAk/hxQgmANgqAAQgIAAgGAAQhKgEg8gyAn+ANIh6A1IAAHtQg5AbAHAaQBHBAA+hAQgQg6gbALIAzleIAAIpIB0AAIBIAAIAVDmAkcgiIAIgHQA5hdANgdQACgCABgDIghgvQgHAdgKAgIAAACgAk/gHIAZB5IDWjSIhkiFIgvg/Ak/gHIAjgbAnPhdIAABWIgvAUIgfDKAk/hxIAABqAkUgpIBqhRIghguAmjlhQgkAnAzAUAj9iYQgfAZgjAOAmao2QCNA5AhB6A6NJSIg7GAA7ITRIgmAAIAmj/IAAD/IAAEOA8VXfIAnkOAkYC3QiCCJiDhpAmpMAIgeDrAodMAIAADrAj7MAIAADhAlhMAIBmAAAkYC3IAdJJAzuJbIA4AvIDCiWIAAg9A0mIrIA4AwQAHhfgIhYID7ATA0mGgIA3AEA0mGgIAACLIBJFpQkBBGjqgIAylNqIAAAYQgcAKgcAIAyleBIAABhAylXfIDqAAAylXfIAAGiQNjjDLmDwAylOCIAAJdA42GLIEQAVAlcCEQguASgTBAQgKg+gngIAkmByIAOBFAiUXfII4AAA3tfiQhcDHACE7A7IfiIAAICA1lfiQAwD6gjEIEgSlAhKIAAGaA9zTRI6rAAEg4eAXfIarAA");
	this.shape_69.setTransform(310.7,182.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999966").s().p("AmCOWIiIAAIjcAAIAAoDIAAkPIAAj9QDrAIEBhHIA3gRIAAJcIAAGhIAABigAKBlMIhIAAIh0AAIAAopQCCBpCDiJIAcJJg");
	this.shape_70.setTransform(211.3,292.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF6666").s().p("AhXgnQAbgaA8AaQA8gTAcATQgmBcgsAAQgqAAgzhcg");
	this.shape_71.setTransform(271.2,163.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF66CC").s().p("AhxAeQgMgNAAgRQAAgRAMgMQANgNASAAQARAAAMANQANAMAAARQAAARgNANQgMANgRAAQgSAAgNgNgABPAmQgNgCgKgKQgMgMAAgQQAAgTANgKQAMgKAWAAIADAAIAFAAQgNACAAAdIAAAJIAoAOQgDAHgHAGQgMAOgSAAQgEAAgDgCg");
	this.shape_72.setTransform(268.7,151.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC99").s().p("AlEZKQAjkIgxj6IDAAAIAABnIAAGbgAq1ZKIAAoCIDcAAQhcDGACE8gAvAMjQgNgxBtgzIAAh6IAAkPIAAoXIDmhnIBYgmIAAihIEPAWIAACLIA4AvIA5AwIDBiWIgBg+ICTAQIAIBSIlLFSIAAAYIg3ARIhKloIBKFoQkCBGjqgIIA7mAIg7GAIglD+IgnEPIgUCGQAzgWAeBuQg6A9g/AAQg/AAhEg9gAH1BRIAAjrIB1AAIgeDrgAKyiaIBlAAIAADhIhRAEgAFok2QgHgaA6gbIAAnsIB5g2IAvgVIAAhVIAzgIQhLgEg7gxQhXk3DfhmQCOA6AgB5QgnAHgjAkIgDACQgMALgIAOIAXAAIARAYIgogPIAAgJQAAgdANgCIgFAAIgDAAQgWAAgMAKQgNAKAAATQAAARAMAMQAKAKANACQADACAEAAQASAAAMgOQAHgGADgHIA5BOIg5hOIgRgYIgXAAQAIgOAMgLIADgCQAjgkAngHIgaAxIAkAvIgkgvIAagxQAMAsgCA0IAvA/IBkCFIjWDSIANBFQiCCJiDhpIAfjKIgfDKIgyFfQAbgLAPA5QgfAgghAAQghAAgkgggAJ1rDQAUhAAugTQguATgUBAQgJg+gngJQAnAJAJA+gALTuiIAaB6Igah6IAjgaIgEANIANgUIBphRIghguIghgwQgGAdgKAhIgBABQgeAagkAOQglANgrgBIgNAAIANAAQArABAlgNIAABpgAIxx+QBkC5BLi5QgbgUg8AUIABgBIAAAAIABgBIAAAAIACgBIAAAAIACgBIAAgBIABAAQAZgOAVAAIABAAIAAAAQARAAAPAJIAAAAIABABIgBgBIAAAAQgPgJgRAAIAAAAIgBAAQgVAAgZAOIgBAAIAAABIgCABIAAAAIgCABIAAAAIgBABIAAAAIgBABQgfgOgWAAQgWAAgNAOgAH9zrQgMAMAAARQAAASAMANQANANASAAQARAAAMgNQANgNAAgSQAAgRgNgMQgMgNgRAAQgSAAgNANgAJ/zAQgegMAAgSQAAgNAOgQQgOAQAAANQAAASAeAMgAJf0xIgKgGIAXgxIgXAxQgNgIgLgCIAAgwIAAAwIgBAAIgDAAIgCAAIAAAAIgJABIgBAAQgMAEgIALQAIgLAMgEIABAAIAJgBIAAAAIACAAIADAAIABAAQALACANAIIAKAGgALl01IgMgHIAdgaIgdAaQgLgFgKgDIAAgrIAAArIgBAAIgIgBIgBAAIAAAAQgJAAgHADIgBABIgCAAIgWgoIAWAoQgIAFgIAHQAIgHAIgFIACAAIABgBQAHgDAJAAIAAAAIABAAIAIABIABAAQAKADALAFIAMAHgAIt1AIgWgkgAMm0eIAAAAgAJV03IAAAAgAKn1BgAI91BIAAAAgALE1EIAAAAgAKE5IIgGAAIgGAAIALgBIATABQBDAGA2ApQhCgshJgDgAJ45IQg0AKgrAQQAsgXAzgDg");
	this.shape_73.setTransform(206.4,274.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF33").s().p("ABVL5Ij5gTIg4gEIkPgVIm2ghQiH6hL8ERQCbgpB4AbQILB1iiWIgAMtEfIAJgHIgNAUgANMCpIABgCQAKggAGgdIAhAvIgCAFQgOAdg4BdIgJAHgAHUBLQgyh5AhhzQAjhzBhg4IAJgGQArgPA0gLIAAB4QjfBlBXE2IAdB1Qg9hVgzh8gAM2EYIAAAAgANnAdQACgzgMgrQggh6iOg5IAAh4IAGAAIAGAAQBJADBCAsQBSA2AVBUQAJAfAAAlQgBBrgWBCIgJAegAKvlsg");
	this.shape_74.setTransform(200.9,150.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#99CCCC").s().p("AmbXKQhKg5iho8IFNlSIgJhSIiSgQID6ASQCi2IoMh1QAahQAfhNQDWoHEtAAQEtAADVIHQDWIIAALfQAACzgOCnQgkHoiSF5IgSAsQg0CBg7BiQixEljiAAQjiAAixklgAABLqIAADsIBXAAIAejsIBIAAIAUDmIBRgFIAAjhIgcpJIgOhFIDWjSIhkiFIAJgdQAWhDABhsQAAgkgIgfQgWhVhSg1Qg1gqhDgFIgTgBIgLABQg0ACgrAYIgKAGQhgA3gjBzQghBzAyB7QAzB7A9BWIgdh1QA6AxBLAEIgyAIIAABVIgwAVIh4A0IAAHtQg5AbAGAaQBIBAA9hAQgPg6gbAMIAxlfgArOJFQAGhfgHhXID7ASIAAA+IjCCWgADgiHQAjgNAegaIgeB3IgjAagAFRi4IADgGIAgAuIhpBSQA4heAOgcg");
	this.shape_75.setTransform(256.4,184.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF3366").s().p("AMya6IAAthIkBAAQANinAAizQAArfjVoIQjWoHktAAQktAAjWIHQgeBNgaBQQh5gaiaAoQr8kQCHagIG1AhIAACgIhXAnIjmBnIAAIYI6rAAMAAAg1zMBkhAAAMAAAA1zgAMya6Im3AAQCSl5AknoIEBAAIAANhgA1fa6IAlj/IAAD/gAuYQUIAAiLIA3AFQAIBXgHBfg");
	this.shape_76.setTransform(270.9,133.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},176).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},11).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},10).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},10).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},11).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},10).to({state:[]},10).wait(530));

	// date
	this.instance_3 = new lib.boysface();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.1,89.3,1,1,0,0,0,48.4,53.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaEArWAF8QAFAMACANQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOEArWAF8QADgBAEAAIAAAaAqxhBQAEAAADAAQDdgFDpAAQTeAANyCNQDyAnCwArQGXBmAxB9AyujyQAHBFAKA2QABACAAABIAAABQAHAlAIAeQAjB+A5gBQAnAAAdg9QACgFACgEQAMgaALglQAFgTAFgXAvGhpIA6AuIBaieICBCYIBYBnIl4EOIgzApQAnACAeAKQAqANAAATQAAASgqANQgqAOg7AAQg7AAgqgOQgqgNAAgSQAAgTAqgNQAcgJAigDAvSg4QAjgBAjgCICKBzIjtDPIhCAAIgzAAIAZBWAvHhmQABgBAAgCQAMg5AKhMA1/mtIHFA9ICICXAyujyQBehBCgBFAyujyQCSA5Bsg1A7vmrIB6CuIBOhbQBfgbA1g9IAUADIheCwIhKhbA7amzIgVAIIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQFLgiF0gUA7amzQBLBIBoATA2TmwIAAi4IlHgLIAADAEghZgAPIEMAVAwEFdIg6AuIgNguAwxEHIAAi6EArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_77.setTransform(282.4,202.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#99CCFF").s().p("AhkFXQgqgNAAgTQAAgSAqgOQAbgIAjgDIANAtIA5guQAnADAeAJQAqAOAAASQAAATgqANQgqANg7AAQg6AAgqgNgABci+IABgEIAAgHQAEgDABgGQABgIgIgIQgGgHgFgBIgKgBIgKAAQgGAAgPgDQgUgGgPACQgWAGgMgBQgNgEgIAAQgIAAgGADIgNAHQgEABgKAAQgKAAgEADQgFADgBAHQgGAEgBAGIgBAHQgKg3gHhFIABABIAGACQBHAbA+AAIAAAAIAAAAQA7AAAzgYIABgBIAAAAIACAAQgKBLgNA6IAAACIgBgGgAADkmQg+AAhHgbIgGgCIgBgBQBehACfBFIgCAAIAAAAIgBABQgzAYg7AAIAAAAIAAAAg");
	this.shape_78.setTransform(176.4,210.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AgKB3QgFgBgDgDIgCgCIAAgBIgBgBIAAAAIgBgBQgTgJgJgRIgGgKIgOgSQgEgHgEgOIgGgWIgEgJIgGgXQgFgMAAgFIAAgDIgBgDIgCgFIAAgKIgFgPIgBAAIAAgCIAAgCIAAgHQABgGAHgEQABgHAFgDQAEgDAJAAQALAAAEgBIAMgHQAHgDAIAAQAHAAAOAEQAMABAWgGQAPgCAUAGQAPADAFAAIAKAAIAKABQAFABAHAHQAIAIgCAIQAAAGgEADIAAAHIgCAEIABAGIAAADIgBACIgFAPIgDAQQgBAKgEAGIgDADQACACgBADQAAAFgDAGIgGAJQgDAFgDAPIgCAJIgEAJIgBABIgEADIgDACIAAABQgMAfgTALQgJAGgMACIAAAAIgFADIgBAAIgCABIgBAAIgEAAg");
	this.shape_79.setTransform(175.2,198.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AqSDHIAIkNIFhiOIAWgIQBKBIBpATQBegbA0g9IAUADIhdCwIhJhbIhOBbIh7iuIB7CuIBOhbIBJBbIBdiwIHFA9ICICXIhaCdIg6guQAMg5AKhLQighFheBBQAIBEAKA2IAAADIAAABQAHAlAJAfQl0ATlKAjIgBAAg");
	this.shape_80.setTransform(134.6,180.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC99").s().p("AEPHSIgZhWIAzAAIBBAAIDtjPIiKh0IBaidICBCWIBZBoIl4EPIgzAoIg6AugAr+BkIEMAXIj9AeIgRACgAl/k/IAAi/IFGALIAAC4Qg1A9heAaQhpgShKhJg");
	this.shape_81.setTransform(145.4,190.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#773300").s().p("EghPAFYQmWhCjahOQj+hagEhqIAAgGQAGiQHKhyQCwgsDygnQBqgRBvgPIARgCID9gfIABAAQFLgjF0gTQAjB/A5gBQAmgBAeg9IAEgJQAMgbAKglIBHgCICJB0IjsDPIhCAAIAAi6IAAC6IgzAAIAZBWQgjADgbAIQgqAOAAASQAAATAqALQAqAOA7AAQA7AAAqgOQAqgLAAgTQAAgSgqgOQgegJgngDIAzgoIF4kPIhZhoIAIAAQDdgFDoAAQTeAANyCOQDyAnCwAsQGXBlAyB9QAFANABAMIABAJIgBAJQgUDEtdCLQtyCOzeAAQzdAAtyiOg");
	this.shape_82.setTransform(259.6,243.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("EgtAAM9IAA2NQDbBOGWBBQNxCPTfAAQTdAANyiPQNciKAVjEIAAZMgEAs7gM7IAGgBIAAAaQgCgNgEgMg");
	this.shape_83.setTransform(272.4,323.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQtxiNzdAAQjqAAjdAFIgHAAIiBiYIiIiXInFg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAvIhiIABgCIAAgCIABgDIA6AuIhGADIAKgqg");
	this.shape_84.setTransform(282.4,202.3);

	this.instance_4 = new lib.glass();
	this.instance_4.parent = this;
	this.instance_4.setTransform(127.3,156.2,1,1,0,0,0,14.3,35.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaEArdAGVQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOEArWAF8QADgBAEAAIAAAaEArWAF8QAFAMACANAsFhKQBYAJADAAQDdgFDpAAQTeAANyCNQDyAnCwArQGXBmAxB9AwkgrIgBgBIhzgxIkSiBQgKgFgIgFAwkgrQABAAAAAAAvHhmQABgBAAgCIAAABIgBAUIAAAHIjShTIinhDIiNg4IACAIIAJAnIABAGAuMg7Ig0gPIgHgDAvGhoIA6AtIBaieIAtCPIAtCPIlMhwA1/mtIHFA9ICICXA7amzIgVAIIB6CuIBOhbQBfgbA1g9IAUADIhOCSIgDAGIgGALIgHAMIAAABIhKhbA3NkbIAAAAA7amzQBLBIBoATA2TmwIAAi4IlHgLIAADAA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQEEgbEdgSQBOgEC5AAEghZgAPIEMAVEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_85.setTransform(282.4,202.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCC99").s().p("AF1DrIABAAIgCAAIhzgyIkRiBIgSgJIgHgEIgIgoQAlAKBlAmICnBDIDSBUIAHACIA0AQIBaieIAtCPIAtCPgAq/EHIEMAXIj9AeIgQACgAg2ACIgGALQgWgQAcAFgAlAicIAAi/IFGALIAAC4Qg0A9hfAaQhpgShKhJg");
	this.shape_86.setTransform(139,174.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AqSDHIAIkNIFhiOIAWgIQBKBIBpATIhOBbIh7iuIB7CuIBOhbQBegbA0g9IAUADIHFA9ICICXIhaCdIg6gtIAAgBQAMg5AKhLQighFheBBQAGA3AQAaIiohCIiLg4ICLA4QhmgngjgJIgCgIIACAIIAHAoIABAFIgBgFIAHADIARAKIETCAQAFAYBuAZIABABQi6AAhOAFQkcARkDAcIgBAAgAgXgmIABAAIAGgNIAGgLQgcgGAWARIgGANIgBAAIhJhbgAgKg+IADgGIABAAIgBAAIBNiSIhNCSgAGiCrIgBgBIABABIAAAAgAGhCqIAAAAgAgHhEg");
	this.shape_87.setTransform(134.6,180.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#773300").s().p("EghPAFZQmWhBjahOQj+hagEhrIAAgFQAGiQHKhyQCwgsDygnQBqgRBvgQIARgCID9geIABAAQEDgcEdgRQBPgFC5AAIFMBxIgtiQIBbAJQDdgFDoAAQTeAANyCOQDyAnCwArQGXBmAyB9QAFAMABANIABAJIgBAJQgUDEtdCKQtyCPzeAAQzdAAtyiPg");
	this.shape_88.setTransform(259.6,243.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQtxiNzdAAQjqAAjdAFIhbgJIgtiPIiIiXInFg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAu/hKQgFgFgCgEIAAgVIA6AtgAvIhiIABgCIAAgCIABgDIAAABIAAAVQgDgHABgIg");
	this.shape_89.setTransform(282.4,202.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaEArWAF8QADgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOEArWAF8QAFAMACANAqxhBQAEAAADAAQDdgFDpAAQTeAANyCNQDyAnCwArQGXBmAxB9AyujyQAHBFAKA2QABACAAABIAAABQAHAlAIAeQAjB+A5gBQAnAAAdg9QACgFACgEQAMgaALglQAFgTAFgXAvHhmQABgBAAgCIA6AuIBaieAvSg4QAjgBAjgCICKBzIjtDPIhCAAIgzAAIAZBWAvGhpQAMg5AKhMAyujyQCSA5Bsg1AyujyQBehBCgBFA1/mtIHFA9ICICXICBCYIBYBnIl4EOIgzApQAnACAeAKQAqANAAATQAAASgqANQgqAOg7AAQg7AAgqgOQgqgNAAgSQAAgTAqgNQAcgJAigDA7amzIgVAIIB6CuIBOhbA2TmwIAUADIheCwIhKhbQBfgbA1g9IAAi4IlHgLIAADAQBLBIBoATA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQFLgiF0gUEghZgAPIEMAVAwEFdIg6AuIgNguAwxEHIAAi6EArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_90.setTransform(282.4,202.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#99CCFF").s().p("AhkFXQgqgNAAgTQAAgSAqgOQAbgIAjgDIANAtIA5guQAnADAeAJQAqAOAAASQAAATgqANQgqANg7AAQg6AAgqgNgABci+IABgEIAAgHQAEgDABgGQABgIgIgIQgGgHgFgBIgKgBIgKAAQgGAAgPgDQgUgGgPACQgWAGgMgBQgNgEgIAAQgIAAgGADIgNAHQgEABgKAAQgKAAgEADQgFADgBAHQgGAEgBAGIgBAHQgKg3gHhFIABABIAGACQBHAbA+AAIAAAAIAAAAQA7AAAzgYIABgBIAAAAIACAAQgKBLgNA6IAAACIgBgGgAADkmQg+AAhHgbIgGgCIgBgBQBehACfBFIgCAAIAAAAIgBABQgzAYg7AAIAAAAIAAAAgAiJlEIAAAAg");
	this.shape_91.setTransform(176.4,210.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AqSDHIAIkNIFhiOIAWgIQBKBIBpATIhOBbIh7iuIB7CuIBOhbIBJBbIBdiwIHFA9ICICXIhaCdIg6guQAMg5AKhLQighFheBBQAIBEAKA2IAAADIAAABQAHAlAJAfQl0ATlKAjIgBAAgAhgiBQBegbA0g9IAUADIhdCwgABGjWg");
	this.shape_92.setTransform(134.6,180.8);

	this.instance_5 = new lib.girlsface();
	this.instance_5.parent = this;
	this.instance_5.setTransform(455,94.8,1,1,0,0,0,46.6,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_3}]},238).to({state:[{t:this.shape_89},{t:this.shape_83},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.instance_3},{t:this.instance_4}]},5).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_92},{t:this.shape_79},{t:this.shape_91},{t:this.shape_90},{t:this.instance_3}]},19).to({state:[{t:this.shape_82},{t:this.shape_84},{t:this.shape_83},{t:this.shape_91},{t:this.shape_79},{t:this.shape_92},{t:this.shape_81},{t:this.shape_90},{t:this.instance_3},{t:this.instance_5}]},21).to({state:[]},67).wait(418));

	// Thought bubble
	this.instance_6 = new lib.boysface();
	this.instance_6.parent = this;
	this.instance_6.setTransform(123.1,89.3,1,1,0,0,0,48.4,53.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#CC0000").ss(5.6,1,1).p("AiYgYQCqCSCHil");
	this.shape_93.setTransform(321.3,111.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2,1,1).p("AjdGFQBtBMB8ACQAJAAAJAAQALgBAOgBQBLgHBAgbQACgCABAAQA/geAzg0IgmDcQBnjAAUg1QACgGABgFQApiNAFgcQAdh9gOjCQgGhCgUg3Qg0iWidhUQgXgNgXgKQhqguh1AFAArhkQANgPAOgJQAXgOAeADQAQADAXAIQALAFAMAGAgkl6QEIBSBODYQAcBOgCDpQgHA2gOA7AjdGFIBJDQQh9iRhvjYQhvjXAsjUQAtjWCohzQBLgoBOgZQAPgFAQgFIASDZQmGDaDNIlgAi9hGQANgPAPgJQAIgFAJgCQALgEANAAQAFAAAGABQAPADASAGQAEABACABQAMAEALAHAgUAJQg6BNBfAc");
	this.shape_94.setTransform(316.2,84.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAHN0hIgHhNAH00WIAwg1AIUrrIANCjICoAqIAqHxQJ6AiH/BSQDyAnCwArQGXBmAxB9QADgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOAK+gwIgKgBAINmsIBPgMIBYGHAIhpIIgUCcEArWAF8QAFAMACANALzgtIAAAEIg1gHAGY0XIguhGADB0AIg0hBADZ0DIgIhcAEFz6IAihcAvshgIhNAZIhIAYQBUgEBbgFA1/mtIFdA9IAUBkIAiCsIAHAmAukg6IABAAIAAAAIAAABgAvSg4QALAAAjgCAsyg9QAHAAAHAAIBhgEIAQAAIACAAQAEAAADAAQDdgFDpAAQHuAAG0AWAsyg9IgKAAIAYAAAtmg8QAGAAAGAAIAogBAtmg8QADABAEgBQANAAAMAAQAFAAAFgBAujg6QAZAAAkgCArDhBQAFABAEgBIAJAAAFerHIAMCUIhpAaIhqAcIAQGtIBQAGQDeAEDfAVAEBoZIBeCIIg5AIIgvE/A7amzIgVAIIB6CuIBOhbA2TmwIAUADIheCwIhKhbQBfgbA1g9IAAi4IlHgLIAADAQBLBIBoATA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQEWgdG1gYEghZgAPIEMAVAFfmRICugbEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_95.setTransform(282.4,202.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999966").s().p("AjeCrIAvk/IA6gIICsgaIBQgMIBYGFQjfgUjegEg");
	this.shape_96.setTransform(329.4,177.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF66CC").s().p("AjdBKQgXgVgDghQgDgeAUgaQAVgXAhgDQAggCAXATQAZAVADAfQADAhgVAYQgUAZggACIgJABQgbAAgWgSgAB5AtQgYgVgCggQgDgfATgaQAWgXAhgDQAfgCAYATQAZAVADAgQADAfgVAZQgVAZggACIgIABQgbAAgWgSg");
	this.shape_97.setTransform(316.8,93.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF33").s().p("AmADsQhvjXAsjUQAtjWCohzQBLgoBOgZIAfgKIAKgBQB1gFBqAuQAXAKAXANQCdBUA0CWQAUA3AGBCQAODCgdB9QgFAcgpCNIgDALQgUA1hnDAIAmjcIAAgDQAOg7AHg2QACjpgchOQhOjYkIhSIgSjZIASDZQmGDaDNIlIBJDQQh9iRhvjYg");
	this.shape_98.setTransform(316.2,84.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC99").s().p("A2lLnIEMAXIj9AeIgQACgAVyLGIgKgBIhYmHIhPANIAUidIgUCdIiuAaIheiHIBpgbIgMiTIASAAIAZgCQBLgHBAgbQhAAbhLAHIgZACIgSAAQh9gChthLQjNomGGjaQEJBSBODYQAcBOgCDqQgHA2gOA7IAAADQgzA0g/AdIgDACIANCiICoArIAqHwIAAAEgAQ5hoQBOgBBGhRIAAgBIAAAAIACgCIABgCIACgBIgCABIgBACIgCACIAAAAIAAABQhGBRhOABIAAAAIAAAAQhIgBhPhEIgCgBIACABQBPBEBIABIAAAAIAAAAgANamFQggADgWAXQgUAZADAgQADAgAYAVQAZAVAggDQAggDAVgYQAUgZgDghQgDgfgYgVQgVgSgbAAIgIABgASymiQghADgWAXQgUAZADAfQADAhAYAVQAZAVAggDQAggDAUgYQAVgZgDghQgDgfgZgVQgVgSgaAAIgHABgAQXkwQg8gSAAgkQAAgWAWgdQgWAdAAAWQAAAkA8ASgANkoBQgPAJgNAPQANgPAPgJQAIgFAJgCQALgEANAAIALABQAPADASAGIAGACQAMAEALAHQgLgHgMgEIgGgCIAihdIgiBdQgSgGgPgDIgLgBIgIhbIAIBbQgNAAgLAEIg0hBIA0BBQgJACgIAFgAQxoHQANgPAOgJIACgBIAAgBIABAAQARgJAVgBIAAAAIAAAAIALABIABAAQAQADAXAIIAXALIgXgLIAwg0IgwA0QgXgIgQgDIgBAAIgLgBIAAAAIAAAAQgVABgRAJIgBAAIAAABIgCABIguhHIAuBHQgOAJgNAPgASBoqIgHhNgAmFKwIBMgaIAIAmIASADIiuAJgAjwK9IAAAAIABAAgANbKnIgQmuIBqgbIBeCHIg5AIIgvFAgAwmFDIAAi/IFHALIAAC4Qg1A9hfAaQhpgThKhIgAO1DegAN1oIgAONoMgARMofg");
	this.shape_99.setTransform(213.2,126.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ApaDHIAIkNIFiiOIAVgIQBKBIBpATQBegbA1g9IAUADIFdA9IAUBkQhggThAAtQAHBEAKA2IABADIAAABQAFAaBeASIhIAYQm1AYkVAeIgBAAgAAhgmIBeiwIheCwIhJhbgAh2gmIBOhbIhOBbIh6iuIB6CugAJaCcIABAAIAAABg");
	this.shape_100.setTransform(128.9,180.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("EgtAAM9IAA2NQDbBOGWBBQNxCPTfAAQTdAANyiPQNciKAVjEIAAZMgEAs7gM7IAGgBIAAAaQgCgNgEgMg");
	this.shape_101.setTransform(272.4,323.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQn+hSp6giIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAdh8gOjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGQDeAEDfAVIAKABQm0gWntAAQjqAAjdAFIgHAAIgCAAIgPABIAPgBIACAAIgJABIgIAAIhiADIgOAAIgoABIgMAAIg9ACIAAAAIAAAAIgvACIAAAAIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAujg6IA9gCIAHAAIhEADgAsyg9IAOAAIgYAAgAskg9g");
	this.shape_102.setTransform(282.4,202.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#773300").s().p("EghPAFYQmWhCjahOQj+hagEhqIAAgGQAGiQHKhyQCwgsDygnQBqgRBvgPIARgCID9gfIABAAQEVgdG1gYICvgKIAAAAIAvgBIAAAAIBEgCIgGAAIAMAAIAogCIgKABIAXgBIBigDIAJAAIAIAAIgBgBIABAAIAIAAQDdgFDoAAQHuAAG1AWIA1AHIAAgEQJ5AjH/BSQDyAnCwAsQGXBlAyB9QAFANABAMIABAJIgBAJQgUDEtdCLQtyCOzeAAQzdAAtyiOgAphnbIgaABIAagBIAKAAIgKAAg");
	this.shape_103.setTransform(259.6,243.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAHN0hIgHhNAH00WIAwg1AIUrrIANCjICoAqIAqHxQJ6AiH/BSQDyAnCwArQGXBmAxB9QADgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOAK+gwIgKgBAINmsIBPgMIBYGHAIhpIIgUCcEArWAF8QAFAMACANALzgtIAAAEIg1gHAGY0XIguhGADB0AIg0hBADZ0DIgIhcAEFz6IAihcAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgAvshgIhNAZIhIAYQBUgEBbgFA1/mtIFdA9IAUBkIAiCsIAHAmAukg6IABAAIAAAAIAAABgAvSg4QALAAAjgCAsyg9QAHAAAHAAIBhgEIAQAAIACAAQAEAAADAAQDdgFDpAAQHuAAG0AWAsyg9IgKAAIAYAAAtmg8QAGAAAGAAIAogBAtmg8QADABAEgBQANAAAMAAQAFAAAFgBAujg6QAZAAAkgCArDhBQAFABAEgBIAJAAAFerHIAMCUIhpAaIhqAcIAQGtIBQAGQDeAEDfAVAEBoZIBeCIIg5AIIgvE/A7amzIgVAIIB6CuIBOhbA2TmwIAUADIheCwIhKhbQBfgbA1g9IAAi4IlHgLIAADAQBLBIBoATA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQEWgdG1gYEghZgAPIEMAVAFfmRICugbEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_104.setTransform(282.4,202.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ApaI3IAIkOIFiiNIAVgJQBKBJBpASQBegaA1g9IAUADIFdA9IAUBkQhggThAAtQAHBFAKA2IABADIAAABQAFAZBeATIhIAYQm1AYkVAeIgBAAgAAhFKIBeiwIheCwIhJhcgAh2FKIBOhcIhOBcIh6iuIB6CugAJaINIABAAIAAAAgAH7oHQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgRAAgMgMg");
	this.shape_105.setTransform(128.9,144);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQn+hSp6giIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAdh8gOjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGQDeAEDfAVIAKABQm0gWntAAQjqAAjdAFIgHAAIgCAAIgPABIAPgBIACAAIgJABIgIAAIhiADIgOAAIgoABIgMAAIg9ACIAAAAIAAAAIgvACIAAAAIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAujg6IA9gCIAHAAIhEADgAsyg9IAOAAIgYAAgAskg9g");
	this.shape_106.setTransform(282.4,202.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAHN0hIgHhNAH00WIAwg1AIUrrIANCjICoAqIAqHxQJ6AiH/BSQDyAnCwArQGXBmAxB9QADgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOAK+gwIgKgBAINmsIBPgMIBYGHAIhpIIgUCcEArWAF8QAFAMACANALzgtIAAAEIg1gHAGY0XIguhGADB0AIg0hBADZ0DIgIhcAEFz6IAihcAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAghAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAhgAvshgIhNAZIhIAYQBUgEBbgFA1/mtIFdA9IAUBkIAiCsIAHAmAukg6IABAAIAAAAIAAABgAvSg4QALAAAjgCAsyg9QAHAAAHAAIBhgEIAQAAIACAAQAEAAADAAQDdgFDpAAQHuAAG0AWAsyg9IgKAAIAYAAAtmg8QAGAAAGAAIAogBAtmg8QADABAEgBQANAAAMAAQAFAAAFgBAujg6QAZAAAkgCArDhBQAFABAEgBIAJAAAFerHIAMCUIhpAaIhqAcIAQGtIBQAGQDeAEDfAVAEBoZIBeCIIg5AIIgvE/A7amzIgVAIIB6CuIBOhbA2TmwIAUADIheCwIhKhbQBfgbA1g9IAAi4IlHgLIAADAQBLBIBoATA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQEWgdG1gYEghZgAPIEMAVAFfmRICugbEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_107.setTransform(282.4,202.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AqhJvIAIkOIFiiNIAVgJQBKBJBpASQBfgaA0g9IAUADIFdA9IAUBkQhggThAAtQAHBFAKA2IABADIAAABQAFAZBeATIhIAYQm1AYkVAeIgBAAgAglGCIBdiwIhdCwIhKhcgAi9GCIBOhcIhOBcIh6iuIB6CugAITJFIABAAIAAAAgAG0nPQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgRAAgMgMgAIcn/QgXgXAAggQAAghAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAhQAAAggXAXQgXAXghAAQggAAgXgXg");
	this.shape_108.setTransform(136,138.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQn+hSp6giIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAdh8gOjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGQDeAEDfAVIAKABQm0gWntAAQjqAAjdAFIgHAAIgCAAIgPABIAPgBIACAAIgJABIgIAAIhiADIgOAAIgoABIgMAAIg9ACIAAAAIAAAAIgvACIAAAAIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgXAXAAAhQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAghgXgXQgXgXggAAQghAAgXAXgAujg6IA9gCIAHAAIhEADgAsyg9IAOAAIgYAAgAskg9g");
	this.shape_109.setTransform(282.4,202.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("EghaAAmQhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPMhlLAAAIAA9GQAEBrD9BaAHN0hIgHhNAH00WIAwg1AIUrrIANCjICoAqIAqHxQJ6AiH/BSQDyAnCwArQGXBmAxB9QADgBAEAAIAAAaQAAAFAAAFQAAAFAAAEQgVDEtcCKQtyCPzeAAQzeAAtyiPQmVhBjbhOAK+gwIgKgBAINmsIBPgMIBYGHAIhpIIgUCcEArWAF8QAFAMACANALzgtIAAAEIg1gHAi027QAABfhuBDQhuBDicAAQicAAhuhDQhuhDAAhfQAAhfBuhDQBuhDCcAAQCcAABuBDQBuBDAABfgAGY0XIguhGADB0AIg0hBADZ0DIgIhcAEFz6IAihcAu9xsQAAARgMAMQgMAMgRAAQgRAAgMgMQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQAMAMAAARgAsVy2QAAAggXAXQgXAXghAAQggAAgXgXQgXgXAAggQAAghAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAhgAvshgIhNAZIhIAYQBUgEBbgFA1/mtIFdA9IAUBkIAiCsIAHAmAukg6IABAAIAAAAIAAABgAvSg4QALAAAjgCAsyg9QAHAAAHAAIBhgEIAQAAIACAAQAEAAADAAQDdgFDpAAQHuAAG0AWAsyg9IgKAAIAYAAAtmg8QAGAAAGAAIAogBAtmg8QADABAEgBQANAAAMAAQAFAAAFgBAujg6QAZAAAkgCArDhBQAFABAEgBIAJAAAFerHIAMCUIhpAaIhqAcIAQGtIBQAGQDeAEDfAVAEBoZIBeCIIg5AIIgvE/A7amzIgVAIIB6CuIBOhbA2TmwIAUADIheCwIhKhbQBfgbA1g9IAAi4IlHgLIAADAQBLBIBoATA7vmrIliCOIgIEOIgBA1QAIgBAIgBID9geQABAAAAAAQEWgdG1gYEghZgAPIEMAVAFfmRICugbEArdAGoIAAZNMhaBAAAIAA2O");
	this.shape_110.setTransform(282.4,202.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AvRM9IAIkOIFhiNIAWgJQBKBIBpATQBegbA1g9IAUADIFdA9IATBkQhfgShAAsQAIBFAKA2IAAADIAAABQAFAaBeASIhJAZQm0AYkVAdIgBAAgAlWJPIBeiwIheCwIhJhbgAntJPIBOhbIhOBbIh7itIB7CtgADjMTIAAAAIAAAAgACDkBQgMgMAAgSQAAgRAMgMQAMgMARABQARgBAMAMQAMAMAAARQAAASgMAMQgMAMgRAAQgRAAgMgMgADrkyQgXgWAAghQAAghAXgXQAXgXAhAAQAgAAAXAXQAXAXAAAhQAAAhgXAWQgXAYggAAQghAAgXgYgAFQnMQhuhDAAhfQAAhfBuhDQBuhDCcABQCcgBBuBDQBuBDAABfQAABfhuBDQhuBEicAAQicAAhuhEg");
	this.shape_111.setTransform(166.5,117.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000033").s().p("EgylAjoIAA9GQAEBrD9BaIAAWOMBaAAAAIAA5NIABgJIgBgKIAAgaIgGABQgxh9mXhmQiwgrjzgnQn+hSp6giIgpnxIiogqIgOijIAEgCQA+gdAzg0IgmDcQBnjBAUg1IADgLQApiNAFgcQAdh8gOjEQgGhCgUg3Qg0iVidhUQgXgNgXgKQhqgvh2AGIgKABIgfAKQhOAZhLAnQinBzgtDWQgrDWBuDWQBuDYB9CSIhJjQQBtBLB9ACIANCUIhqAaIhqAcIAQGtIBQAGQDeAEDfAVIAKABQm0gWntAAQjqAAjdAFIgHAAIgCAAIgPABIAPgBIACAAIgJABIgIAAIhiADIgOAAIgoABIgMAAIg9ACIAAAAIAAAAIgvACIAAAAIgTgCIgHgmIgiisIgThkIleg9IgUgDIAAi4IlHgLIAADAIgVAIIlhCOIgIEOIgCA1QhvAQhrARQjyAniwAsQnKBygFCQMAAAgqDMBlLAAAMAAABHPgAwDyJQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAubzuQgXAXAAAhQAAAgAXAXQAXAXAhAAQAgAAAXgXQAXgXAAggQAAghgXgXQgXgXggAAQghAAgXAXgAs25dQhuBDAABfQAABfBuBDQBuBDCcAAQCcAABuhDQBuhDAAhfQAAhfhuhDQhuhDicAAQicAAhuBDgAujg6IA9gCIAHAAIhEADgAsyg9IAOAAIgYAAgAskg9g");
	this.shape_112.setTransform(282.4,202.3);

	this.instance_7 = new lib.kissinthebar();
	this.instance_7.parent = this;
	this.instance_7.setTransform(282.4,202.3,1,1,0,0,0,323.8,228);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6}]},350).to({state:[{t:this.shape_103},{t:this.shape_106},{t:this.shape_101},{t:this.shape_98},{t:this.shape_99},{t:this.shape_97},{t:this.shape_105},{t:this.shape_96},{t:this.shape_104},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6}]},13).to({state:[{t:this.shape_103},{t:this.shape_109},{t:this.shape_101},{t:this.shape_98},{t:this.shape_99},{t:this.shape_97},{t:this.shape_108},{t:this.shape_96},{t:this.shape_107},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6}]},13).to({state:[{t:this.shape_103},{t:this.shape_112},{t:this.shape_101},{t:this.shape_98},{t:this.shape_99},{t:this.shape_97},{t:this.shape_111},{t:this.shape_96},{t:this.shape_110},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},13).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(294));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(403).to({_off:false},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:296.3,y:215.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:310,y:228.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:323.9,y:242.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:337.7,y:255.5},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:351.5,y:268.8},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:365.3,y:282.1},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:379.1,y:295.4},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:392.9,y:308.7},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:406.7,y:322},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:420.5,y:335.3},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:434.3,y:348.6},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:448.1,y:361.9},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:461.9,y:375.2},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:475.7,y:388.5},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:489.6,y:401.8},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:503.3,y:415.1},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:517.2,y:428.3},0).wait(53).to({_off:true},1).wait(294));

	// kiss
	this.instance_8 = new lib.girl3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(403.3,240.6,1,1,0,0,0,75.7,175.3);

	this.instance_9 = new lib.boy2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(124.4,217.9,1,1,0,0,0,90.7,181.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("EA5NgLkQAKmwDyk1QD9lDFnAAQFmAAD8FDQBKBdA0BpQCAECAAFFQAADbg6C9QhADMiECoQhcB2hqBLEBRkgNkQinlPioFPEBTTgEkQlIGhinnGEBAQAERQhrhLhch2Qj9lDAAnJQAAgUABgUEBSNgUDI5AIfEhUMglZMBh6AAAMAAABKzMhh6AAAg");
	this.shape_113.setTransform(508.4,208.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("AmcMKQhqhLhdh2Qj8lDAAnJIAAgnIY/ofQCAEBAAFFQAADag6C9IgCADIgBABQiaDEh3ABIgBAAIAAAAQiAgBhWjkIgCgGIgBgCIABACIACAGQBWDkCAABIAAAAIABAAQB3gBCajEIABgBIACgDQg/DNiECoQhcB2hrBLgAK4lrQiolOioFOQBUinBUAAQBUAABUCngAMmDUIAAAAg");
	this.shape_114.setTransform(960.8,158.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF33").s().p("AojjQQD+lDFlAAQFmAAD8FDQBKBdA0BpI4/IeQAKmwDyk0g");
	this.shape_115.setTransform(954.5,81.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000033").s().p("Egw9AlaMAAAhKzMBh6AAAMAAABKzg");
	this.shape_116.setTransform(282.9,208.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.instance_9},{t:this.instance_8}]},474).to({state:[]},79).wait(215));

	// the end
	this.text = new cjs.Text("Five minutes later", "91px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 108;
	this.text.lineWidth = 386;
	this.text.parent = this;
	this.text.setTransform(276.9,31.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(2,1,1).p("EgyOgmKMBkdAAAMAAABMVMhkdAAAg");
	this.shape_117.setTransform(291.3,196);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF6666").s().p("EgyOAmLMAAAhMVMBkdAAAMAAABMVg");
	this.shape_118.setTransform(291.3,196);

	this.instance_10 = new lib.HAND2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(252.1,214.4,1,1,0,0,0,64.5,50);

	this.instance_11 = new lib.phone2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(318,113.8,1,1,0,0,0,47.8,76.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgpAbIAGgCQAZArAegJQAMgCAIgLQAIgLgDgKQgDgJgHgDQgHgDgaADQgsAFgKghQgEgRAIgPQAJgPARgEQASgEAOAIIAEgLIAFgBIAJAkIgGACQgQgegaAIQgMADgGAIQgGAJACAIQACAIAHACQAGADAWgDQAvgGAKAmQAFASgIARQgJAQgSAEQgRAFgUgLIgIANIgFABg");
	this.shape_119.setTransform(511.4,90.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AhnBSIAWgGIgehvIgWAGIgCgIIANgDQAZgHAOgGIAIAfIABAAQADgjAfgIQAjgJALAgIABAAQAEglAggIQANgEAMAFQALAFAFAJQAEAJAGAWIASBBIAWgGIACAJIhIATIgBgJIATgFIgVhQQgGgTgDgGQgFgHgJACQgMAEgJASQgKATAMApIALAqIAVgGIACAJIhGATIgBgJIASgFIgQg+QgKglgEgHQgEgGgKADQgOADgFAPQgHAPAAAMQABAMAHAZIALApIAUgGIACAJIhHATg");
	this.shape_120.setTransform(492.7,96);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgsBGQgMgHgDgNQgLgqBLgYIgEgQQgFgVgFgFQgFgGgNAEQgZAHADAKQAAADADADQADADABAFQACAGgDAFQgDAEgFACQgHACgFgEQgFgDgCgGQgDgNAMgNQAMgNAagHQAUgGAKADQALADAFAHQAEAHADANIAQA7QAEANADADQACADAEgBQAGgBACgKIAEgBQADAZgXAGQgVAGgLgZQgLAfgYAGIgLACQgJAAgIgEgAgbAKQgHAKAEAPQADALAHAFQAHAEAHgCQAIgCAGgIQAFgIABgIQABgHgDgLIgFgRQgbAIgHAKg");
	this.shape_121.setTransform(472.7,101.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_122.setTransform(457.6,104.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYBFIAYgHIgdhvIgZAHIgDgIIAagHQATgFAKgFIAHAfIABAAQACgiAVgGQAKgCAHAEQAIAFACAIQABAIgCAGQgEAGgHACQgOAEgDgOIgBgIQgCgEgDABQgFACgEAQQgDARAIAdIANAyIAagHIABAJIhPAVg");
	this.shape_123.setTransform(443.5,108.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("Ag/B1IAggIIg2jJIghAIIgCgIIBigaQAggJAZAEQAaADAXAZQAXAXAJAiQAJAjgJAfQgKAggTAQQgUAPggAJIhgAagAgVhtIgcAHIA2DJIAbgHQAVgGAMgHQAMgIAFgQQAFgQgCgWQgDgVgJgiQgLgogPgSQgPgSgQAAIgGgBQgMAAgTAGg");
	this.shape_124.setTransform(424.2,109.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAHBSQgIgEgEgHQgEgJgEgOIgVhOIgbAHIgDgIIAcgHIgJgiQAPgFAOgHIAKAmIAjgKIADAIIgkAKIAVBQQAFASAEAFQAEAHAKgEQAHgBAFgHQAGgIAAgLIAHgCQABAigkAJQgHACgGAAQgGAAgEgCg");
	this.shape_125.setTransform(483.8,51.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_126.setTransform(471.8,56.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgZA8QgYgOgIgeQgHgbANgZQAMgZAYgGQAUgGATAMQAUALAIAbIhNAVQAMAwAJAJQAIAKAQgEQAhgJABgrIAHgCQABAagLAPQgLAPgSAFQgIACgHAAQgQAAgQgKgAgPg7QgLADgEAIQgFAIADALIAFAUIAsgMIgDgSQgGgWgPAAIgIACg");
	this.shape_127.setTransform(458.3,59.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhVgZIgTAGIgCgIIBIgUIACAIIgUAGIA0BHIAKhhIAEgBIA7BOIAIhXIgXAGIgDgIIAxgNIADAIIgTAFIgMCHIgFABIg7hOIgKBhIgEABg");
	this.shape_128.setTransform(438.6,64.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag2BCIAHgCQARAaAUAKQATALATgFQAUgGAMgRQANgSgGgUQgEgSgPgJQgOgIgaABQgaADgPgDQgPgCgNgLQgOgMgFgTQgGgZAMgXQALgYAcgIQAYgGAYAKQAFgHABgJIAHgBIAQA4IgHACQgdgvgmAKQgWAHgJAPQgIAQADAOQAEAMAMAGQAMAHAcgDQAbgCAPADQAQADAOAOQAOANAGAUQAIAhgOAaQgOAbgdAIQgYAHgcgNIgLASIgGABg");
	this.shape_129.setTransform(419.3,65.7);

	this.instance_12 = new lib.girlinbad();
	this.instance_12.parent = this;
	this.instance_12.setTransform(263.8,206.7,1,1,0,0,0,275.1,201);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(2,1,1).p("AEN8TQSHihQPChQCLMGiLLmQxLCzxLizQidr2Cdr2gEAr1gAfIA8QWIAARLEgmegcWQSHiiQPCiQCLMFiLLmQxLC0xLi0Qidr2Cdr1gEgswgAiUAsTgEcAsSAEfEgswAP7UAswAEbAsxgEfEApqghBMACLAgi");
	this.shape_130.setTransform(287.9,207.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1,1,1).p("AhUhMIBvB4AA1AsIAgAh");
	this.shape_131.setTransform(455.8,483);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B79999").s().p("EgswAR5IAAxHIAAwdUAsTgEcAsSAEfIA8QXIgdACIgKABIgOACIgEAAQ2ECL2CAAIAAAAIAAAAQ2RAA2RiNQWRCNWRAAIAAAAIAAAAQWCAAWEiLIAEAAIAOgCIAKgBIAdgCIAARKgEAsxAAvg");
	this.shape_132.setTransform(287.9,304.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A59999").s().p("EgsSAQOMAAAggeMBWaAAAMACLAghUgsTgEfgsSAEcgAErrhQidL0CdL2QRLCzRLizQCLrmiLsEQoHhRomAAQolAApEBRgEgmAgLmQidL1CdL2QRLCzRLizQCLrliLsGQoHhQomAAQomAApDBQg");
	this.shape_133.setTransform(284.9,100.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CC9999").s().p("AEPLzQicr0Ccr2QSIiiQPCiQCLMEiLLmQomBaomAAQolAAomhagEgmcALvQicr0Ccr2QSIiiQPCiQCLMFiLLlQomBaolAAQomAAomhag");
	this.shape_134.setTransform(287.7,102.7);

	this.AGAIN = new lib.PLAYAGAIN();
	this.AGAIN.parent = this;
	this.AGAIN.setTransform(275.3,187.4,1,1,0,0,0,261.1,131.8);
	new cjs.ButtonHelper(this.AGAIN, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.text}]},553).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.instance_12},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.instance_11},{t:this.instance_10}]},43).to({state:[{t:this.AGAIN}]},160).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-108.8,1166.1,1000.2);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Haddaway.mp3", id:"Haddaway"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;