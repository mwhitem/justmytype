$("div#keyboard-upper-container").hide();

$("body").keydown(function (event) {
  if (event.keyCode == 16) {
    $("div#keyboard-lower-container").hide();
    $("div#keyboard-upper-container").show();
  }
});

$("body").keyup(function (event) {
  if (event.keyCode == 16) {
    $("div#keyboard-lower-container").show();
    $("div#keyboard-upper-container").hide();
  }
});

$("body").keypress(function (event) {
  $(`#${event.keyCode}`).css({
    backgroundColor: "yellow",
  });
  setTimeout(() => {
    $(`#${event.keyCode}`).css({
      backgroundColor: "",
    });
  }, 300);
});

let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate",
];

let sentenceIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentenceIndex];
let nextLetter = currentSentence[letterIndex];

$("<p>" + currentSentence + "</p>")
  .addClass("this-sentence")
  .appendTo("div#sentence");

$("body").keypress(function (e) {
  if ((x = e.keyCode)) {
    let nextLetter = currentSentence[letterIndex++];
    $("<div>" + nextLetter + "</div>")
      .addClass("this-letter")
      .css({
        width: "30px",
      })
      .appendTo("div#target-letter");

    $("div.this-letter").hide(".this-letter");
    console.log(nextLetter);

    let y = e.which;
    if (y) {
      console.log(String.fromCharCode(y));
    }
    j = String.fromCharCode(y);
    if (j == nextLetter) {
      $("<span></span>")
        .addClass("glyphicon glyphicon-ok")
        .attr("aria-hidden", "true")
        .appendTo("div#feedback");

      $("div#yellow-block").animate({
        left: "+=24px",
      });
    }

    if (j != nextLetter) {
      $("<span></span>")
        .addClass("glyphicon glyphicon-remove")
        .attr("aria-hidden", "true")
        .appendTo("div#feedback");
    }

    if (letterIndex == sentences[sentenceIndex].length) {
      $("<p>" + sentences[sentenceIndex++] + "</p>")
        .addClass("this-sentence")
        .appendTo("div#sentence");
      $("p.this-sentence").prev().hide("p.this-sentence");
      letterIndex = 0;
      sentenceIndex++;
    }

    if (nextLetter === undefined) {
      alert("just stop");
    }
  }
});

// numberOfWords = 11;

// numberOfWords / minutes - 2 * numberOfMistakes
$("<h1></h1>").prependTo("body");
$("<button> get time </button>").prependTo("body");
$(document).ready(function () {
  function getdate() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (s < 10) {
      s = "0" + s;
    }
    if (m < 10) {
      m = "0" + m;
    }
    $("h1").text(h + ":" + m + ":" + s);
    setTimeout(function () {
      getdate();
    }, 500);
  }

  $("button").click(getdate);
});

$("<button>start over</button>").addClass("refresh-button").prependTo("body");

$("button.refresh-button").click(function () {
  location.reload();
});
