// import Link from 'next/link';

// export default function LandingPage() {
//   return (
//     <div>
//       <h1>Welcome to the Cycle Rental System!</h1>
//       <Link legacyBehavior href="/signup">
//         <a>Sign Up</a>
//       </Link>
//       <br />
//       <Link legacyBehavior href="/signin">
//         <a>Sign In</a>
//       </Link>
//       <br />
//       <Link legacyBehavior href="/listing">
//         <a>View Cycles</a>
//       </Link>
//     </div>
//   );
// }
import Link from 'next/link';

export default function LandingPage() {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const navLinkStyles = {
    marginLeft: '20px',
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyles = {
    height: '100px',
    marginRight: '20px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <nav style={navbarStyles}>
        <Link legacyBehavior href="/signup">
          <a style={navLinkStyles}>Sign Up</a>
        </Link>
        <Link legacyBehavior href="/signin">
          <a style={navLinkStyles}>Sign In</a>
        </Link>
        <Link legacyBehavior href="/listing">
          <a style={navLinkStyles}>View Cycles</a>
        </Link>
      </nav>
      <div style={headerStyles}>
        {/* <img src="/bicycle.png" alt="Bicycle Illustration" style={imageStyles} /> */}
        {/* <h1>Greenpath</h1> */}
        <h1>Welcome to the Cycle Rental System!</h1>
      </div>
    </div>
  );
}
