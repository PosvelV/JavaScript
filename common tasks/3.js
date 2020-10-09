const path = "/users/download/index.html"

function isHtml(pathUse){
  var formatNeed = ".html";
  var formetPath = pathUse.slice(-5)
  if (formetPath == formatNeed){
    return true;
  } else {
    return false;
  }
}

console.log(isHtml(path))