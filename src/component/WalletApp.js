import React from 'react'
import "./wallet.css"
import Mobile from "./images/mobile.png"
import wallet from "./images/wallet.png"
import globe from "./images/globe.png"
import guard from "./images/guard.png"
import phone from "./images/phone.png"
import advisor from "./images/advisor.jpg"
import water from "./images/water.png"
import electric from "./images/electric.png"
import gas from "./images/gas.png"
import shop from "./images/shop.png"
import phonelogo from "./images/phonelogo.png"
import card from "./images/card.png"
import insurance from "./images/insurance.png"
import homelogo from "./images/homelogo.png"
import otherbill from "./images/otherbill.png"
import loadimg from "./images/loadimg.png"

function WalletApp() {
  return (
    <div>
        <div className='sectionA'>
            <div className='sectionA1'>
                <div className='sectionA2'>
                    <img className='walletimg' alt='' src={wallet}/>
                    <h2 className='headingred'>THE<br/>WALLET<br/>BANK</h2>
                </div>
                <div>
                    <h1 className='headingmain'>THE<br/>WALLET<br/>BANK<br/>|||||||</h1>
                </div>
            </div>
            <div className='sectionA3'>
                <div className='ham'><button className='hambtn'>|||</button></div>
                <div className='sectionA4'>
                    <div>
                        <img className='mobileimg' alt='' src={Mobile}/>
                    </div>
                    <div>
                        <h1>Go<br/>CASHLESS!</h1>
                        <li>ALL-IN-ONE APP</li>
                        <li>PAY FOR ALL DAILY NEEDS</li>
                        <li>APP IN YOUR LANGUAGE</li>
                        <button className='loadbtn'>DOWNLOAD NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='sectionB'>
        <h1>A COMPLETE FINANCIAL<br/>NEEDS <span className='fontred'>IN ONE APP</span></h1>
        <div className='sectionB1'>
            <div>
                <img src={phone} alt=""/>
                <h3>SUPPORT ALL PAYMENT</h3>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
            </div>
            <div id='middiv'>
                <img src={guard} alt="" />
                <h3>HIGH SECURITY</h3>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
            </div>
            <div>
                <img src={globe} alt=""/>
                <h3>100% DIGITAL</h3>
                <p>LOREM IPSUM DOLOR SIT AMET</p>
            </div>
        </div>
        </div>
        <div className='sectionD'>
            <div className='sectionD1'>
                <h1 className='fontbig'>LET'S MAKES YOUR FINANCE<br/>
                ACTIVITY GOING <span className='fontred'>DIGITALIZE</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid dolore quod distinctio suscipit. Deserunt culpa est magnam distinctio illum aspernatur voluptatibus deleniti, hic esse voluptatum nostrum! Eos, nulla quidem!</p>
                <button className='learnmore'>LEARN MORE</button>
            </div>
            <div>
                <div className='imgbg'>
                <img className='phonebg' src={Mobile} alt="" />
                </div>
            </div>
        </div>
        <div className='sectionD'>
            <div>
                <img className='advisorbg' src={advisor} alt="" />
            </div>
            <div className='sectionD1'>
                <h1 className='fontbig'>WE COMMIT TO GIVE YOU<br/>
                THE BEST <span className='fontred'>EXPERIENCE</span></h1>
                <p className='paraleft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid dolore quod distinctio suscipit. Deserunt culpa est magnam distinctio illum aspernatur voluptatibus deleniti, hic esse voluptatum nostrum! Eos, nulla quidem!</p>
                <button id='moreleft' className='learnmore'>LEARN MORE</button>
            </div>
        </div>
        <div className='sectionE'>
            <h1>OUR LATEST TECHNOLOGY &<br/>
            <span className='fontred'>INTERESTING FEATURES</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid dolore quod distinctio suscipit.Deserunt culpa est magnam<br/>distinctio illum aspernatur voluptatibus deleniti, hic esse voluptatum nostrum! Eos, nulla quidem!</p>
            <div className='sectionE1'>
                <div>
                    <img className='logoimg' src={water} alt=""/>
                    <p>WATER</p>
                </div>
                <div>
                    <img className='logoimg' src={electric} alt=""/>
                    <p>WATER</p>
                </div>
                <div>
                    <img className='logoimg' src={gas} alt=""/>
                    <p>WATER</p>
                </div>
                <div>
                    <img className='logoimg' src={shop} alt=""/>
                    <p>WATER</p>
                </div>
                <div>
                    <img className='logoimg' src={phonelogo} alt=""/>
                    <p>WATER</p>
                </div>
            </div>
            <div className='sectionE2'>
                <div>
                    <img className='logoimg' src={card} alt=""/>
                    <p>CREDIT CARD</p>
                </div>
                <div>
                    <img className='logoimg' src={insurance} alt=""/>
                    <p>CREDIT CARD</p>
                </div>
                <div>
                    <img className='logoimg' src={homelogo} alt=""/>
                    <p>CREDIT CARD</p>
                </div>
                <div>
                    <img className='logoimg' src={otherbill} alt=""/>
                    <p>CREDIT CARD</p>
                </div>
            </div>
            <button className='morebtn'>MORE</button>
        </div>
        <div className='sectionF'>
            <div className='sectionF1'>
                <h1>DOWNLOAD AND REGISTER<br/>
                 FROM THE <span className='fontred'>MOBILE APP</span></h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid dolore quod distinctio suscipit.Deserunt culpa est magnam<br/>distinctio illum aspernatur voluptatibus deleniti, hic esse voluptatum nostrum! Eos, nulla quidem!</p>
                <img src={loadimg} alt=""/>
            </div>
            <div>
                <img src={Mobile} alt=""/>
            </div>
        </div>
        <div className='footer'>
            <p>HOME &nbsp; ABOUT US &nbsp; CONTACT US</p>
            <p>ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default WalletApp