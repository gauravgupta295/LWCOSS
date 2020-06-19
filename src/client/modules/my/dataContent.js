const listItems = [];
const timeLimit = 30;
let item = {
    Id: 1,
    URL: 'https://image.scoopwhoop.com/w694/s4.scoopwhoop.com/anj/emojis/68e1172a-5cb2-442c-bf7a-461273e74bd9.jpg',
    Title: 'Tip Tip Barsa Pani',
    Category: 'Song',
    Zone: 'Bollywood',
    Hint:'Akshay Kumar as Inspector',
    IsVisible : false
  }; 
  let item1 = {
    Id : 2,
    URL: 'https://image.scoopwhoop.com/w694/s3.scoopwhoop.com/anj/ks/f4ce99c0-8321-4db9-b1c0-34eb3e5f0f14.jpg',
    Title: 'Tip Tip Barsa Pani',
    Category: 'Movie',
    Zone: 'Bollywood',
    Hint:'Guess the Bollywood Song',
    IsVisible : false
  }; 
  let item2 = {
    Id : 3,
    URL: 'https://image.scoopwhoop.com/w694/s3.scoopwhoop.com/anj/emojis/e0151de7-b90c-4fe9-b8c0-d97993fe9958.jpg',
    Title: 'Tu Cheez h badi h mast mast',
    Category: 'Song',
    Zone: 'Bollywood',
    Hint:'Akshay and Raveena',
    IsVisible : false
  }; 
  let item3 = {
    Id : 4,
    URL: 'https://image.scoopwhoop.com/w694/s4.scoopwhoop.com/anj/emojis/ebb6a936-cb41-4f44-9e29-d28009bfcd6f.jpg',
    Title: 'Tan Tana Tan Tan Taara',
    Category: 'Song',
    Zone: 'Bollywood',
    Hint:'Salman\' Khan Double Role',
    IsVisible : false
  }; 
  
listItems.push(item);
listItems.push(item1);
listItems.push(item2);
listItems.push(item3); 
export{listItems , timeLimit};