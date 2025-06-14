import supabase from "../../supabaseClient";

const updateMeeting = async ({ date, time, location, id }) => {
  const { data, error } = await supabase
    .from("meeting")
    .update({ date, time, location })
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

export default updateMeeting;
