function meal_api () {
    var searchText = document.getElementById("search").value ; 
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
     document.getElementById("search").value = " "; 
     document.getElementById("result").textContent = " ";
  
  }
  
  function display (data){
    var stop = parseInt(document.getElementById('limit').value) ; 
    document.getElementById("limit").value = " "; 
      var oldcontent = document.getElementById('result'); 
      for (var i = 0; i<stop; i++)
      {
        var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card" style="width: auto;">
    <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[i].strMeal}</h5>
      
      <a href="#" class="btn btn-primary"></a>
    </div>
    
  </div> <br>` ;
 

        
      oldcontent.appendChild(newDiv);
  
    
      }
  }
  