import supabase from "../../supabaseClient";

const insertMeeting = async ({ date, time, location, book_id }) => {
  const { data, error } = await supabase
    .from("meeting")
    .insert([
      {
        date,
        time,
        location,
        book_id: book_id.id,
      },
    ])
    .select(`*, book_id("*")`);

  if (error) {
    return error;
  } else {
    console.log("Meeting Created:", data);
    return data;
  }
};

export default insertMeeting;
