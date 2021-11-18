import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom'

export default function Post() {
  const params = useParams()
  const {search} = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  console.log(queryParams.get('meuQueryParams'))

  return <h1>Post blz</h1>
}