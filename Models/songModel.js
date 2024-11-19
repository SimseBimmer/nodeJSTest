import { supabase } from '../config/supabase.config.js';

export class SongModel {
  static async getAllSongs() {
    try {
      let { data, error } = await supabase.from('songs').select('*');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.error(`Fejl: Kan ikke hente sange, ${error}`);
    }
  }

  static async getRecordById(id) {
    try {
      let { data, error } = await supabase
        .from('songs')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.error(`Fejl: Kan ikke hente sang, ${error}`);
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase.from('songs').insert([
        {
          title: formdata.title,
          content: formdata.content,
          lyrics: formdata.lyrics,
          artist_id: formdata.artist_id,
        },
      ]);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.error(`Fejl: Kan ikke oprette sang, ${error}`);
    }
  }
}
