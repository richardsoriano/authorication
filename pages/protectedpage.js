import { getSession } from "next-auth/react"
import { useRouter } from "next/router"

import React from "react"
function protectedpage() {
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  const router = useRouter()

  console.log("get serverside")
  if (!session) {
    router.replace("/")
    // context.res.writeHead(302, { Location: "/" })
    // context.res.end()
    return {}
  }
  return {
    props: {
      user: session.user,
    },
  }
}
export default protectedpage
