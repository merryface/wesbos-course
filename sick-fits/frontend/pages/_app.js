import NProgress from 'nprogress';
import Page from "../components/Page";
import Router from 'next/router';

// router render server
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangError', () => NProgress.done());

// Style route loading
import '../components/styles/nprogress.css';

export default function MyApp({ Component, pageProps }) {
    return(
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}