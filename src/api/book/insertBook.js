import supabase from "../../supabaseClient";

const insertBook = async (book, id) => {
  const { data, error } = await supabase.from("book").insert([
    {
      title: book.title,
      author: book.author[0],
      cover: book.cover,
      key: book.key,
      description: book.description,
      user_id: id,
      suggestion: book.suggestion,
    },
  ]);

  if (error) {
    return error;
  } else {
    return "success";
  }
};

export default insertBook;
