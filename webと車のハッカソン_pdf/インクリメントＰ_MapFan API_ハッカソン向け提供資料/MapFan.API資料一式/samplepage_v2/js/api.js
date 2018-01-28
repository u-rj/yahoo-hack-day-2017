$(function(){

  // メニュークリック時の処理
  var setContentFunc = function(titleText) {
    for(var i = 0, len = demoText.length; i < len; i++) {
      if (titleText == demoText[i].title) {
        $("#map_iframe").attr("src",demoText[i].url);
        $("#explain_title").html(demoText[i].title);
        $("#explain_summary").html(demoText[i].sum);
        //$("#explain_detail").html(datailHeader +demoText[i].detail +srcHeader +demoText[i].src +srcFooter);
        $("#explain_detail").html("<p>"+datailHeader +demoText[i].detail+"</p>");
        $("#example_code").val(demoText[i].srcRaw).scrollTop(0);
        break;
      }
    }
  };

  $(".menuList").children().click(function() {
    $(":header .title").text($(this).text());
    // var src = "src/"+($(this).get(0).id)+".html";
    // // iframe
    // $("#map_iframe").attr("src",src);
    // explain
    var titleText = $(this).text();
    setContentFunc(titleText);
  });

  // 初期表示
  $(function() {
    // $("#read_text").load("./src/MfapiSample1_1.html");
    // $("#map_iframe").attr("src","./src/MfapiSample1_1.html");
    // $("#explain_title").html(demoText[0].title);
    // $("#explain_summary").html(demoText[0].sum);
    // $("#explain_detail").html(datailHeader +demoText[0].detail +srcHeader +demoText[0].src +srcFooter);
    setContentFunc(demoText[0].title);
  });

  $(function(){
    $(".accordion p").click(function(){
      $(this).next("ul").slideToggle();
      $(this).children("span").toggleClass("open");
    });
  });

});

function copyToClipboard(id) {
  var ele = document.getElementById(id);
  // ele.select();
  // if (window.getSelection) {
  //   var selection = window.getSelection();
  //   selection.removeAllRanges();
  //   var range = document.createRange();
  //   range.selectNode(ele);
  //   selection.addRange(range);
  //   document.execCommand("copy");
  // }
  if (window.getSelection) {
    ele.select();
    ele.setSelectionRange(0, ele.value.length);
    document.execCommand("copy");
  }
  clearSelection(ele);
}

function clearSelection(ele) {
  var sel = window.getSelection();
  if (sel) {
      if (sel.removeAllRanges) {
          sel.removeAllRanges();
      } else if (sel.empty) {
          sel.empty();
      }
  }
  ele.selectionStart = 0;
  ele.selectionEnd = 0;
  ele.blur();
}
