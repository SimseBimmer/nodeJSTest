import { supabase } from '../config/supabase.config.js';

export class ArtistModel {
  static async getAllRecords() {
    try {
      let { data, error } = await supabase.from('artists').select('id, name');
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.error(`Fejl: Kan ikke hente artister, ${error}`);
    }
  }
}
