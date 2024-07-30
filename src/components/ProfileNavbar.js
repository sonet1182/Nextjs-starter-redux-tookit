import Link from 'next/link'
import React from 'react'
import './style.css'

function ProfileNavbar() {
  return (
    <div>
        <header>
          <div className="navbar">
            <div className="logo text-danger">Logo</div>
            <div className="nav-list">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/profile/student">Student</Link>
                </li>
                <li>
                  <Link href="/profile/teacher">Teacher</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
    </div>
  )
}

export default ProfileNavbar