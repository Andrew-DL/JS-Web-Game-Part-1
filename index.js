function newImage(url, x, y){
    let img = document.createElement('img')
    img.src = url
    img.style.position = 'fixed'
    img.style.left = x + 'px'
    img.style.bottom = y + 'px'
    document.body.append(img)
}

for(let x = 0; x < window.innerWidth; x += 100){
    for(let y = 0; y < window.innerHeight; y += 100){
      newImage('assets/grass.png', x, y)
    }
  }

  for(let x = 0; x < window.innerWidth; x += 100){
    for(let y = 500; y < window.innerHeight; y += 100){
      newImage('assets/sky.png', x, y)
    }
  }


newImage('assets/green-character.gif', 100, 100)

newImage('assets/pine-tree.png', 450, 200)

newImage('assets/tree.png', 200, 300)

newImage('assets/pillar.png', 350, 100)

newImage('assets/crate.png', 150, 200)

newImage('assets/well.png', 500, 425)

function newItem(url, x, y){
    let item = document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = x + 'px'
    item.style.bottom = y + 'px'
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', 500, 405)

newItem('assets/shield.png', 165, 185)

newItem('assets/staff.png', 600, 100)