class User < ActiveRecord::Base

  has_secure_password

  has_many :reviews
  has_many  :products, through: :reviews

  validates :name, presence: true

validates :first_name, :last_name, :email, presence: true
validates :email, uniqueness: true

end

