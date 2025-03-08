const Nav = () => {
   const links = [
        {   
            id: 1,
            name: 'English Cards'
        }, 
        {
            id: 2,
            name: 'Math Cards'
        }
   ];

  return (
    <>
      <div className="navBar w-full h-16 bg-amber-200 flex justify-center">
        <ul className="flex justify-around items-center w-3xl">
            {links.map((item) => {
                return <li key={item.id}><h2>{item.name}</h2></li>   
            })}
        </ul>
      </div>
    </>
  )
}

export default Nav
