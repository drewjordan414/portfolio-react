import React from 'react';
import pfp from '../assets/images/pfp.png';

function ProfilePicture() {
  return (
    <section className="profile-picture">
      <div className="container">
        <img src={pfp} alt="profile picture" />
      </div>
    </section>
  );
}

export default ProfilePicture;
