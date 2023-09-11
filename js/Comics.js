AFRAME.registerComponent("tour",{
  init:function(){
    this.placesContainer = this.el
    this.createCards()
  },

  createCards:function(){
    const thumbnailsRef = [
      {
        id:"batman", 
        title:"Batman",
        url:"./js/posters/batman.jpg"
      },

      {
        id:"green-lantern", 
        title:"Green Lantern",
        url:"./js/posters/greenlantern.jpg"
      },

      {
        id:"jughead", 
        title:"Jughead",
        url:"./js/posters/jughead.jpg"
      },

      {
        id:"wonder-woman", 
        title:"Wonder Woman",
        url:"./js/posters/wonderwoman.jpg"
      }
    ]

    let previousXPosition = -60 

    for(var item of thumbnailsRef){
      const posX = previousXPosition + 25
      const posY = 10
      const posZ = -40
      const position = {x:posX, y:posY, z:posZ}
      previousXPosition = posX

      const borderEl = this.createBorder(position, item.id)
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      
      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl)
      
    }

  },

  createTitleEl:function(position,item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text", {
      font:"exo2bold", align:"center", width:70, color:"white", value:item.title
    })
    const elPosition = position
    elPosition.y = -20 
    entityEl.setAttribute("position", elPosition)
    entityEl.setAttribute("visible", true)
    return entityEl
  },

  createBorder:function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("geometry", {
      primitive:"plane", height:13, width:10
    })
    entityEl.setAttribute("material", {
      color:"white"
    })
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("cursor-listener", {})
    return entityEl
  },

  createThumbnail:function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive:"box", height:11, width:8
    })
    entityEl.setAttribute("material", {
      src:item.url
    })
    return entityEl 
  }
})