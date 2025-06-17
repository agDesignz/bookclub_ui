import supabase from "../../supabaseClient";

const updateMeeting = async ({ date, time, location, id, book_id }) => {
  const { data, error } = await supabase
    .from("meeting")
    .update({ date, time, location, book_id: book_id.id })
    .eq("id", id)
    .select(`*, book_id("*")`);

  if (error) {
    console.log("update error:", error);
    return error;
  } else {
    console.log("Meeting updated:", data);
    return data;
  }
};

export default updateMeeting;
