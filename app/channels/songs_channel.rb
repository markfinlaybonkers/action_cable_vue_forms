class SongsChannel < ApplicationCable::Channel
  def subscribed
    @song = Song.find(params[:id])
    stream_for(@song)
    broadcast_song
  end

  def save_song(data)
    data.delete('action')
    @song.update(data)
    broadcast_song
  end

  def broadcast_song
    self.class.broadcast_to(@song, SongSerializer.new(@song))
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
