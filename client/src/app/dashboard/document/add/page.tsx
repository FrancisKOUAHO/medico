'use client'

import Upload from '@/components/atoms/upload/upload'
import { Checkbox, Link, User, Chip, cn } from '@nextui-org/react'

import { useState } from 'react'
import Button from '@/components/atoms/button/button'

const Page = () => {
  const [file, setFile] = useState(null)
  const [isSelected, setIsSelected] = useState(false)

  const handleFileChange = (e: any) => {
    console.log(e.target.files)
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  const user = {
    name: 'Junior Garcia',
    email: 'kouahofrancis@gmail.com',
    url: 'https://twitter.com/jrgarciadev',
    role: 'Software Developer',
    status: 'Active',
  }

  return (
    <section className="c-add">
      <div className="c-add__container">
        <div className="c-add__container__left">
          <div className="nav">
            <h3>Ajouter un document</h3>
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
                <Checkbox
                  aria-label={user.name}
                  classNames={{
                    base: cn(
                      'inline-flex w-full max-w-md bg-content1',
                      'hover:bg-content2 items-center justify-start card__checkbox',
                      'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                      'data-[selected=true]:border-primary',
                    ),
                    label: 'w-full',
                  }}
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                >
                  <div className="w-full flex justify-between gap-2">
                    <User
                      description={
                        <Link isExternal href={user.url} size="sm">
                          {user.email}
                        </Link>
                      }
                      name={user.name}
                    />
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-tiny text-default-500">
                        {user.role}
                      </span>
                      <Chip color="success" size="sm" variant="flat">
                        {user.status}
                      </Chip>
                    </div>
                  </div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  aria-label={user.name}
                  classNames={{
                    base: cn(
                      'inline-flex w-full max-w-md bg-content1',
                      'hover:bg-content2 items-center justify-start card__checkbox',
                      'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                      'data-[selected=true]:border-primary',
                    ),
                    label: 'w-full',
                  }}
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                >
                  <div className="w-full flex justify-between gap-2">
                    <User
                      description={
                        <Link isExternal href={user.url} size="sm">
                          {user.email}
                        </Link>
                      }
                      name={user.name}
                    />
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-tiny text-default-500">
                        {user.role}
                      </span>
                      <Chip color="success" size="sm" variant="flat">
                        {user.status}
                      </Chip>
                    </div>
                  </div>
                </Checkbox>
              </li>
            </ul>
            <Button
              size="large"
              color="primary"
              label="Envoyer"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="c-add__preview">
        {file && (
          <iframe
            src="https://arxiv.org/pdf/quant-ph/0410100.pdf"
            width="100%"
            height="480"
            title="PDF Preview"
          />
        )}
      </div>
    </section>
  )
}

export default Page
