// models/songModel.js
import { supabase } from '../Config/supabase_config.js';

export class SongModel {
  // Henter alle sange med artistens navn
  static async getAllSongs() {
    try {
      let { data: songs, error: songError } = await supabase
        .from('songs')
        .select('id, title, content, created_at, artistId');
      
      if (songError) {
        throw new Error(songError.message);
      }

      // Hent alle artister for at få artistens navn
      let { data: artists, error: artistError } = await supabase
        .from('artists')
        .select('id, name');
      
      if (artistError) {
        throw new Error(artistError.message);
      }

      // Forbind sange med artister
      return songs.map(song => {
        const artist = artists.find(artist => artist.id === song.artistId);
        return {
          id: song.id,
          title: song.title,
          content: song.content,
          created_at: song.created_at,
          artist_name: artist ? artist.name : "Unknown"
        };
      });

    } catch (error) {
      console.error(`Fejl: kan ikke hente sange, ${error}`);
    }
  }
}
