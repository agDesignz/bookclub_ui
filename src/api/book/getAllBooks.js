import supabase from "../../supabaseClient";

const getAllBooks = async () => {
  const { data, error } = await supabase.rpc("get_books_with_users");

  if (error) {
    console.error("Error fetching books:", error);
  } else {
    console.log("Books with usernames:", data);
    return data;
  }
};

export default getAllBooks;
