const BoardCard = (card: Card) => {
  return (
    <div className='board-card'>
      <div className={'board-card-header' + ` ${card.color}`} />
      <div className='board-card-body'>
        <p className='board-card-name'>{card.name}</p>
        <p className='board-card-price'>${card.price}</p>
      </div>
    </div>
  )
}

export default BoardCard;

interface Card {
  name: string;
  color: string | null;
  price: number;
}