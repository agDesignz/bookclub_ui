const ProfileDetails = ({ user }) => {
  return (
    <div className="card bg-gradient-to-tr from-sandy-100 to-sandy-400 text-lemon-900 w-full">
      <div className="card-body">
        <h2 className="card-title">User Information</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
