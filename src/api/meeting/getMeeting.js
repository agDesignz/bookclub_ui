import supabase from "../../supabaseClient";
import formatTime from "../../utils/formatTime";

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
    const { date, time: rawTime, location, book_id } = data[0];
    const time = formatTime(rawTime);
    return { date, time, location, book_id };
  } else {
    console.log("No meeting data");
    return;
  }
};

export default getMeeting;
