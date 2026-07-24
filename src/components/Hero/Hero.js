import { Container, Typography, Box, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Description, Code } from "@mui/icons-material";

export default function Hero() {
  return (
    <Container style={{ textAlign: "center", padding: "50px 0" }}>
      <Box className="about center">
        <Typography variant="h3">
          Hi, I am <span className="about__name">Payal Chauhan</span>
        </Typography>
        <Typography variant="h5" className="about__role">
          A Full Stack Developer.
        </Typography>
        <Box className="about__desc-container">
          <Typography variant="body1" className="about__desc">
            Architecting seamless digital experiences with precision and creativity. 
            As a Full Stack Developer, I specialize in MERN and Node.js, blending 
            intuitive UIs with robust, scalable backends. Passionate about efficiency, 
            I'm diving into Go’s concurrency power to redefine performance. 
            Let’s turn ideas into reality and build something groundbreaking! 🚀
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box className="about__contact center" mt={3}>
          <IconButton
            href="/Payal_Resume.pdf"
            target="_blank"
            aria-label="Resume"
          >
            <Description fontSize="large" />
          </IconButton>

          <IconButton
            href="https://leetcode.com/u/PayalChauhan01/"
            target="_blank"
            aria-label="LeetCode"
          >
            <Code fontSize="large" />
          </IconButton>

          <IconButton
            href="https://github.com/PayalChauhan01"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHub fontSize="large" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/payal-chauhan-39a702341/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
