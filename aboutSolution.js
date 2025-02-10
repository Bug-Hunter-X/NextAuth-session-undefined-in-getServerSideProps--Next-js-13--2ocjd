```javascript
// pages/about.js
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>You are logged in as {session.user.email}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
```