class Song < ApplicationRecord

  validates_presence_of :artist, :title, :gernre
end
