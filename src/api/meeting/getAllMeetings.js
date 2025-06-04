import supabase from "../../supabaseClient";

const getAllMeetings = async () => {
  const { data, error } = await supabase
    .from("meeting")
    .select(`*, book_id("*")`)
    .order("date", { ascending: false });

  if (!error) {
    return data;
  } else {
    console.log("getAllMeetings error: ", error);
    return;
  }
};

export default getAllMeetings;
