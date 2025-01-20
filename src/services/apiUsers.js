import { supabaseAdmin } from "./supabase";

export async function fetchUsers() {
  try {
    const {
      data: { users },
      error,
    } = await supabaseAdmin.auth.admin.listUsers({});

    if (error) {
      throw error;
    }

    return users;
  } catch (error) {
    console.error("Error fetching auth users:", error);
    throw error;
  }
}
