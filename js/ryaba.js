const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";
const buttonFetch = $("#button-fetch");
const buttonReplace = $("#button-replace");
const result = $("#result");

function handleButton() {
  $.getJSON(
    dataURL,
    function(data) {
      let story = data.text;
      document.querySelector('.text').classList.add('visible')
      $(result).text(story);
    }
  );
};

function dataReplace() {
  $.getJSON(
    dataURL,
    function(data) {
      let story = String(data.text);
      let var1 = $("input[name=var1]").val();
      let var2 = $("input[name=var2]").val();
      let var3 = $("input[name=var3]").val();
      let var4 = $("input[name=var4]").val();
      let var5 = $("input[name=var5]").val();
      let var6 = $("input[name=var6]").val();
      let speach = $("input[name=speach]").val();
      story = story.replace(/{var1}/gi, var1);
      story = story.replace(/{var2}/gi, var2);
      story = story.replace(/{var3}/gi, var3);
      story = story.replace(/{var4}/gi, var4);
      story = story.replace(/{var5}/gi, var5);
      story = story.replace(/{var6}/gi, var6);
      story = story.replace(/{speach}/gi, speach);
      document.querySelector('.text').classList.add('visible')
      $(result).text(story);
    }
  );
  
};  

function init() {
  $(buttonFetch).click(handleButton);
  $(buttonReplace).click(dataReplace);
};

$(document).ready(init);