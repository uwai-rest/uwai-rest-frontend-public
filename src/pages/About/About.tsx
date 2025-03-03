import { Box, Button, Container, Typography } from "@mui/material";

export const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our website! We are a team of passionate developers who
          build amazing software solutions to help people and businesses. Our
          mission is to create high-quality, user-friendly applications that
          make your life easier.{" "}
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to browse our projects, contact us, or learn more about our
          services. We are constantly working on new projects and love to
          connect with like-minded people.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};
