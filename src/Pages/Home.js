import React, { useState, useEffect } from 'react';
import Header from '../Assets/Header.js';
import '../App.css'

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';





const mainFeaturedPost = {
  title: 'Title remains in the hands of Muhammad',
  description:
    "Multiple doubters proved wrong as the 2023 championship game vindicates last year's championship controversy.",
  image: 'https://media.npr.org/assets/img/2022/12/21/ap22354741249929-1b9e8ff458fb38043a4148ffefb4eb37efc7b9e1-s800-c85.webp',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Do you suck?',
    date: 'Jan 30',
    description:
      'Are you making some of these common mistakes when it comes to managing your team in fantasy?',
    image: 'https://st2.depositphotos.com/1158045/5715/i/450/depositphotos_57151645-Businessman-pointing-his-finger-at-you.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Changes coming to 4NL in 2024',
    date: 'February 2',
    description:
      'Thoughts from the commish on potential changes in the new year',
    image: 'https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2017/changes.png',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (

        <div>
      <Header label="Home" />
      <div className="desktop-padding">
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Recent News" posts={posts} />
            </Grid>
        </main>
      </Container>
    </ThemeProvider>
    </div>
    </div>

  );
}


//export default function Home() {
//   return (
//    <div>
//      <Header label="Home" />
//                  </div>

  //      ); } 