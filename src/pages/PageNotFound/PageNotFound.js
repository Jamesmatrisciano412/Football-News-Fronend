import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function PageNotFound() {

    const navigate = useNavigate();

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh"
    }}>
        <div>
            <Typography variant={"h2"}>
                Page Not Found
            </Typography>
            <Typography sx={{
                marginTop: {
                    xs: "0.5rem",
                    md: "1.5rem"
                },
                marginBottom: {
                    xs: "0.5rem",
                    md: "1.5rem"
                }
            }}>
                We could not find what you were looking for.
                Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
            </Typography>
            <Button variant='outlined' onClick={() => navigate("/")}>Back to Home</Button>
        </div>
    </div>
  )
}

export default PageNotFound