class CreateCompeticaos < ActiveRecord::Migration[6.1]
  def change
    create_table :competicaos do |t|
      t.string :nome
      t.string :esporte
      t.boolean :done

      t.timestamps
    end
  end
end
