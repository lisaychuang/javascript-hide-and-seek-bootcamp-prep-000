function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  console.log(list);
  for (let i=0; i<list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML)+ n);
  }
}

function deepestChild(){
  let parent = document.getElementById('grand-node');
  while (parent.children.length >0){
      parent = parent.children[0];
  }
  return parent;
}
