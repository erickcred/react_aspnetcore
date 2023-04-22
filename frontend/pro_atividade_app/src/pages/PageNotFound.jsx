import { useNavigate } from 'react-router-dom'
import * as B from 'react-bootstrap'

import TitlePage from '../components/TitlePage'
import { useCallback } from 'react'

const PageNotFound = () => {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <div className="container text-center">
      <TitlePage title="">
        <B.Button variant="outline-secondary" onClick={goBack}>
          <i className="fa-solid fa-arrow-left me-2"></i>
          Home
        </B.Button>
      </TitlePage>

      <h1 className="mt-5">
        Ops!
        <br />
        Pagina não encontrada
        <br />
        404 Not Found
      </h1>
    </div>
  )
}

export default PageNotFound
