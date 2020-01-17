
import Head from 'next/head'
const MainLayout = Page => {
return () => (
    <div>
        <Head>
            <title>Story of Civilizations</title>
        </Head>
        <Page></Page>
    </div>
);
}

export default MainLayout


