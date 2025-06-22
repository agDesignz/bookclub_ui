import supabase from "../../supabaseClient";

const getMeeting = async () => {
  const { data, error } = await supabase
    .from("meeting")
    .select(`*, book_id("*")`)
    .order("id", { ascending: false })
    .limit(1);
  if (error) {
    console.log("getMeeting fetch error: ", error);
    return;
  } else if (data.length) {
    return data[0];
  } else {
    // console.log("No meeting data");
    return;
  }
};

export default getMeeting;
