import './Homepage.css'
import BeachesList from '../BeachesList'
import BeachSearch from '../BeachSearch'

export const Homepage = () => {
  return (
    <>
      <h1>This is the homepage!</h1>
      <BeachSearch />
      <BeachesList />

    </>
  )
}
