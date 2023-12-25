'use client'

import Upload from '@/components/atoms/upload/upload'
import { useState } from 'react'

const Page = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e: any) => {
    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  return (
    <section className="c-add">
      <div className="c-add__container">
        <div className="c-add__container__left">
          <div className="nav">
            <h3>Ajouter un documen</h3>
          </div>

          <div className="w-full">
            <Upload handleFileChange={handleFileChange} />
          </div>
        </div>
        <div className="c-add__container__right">
          <div className="card">
            <h5>Inviter des membres de votre equipe</h5>

            <ul>
              <li>
                <div className="flex align-items-center">
                  <p>Francis KOUAHO</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="c-add__preview">zaeazeaze</div>
    </section>
  )
}

export default Page
