import Head from 'next/head';
import Grid from '../components/Grid';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Spreadsheet App</title>
      </Head>
      <Grid />
    </div>
  );
}
