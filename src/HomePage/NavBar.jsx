const NavBar = () => {
  const items = ["We", "Services", "Insights", "Connect"];
  const button_items = ["Login", "Sign Up"];

  return (
    <>
      <div id="NavLayout">
          <img className="logo" src="/logo.webp"/>
          <div className = "secondP">
              <ul className="links">
                  {items.map((x) => (
                      <li key={x} className="linksC">{x}
                        <span className ='arrow'>^</span>
                      </li>
                  ))}
              </ul>

              <div className = 'AuthBtns'>
                  {button_items.map((x) => (
                      <button className = "AuthBtnsEle">{x}</button>
                  ))}
              </div>
          </div>

          <div className = "ham">
              <span className = "hmb"></span>
              <span className = "hmb"></span>
              <span className = "hmb"></span>
          </div>

      </div>
    </>
  );
}

export default NavBar;