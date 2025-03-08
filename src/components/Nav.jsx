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
                return <li key={item.id} className="text-2xl cursor-pointer"><h2>{item.name}</h2></li>   
            })}
        </ul>

        <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown ">
    <a class="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Math Cards</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

      </div>
    </>
  )
}

export default Nav


