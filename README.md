# NextAuth Session Undefined in getServerSideProps (Next.js 13)

This repository demonstrates a bug where NextAuth session is undefined in `getServerSideProps` after upgrading to Next.js 13. The issue occurs even after successful login.

## Bug Description

The application uses NextAuth for authentication. In previous Next.js versions (12), retrieving the session in `getServerSideProps` worked correctly. After upgrading to Next.js 13, the `session` object returned by `unstable_getServerSession` is always undefined.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Log in using a provider (e.g. email).
5. Navigate to the `/about` page.  You'll see that the session object is undefined, and the 'You are logged in...' message is not displayed.

## Expected Behavior

The `session` object should contain user information after successful login.

## Actual Behavior

The `session` object is always undefined, regardless of login status.

## Solution

The provided solution involves using the `getSession` function from `next-auth/react` instead of `unstable_getServerSession` in `getServerSideProps`.