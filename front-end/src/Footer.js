import './Footer.css'

/**
 * A React component that is used for the footer displayed at the bottom of every page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Footer = props => {
  return (
    <footer className="Footer-footer">
      <p className='p1-footer'>
      <div>
        Contact Us
      </div>
      <div>
        FAQ
      </div>
      <div>
        About us
      </div>
      </p>
      <p>&copy;2022. Team ArtistsGo. All rights reserved. </p>
    </footer>
  )
}

// make this component available to be imported into any other file
export default Footer
