const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Grape', id: 4 }
];

function ShoppingList() {
  const listItems = products.map(product => (
    <li key={product.id}>{product.title}</li>
  ))

  return <ul>{listItems}</ul>
}

function Profile() {
  return (
    <>
      <h2>{user.name}</h2>
      <img 
        src={user.imageUrl} 
        style={
          {
            width: user.imageSize,
            height: user.imageSize
          }
        }
        alt={`photo of ${user.name}`}
        className='avatar' 
        />
    </>
  )
}

function MyButton() {
  return (
    <button>I'm button</button>
  )
}

export default function MyApp() {
  const isLoggedIn = true

  return (
    <div>
      <h1>hihi</h1>
      <MyButton/>
      <p>my name is hong</p>
      {/* <Profile/> */}
      { isLoggedIn ? <Profile/> : <p>로그인해주세요</p> }
      { isLoggedIn && <p>welcome</p>}
      <ShoppingList/>
    </div>
  )
}
