import Link from 'next/link'
import styles from '../../styles/Navigation.module.css'
import Image from 'next/image'

const links = [
  {
    label: 'Movies',
    route: '/'
  },
  {
    label: 'blog',
    route: '/blog'
  }
]

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_content}>
        <ul className={styles.navigation}>
          <Image
            src={
              'https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159582_960_720.png'
            }
            alt=''
            width={60}
            height={60}
          />
          <div className={styles.nav_links}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  )
}
