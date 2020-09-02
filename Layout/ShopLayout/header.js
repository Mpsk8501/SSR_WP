import classes from './../../components/header/Header.module.scss'
import Link from '../../components/ActiveLink'

const Header2 = () => {

  return (
      <div className={classes.header}>
        <div className={classes.logo2}><img src={'/images/logotype.jpg'}  alt={'logotypeUER'}/></div>
        <div className="container">
          <div className={classes.preNav}>
            <Link href="/"><a>Внимание, если требуется ремонт ЭД для предприятий обеспечивающих <br/>
              жизнедеятельность населения, просьба звонить по номеру: +79082495295</a></Link>
          </div>
          <nav className={classes.navMenu}>
            <div className={classes.logo}><Link href={"/wcShop"}><a> <img src={'/images/logo3.jpg'} alt={'logoUER'}/> </a></Link></div>
            <ul>
              <li><Link activeClassName={classes.active}  href = "/wcShop"><a>Магазин</a></Link></li>
              <li><Link activeClassName={classes.active} href = "/wcShop"><a >ссылка1</a></Link></li>
              <li><Link activeClassName={classes.active} href = "/wcShop"><a >ссылка2</a></Link></li>
              <li><Link activeClassName={classes.active} href = "/wcShop" ><a>ссылка3</a></Link></li>
              <li><Link activeClassName={classes.active} href = "/" ><a>На главную</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Header2