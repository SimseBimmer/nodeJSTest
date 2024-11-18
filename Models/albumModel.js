// models/albumModel.js
import { supabase } from '../Config/supabase_config.js';

export class AlbumModel {
  // Henter alle albums med artistens navn
  static async getAllAlbums() {
    try {
      let { data: albums, error: albumError } = await supabase
        .from('albums')
        .select('id, title, artistId, release_date');
      
      if (albumError) {
        throw new Error(albumError.message);
      }

      // Hent alle artister
      let { data: artists, error: artistError } = await supabase
        .from('artists')
        .select('id, name');
      
      if (artistError) {
        throw new Error(artistError.message);
      }

      // Forbind albums med artister
      return albums.map(album => {
        const artist = artists.find(artist => artist.id === album.artistId);
        return {
          id: album.id,
          title: album.title,
          artist_name: artist ? artist.name : "Unknown",
          release_date: album.release_date
        };
      });

    } catch (error) {
      console.error(`Fejl: kan ikke hente albums, ${error}`);
    }
  }
}
