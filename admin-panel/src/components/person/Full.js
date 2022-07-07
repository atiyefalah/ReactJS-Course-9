import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'
import { useDispatch, useSelector } from 'react-redux'

export default function Full () {
  const { id } = useParams()
  const dispatch = useDispatch()

  const person = useSelector(state => state.person)

  function setItems (data) {
    dispatch({ type: 'PERSON', payload: data })
  }

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setItems(data))
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      {person.name}
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      {person.email}
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}
