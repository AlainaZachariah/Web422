 import Link from 'next/link'
 import Card from 'react-bootstrap/Card'
 import MovieDetails from '../components/MovieDetails'
 import PageHeader from '../components/PageHeader'


 // This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://splendid-fish-tank-top.cyclic.app/api/movies/573a139af29313caabcf0859');
    const res = await fetch('https://splendid-fish-tank-top.cyclic.app/api/movies/573a139af29313caabcf0859');
    const data = await res.json();
  
    return { props: { movie: data } };
  }

  export default function About(props) {
    return (
     <>
       <PageHeader text="About the Developer: Alaina C Zachariah"/>
       <Card>
          <Card.Body>
          I'm Alaina C Zachariah. I'm from kottayam. came to canada to pursue my dream of becomming a web Developer < br />< br />    
  
          I am currently attending Seneca College and am in my third year of the Advanced Diploma of Computer Programming and Analysis. 
          < br />< br />
  
          It is difficult to choose but <Link href="/movies/Dark City" passHref><a>"Dark City"</a></Link> (released in 1998) is one that I always enjoy watching.
          </Card.Body>
          <MovieDetails movie={props.movie} />
        </Card>
     </>
    )
  }