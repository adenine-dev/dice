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

  function die(n) {
    var history = []
    var historyEl = elt("p", {}, "history")
    document.getElementById("root").appendChild(elt("div", { 
      className: "die d" + n
    }, 
      elt("h1", {  }, "d" + n),
      elt("button", {
        onclick: function(e) {
          history.push(Math.floor(Math.random() * n) + 1)
          e.target.innerText = history[history.length - 1]
          historyEl.innerText = history.slice(Math.max(0, history.length - 20), history.length - 1).join(", ") || "history"
        }
      }, "?"),
      historyEl
    ))
  }

  die(4)
  die(6)
  die(8)
  die(10)
  die(12)
  die(20)
})()