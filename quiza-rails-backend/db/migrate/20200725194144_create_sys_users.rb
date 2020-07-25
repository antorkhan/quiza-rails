class CreateSysUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :sys_users do |t|
      t.string :name
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
