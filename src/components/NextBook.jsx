import { useContext } from "react";
import MeetingContext from "../context/MeetingContext";

const NextBook = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);
  return (
    <section className="grid md:items-start gap-4 w-full grid-cols-[max-content_1fr]">
      <div className="col-span-2 flex flex-col md:grow">
        <h2 className="text-2xl sm:text-3xl">
          {meeting?.book_id?.title || "TBA"}
        </h2>
        <h4 className="text-md sm:text-lg">{meeting?.book_id?.author}</h4>
      </div>
    </section>
  );
};
export default NextBook;
