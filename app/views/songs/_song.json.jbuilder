json.extract! song, :id, :artist, :title, :gernre, :length, :created_at, :updated_at
json.url song_url(song, format: :json)
