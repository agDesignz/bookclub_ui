import supabase from "../../supabaseClient";

const updateBookStatus = async (id, read = true) => {
  // Convert id to number if it's not already
  const bookId = parseInt(id, 10);

  // Check if conversion was successful
  if (isNaN(bookId)) {
    console.log("Error: Invalid book ID format");
    return;
  }

  const { data, error } = await supabase
    .from("book")
    .update({ finished: read })
    .eq("id", bookId)
    .select();

  if (error) {
    console.log("Error updating book:", error);
    return;
  } else {
    console.log("Book update seems ok");
    return data;
  }
};

export default updateBookStatus;
