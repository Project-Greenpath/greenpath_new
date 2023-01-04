import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Cycle Rental System!</h1>
      <Link legacyBehavior href="/signup">
        <a>Sign Up</a>
      </Link>
      <br />
      <Link legacyBehavior href="/signin">
        <a>Sign In</a>
      </Link>
      <br />
      <Link legacyBehavior href="/listing">
        <a>View Cycles</a>
      </Link>
    </div>
  );
}
