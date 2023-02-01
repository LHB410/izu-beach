class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :content
      t.integer :rating
      t.string :screen_name
      t.references :beach, null: false, foreign_key: :true
      t.timestamps
    end
  end
end
