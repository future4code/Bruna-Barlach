class CreateResultados < ActiveRecord::Migration[6.1]
  def change
    create_table :resultados do |t|
      t.references :competicao, null: false, foreign_key: true
      t.string :atleta
      t.string :value
      t.string :unidade

      t.timestamps
    end
  end
end
