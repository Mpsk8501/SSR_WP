import classes from './Footer.module.scss'

const Footer = () => {
  return (
      <div className={classes.footer}>
        <div className={classes.upFooter}>
          <div className="container">
            <div className={classes.upFooterWrap}>
              <div className={classes.adressEmail}>
                <div className={classes.email}>
                  614513, г. Пермь, шоссе Космонавтов, 312а<br/>
                  E-mail:
                  <a href="mailto:youremail@somesite.com" target="_blank" rel="noopener noreferrer">uralelektroremont.perm@mail.ru</a> <br/>
                  <a href="mailto:youremail@somesite.com" target="_blank" rel="noopener noreferrer">uralelektroremontoffice@mail.ru</a>
                </div>
              </div>

              <div className={classes.phone}>
                <h3>
                  телефон горячей линии
                </h3>
                <a href="tel:+380985554433">✆ +7 ·342· 243 11 02,</a><br/>
                <a href="tel:+380985554433">203 24 42</a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.subFooter}>
          <div className="container">
            <div className={classes.upFooterWrap}>
              © 2007 – 2020  OOO «Уралэлектроремонт»  Все права защищены.
              <a href="mailto:youremail@somesite.com" target="_blank" rel="noopener noreferrer"> © Designed by NickeL'2008 All rights reserved </a>
              </div>
            </div>
        </div>
      </div>
  )

}

export default Footer
