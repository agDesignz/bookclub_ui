import supabase from "../../supabaseClient";

const updateBookSuggestion = async (suggestion, id) => {
  const { data, error } = await supabase
    .from("book")
    .update({ suggestion })
    .eq("id", id)
    .select();

  if (error) {
    console.log("update error:", error);
    return error;
  } else {
    console.log("Meeting updated:", data);
    return data;
  }
};

export default updateBookSuggestion;
