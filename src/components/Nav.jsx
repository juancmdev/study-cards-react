const Nav = () => {
  const links = ['English Cards', 'Math Cards'];

  return (
    <>
      <div className="navBar w-full h-16 bg-amber-200">
        <ul>
            {links.map((item) => {
              return <h2>{item}</h2>;
                    
            })}
        </ul>
      </div>
    </>
  )
}

export default Nav
