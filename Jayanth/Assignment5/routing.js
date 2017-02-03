import './App.css';
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

const Home = () => <div>
                       <div className="navbar navbar-default" >
                       <h1>Travelx</h1><Links/>
                       </div>
                       <div class="container">
                       A vacation is something you want to make sure you’re paying
                        for exactly what you get, and that means booking through a website you trust.
                         There are many standout companies, especially Travelx with perks like secret deals,
                          a smooth booking process, and discounts on places like vacation rentals and hostels.
                          <img src="https://s-media-cache-ak0.pinimg.com/originals/af/a7/24/afa724205186256075938ab1fc0eefde.jpg" />

                       </div>
                   </div>

const AboutUs = () => <div>
                      <div className="navbar navbar-default">
                      <h1>San Francisco</h1><Links/>
                      </div>
                      <div>
                      Perched atop hills and filled-in marshland at the entrance to one of the Pacific’s largest natural harbors,
                      San Francisco has had an outsized influence on the history of California and the United States.
                      Originally a Spanish (later Mexican) mission and pueblo, it was conquered by the United States in 1846
                      and by an invading army of prospectors following the 1848 discovery of gold in its hinterland. The Gold Rush
                      made San Francisco a cosmopolitan metropolis with a frontier edge. The great 1906 earthquake and fire destroyed
                       much of the city but barely slowed its momentum; San Francisco barreled through the 20th century as a center
                        of wealth, military power, progressive culture and high technology.
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/SanFrancisco_from_TwinPeaks_dusk_MC.jpg/1680px-SanFrancisco_from_TwinPeaks_dusk_MC.jpg" />
                      </div>
                      </div>
const Contactus = () =><div>
                      <div className="navbar navbar-default"><h1>Tokyo</h1><Links/>
                      </div>
                      <div>
                      Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis.
                      It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities,
                       towns and villages west of the city center.
                      The Izu and Ogasawara Islands are also part of Tokyo.
                      Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th century,
                      Edo became Japan's political center in 1603 when Tokugawa Ieyasu established his feudal government there.
                       A few decades later, Edo had grown into one of the world's most populous cities.
                       With the Meiji Restoration of 1868, the emperor and capital moved from Kyoto to Edo, which was renamed Tokyo ("Eastern Capital").
                        Large parts of Tokyo were destroyed in the Great Kanto Earthquake of 1923 and in the air raids of 1945.
                      Today, Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors.
                      The city's history can be appreciated in districts such as Asakusa,
                      and in many excellent museums, historic temples and gardens.
                       Contrary to common perception, Tokyo also offers a number of attractive green spaces in the city center
                       and within relatively short train rides at its outskirts.
                       <img src="http://socialventurepartners.s3-us-west-2.amazonaws.com/www.socialventurepartners.org/sites/1/2014/12/Tokyo.Rainbow.Bridge.resized.jpg" />

                      </div>
                      </div>

const London = () => <div>
                      <div className="navbar navbar-default">
                      <h1>London</h1><Links/>
                      </div>
                      <div>
                        England is full of pageantry and tradition, and nowhere else is that on display so vividly than in London.
                         Yet the capital of the United Kingdom is hardly living in the past, continually courting innovation and growth in its art,
                         architecture, restaurants, and hotels. From the burgeoning East End to the well-established City Centre,
                         London travel guide proves the world-class destination continues to evolve.
                         How did a 2,000-year-old settlement with such a deeply entrenched history—and such familiar-to-the-point-of-predictable
                         iconography—come to stand at the leading edge of design, fashion, fine art, and pop culture? By embracing international styles
                          and influences (and people) as much as passionately as its own.
                          <img src="https://media.timeout.com/images/103042848/image.jpg" />

                      </div>
                      </div>
const Links = () =>
	<nav>
		<Link to="/"><span bsStyle="info">Home </span></Link>
		<Link to="/AboutUs">San Francisco</Link>
		<Link to="/Contactus">Tokyo</Link>
    <Link to="/London">London</Link>
	</nav>

const App = () => {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={Home}></Route>
			<Route path="/AboutUs" component={AboutUs}></Route>
			<Route path="/Contactus" component={Contactus}></Route>
      <Route path="/London" component={London}></Route>
		</Router>
	)
}
export default App
