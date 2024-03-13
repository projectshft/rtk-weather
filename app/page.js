import styles from './page.module.css'
import CityList from './components/CityList'
import CitySearch from './components/CitySearch'

export default function Home() {
  return (
    <>
      <CitySearch />
      <CityList />
    </>
  )
}
