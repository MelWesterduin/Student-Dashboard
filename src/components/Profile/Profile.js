import './Profile.css';

const Profile = ({ profile }) => {
  return profile ? (
    <div className="profile">
      <div className="title">Studenten profiel:</div>
      <div>Naam: {profile.first_name}</div>
      <div>Achternaam: {profile.last_name}</div>
      <div>Email: {profile.email}</div>
      <div>Telefoonnr: {profile.phone}</div>
      <div>Gender: {profile.gender}</div>
    </div>
  ) : (
    <p className="allstudents">Overzicht van alle studenten:</p>
  );
};

export default Profile;
