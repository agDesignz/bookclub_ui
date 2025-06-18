import supabase from "../../supabaseClient";

const updateProfileApproved = async (id) => {
  const { data, error } = await supabase
    .from("profile")
    .update({ is_approved: true })
    .eq("id", id);

  if (!error) {
    console.log("Approval Success:", data);
    return data;
  } else {
    console.log("Approval error:", error);
    return error;
  }
};

export default updateProfileApproved;
