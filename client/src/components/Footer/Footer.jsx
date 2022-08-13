import './Footer.css'

import Github from '../../assets/icons/GitHub-Mark-Light-32px.png'
import Devpost from '../../assets/icons/devpost.png'

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Made with ❤️</h5>
            <p className="grey-text text-lighten-4">Created for the 2022 NextStep Hacks hackathon.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/MysticalX99/nextstep-hacks" target='_blank'>Source Code <img src={Github} style={{width: 24, height: 24, marginLeft: 10}}></img></a></li>
              <li><a className="grey-text text-lighten-3" href="https://devpost.com/software/healic" target='_blank'>Devpost <img src={Devpost} style={{width: 32, height: 32, marginLeft: 10}}></img></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2022 Danyal, Ryan, Tim
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  )
}