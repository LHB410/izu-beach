class RemovePhotoFromBeach < ActiveRecord::Migration[7.0]
  def change
    remove_column :beaches, :photo, :string
  end
end
