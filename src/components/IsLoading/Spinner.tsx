import loaderCss from './spinner.module.css'

const Spinner = () => {
  return <div role='status' aria-busy='true' className={loaderCss.loader}></div>
}

export default Spinner
