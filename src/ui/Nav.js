import { useRouter } from "next/router";
import { Box } from "theme-ui";
import NavLink from "./NavLink";

const Nav = (props) => {
  const router = useRouter();
  return (
    <Box
      as="nav"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <NavLink
        href="/"
        active={
          router.pathname === "/home" || router.pathname.includes("/home")
        }
      >
        Home
      </NavLink>
      <NavLink
        href="/"
        active={
          router.pathname === "/portofolio" ||
          router.pathname.includes("/portofolio")
        }
      >
        Portofolio
      </NavLink>
      <NavLink
        href="/"
        active={
          router.pathname === "/blog" || router.pathname.includes("/blog")
        }
      >
        Blog
      </NavLink>
      <NavLink href="/about" active={router.pathname === "/about"}>
        About
      </NavLink>
    </Box>
  );
};

export default Nav;
