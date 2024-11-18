// models/artistModel.js
import { supabase } from '../Config/supabase_config.js';

export class ArtistModel {
  // Henter alle artister
  static async getAllRecords() {
    try {
      let { data, error } = await supabase
        .from('artists')
        .select('id, name');
      
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente artistliste, ${error}`);
    }
  }
}
