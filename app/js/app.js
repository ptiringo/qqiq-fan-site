(function() {
  var app = angular.module("qqiq", []);

  app.controller("MusicController", function() {
    this.musics = musics;
  });

  var musics = [{
    "title": "People's Life",
    "releaseDate": "2013/04/28",
    "urls": ["https://www.youtube.com/watch?v=_Rluuo988Sc"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "RICKENBACKER",
    "releaseDate": "2013/05/19",
    "urls": ["https://www.youtube.com/watch?v=5cPAMHhtWIc"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "TODAY(Before The Dawn)",
    "releaseDate": "2013/06/02",
    "urls": ["https://www.youtube.com/watch?v=at7CEmFtsM8", "https://www.youtube.com/watch?v=jLygXdLo62I"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "J-ROCK RE-CREATION",
    "releaseDate": "2013/06/16",
    "urls": ["https://www.youtube.com/watch?v=4vRNNsqVU88"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "2011",
    "releaseDate": "2013/07/19",
    "urls": ["https://www.youtube.com/watch?v=pTdb3lp_0uY"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Living Things",
    "releaseDate": "2013/07/26",
    "urls": ["https://www.youtube.com/watch?v=JsF9qlL7HfI"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Past Times Inside",
    "releaseDate": "2013/08/08",
    "urls": ["https://www.youtube.com/watch?v=JELyS4wvy1g", "http://www.nicovideo.jp/watch/sm21609746"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Perfect Suicide",
    "releaseDate": "2013/08/27",
    "urls": ["https://www.youtube.com/watch?v=2tVQtkt3F2Y"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "MEKAKUSHI",
    "releaseDate": "2013/09/12",
    "urls": ["https://www.youtube.com/watch?v=WYrp73vHafg", "http://www.nicovideo.jp/watch/sm21812142"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Drawing My Youth",
    "releaseDate": "2013/09/24",
    "urls": ["https://www.youtube.com/watch?v=8p5CPUFjSno"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Jesus Christ's Coming",
    "releaseDate": "2013/10/26",
    "urls": ["https://www.youtube.com/watch?v=ZlNz8OnG6zs"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "KAFKA",
    "releaseDate": "2013/11/28",
    "urls": ["https://www.youtube.com/watch?v=VRmkYDAtxz0"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "暇人と音楽的な美少女",
    "releaseDate": "2013/12/23",
    "urls": ["https://www.youtube.com/watch?v=Iy8vl-NwZmw"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "おんらいん？ラブ",
    "releaseDate": "2014/03/14",
    "urls": ["https://www.youtube.com/watch?v=WXlnck0ZUs0", "https://soundcloud.com/summerbabe2007/twimy"],
    "composer": "ねむこ",
    "songwriter": "ねむこ"
  }, {
    "title": "いけない！トライアングル",
    "releaseDate": "2014/05/15",
    "urls": ["https://www.youtube.com/watch?v=-4bhE1VzI08"],
    "composer": "ねむこ",
    "songwriter": "ねむこ"
  }, {
    "title": "Don't Call Me Crazy,Make Your Star",
    "releaseDate": "-",
    "urls": ["https://soundcloud.com/twimy/dont-call-me-crazy-make-your"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "たべっこどうぶつ",
    "releaseDate": "2014/03/12",
    "urls": ["https://soundcloud.com/twimy/lcfso6sjm8y8"],
    "composer": "？",
    "songwriter": "？"
  }, {
    "title": "びすこ なびすこ 〜ややこしや〜",
    "releaseDate": "2014/04/06",
    "urls": ["https://soundcloud.com/twimy/ol7zfbo410rw"],
    "composer": "？",
    "songwriter": "？"
  }, {
    "title": "Saori",
    "releaseDate": "2014/06/08",
    "urls": ["https://www.youtube.com/watch?v=dnDUfSlRCBo", "http://www.nicovideo.jp/watch/sm23746472"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "MOTHER",
    "releaseDate": "2014/05/18",
    "urls": ["https://www.youtube.com/watch?v=dnDUfSlRCBo", "http://www.nicovideo.jp/watch/sm23586843"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "I MISS YOU LOVE",
    "releaseDate": "2014/05/25",
    "urls": ["https://www.youtube.com/watch?v=MPmJFoEVd78"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Rock and Roll and Girls and Music",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "432687",
    "releaseDate": "2014/06/01",
    "urls": ["https://www.youtube.com/watch?v=ebkJ4Dg37IE"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Neoteny",
    "releaseDate": "2014/06/15",
    "urls": ["https://www.youtube.com/watch?v=r2STiL9tCYQ", "http://www.nicovideo.jp/watch/sm23787452"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Logout",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Daydream",
    "releaseDate": "2014/06/20",
    "urls": ["https://www.youtube.com/watch?v=DY8Un6cFh4I", "http://www.nicovideo.jp/watch/sm23851908"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Fei Long",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Everything is my fault",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "She has come",
    "releaseDate": "2014/08/29",
    "urls": ["https://www.youtube.com/watch?v=mBwUVJxFq1Q"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Luvego",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Death From Above 1999",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Asperger Management",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "My Girl",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "River",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Rickenbacker",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Dancing in the Daylight",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Mr.Meloncholy",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Sister's Guitar Replica",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "with you",
    "releaseDate": "2014/12/04",
    "urls": ["https://www.youtube.com/watch?v=5hMpG-2pgns"],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }, {
    "title": "Dancing in the Daylight",
    "releaseDate": "-",
    "urls": [],
    "composer": "橋爪 裕",
    "songwriter": "橋爪 裕"
  }];

})();
