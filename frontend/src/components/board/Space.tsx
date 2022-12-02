const Space = (card: Card) => {
  return (
    <div className='space'>
      <div className={'space-header' + ` ${card.color}`} />
      <div className='space-body'>
        <p className='space-name'>{card.name}</p>
        <p className='space-price'>${card.price}</p>
      </div>
    </div>
  )
}

export default Space;

interface Card {
  name: string;
  color: string;
  price: number;
}