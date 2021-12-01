import Head from 'next/head'
import Header from './Header'

const Layout = ({children}) => {

    return (
        <>
            <Head>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="author" content="SemiColonWeb" />
            <link href="https://fonts.googleapis.com/css?family=Sansita:400,700|Roboto:400,500&display=swap" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
            <link rel="stylesheet" href="/style.css" type="text/css" />
            <link rel="stylesheet" href="/css/swiper.css" type="text/css" />
            <link rel="stylesheet" href="/css/dark.css" type="text/css" />
            <link rel="stylesheet" href="/css/colors.php?color=7E9680" type="text/css" /> 
            <link rel="stylesheet" href="/demos/yoga/css/fonts.css" type="text/css" />
            <link rel="stylesheet" href="/demos/yoga/yoga.css" type="text/css" /> 
            <link rel="stylesheet" href="/css/font-icons.css" type="text/css" />
            <link rel="stylesheet" href="/css/animate.css" type="text/css" />
            <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" />
            <link rel="stylesheet" href="/css/custom.css" type="text/css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <script src="/js/jquery.js"></script>
            <script src="/js/plugins.min.js"></script>
            <script src="/js/components/moment.js"></script>
            <script src="/js/functions.js"></script>
            <script src="/js/custom.js"></script>

            <title>Yoga | Canvas</title>
            
            </Head>
            
            <Header/>
            {children}
            
        </>
    )
}

export default Layout