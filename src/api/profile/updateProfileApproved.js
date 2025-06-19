import supabase from "../../supabaseClient";

const updateProfileApproved = async (id) => {
  const { data, error } = await supabase.rpc("update_profile_approved", {
    profile_id: id,
  });

  if (!error) {
    console.log("Approval Success:", data);
    return "success";
  } else {
    console.log("Approval error:", error);
    return error;
  }
};

export default updateProfileApproved;
