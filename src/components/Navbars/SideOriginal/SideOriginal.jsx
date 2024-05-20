import './SideOriginal.css'; 

const Navbar = () => {
  const handleClick = () => {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active'); // Assuming the toggle functionality uses CSS
  };

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="navbar-icon">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15" stroke="#01FEC0" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="navbar-icon">
              <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#01FEC0" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="18.14" r="11.14"></circle><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path></g></svg>
            </span>
            <span className="title">About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="navbar-icon">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#01FEC0" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="#01FEC0" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#01FEC0" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
            </span>
            <span className="title">Project</span>
          </a>
        </li>
      </ul>
      <div className="toggle" onClick={handleClick}>
      </div>
    </div>
  );
};

export default Navbar;