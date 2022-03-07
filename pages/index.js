import Head from "next/head";
import Script from "next/script";


const Index = () =>{
    return(
        <>
            <Head>
                <title>Home</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width height=device-height initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <link rel="icon" href="images/favicon.ico" type="image/x-icon"/>
            </Head>
            <section className="section">
			<div className="range">
				<div className="cell-lg-7 cell-xl-8 cell-xxl-9">
					<div className="cell-inner section-lg text-center text-sm-left">
						<h2 className="text-center text-xl-left wow fadeIn">Why Professional <span>Bride Search?</span> </h2>
						<p className="text-center text-xl-left wow fadeIn" data-wow-delay=".05s">Here’s why lots of people choose our
							website.</p>
						
						<div className="owl-carousel owl-1 list-group-1 mt-lg-50" data-items="1" data-sm-items="2" data-md-items="3"
							data-lg-items="2" data-xl-items="3" data-dots="true" data-nav="false" data-stage-padding="0"
							data-loop="false" data-margin="30" data-mouse-drag="false">
							<article className="lg-1-item wow fadeIn">
								
								<div className="icon icon-heart"><img src="/images/main/icon-1.svg" alt="icon"/></div>
								<div className="lg-1-item-main">
									<h3 className="lg-1-item-title font-weight-normal"><span className="lg-1-item-counter"></span>Simple to Use
									</h3>
									<p>Professional Bride Search is very easy to use - just choose your and your partner’s gender, age,
										and location, and
										you’re all set!</p>
								</div>
							</article>
							<article className="lg-1-item wow fadeIn" data-wow-delay=".025s">
								
								<div className="icon icon-heart"><img src="/images/main/icon-2.svg" alt="icon"/></div>
								<div className="lg-1-item-main">
									<h3 className="lg-1-item-title font-weight-normal"><span className="lg-1-item-counter"></span>Smart Matching
									</h3>
									<p>Our matching system is based on geolocation and interests. It helps you find the best people to
										meet or spend time with.</p>
								</div>
							</article>
							<article className="lg-1-item wow fadeIn" data-wow-delay=".05s">
								
								<div className="icon icon-heart"><img src="/images/main/icon-3.svg" alt="icon"/></div>
								<div className="lg-1-item-main">
									<h3 className="lg-1-item-title font-weight-normal"><span className="lg-1-item-counter"></span>Cool Community
									</h3>
									<p>Besides being #1 dating service, we have a supportive and understanding community that’s always
										ready to help.</p>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className="cell-lg-5 cell-xl-4 cell-xxl-3 height-fill">
					<div className="box-3 bg-image bg-video" ><a className="box-3-play"
							data-lightgallery="item"
							href="https://www.youtube.com/watch?v=V7mJgSzbckc&amp;t=1s&amp;ab_channel=productpage_video"><span
								className="icon mdi mdi-play"></span></a></div>
				</div>
			</div>
		    </section>

            <section className="section section-lg bg-default">
			<div className="container">
				<div className="row row-50 flex-lg-row-reverse align-items-center justify-content-xl-between">
					<div className="col-lg-4 col-xl-5 col-xxl-4">
						<div className="block-7">
							<h2 className="wow fadeIn">Top <span>Cities</span></h2>
							<p className="ls-ng-1  text-black-5 mt-md-20 mt-xxl-50 wow fadeIn" data-wow-delay=".025s">If you want
								to meet local singles for dating, companionship, friendship or even more, you have come to the right
								place.</p><a
								className="button button-lg button-icon button-icon-left button-primary offset-xl-t-45 wow fadeIn" href="./search.html"
								data-wow-delay=".05s"><img src="/images/main/search.svg" alt="search" width="16" height="16" />Find your partner</a>
						</div>
					</div>
					<div className="col-lg-8 col-xl-7">
						<div className="row row-30">
							<div className="col-sm-6 wow fadeIn"><a className="destination-1 context-dark">
									<figure className="destination-1-figure">
										<div className="destination-1-image bg-image bg-city-1">
										</div>
									</figure>
									<div className="destination-1-caption">
										<p className="destination-1-decoration-title">Kyiv</p>
										<p className="heading-3 destination-1-title">Kyiv</p>
										
									</div>
								</a>
							</div>
							<div className="col-sm-6 wow fadeIn" data-wow-delay=".025s"><a className="destination-1 context-dark">
									<figure className="destination-1-figure">
										<div className="destination-1-image bg-image bg-city-2">
										</div>
									</figure>
									<div className="destination-1-caption">
										<p className="destination-1-decoration-title">Lviv</p>
										<p className="heading-3 destination-1-title">Lviv</p>
										
									</div>
								</a>
							</div>
							<div className="col-sm-6 wow fadeIn" data-wow-delay=".025s"><a className="destination-1 context-dark">
									<figure className="destination-1-figure">
										<div className="destination-1-image bg-image bg-city-3" >
										</div>
									</figure>
									<div className="destination-1-caption">
										<p className="destination-1-decoration-title">Odesa</p>
										<p className="heading-3 destination-1-title">Odesa</p>
									
									</div>
								</a>
							</div>
							<div className="col-sm-6 wow fadeIn" data-wow-delay=".05s"><a className="destination-1 context-dark">
									<figure className="destination-1-figure">
										<div className="destination-1-image bg-image bg-city-4" >
										</div>
									</figure>
									<div className="destination-1-caption">
										<p className="destination-1-decoration-title">Kharkiv</p>
										<p className="heading-3 destination-1-title">Kharkiv</p>
							
									</div>
								</a>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		    </section>

            <section className="section cta-section position-relative section-sm context-dark bg-img-2">
                <div className="container">
                    <div className="row justify-content-lg-end justify-content-center">
                        <div className="col-md-8 col-lg-5 d-flex flex-column justify-content-center wow fadeInRight">
                            <h2>Premium Membership</h2>
                            <p className="text-white-7 redt">Enjoy the benefits of our dating services membership! Use the psychological matching
                                to find the best people and experience other great bonuses.</p>
                            <div className="unit cta-unit unit-spacing-md flex-column flex-sm-row align-items-center offset-xl-t-40">
                                <div className="unit-left"><a className="button button-md button-light" href="mailto:probridesearch@gmail.com">check all options</a></div>
                                <div className="unit-body"><span className="text-white-7">14 days for free</span></div>
                            </div>
                        </div>
                    </div>
                </div>
		    </section>
            <footer className="section footer-modern">
			<div className="footer-modern-main">
				<div className="container">
					<div className="row row-30 justify-content-lg-between">
						<div className="col-sm-5 col-md-3 col-lg-3">
							<h3 className="footer-modern-title">Navigation</h3>
							<div className="footer-modern-item-block">
								<ul className="list list-1">
									<li><a href="index.html">Home</a></li>
									<li><a href="search.html">Search</a></li>
									<li><a href="about.html">About</a></li>
									<li><a href="mailto:probridesearch@gmail.com">Contacts</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-7 col-md-5 col-lg-4">
							
						</div>
						<div className="col-md-4 col-lg-3">
							<h3 className="footer-modern-title">Contacts & Support</h3>
							<div className="footer-modern-item-block">
								<ul className="list list-1">
									<li><a href="mailto:probridesearch@gmail.com">Get in Touch</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-modern-aside">
				<div className="container">
					<div className="row row-30">
						<div
							className="col-12 d-flex flex-column align-items-lg-start justify-content-center align-items-center order-1">
							<p className="rights"><span>&copy;&nbsp; </span><span
								className="copyright-year"></span><span>&nbsp;</span><span>Professional Bride Search</span><span>. All
								rights reserved.&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>

        <div className="snackbars" id="form-output-global"></div>
        <Script strategy="beforeInteractive" 
            src="/js/core.min.js"
        />
        <Script strategy="beforeInteractive" 
            src="/js/script.js"
        />
        </>
    )
}

export default Index;