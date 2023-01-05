// // import Link from 'next/link';

// // export default function LandingPage() {
// //   return (
// //     <div>
// //       <h1>Welcome to the Cycle Rental System!</h1>
// //       <Link legacyBehavior href="/signup">
// //         <a>Sign Up</a>
// //       </Link>
// //       <br />
// //       <Link legacyBehavior href="/signin">
// //         <a>Sign In</a>
// //       </Link>
// //       <br />
// //       <Link legacyBehavior href="/listing">
// //         <a>View Cycles</a>
// //       </Link>
// //     </div>
// //   );
// // }
// import Link from 'next/link';

// export default function LandingPage() {
//   const navbarStyles = {
//     display: 'grid',
//     placeItems: 'center',
//     gap: '2rem',
//     marginTop: '40px'
//   };

//   const navLinkStyles = {
//     margin: '20px 20px 20px 20px'
//   };

//   const headerStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const imageStyles = {
//     height: '100px',
//     marginRight: '20px',
//   };

//   const buttonStyle = {
//     padding: '10px'
//   }

//   const imgStyle = {
//     width: '40vw'
//   }

//   return (
//     <div style={{ minHeight: '90vh', margin: '10vh 0 0 0', display: 'flex', flexDirection: 'column' }}>
//       <div style={headerStyles}>
//         {/* <img src="/bicycle.png" alt="Bicycle Illustration" style={imageStyles} /> */}
//         {/* <h1>Greenpath</h1> */}
//         <h1>Welcome to the Cycle Rental System!</h1>
//       </div>
//       <div>

//         <nav style={navbarStyles}>
//           <button style={buttonStyle}>
//             <Link legacyBehavior href="/signup">
//               <a style={navLinkStyles}>Sign Up</a>
//             </Link></button>
//           <button style={buttonStyle}>
//             <Link legacyBehavior href="/signin">
//               <a style={navLinkStyles}>Sign In</a>
//             </Link>
//           </button>
//           <button style={buttonStyle}>
//             <Link legacyBehavior href="/listing">
//               <a style={navLinkStyles}>View Cycles</a>
//             </Link>
//           </button>
//         </nav>
//         <img style={
//           imgStyle
//         } src="https://raw.githubusercontent.com/Project-Greenpath/greenpath/main/public/images/hero2.svg"></img>
//       </div>
//     </div >
//   );
// }

import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>GreenPath</title>
      <link rel="stylesheet" href="/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <nav>
      <div className="logo">
        <Link href="/">
          <img
            src="/images/greenpath-logo-long.svg"
            alt=""
            className="logo-img"
          />
        </Link>
      </div>
      <div className="nav-menu">
        <ul className="nav-links">
          <Link href="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link href="/about">
            <li className="nav-item">About</li>
          </Link>
          <Link href="/contact">
            <li className="nav-item">Contact Us</li>
          </Link>
          <Link href="/signup">
            <li className="nav-item cta-secondary">Sign Up</li>
          </Link>
          <Link href="/signin">
            <li className="nav-item cta-sec">Log In</li>
          </Link>
        </ul>
      </div>
    </nav>
    <main>
      <section className="landing-hero">
        <div className="hero-left">
          <h1 className="hero-heading">
            A community for students to share, lend, and borrow their bicycles.
          </h1>
          <h2 className="hero-subheading">
            Whether you need a bicycle to get from your dorm to your classes, or
            you just need a bicycle to use around campus — Greenpath is the
            perfect solution!
          </h2>
          <Link href="/listing">
            <div className="cta">Get Started</div>
          </Link>
        </div>
        <div className="hero-right">
          <img src="/images/hero2.svg" alt="" />
        </div>
      </section>
    </main>
    <footer />
  </div>
);

export default Home;
