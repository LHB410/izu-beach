class CreateBeaches < ActiveRecord::Migration[7.0]
  def change
    create_table :beaches do |t|
      t.string :name
      t.string :address
      t.string :description
      t.boolean :parking
      t.boolean :bbq_friendly

      t.timestamps
    end
  end
end
