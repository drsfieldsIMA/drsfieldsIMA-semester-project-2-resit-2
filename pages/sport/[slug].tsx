import { useRouter } from 'next/router'

export default function SingleSport() {
  const router=useRouter();
  console.log("router===>",router.query.slug)
  return (
    <div>
      <h1>Singular Sport Page</h1>
      <h2>{router.query.slug}</h2>
    </div>
  )
}
