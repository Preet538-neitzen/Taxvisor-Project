import React, { Component } from 'react'
import {Header} from '../Components/Header'

export class LandingPage extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary-3" data-sticky="top">
            <div className="container">
                <a className="navbar-brand fade-page" href="index.html">
                    <img src="assets\img\logo-white.svg" alt="Leap"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="injected-svg icon navbar-toggler-open" data-src="assets/img/icons/interface/menu.svg">
<path d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z" fill="#212529"></path>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="injected-svg icon navbar-toggler-close" data-src="assets/img/icons/interface/cross.svg" >
<path d="M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z" fill="#212529"></path>
<path d="M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z" fill="#212529"></path>
</svg>
          </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <div className="py-2 py-lg-0">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a href="/SignUp" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Demos</a>
                              
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Pages</a>
                                <div className="dropdown-menu row">
                                    <div className="col-auto" data-dropdown-content="">
                                        <div className="dropdown-grid-menu"><a href="about-company.html" className="dropdown-item fade-page">About Company</a>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Careers</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg">
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="careers.html" className="dropdown-item fade-page">Careers</a><a href="career-single.html" className="dropdown-item fade-page">Career Single</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Contact</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg">
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="contact.html" className="dropdown-item fade-page">Contact</a><a href="contact-multiple-locations.html" className="dropdown-item fade-page">Contact - Multiple Locations</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Customers</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="customer-stories.html" className="dropdown-item fade-page">Customer Stories</a><a href="customer-story.html" className="dropdown-item fade-page">Customer Story</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Knowledgebase</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="knowledgebase.html" className="dropdown-item fade-page">Knowledgebase</a><a href="knowledgebase-category.html" className="dropdown-item fade-page">Knowledgebase Category</a><a href="knowledgebase-article.html"
                                                                className="dropdown-item fade-page">Knowledgebase Article</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Pricing</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="pricing-plans.html" className="dropdown-item fade-page">Pricing Plans</a><a href="pricing-plans-table.html" className="dropdown-item fade-page">Pricing Plans Table</a><a href="pricing-slider.html"
                                                                className="dropdown-item fade-page">Pricing Slider</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Utility</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg">
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="404.html" className="dropdown-item fade-page">404</a><a href="utility-coming-soon-subscribe.html" className="dropdown-item fade-page">Coming Soon - Subscribe</a><a href="utility-coming-soon.html"
                                                                className="dropdown-item fade-page">Coming Soon</a>
                                                            <a href="utility-confirmation-download.html" className="dropdown-item fade-page">Confirmation - Download</a><a href="utility-confirmation-subscription.html" className="dropdown-item fade-page">Confirmation - Subscription</a>
                                                            <a
                                                                href="utility-legal.html" className="dropdown-item fade-page">Legal</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Account</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg">
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="account-onboarding.html" className="dropdown-item fade-page">Onboarding</a><a href="account-sign-in.html" className="dropdown-item fade-page">Sign In</a><a href="account-sign-up.html" className="dropdown-item fade-page">Sign Up</a>
                                                            <a href="account-sign-up-image.html" className="dropdown-item fade-page">Sign Up Image</a><a href="account-forgot-password.html" className="dropdown-item fade-page">Forgot Password</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Blog</a>
                                <div className="dropdown-menu row">
                                    <div className="col-auto" data-dropdown-content="">
                                        <div className="dropdown-grid-menu">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Blog Layouts</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="blog-cards.html" className="dropdown-item fade-page">Blog Cards</a><a href="blog-masonry.html" className="dropdown-item fade-page">Blog Masonry</a><a href="blog-sidebar.html" className="dropdown-item fade-page">Blog Sidebar</a>
                                                            <a href="blog-magazine.html" className="dropdown-item fade-page">Blog Magazine</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Article Layouts</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="blog-article.html" className="dropdown-item fade-page">Article Basic</a><a href="blog-article-video.html" className="dropdown-item fade-page">Article Video</a><a href="blog-article-image-header.html"
                                                                className="dropdown-item fade-page">Article Image Header</a>
                                                            <a href="blog-article-image-header-parallax.html" className="dropdown-item fade-page">Article Image Parallax</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Portfolio</a>
                                <div className="dropdown-menu row">
                                    <div className="col-auto" data-dropdown-content="">
                                        <div className="dropdown-grid-menu">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Grid Layouts</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="portfolio-2-columns.html" className="dropdown-item fade-page">2 Columns</a><a href="portfolio-3-columns.html" className="dropdown-item fade-page">3 Columns</a><a href="portfolio-4-columns.html"
                                                                className="dropdown-item fade-page">4 Columns</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-item dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">
                                                    <span>Project Layouts</span>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg icon bg-dark opacity-20" data-src="assets/img/icons/interface/arrow-caret.svg" >
<path d="M14.4444 8.41358C14.7776 8.2281 15.1875 8.46907 15.1875 8.85048V15.1495C15.1875 15.5309 14.7776 15.7719 14.4444 15.5864L8.78505 12.4369C8.44258 12.2463 8.44258 11.7537 8.78505 11.5631L14.4444 8.41358Z" fill="#212529"></path>
</svg>
                                                </a>
                                                <div className="dropdown-menu row">
                                                    <div className="col-auto" data-dropdown-content="">
                                                        <div className="dropdown-grid-menu"><a href="portfolio-case-study.html" className="dropdown-item fade-page">Case Study</a><a href="portfolio-single-sidebar.html" className="dropdown-item fade-page">Sidebar</a><a href="portfolio-single-slider.html"
                                                                className="dropdown-item fade-page">Slider</a>
                                                            <a href="portfolio-single-parallax.html" className="dropdown-item fade-page">Parallax</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Elements</a>
                                <div className="dropdown-menu bg-primary-3 text-light border-bottom">
                                    <div className="container py-4" data-dropdown-content="">
                                        <div className="row">
                                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                                                <h5>Base</h5>
                                                <div><a className="dropdown-item fade-page" href="elements-grid.html">Grid</a><a className="dropdown-item fade-page" href="elements-forms.html">Forms</a><a className="dropdown-item fade-page" href="elements-tables.html">Tables</a>
                                                    <a
                                                        className="dropdown-item fade-page" href="elements-typography.html">Typography</a>
                                                </div>
                                            </div>
                                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                                                <h5>General</h5>
                                                <div><a className="dropdown-item fade-page" href="elements-alerts.html">Alerts</a><a className="dropdown-item fade-page" href="elements-avatars.html">Avatars</a><a className="dropdown-item fade-page" href="elements-badges.html">Badges</a>
                                                    <a
                                                        className="dropdown-item fade-page" href="elements-breadcrumbs.html">Breadcrumbs</a><a className="dropdown-item fade-page" href="elements-buttons.html">Buttons</a><a className="dropdown-item fade-page" href="elements-cards.html">Cards</a><a className="dropdown-item fade-page" href="elements-dropdowns-bootstrap.html">Dropdowns Bootstrap</a>
                                                        <a
                                                            className="dropdown-item fade-page" href="elements-dropdowns-grid.html">Dropdowns Grid</a><a className="dropdown-item fade-page" href="elements-footers.html">Footers</a>
                                                            <a className="dropdown-item fade-page" href="elements-navbars.html">Navigation</a><a className="dropdown-item fade-page" href="elements-tooltips.html">Tooltips</a><a className="dropdown-item fade-page" href="elements-toasts.html">Toasts</a>
                                                            <a
                                                                className="dropdown-item fade-page" href="elements-widgets.html">Widgets</a>
                                                </div>
                                            </div>
                                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                                                <h5>Graphic</h5>
                                                <div><a className="dropdown-item fade-page" href="elements-decorations.html">Decorations</a><a className="dropdown-item fade-page" href="elements-dividers.html">Dividers</a><a className="dropdown-item fade-page" href="elements-icons.html">Icons</a>
                                                    <a className="dropdown-item fade-page" href="elements-icons-reference.html">Icons Reference</a><a className="dropdown-item fade-page" href="elements-processes.html">Processes</a><a className="dropdown-item fade-page"
                                                        href="elements-progress.html">Progress</a><a className="dropdown-item fade-page" href="elements-pricing.html">Pricing</a>
                                                </div>
                                            </div>
                                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                                                <h5>Media</h5>
                                                <div><a className="dropdown-item fade-page" href="elements-fancybox.html">Fancybox</a><a className="dropdown-item fade-page" href="elements-isotope.html">Isotope</a><a className="dropdown-item fade-page" href="elements-maps.html">Maps</a>
                                                    <a
                                                        className="dropdown-item fade-page" href="elements-flickity.html">Slider Flickity</a><a className="dropdown-item fade-page" href="elements-twitter.html">Twitter Feeds</a><a className="dropdown-item fade-page" href="elements-video-players.html">Video Players</a><a className="dropdown-item fade-page"
                                                            href="elements-video-backgrounds.html">Video Backgrounds</a>
                                                </div>
                                            </div>
                                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                                                <h5>Interactive</h5>
                                                <div><a className="dropdown-item fade-page" href="elements-animations.html">Animations</a><a className="dropdown-item fade-page" href="elements-accordions.html">Accordion</a><a className="dropdown-item fade-page" href="elements-counters.html">Counters</a>
                                                    <a className="dropdown-item fade-page" href="elements-countdown.html">Countdown</a><a className="dropdown-item fade-page" href="elements-date-picker.html">Date Picker</a><a className="dropdown-item fade-page" href="elements-modals.html">Modals</a>
                                                    <a
                                                        className="dropdown-item fade-page" href="elements-navs.html">Tabs (Nav)</a>
                                                        <a className="dropdown-item fade-page" href="elements-typed-text.html">Typed Text</a><a className="dropdown-item fade-page" href="elements-parallax.html">Parallax</a><a className="dropdown-item fade-page" href="elements-popovers.html">Popovers</a>
                                                        <a
                                                            className="dropdown-item fade-page" href="elements-wizards.html">Wizards</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown-grid" aria-expanded="false" aria-haspopup="true">Support</a>
                                <div className="dropdown-menu row">
                                    <div className="col-auto px-0" data-dropdown-content="">
                                        <div className="bg-white rounded border shadow-lg o-hidden">
                                            <div className="p-3">
                                                <h6 className="mb-0">Product Support</h6>
                                            </div>
                                            <div className="list-group list-group-flush">
                                                <a href="documentation\index.html" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg"width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="injected-svg icon icon-md" data-src="assets/img/icons/theme/communication/chat-4.svg">
    <title>Icon For Chat#4</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
        <path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="#000000"></path>
    </g>
</svg>
                                                    <div className="text-body ml-3">
                                                        <span>Documentation</span>
                                                        <div className="text-small text-muted">Get all the information you need</div>
                                                    </div>
                                                </a>
                                                <a href="https://themes.zendesk.com/hc/en-us/articles/360000006291-How-do-I-get-help-with-the-theme-I-purchased-" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="injected-svg icon icon-md" data-src="assets/img/icons/theme/communication/chat-4.svg">
    <title>Icon For Chat#4</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
        <path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="#000000"></path>
    </g>
</svg>
                                                    <div className="text-body ml-3">
                                                        <span>Looking for answers?</span>
                                                        <div className="text-small text-muted">Get support</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div><a href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/" className="btn btn-primary ml-lg-3">{this.props.uid}</a>

                </div>
            </div>
        </nav>
            </div>
        )
    }
}

export default LandingPage
