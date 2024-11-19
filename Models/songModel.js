import { supabase } from '../config/supabase.config.js';

export class SongModel {
    // Hent alle sange
    static async getAllSongs() {
        try {
            let { data, error } = await supabase.from('songs').select('*');
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            console.error(`Error fetching songs: ${error.message}`);
        }
    }

    // Hent én sang via ID
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
            console.error(`Error fetching song with ID ${id}: ${error.message}`);
        }
    }
}
