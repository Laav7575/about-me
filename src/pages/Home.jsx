import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Hi, I'm Laavanya Thiagalingam</h1>
        <p>I'm a Software Engineer, passionate about building great digital experiences.</p>
      </header>

      <section style={styles.links}>
        <h2>Connect With Me</h2>
        <ul style={styles.linkList}>
          <li><a href="https://github.com/Laav7575" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/laavanyathiagalingam/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:laavanya.thiaga@gmail.com">Contact Me</a></li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '40px',
  },
  links: {
    marginTop: '20px',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default Home;
