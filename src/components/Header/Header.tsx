import { Box, Container, Link, Stack } from "@mui/material";

import logo from "../../assets/images/logo.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <Container>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <Link href="/" sx={{ marginRight: "auto" }}>
            <img src={logo} alt="Uwai" />
          </Link>
          <Box>
            <div className={styles.headerButtonUser}></div>
          </Box>
          <div className={styles.headerButton}>
            <div className={styles.headerButtonUser}></div>
          </div>
          <div className={styles.headerButton}>
            <div className={styles.headerButtonChat}></div>
          </div>
        </Stack>
      </Container>
    </header>
  );
};
