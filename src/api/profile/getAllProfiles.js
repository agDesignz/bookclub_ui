import supabase from "../../supabaseClient";

const getAllProfiles = async () => {
  const { data, error } = await supabase.rpc("get_user_profiles");

  if (!error) {
    console.log("profiles data:", data);
    return data;
  } else {
    console.log("getAllUserProfiles error: ", error);
    return error;
  }
};

export default getAllProfiles;
