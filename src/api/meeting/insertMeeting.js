import supabase from "../../supabaseClient";

const insertMeeting = async ({ date, time, location }) => {
  const { data, error } = await supabase
    .from("meeting")
    .insert([
      {
        date,
        time,
        location,
      },
    ])
    .select();

  if (error) {
    return error;
  } else {
    console.log("Meeting Created:", data);
    return data;
  }
};

export default insertMeeting;
