import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "guest",
      name: "Guest",
      credentials: {},
      async authorize(credentials, req) {
        return { id: "guest", name: "Guest User" }; // ya da null dönebilir
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
