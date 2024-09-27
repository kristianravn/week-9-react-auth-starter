import "./Header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ loggedUser }) => {
return (
    <header className="flex flex-column header">
      <div className="flex flex-row header-inner-container">
        <h2>Awesome App</h2>
        {!loggedUser ? (
          <p>Please login</p>
        ) : (
          // eslint-disable-next-line react/prop-types
          <p>Hello {loggedUser.user.username}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
