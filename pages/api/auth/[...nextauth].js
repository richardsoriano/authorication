import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const GOOGLE_CLIENT_ID =
  "191444422553-2eufq05qnqdqqv7g65h2pbtgroscmikp.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
// GOOGLE
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "secret token",
  //Callback here
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }

      return token
    },

    redirect: async (url, _baseUrl) => {
      if (url === "/user") {
        return Promise.resolve("/")
      }

      return Promise.resolve("/")
    },
  },
})
