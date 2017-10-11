import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  url = 'https://recipe-book-d85f5.firebaseio.com/recipes.json';

  constructor(private http: Http,
              private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.url, this.recipeService.getRecipes());
  }

  getAllRecipes() {
    return this.http.get(this.url)
               .map(
                 (response: Response) => {
                   const recipes = response.json();
                   for (let recipe of recipes) {
                     if (!recipe['ingredients']) {
                       console.log(recipe);
                       recipe['ingredients'] = [];
                     }
                   }
                   return recipes;
                 }
               )
               .subscribe(
                 (recipes) => {
                   this.recipeService.setRecipes(recipes);
                 }
               )
  }
}