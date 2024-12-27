import React from 'react';
import "./Footer.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Divider, Grid2 } from '@mui/material';
import { Link } from 'react-router';
import { Twitter, YouTube, Facebook, Instagram } from '@mui/icons-material';
import Mark from "../../assets/images/sitemark.png";
import { SiteSmallMark } from '../../compoents/SiteMark/SiteMark';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
    <Box>
      <Grid2 container className="footer-container">
        <Grid2 size={12}>
          <h2 className='follow-title'>Follow Football News</h2>
          <Grid2 container spacing={5} className="follow-container">
            {
              followDatas.map((item, key) => {
                return (
                  <Grid2 key={key} size={3} >
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
      </Grid2 >
    </Box >
  )
}

export default Index