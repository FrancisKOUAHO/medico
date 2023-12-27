import Link from 'next/link'

const Card = () => {
  console.log('Card')
  return (
    <div className="c-card__content">
      <h1>Card</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Card
