import Head from 'next/head';
import Link from 'next/link';
import Date from "../components/date";
import Layout, {siteTitle} from "../components/layout";
import ListItem from '../components/listItem';
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';


export default function Home({ 
    allPostData 
  } : {
    allPostData: {
      id: string,
      date: string,
      title: string,
    }[]
  }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} >
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
          {allPostData.map(( {id, date, title} ) => (
            <ListItem key={id} url={`/posts/${id}`} title={title} date={date} />
          ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData
    },
  };
}
