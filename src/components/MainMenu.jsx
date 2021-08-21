import { useAuth } from "../contexts";

export const MainMenu = () => {
  const { logout } = useAuth();
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2018/04/03/00/48/fingers-3285615_1280.png"
        alt="logo"
        className="hero-image"
      />
      <div
        style={{ color: "white", fontSize: "2rem", flexGrow: "1" }}
        className="hero-name"
      >
        MITRA WRITE
      </div>
      <i
        class="fas fa-sign-out-alt"
        style={{ marginRight: "2rem", cursor: "pointer" }}
        onClick={() => logout()}
      ></i>
    </>
  );
};
