import React from 'react'
import img from '../assets/26e34efd42280a8f6c7b43c7272346db.jpg'

export const Profile = () => {
    return (
        <div>
            <h3 style={{ textAlign: 'center', color: 'blue' }}>This is the image stored at public</h3>
            <img src="/images/Screenshot 2026-05-10 205335.png" alt="Screenshot" width={'200px'} height={'200px'} />
        </div>
    );
}

export const Profile2 = () => {
    return (
        <div>
            <h3>This is the second profile image</h3>
            <img src={img} alt="Screenshot" width={'200px'} height={'200px'} />
        </div>
    );
}

function Gallery() {
  return (
    <div>
      <h3>This is the Gallery component</h3>
      <Profile />
      <Profile2 />
    </div>
  );
}

//C2: Viết export mặc định cho Gallery và export named cho Profile và Profile2
//  const Profile = () => {
//     return (
//         <div>
//             <h3>This is the image stored at public</h3>
//             <img src="/images/Screenshot 2026-05-10 205335.png" width={'200px'} height={'200px'} />
//         </div>
//     );
// }

//  const Profile2 = () => {
//     return (
//         <div>
//             <h3>This is the second profile image</h3>
//             <img src={img} width={'200px'} height={'200px'} />
//         </div>
//     );
// }

// export {Profile, Profile2};

export default Gallery