import supabase from "../../supabaseClient";

const deleteBook = async (bookId) => {
  const { error } = await supabase.from("book").delete().eq("id", bookId);
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log("success");
    return "success";
  }
};

export default deleteBook;
