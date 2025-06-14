import { useContext, useEffect, useState } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";
import getAllBooks from "../../api/book/getAllBooks";

const MeetingForm = () => {
  const { meeting, createMeeting } = useContext(MeetingContext);
  const [formOpen, setFormOpen] = useState(false);
  const [formAction, setFormAction] = useState("Edit");
  const [meetingData, setMeetingData] = useState(null);

  const handleMeetingChange = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("delete data:", meeting.id, meeting.book_id);
    const response = await deleteMeeting(meeting.id, meeting.book_id);
    console.log("delete response:", response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(meetingData);
    if (formAction === "Create") {
      const result = await createMeeting(meetingData);
      setMeetingData(result[0]);
    }
    setFormOpen(false);
  };

  const openEdit = () => {
    setFormOpen(true);
    setFormAction("Update");
  };

  const openNew = () => {
    setMeetingData(null);
    setFormOpen(true);
    setFormAction("Create");
  };

  const cancelChange = () => {
    setFormOpen(false);
    if (meetingData === null) setMeetingData(meeting);
  };

  useEffect(() => {
    setMeetingData(meeting);
    // console.log("Meeting Data:", meetingData);
  }, [meeting]);

  return (
    <section className="book-card gap-7" onSubmit={handleSubmit}>
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
          <button className="btn btn-soft btn-error rounded-full">
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

        <button
          className={`btn btn-outline btn-success rounded-full col-span-full ${
            !formOpen && "invisible"
          }`}
          type="submit"
        >
          {formAction} Meeting
        </button>
      </form>
    </section>
  );
};
export default MeetingForm;
