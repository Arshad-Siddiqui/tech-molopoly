interface Card {
  name: string;
  price: number;
  rent: number;
  rentWithSet: number;
  group: string; // color
  house: number[];
  hotel: number;
  hotelCost: number;
  houseCost: number;
}

export default Card;