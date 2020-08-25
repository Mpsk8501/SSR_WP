import classes from './Header.module.scss'
import Link from '../ActiveLink'

const Header = () => {

  return (
    <div className={classes.header}>
      <div className={classes.logo2}><img src={'/images/logotype.jpg'}  alt={'logotypeUER'}/></div>
      <div className="container">
        <div className={classes.preNav}>
          <Link href="/"><a>Внимание, если требуется ремонт ЭД для предприятий обеспечивающих <br/>
            жизнедеятельность населения, просьба звонить по номеру: +79082495295</a></Link>
        </div>
        <nav className={classes.navMenu}>
          <div className={classes.logo}><Link href={"/"}><a to = "/"> <img src={'/images/logo3.jpg'} alt={'logoUER'}/> </a></Link></div>
          <ul>
            <li><Link activeClassName={classes.active}  href = "/"><a >Техпроцесс</a></Link></li>
            <li><Link activeClassName={classes.active} href = "/sale"><a >В продаже</a></Link></li>
            <li><Link activeClassName={classes.active} href = "/JobOpenings"><a >Вакансии</a></Link></li>
            <li><Link activeClassName={classes.active} href = "/contacts" ><a>Контакты</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
