class RecipeController < ApplicationController
    before_action :getRecipeByID, only: [:updateRecipe, :showRecipe]

    #Controller Get
    def getRecipe
        recette = Recipe.all
        if recette
            render json: recette, status: :ok
        else
            render json: { msg: "Aucune recette" }, status: :unprocessable_entity
        end
    end

    #Controller Post
    def addRecipe
        recette = Recipe.new(nom: params[:nom], type: params[:type], img: params[:img], contenu: params[:contenu], time: params[:time], view: params[:view])

        if recette.save()
            render json: recette, status: :ok
        else
            render json: {message: "La recette n'a pas été ajouté"}, status: :unprocessable_entity
        end
    end

    #Controller GetByID
    def showRecipe
        if @recipe
            render json: @recipe, status: :ok
        else
            render json: { msg: "La recette n'a pas été trouvé"}, status: :unprocessable_entity
        end
    end

    #Controller update
    def updateRecipe
        if @recipe
            if @recipe.update(nom: params[:nom], type: params[:type], img: params[:img], contenu: params[:contenu], time: params[:time], view: params[:view])
                render json: @recipe, status: :ok
            else
                render json: { msg: "La mise à jour n'a pas fonctionnée"}, status: :unprocessable_entity
            end
        else
            render json: { msg: "La recette n'a pas été trouvé"}, status: :unprocessable_entity
        end
    end

    private
        def getRecipeByID
            @recipe = Recipe.find(params[:_id])
        end

end

