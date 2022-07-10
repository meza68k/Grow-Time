const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41c64a1730mshdbae2ce298dfb19p128599jsn3fe16c6b06f2',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};
var igList0 = document.getElementById(`igList0`);
var igList1 = document.getElementById(`igList1`);
var igList2 = document.getElementById(`igList2`);
var igList3 = document.getElementById(`igList3`);
var igList4 = document.getElementById(`igList4`);
var igList5 = document.getElementById(`igList5`);
var igList6 = document.getElementById(`igList6`);

var ingList0 = [];
var ingList1 = [];
var ingList2 = [];
var ingList3 = [];
var ingList4 = [];
var ingList5 = [];
var ingList6 = [];

var ingList = [];
var vegTitle = document.getElementById('vegName')
fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=tomatillo`, options)
.then(function(response){
    return response.json();
 })
.then(function(response){
    var vegName = (response.q).charAt(0).toUpperCase() + (response.q).slice(1);
    vegTitle.innerText = vegName;
    //for loop dynamically changes the recipes based on the search
     var recList = (response.hits);
    for(var i = 0;i < 7;i++){
        var recTitle = document.getElementById(`rec${i}`);
       
       
        ingList = (recList[i].recipe.ingredientLines);
        recTitle.innerText = (recList[i].recipe.label);
        console.log(recList[i].recipe.label);
        console.log(ingList);
    }
    console.log(response);
    ingList0 = (response.hits[0].recipe.ingredientLines);
    for(var x = 0;x < ingList0.length;x++){
        igList0.innerHTML += `<li>${ingList0[x]}</li>`;
        
    };
    ingList1 = (response.hits[1].recipe.ingredientLines);
    for(var y = 0;y < ingList1.length;y++){
        igList1.innerHTML += `<li>${ingList1[y]}</li>`;
        
    };
    ingList2 = (response.hits[2].recipe.ingredientLines);
    for(var a = 0;a <ingList2.length;a++){debugger;
        igList2.innerHTML += `<li>${ingList2[a]}</li>`;
        debugger;
        
        
    };
    ingList3 = (response.hits[3].recipe.ingredientLines);
    for(var b = 0;b < ingList3.length;b++){
        igList3.innerHTML += `<li>${ingList3[b]}</li>`;
        
    };
    ingList4 = (response.hits[4].recipe.ingredientLines);
    for(var c = 0;c < ingList4.length;c++){
        igList4.innerHTML += `<li>${ingList4[c]}</li>`;
        
    };
    ingList5 = (response.hits[5].recipe.ingredientLines);
    for(var d = 0;d < ingList5.length;d++){
        igList5.innerHTML += `<li>${ingList5[d]}</li>`;
        
    };
    ingList6 = (response.hits[6].recipe.ingredientLines);
    for(var e = 0;e < ingList6.length;e++){
        igList6.innerHTML += `<li>${ingList6[e]}</li>`;
        
    }
    
})
.catch(err => console.error(err));