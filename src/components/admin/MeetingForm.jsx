import { useContext, useEffect, useState } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";
// import getAllBooks from "../../api/book/getAllBooks";
import BookSelect from "./BookSelect";

const MeetingForm = () => {
  const { meeting, createMeeting, changeMeeting, deleteCurrentMeeting } =
    useContext(MeetingContext);
  const [formOpen, setFormOpen] = useState(false);
  const [formAction, setFormAction] = useState("Edit");
  const [meetingData, setMeetingData] = useState(null);

  const handleMeetingChange = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const addBook = (checkedBook) => {
    setMeetingData({ ...meetingData, book_id: checkedBook });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(meetingData);
    if (formAction === "CREATE") {
      const result = await createMeeting(meetingData);
      setMeetingData(result[0]);
    }
    if (formAction === "UPDATE") {
      console.log("form meetingData:", meetingData);
      const result = await changeMeeting(meetingData);
      console.log("updated:", result);
      setMeetingData(result[0]);
    }
    if (formAction === "DELETE") {
      deleteCurrentMeeting(meetingData.id);
    }
    setFormOpen(false);
  };

  const openEdit = () => {
    setFormOpen(true);
    setFormAction("UPDATE");
  };

  const openNew = () => {
    setMeetingData(null);
    setFormOpen(true);
    setFormAction("CREATE");
  };

  const openDelete = () => {
    setFormOpen(true);
    setFormAction("DELETE");
  };

  const cancelChange = () => {
    setFormOpen(false);
    setMeetingData(meeting);
  };

  useEffect(() => {
    setMeetingData(meeting);
  }, [meeting]);

  return (
    <section className="book-card grid-cols-1 gap-7" onSubmit={handleSubmit}>
      {formOpen ? (
        <button
          className="btn btn-soft btn-error rounded-full justify-self-start"
          onClick={cancelChange}
        >
          Cancel
        </button>
      ) : (
        <div className="grid gap-4 grid-cols-3">
          <button
            className="btn btn-soft btn-info rounded-full"
            onClick={openEdit}
          >
            Edit
          </button>
          <button
            className="btn btn-soft btn-success rounded-full"
            onClick={openNew}
          >
            New
          </button>
          <button
            className="btn btn-soft btn-error rounded-full"
            onClick={openDelete}
          >
            Delete
          </button>
        </div>
      )}

      <form className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <label hidden htmlFor="email">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={meetingData?.location || ""}
          placeholder="Location"
          className="form__input form__input--dark col-span-full"
          disabled={!formOpen}
          onChange={handleMeetingChange}
        />
        <label hidden htmlFor="username">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={meetingData?.date || ""}
          placeholder="Date"
          className="form__input form__input--dark"
          disabled={!formOpen}
          onChange={handleMeetingChange}
        />
        <label hidden htmlFor="password">
          Time
        </label>
        <input
          type="time"
          name="time"
          value={meetingData?.time || ""}
          placeholder="Select Time"
          className="form__input form__input--dark"
          disabled={!formOpen}
          onChange={handleMeetingChange}
        />
        <BookSelect
          book={meetingData?.book_id || "No Book Currently"}
          addBook={addBook}
          formOpen={formOpen}
        />
        <button
          className={`btn btn-outline btn-${
            formAction === "DELETE" ? "error" : "success"
          } rounded-full col-span-full ${!formOpen && "invisible"}`}
          type="submit"
        >
          {formAction} MEETING
        </button>
      </form>
    </section>
  );
};
export default MeetingForm;
