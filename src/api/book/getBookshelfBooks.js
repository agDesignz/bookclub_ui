import supabase from "../../supabaseClient";

const getBookshelfBooks = async () => {
  const { data, error } = await supabase.rpc("get_bookshelf_books");

  if (error) {
    console.log("Error getting bookshelf books", error);
  } else {
    return data;
  }
};

export default getBookshelfBooks;
