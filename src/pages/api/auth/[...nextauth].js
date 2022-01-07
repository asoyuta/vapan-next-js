import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import admin from '../../../firebase/nodeApp'

const db = admin.firestore()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user }) {
      db.collection('users').doc(user.id).set(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
        { merge: true }
      )

      return true
    },
    async session({ session, token }) {
      session.user.id = token.sub

      return session
    },
  },
})
