function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

return document.querySelector('#nested .target');

}

function increaseRankBy(n) {

  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {

  var deeper = document.getElementById('grand-node')
  var next = deeper.children[0];

  while (next) {
    deeper = next;
    next = deeper.children[0]
  }
  return deeper;
}
