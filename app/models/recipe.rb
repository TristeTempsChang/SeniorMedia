class Recipe
  include Mongoid::Document
  include Mongoid::Timestamps

  field :nom, type: String
  field :type, type: String
  field :img, type: String
  field :contenu, type: String
  field :time, type: :integer
  field :view, type: :integer

end
