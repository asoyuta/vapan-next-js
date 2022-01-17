import { useRouter } from 'next/router'

function UserPage() {
  const router = useRouter()
  const { userId } = router.query

  return <div>Your ID is {userId}</div>
}

export default UserPage
