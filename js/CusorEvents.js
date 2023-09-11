AFRAME.registerComponent("cursor-listener", {
    schema:{
        selectedItemId:{default:"", type:"string"}
    },

    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handlePlacesListState:function(){
        const id = this.el.getAttribute("id")
        const placesId = ["batman", "green-lantern", "jughead", "wonder-woman"]

        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId:id
                // selecting the places container
                // queryselector is used to select any entity from html
            })
            this.el.setAttribute("material", {
                color:"green",
                opacity:1
            })
        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    }, 

    handleClickEvents: function (){
        this.el.addEventListener("click", evt=>{
          const placesContainer = document.querySelector("#places-container")
          const {state} = placesContainer.getAttribute("tour")
    
          if(state == "places-list"){
            const id = this.el.getAttribute("id")
            const placesId = [
              "taj-mahal", "budapest", "new-york-city", "eiffel-tower"
            ]
    
            if(placesId.includes(id)){
              placesContainer.setAttribute("tour",{
                state:"view", selectedCard:id
              })
    
            }
          }
        })
      },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            
            const {selectedItemId} = this.data
            
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                // inverted quotes used when you need to concatenate a variable with constant
                const id = el.getAttribute("id")

                if(id == selectedItemId){
                    el.setAttribute("material", {color:"white", opacity:1})
                }
            }
        })
    }
})