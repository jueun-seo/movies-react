import { useState } from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1, isFruit: false},
  { title: 'Garlic', id: 2, isFruit: false},
  { title: 'Apple', id: 3, isFruit: true},
  { title: 'Grape', id: 4, isFruit: true}
];

function ShoppingList() {
  const listItems = products.map(product => 
    <li
      key={product.id}
      style={
        {color: product.isFruit ? 'red':'blue' }
      }
     >
      {product.title}
    </li>
  )

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
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>{ count }번클릭!</button>
  )
}

function MyBtns({cnt, onClickF}) {
  return (
    <button onClick = { onClickF }> click!! {cnr} </button>
  )
}

export default function MyApp() {
  const isLoggedIn = true
  const [countAll, setCountAll] = useState(0)

  function handleClick() {
    setCountAll(countAll + 1)
  }
  return (
    <div>
      <h1>hihi</h1>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <p>my name is hong</p>
      {/* <Profile/> */}
      { isLoggedIn ? <Profile/> : <p>로그인해주세요</p> }
      { isLoggedIn && <p>welcome</p>}
      <ShoppingList/>
      <MyBtns cnt={countAll} onClickF={ handleClick }/>
      <MyBtns cnt={countAll} onclickF={ handleClick }/>
    </div>
  )
}
