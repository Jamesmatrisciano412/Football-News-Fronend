import React from 'react';
import "./Footer.css";
import { Box, Container, Divider, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router';
import { Twitter, YouTube, Facebook, Instagram } from '@mui/icons-material';
import { SiteSmallMark } from '../../compoents/SiteMark/SiteMark';

const followDatas = [
  {
    icon: <Instagram />,
    title: "Instagram",
    detail: "@onefootball",
    url: "https://www.instagram.com/onefootball"
  },
  {
    icon: <Facebook />,
    title: "Facebook",
    detail: "@OneFootball.de",
    url: "https://www.facebook.com/OneFootball"
  },
  {
    icon: <Twitter />,
    title: "Twitter",
    detail: "@OneFootball",
    url: "https://twitter.com/OneFootball"
  },
  {
    icon: <YouTube />,
    title: "Youtube",
    detail: "@OneFootball",
    url: "https://www.youtube.com/channel/UC2-0sEOYbQFuaURd_AU6Krg"
  }
]

function Index() {
  return (
    <Box className="footer-container">
      <Container maxWidth="xl">
        <Grid2 size={12}>
          <Typography variant='h5' className='follow-title'>Follow Football News</Typography>
          <Grid2 container spacing={5} className="follow-container">
            {
              followDatas.map((item, key) => {
                return (
                  <Grid2 key={key} size={{
                    xs: 6,
                    md: 3
                  }} >
                    <Link to={item.url}>
                      <div>
                        <p>{item.icon}</p>
                        <p>{item.title}</p>
                        <p>{item.detail}</p>
                      </div>
                    </Link>
                  </Grid2>
                )
              })
            }
          </Grid2>
        </Grid2 >

        <Grid2 size={12} className="product-info-container">
          <Divider />
          <Grid2 container className="product-info">
            <Grid2 size={{ xs: 6, md: 8 }}>
              <SiteSmallMark />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              © 2024 Football News
            </Grid2>
          </Grid2>
        </Grid2>
      </Container >
    </Box >
  )
}

export default Index