import { useState } from 'react'
import './App.css'

function OpenClick(e){
  e.target.nextElementSibling.classList.remove('hidden');
}

function CloseClick(e){
  e.target.nextElementSibling.classList.add('hidden');
}

function dellClick(e){
  e.target.parentElement.remove();
  if(cartList.nextElementSibling.innerText === ''){
      cartList.classList.add('hidden');
  }
}

function addCart(e){

  let title = e.target.parentElement.parentElement.children[0].textContent;
  let src = e.target.parentElement.parentElement.children[1].src;
  let price = e.target.parentElement.parentElement.children[2].textContent.slice(0,-1);

  mapCart.push(title, src, price);
  
}

const mapCart = []
const cart = mapCart.map( x =>
  
    <div className="transition-all flex p-5 justify-items-center gap-8 border-solid border-gray border-4 place-items-center">
        <img className='p-4 w-[150px]' src={x.src} />
            <div className="flex-col">
                <h1>{x.title}</h1>
                <h1>{x.price + '₺'}</h1>
            </div>
        <img onClick={dellClick} className='transition-all cursor-pointer shadow-sm w-14 h-14 shadow-black active:shadow-inner active:shadow-orange-400 p-3 rounded-xl' src="/src/assets/img/delete.svg" /> 
    </div>
  
);

export function Navbar(){
    
  const menuList = [
      {
          id: 1,
          text: 'Home',
          class: 'hover:bg-white transition-all logo-keyframes hover:text-4xl hover:shadow-orange-400 rounded-lg p-3'
      }
      ,
      {
          id: 2,
          text: 'Parts',
          class: 'hover:bg-white transition-all logo-keyframes hover:text-4xl hover:shadow-orange-400 rounded-lg p-3'
      }
      ,
      {
          id: 3,
          text: 'Pricing',
          class: 'hover:bg-white transition-all logo-keyframes hover:text-4xl hover:shadow-orange-400 rounded-lg p-3'
      }
      ,
      {
          id: 4,
          text: 'Contact',
          class: 'hover:bg-white transition-all logo-keyframes hover:text-4xl hover:shadow-orange-400 rounded-lg p-3'
      }
  ];

  const [openOrClose,setOpen] = useState(false);
  function handleClick(e){
      setOpen(!openOrClose);
      if(openOrClose === true){
          CloseClick(e);
      }
      else{
          OpenClick(e);
      }
  }

  const menu = menuList.map(x => <a key={x.id} className={x.class} href={'#/'+ x.text}>{x.text}</a>)
  return(
      <>
  <div className='lecker shadow-md h-16 flex gap-5 justify-between items-center p-12 font-black text-2xl'>
      <h1 className='logo-keyframes'>MotoCycleParts</h1>
      <div className='flex gap-5'>
      {menu}
  </div>
      <img id='cartList' onClick={handleClick} className='cursor-pointer p-3 rounded-xl w-20 h-20' src="/src/assets/img/shoping-cart.svg" alt="" />
          <div className="hidden fixed bg-white font-sans font-bold flex-col gap-5 top-5 transition-all border-solid border-white border-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-400 active:shadow-lg items-center">
              {cart}
          </div>
      </div>
  </>
  )
}

function App() {
  const mainContent = [
    {
      id: 1,
      name: 'Ls2 Stratus',
      pricing: 3000,
      img: 'ls2stratus'
    }
    ,
    {
      id: 2,
      name: 'Ls2 Stream',
      pricing: 3600,
      img: 'ls2stream'
    }
    ,
    {
      id: 3,
      name: 'Ls2 Vizor',
      pricing: 600,
      img: 'ls2vizor'
    }
    ,
    {
      id: 4,
      name: 'Ls2 Challenger',
      pricing: 8500,
      img: 'ls2challenger'
    }
    ,
    {
      id: 5,
      name: 'Ls2 Advant',
      pricing: 10000,
      img: 'ls2advant'
    }
    ,
    {
      id: 6,
      name: 'Ls2 Pinlock',
      pricing: 1000,
      img: 'ls2pinlock'
    }
  ];

  const products = mainContent.map(x => 
    <div key={x.id} className="transition-all border-solid border-white border-8 max-w-[250px] rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-400 active:shadow-lg">
      <div  className="m-5 rounded-xl flex-col items-center text-gray-400">
        <h1>{x.name}</h1>
        <img className='p-4' src= {'/src/assets/img/'+ x.img + '.jpg'} alt="" />
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className='text-lg' >{x.pricing + '₺'}</h2>
          <img onClick={addCart} className='cursor-pointer shadow-sm w-36 h-12 shadow-green-500 active:shadow-inner active:shadow-green-500 p-3 rounded-xl ' src="/src/assets/img/add_shopping.svg" alt="" />
        </div>
      </div>
    </div>);

  return (
    <>
    <Navbar></Navbar>
      <div className="p-8 m-5 grid xl:grid-cols-7 lg:[grid-cols-3] px-5 place-items-center gap-5 rounded-xl shadow-inner shadow-slate-200">
        <h1 className='text-gray-400'>HELMETS</h1>
        {products}
      </div>
    </>
  )
}

export default App
