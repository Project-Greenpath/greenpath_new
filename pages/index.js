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
    display: 'grid',
    placeItems: 'center',
    gap: '2rem',
    marginTop: '40px'
  };

  const navLinkStyles = {
    margin: '20px 20px 20px 20px'
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

  const buttonStyle = {
    padding: '10px'
  }

  return (
    <div style={{ minHeight: '90vh', margin: '10vh 0 0 0', display: 'flex', flexDirection: 'column' }}>
      <div style={headerStyles}>
        {/* <img src="/bicycle.png" alt="Bicycle Illustration" style={imageStyles} /> */}
        {/* <h1>Greenpath</h1> */}
        <h1>Welcome to the Cycle Rental System!</h1>
      </div>
      <nav style={navbarStyles}>
        <button style={buttonStyle}>
          <Link legacyBehavior href="/signup">
            <a style={navLinkStyles}>Sign Up</a>
          </Link></button>
        <button style={buttonStyle}>
          <Link legacyBehavior href="/signin">
            <a style={navLinkStyles}>Sign In</a>
          </Link>
        </button>
        <button style={buttonStyle}>
          <Link legacyBehavior href="/listing">
            <a style={navLinkStyles}>View Cycles</a>
          </Link>
        </button>
      </nav>
    </div>
  );
}
