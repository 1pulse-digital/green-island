import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // const { data } = fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
          //   identifier: credentials.email,
          //   password: credentials.password
          // });
          // if (data) {
          //   return data;
          // }
          // else {
          //   return null;
          // }
          return {};
        } catch (e) {
          console.log("caught error");
          const errorMessage = e.response.data.message;
          // Redirecting to the login page with error message          in the URL
          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
    // ...add more providers here
  ],

  session: {
    jwt: true,
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
