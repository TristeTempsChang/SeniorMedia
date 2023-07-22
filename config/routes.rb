Rails.application.routes.draw do
  get 'get_recipe', action: :getRecipe, controller: :recipe
  post 'add_recipe', action: :addRecipe, controller: :recipe
  get 'show_recipe', action: :showRecipe, controller: :recipe
  put 'update_recipe', action: :updateRecipe, controller: :recipe
end
