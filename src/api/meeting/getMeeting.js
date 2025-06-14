import supabase from "../../supabaseClient";

const getMeeting = async () => {
  const { data, error } = await supabase
    .from("meeting")
    .select(`*, book_id("*")`)
    .order("date", { ascending: false })
    .limit(1);
  if (error) {
    console.log("getMeeting fetch error: ", error);
    return;
  } else if (data.length) {
    // console.log("getmeeting data:", data);
    const { date, time, location, book_id } = data[0];
    return { date, time, location, book_id };
  } else {
    console.log("No meeting data");
    return;
  }
};

export default getMeeting;
