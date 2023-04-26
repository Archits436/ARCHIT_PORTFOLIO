import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div style={{ cursor: 'pointer' }}>
            <a href='https://twitter.com/archits436' target='blank'><BsTwitter /></a>
        </div>
        <div style={{ cursor: 'pointer' }}>
            <a href='https://www.facebook.com/profile.php?id=100004229658927' target='blank'><FaFacebookF /></a>
        </div>
        <div style={{ cursor: 'pointer' }}>
            <a href='https://www.instagram.com/archit._.saxenaa/' target='blank'><BsInstagram /></a>
        </div>
    </div>
);

export default SocialMedia;