import React, { Component } from "react";
import Navigation from "../components/Navigation";
import '../css/AboutContainer.css'

class AboutContainer extends Component {

    render() {
        return (
            <div>
                <Navigation>
                </Navigation>
                <div>
                    <div>
                        <div className="id-card rounded">
                            <div className="avatar-wrap float-left">
                                <img className="round" src="https://oregonstate.instructure.com/images/thumbnails/74317374/VAiaOwrCDC9R2SvFHNymnPvfrqM6tM8hqq1olSQT" alt="Soo Lee" />
                        </div>
                            <div className="bio-wrap float-left">
                            <h2>Soo Lee</h2>
                            <h4>Developer</h4>
                            <br />
                            <p>I am located in Seattle, WA. Before OSU, I graduated from the University of Washington with BA in Cinema Studies. And I need to take one more class to graduate. Other than being an online student, I have two different jobs. I have a civilian part-time job and I serve in US Army as a reserve.</p>
                            <br />
                            <p>I like to use a few different programming languages when I am coding. Javascript is my go-to. When I am practicing the algorithm, I like to use Python. Because it is short and readable. For my recent project, I used Go lang.</p>
                        </div>
                            <div className="links-wrap">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="id-card rounded">
                            <div className="avatar-wrap float-left">
                                <img className="round" src="https://oregonstate.instructure.com/images/thumbnails/67774342/F9jHx1vm6txrvbqQeinavujIOHT89KKzQ5Pxtz8W" alt="Paul Robinson" />
                            </div>
                            <div className="bio-wrap float-left">
                                <h2>Paul Robinson</h2>
                                <h4>Developer</h4>
                                <br />
                                <p>I live just north of Boulder, CO with wife and cat.</p>
                                <br />
                                <p>I enjoy using C/C++ for their precision and efficiency and Python for its readability. I didn't really like Javascript when I first got into it, but I used it enough in the Cloud Apps class that I'm pretty comfortable with it by now. Mostly Node. I'd like to learn Go next. But there's always more to learn, right :)</p>
                            </div>
                            <div className="links-wrap">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="id-card rounded">
                            <div className="avatar-wrap float-left">
                                <img className="round" src="https://oregonstate.instructure.com/images/thumbnails/67639511/Bh0c1OMIawR6CK47ZZshv3OPf65Yto0eGpyUWLOk" alt="Thanhbinh Truong" />
                            </div>
                            <div className="bio-wrap float-left">
                                <h2>Thanhbinh Truong</h2>
                                <h4>Developer</h4>
                                <br />
                                <p>I am located in fremont, CA (Bay Area). Before this program, I graduated from UCSB with a bachelors in economics and accounting. Besides studying for classes, I work multiple misc. jobs such as making websites for small businesses, part-time barber and mechanic.</p>
                                <br />
                                <p>When it comes to programming languages, last quarter really made me like Javascript(Express). Personally, I would like to be very fluent in python and am working on that as we speak.</p>
                            </div>
                            <div className="links-wrap">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContainer;
