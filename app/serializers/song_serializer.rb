class SongSerializer
  include JSONAPI::Serializer
  attributes :id, :artist, :title, :gernre, :length, :errors
end
