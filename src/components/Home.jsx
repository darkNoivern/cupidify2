import React from 'react';
import heart from '../images/heart.png'
import GlassTilt from './GlassTilt';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="style-bg">
                <div className="background-top pt-5 pt-sm-2 pt-md-0 bg-valentine d-flex justify-content-center">
                    <div className="homex">
                        <div className="row mx-0">
                            <div className="col col-md-6 col-12 flexy home-title-container">
                                <div>
                                    <div className="home-title text-white comfortaa home-qoute fatface mb-5">
                                        Take Some Breathe in and message your oxygen
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                navigate("/users");
                                            }}
                                            className="ui button bg-dark text-white get-started-btn"
                                        >
                                            {`Get Started →`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-6 mt-5 mt-md-0 col-12 flexy">
                                <img src={heart} className="heart-image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1639398461">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>


            {/* <div className="resize-bg">
                <div className="bg-valentine home-page-box">
                    <div className="row mx-0 ">
                        <div className="col col-md-6 col-12 text-white text-center py-0 flexy fatface home-qoute">
                            Take Some Breathe in and message your oxygen
                        </div>
                        <div className="col col-md-6 col-12 flexy">
                            <img className='heart-image' src={heart} alt="" />
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1639398461">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div> */}

            <div className="glass-features my-5 flexy">
                <div className="about-width">
                    <div className="fatface-heading fatface text-white text-md-start text-center mt-4 mb-5">
                        Main Features
                    </div>
                    <div className="row mx-0">
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="01"
                                title="Send Texts"
                                desc="Recognize your crush in the crowd and send secret message for her"
                            />
                        </div>
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="02"
                                title="Guaranteed Partner"
                                desc="Isko use krliya toh love life jhingalala ."
                            />
                        </div>
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="03"
                                title="LeaderBoard"
                                desc="See your demand in the leaderboard and make your partner insecure"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-valentine flexy">
                <div className="about-width">
                    <div className="fatface-heading fatface text-white text-md-start text-center mt-5 mb-5">
                        FAQ
                    </div>

                    <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Other pages are not opening ; How will I use ??
                            </div>
                            <div className="faq-answer">
                                You are requested to sign-up to avail all features of the website
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Increase Count Feature
                            </div>
                            <div className="faq-answer">
                                Open Userlist : Tap any user's profile-card a messaging area will appear . Write your message , it will appear as tagged message in the chat and the leaderboard will also increase his count
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                What is this Profile button ? Does it work ??
                            </div>
                            <div className="faq-answer">
                                Yep !! It works perfectly fine as long as the guy hasn't done a mischief
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Can i spam my crush's name ??
                            </div>
                            <div className="faq-answer">
                                Ummm !! You definately can but we won't recommend that .
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Why should i share my Fb link /Insta id ??
                            </div>
                            <div className="faq-answer">
                                Come On Guys !! We are not asking for Bank-PIN code
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Why are some text differnt in colour in chat section
                            </div>
                            <div className="faq-answer">
                                <del>
                                    Because they are mutant texts.
                                </del>
                                &nbsp;&nbsp;They are tagged users !! Click on them & BOOM !! their profiles open
                            </div>
                        </div>
                        <div className="about-feature-desc mb-4">
                            <div className="faq mb-2 text-secondary">
                                Why Cupidify💘 and not Tinder ??
                            </div>
                            <div className="faq-answer">
                                <del>
                                    Because 9 out of 10 doctors ka yahi manna hai.
                                </del>
                                &nbsp;&nbsp;Becuase you deserve better .
                            </div>
                        </div>

                </div>
            </div>

            <div className="footer flexy mt-5 px-3">
                <div>
                    <div className="text-center newsletter-text my-3">
                        For regular updated news subscribe to our newsletter
                    </div>
                    <div className="d-flex justify-content-between">
                        <input
                            type="email"
                            placeholder="Enter mail Id .... "
                            className="form-control bg-dark text-white subscribe-input"
                        />
                        <button className="ui ms-4 me-0 button bg-valentine text-white mouse-rat">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer flexy">
                <div>
                    <div className="footer-icons d-flex justify-content-between">
                        <i class="fab fa-twitter fa-2x" />
                        <i class="fab fa-facebook fa-2x" />
                        <i class="fab fa-instagram fa-2x" />
                        <i class="fas fa-envelope-open-text fa-2x" />
                    </div>
                    <div className="mt-3">© Copyright 2023 Cupidify</div>
                </div>
            </div>
        </>
    );
};

export default Home;
