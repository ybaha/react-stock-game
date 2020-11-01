import React from 'react'
import { db } from '../firebase'

export default function Exchange() {


  const buyStocks = (userName) => {
    let balanceRef = db.ref('users/' + userName + '/starCount');
    balanceRef.on('value', (snapshot) => {
      snapshot.val()
    });
  }



  return (
    <div>

    </div>
  )
}
