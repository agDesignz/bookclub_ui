import supabase from "../../supabaseClient";

const getAllBooks = async () => {
  const { data, error } = await supabase
    // .from("book")
    // .select("*, profile(username)");
    // .eq("profile.user_id", "book.user_id");
    .from("profile")
    .select();

  if (!error) {
    console.log("getAllBooks fetch: ", data);
    return data;
  } else {
    console.log("getAllBooks error: ", error);
    return;
  }
};

export default getAllBooks;
