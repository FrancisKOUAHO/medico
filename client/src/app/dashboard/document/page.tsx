import Card from '@/components/atoms/cards/card'

const Page = () => {
  console.log('Hello World')
  return (
    <section className="c-card">
      <div className="c-card__container">
        <div className="c-card__container__wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Page
