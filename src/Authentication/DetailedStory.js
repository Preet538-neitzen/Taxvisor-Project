import React, { Component } from 'react'

export class DetailedStory extends Component {
    render() {
        return (
            <div>
            <section class="bg-primary-alt header-inner">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Customer Stories</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row justify-content-center my-4">
                <div class="col-auto">
                    <img src="assets\img\logos\intercom.svg" alt="Logo" class="icon icon-lg"/>
                </div>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-lg-9 col-xl-8">
                    <h1>This company use Leap to launch landing pages quickly.</h1>
                </div>
            </div>
            <div class="row my-6 justify-content-between">
                <div class="col-lg-7 col-xl-8 mb-3 mb-lg-0">
                    <img src="assets\img\article-3.jpg" alt="Image" class="rounded"/>
                </div>
                <div class="col-lg-4 col-xl-3">
                    <div class="mb-3">
                        <h6 class="mb-1">Description</h6>
                        <p>
                            Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                        </p>
                    </div>
                    <div class="mb-3">
                        <h6 class="mb-1">Headquarters</h6>
                        <span>San Francisco, California</span>
                    </div>
                    <div class="mb-3">
                        <h6 class="mb-1">Industry</h6>
                        <span>SaaS</span>
                    </div>
                    <div class="mb-3">
                        <h6 class="mb-1">Website</h6>
                        <a href="#">https://website.io/</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider">
            <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" class="injected-svg" data-src="assets\img\dividers\divider-1.svg">
     <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"></path>

</svg>
        </div>
    </section>
            </div>
        )
    }
}

export default DetailedStory
