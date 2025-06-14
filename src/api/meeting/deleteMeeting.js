import supabase from "../../supabaseClient";

const deleteMeeting = async (id) => {
  const { error } = await supabase.from("meeting").delete().eq("id", id);

  if (error) {
    console.log("Error deleting meeting:", error);
    return error;
  } else {
    console.log("Meeting Deleted");
    return "success";
  }
};

export default deleteMeeting;
