import React from 'react'
import { Container,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '@fontsource/lobster'
function Home() {
  return (
    <Container sx={{textAlign:'center'}}>
     
      {
        
        (() => {
          const articles = JSON.parse(localStorage.getItem('blogPosts') || '[]');
          if (!articles.length) {
            return <Typography variant="body1" sx={{ color: '#249ff7ff', mt: 3 }}>No articles yet. Add one in "Add Blog".</Typography>;
          }
          return (
            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <Typography variant="h5" sx={{ color: '#249ff7ff', mb: 1 }}>Your Articles</Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {articles.map((a, idx) => (
                  <li key={a.id ?? idx} style={{ background: '#b0dbfaff', padding: 12, borderRadius: 8, marginBottom: 12 }}>
                    <Typography variant="h6" sx={{ color: '#2b2b2b', mb: 0.5 }}>{a.title || 'Untitled'}</Typography>
                    <Typography variant="body2" sx={{ color: '#444' }}>
                      {(a.content || '').slice(0, 200)}{(a.content || '').length > 200 ? '…' : ''}
                    </Typography>
                    <Link to={`/blogs/${a.id ?? idx}`} style={{ display: 'inline-block', marginTop: 8, color: '#e605f6ff', textDecoration: 'none' }}>Read more</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()
      }
    </Container>
  )
}

export default Home
