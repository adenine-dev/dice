(function() {
  function elt(type, attribs, ...children) {
    var node = document.createElement(type)
    for(var i = 0; i < Object.keys(attribs).length; i++) {
      node[Object.keys(attribs)[i]] = Object.values(attribs)[i]
    }
    for (var i = 0; i < children.length; i++) {
      if (typeof children[i] != "string") node.appendChild(children[i])
      else node.appendChild(document.createTextNode(children[i]))
    }
    return node
  }

  document.body.appendChild(elt("h1", { 
    className: "oof"
  }, "oof"))
})()