class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :option_1
      t.string :option_2
      t.string :option_3
      t.string :option_4
      t.integer :correct_option
      t.integer :lesson_id

      t.timestamps
    end
  end
end
