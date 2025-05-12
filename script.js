// JavaScript for filtering recipes
function filterRecipes() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
        const recipeName = recipe.getAttribute("data-name").toLowerCase();
        
        if (recipeName.includes(searchQuery)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}