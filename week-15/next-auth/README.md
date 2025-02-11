# Next.js Authentication with NextAuth.js

## Overview
This project implements authentication in Next.js using NextAuth.js, featuring OAuth authentication with Google and GitHub providers.

Reference:
https://projects.100xdevs.com/tracks/Next-Auth/next-auth-1

## Detailed Notes on NextAuth.js Implementation

### Key Concepts
- **Session Management**: NextAuth.js handles session tokens automatically
- **Provider Integration**: Supports multiple OAuth providers simultaneously
- **JWT Handling**: Automatic JWT session token generation and validation
- **Middleware Support**: Route protection using Next.js middleware
- **Type Safety**: Full TypeScript support for better development experience

### Authentication Flow
1. User clicks login button
2. Redirected to provider's login page
3. Provider sends back authentication token
4. NextAuth.js creates session
5. User is redirected back to application

## Features
- 🔐 Secure authentication
- 🌐 Google and GitHub login
- 👤 User profile management
- 🛡️ Protected routes
- 📱 Responsive design

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Google OAuth credentials
- GitHub OAuth credentials

### Important Notes for OAuth Setup
#### Google OAuth Setup
1. Visit Google Cloud Console
2. Create new project
3. Enable OAuth 2.0
4. Add authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google (development)
   - https://yourdomain.com/api/auth/callback/google (production)

#### GitHub OAuth Setup
1. Go to GitHub Developer Settings
2. Create new OAuth App
3. Add callback URL:
   - http://localhost:3000/api/auth/callback/github (development)
   - https://yourdomain.com/api/auth/callback/github (production)

### Installation
1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-auth
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file and add the following variables:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Advanced Usage Notes

### Session Management
- Sessions can be configured as JWT or Database
- Default session duration is 30 days
- Custom session handling possible through callbacks

### Protecting API Routes
```typescript
// Example of protecting API routes
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  // Your API logic here
}
```

### Custom Error Handling
```typescript
// Add to [...nextauth].ts
pages: {
  error: '/auth/error', // Custom error page
  signIn: '/auth/signin', // Custom signin page
}
```

## API Routes
- `GET /api/auth/session` - Get current session information
- `GET/POST /api/auth/signin` - Sign in page or authentication endpoint
- `GET/POST /api/auth/signout` - Sign out endpoint
- `GET /api/auth/csrf` - Get CSRF token
- `GET /api/auth/providers` - Get list of configured providers

## Creating Protected Pages
Use `getServerSideProps` to protect a page:

```typescript
export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }
  
  return {
    props: { session }
  };
}
```

## Configuration
NextAuth.js configuration in `pages/api/auth/[...nextauth].ts`:

```typescript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Customize session data
      return session;
    },
    async jwt({ token, user, account }) {
      // Customize JWT token
      return token;
    },
  },
  // Additional configuration options
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
```

### Best Practices
1. Always use environment variables for secrets
2. Implement proper error handling
3. Use TypeScript for better type safety
4. Keep session data minimal for performance
5. Implement proper CSRF protection
6. Regular security audits
7. Keep dependencies updated

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` file for more information.

## Support
Open an issue or contact: [your-email@example.com]

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [OAuth Providers Configuration](https://next-auth.js.org/providers/oauth)
- [NextAuth.js Security Best Practices](https://next-auth.js.org/security)
- [Custom Provider Implementation](https://next-auth.js.org/configuration/providers/oauth)
- [Database Adapters](https://next-auth.js.org/adapters/overview)