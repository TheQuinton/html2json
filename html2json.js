var copy = document.getElementById('text-box');
function breakdown(html){
  let regex = /^\s*\n?/g;
  let children = [...html.childNodes];
  let jsonData = {};
  if(!children.length){
    if (html.nodeName === '#text'){
      return html.textContent;
    } else {
      return undefined;
    }
  }
  for(let i=0;i<children.length;i++){
    if (children[i].childNodes.length){
      jsonData[i] = breakdown(children[i]);
    } else if (children[i].nodeName === '#text' && regex.test(children[i].textContent) && children[i].textContent.trim() !== ''){
      jsonData[i] = children[i].textContent.trim();
    }
  }
  return jsonData;
}
console.log(breakdown(copy));
