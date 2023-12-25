import Link from 'next/link'
import { Plus, Trash2, FileEdit } from 'lucide-react'
import Button from '@/components/atoms/button/button'

const Page = () => {
  console.log('Hello World')
  return (
    <section className="c-team">
      <div className="c-team__container">
        <div className="c-team__container__left">
          <div className="nav">
            <h3>Team</h3>

            <div className="group-button">
              <Button
                label="creer votre equipe"
                icon={<Plus />}
                primary
                size="small"
              />
              <Button
                label="ajouter un membre"
                icon={<Plus />}
                primary
                size="small"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="col-span-12">
              <div className="overflow-auto lg:overflow-visible ">
                <table className="table text-black border-separate space-y-6 text-sm w-full">
                  <thead className="bg-white text-black">
                    <tr>
                      <th className="p-3">Nom | Prénom</th>
                      <th className="p-3">Equipe</th>
                      <th className="p-3">email</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3">
                        <div className="flex align-items-center">
                          <div className="ml-3">
                            <div>Francis KOUAHO</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">GOOD</td>
                      <td className="p-3 font-bold">
                        kouahofrancis@rgmail.com
                      </td>
                      <td className="p-3">
                        <span className="bg-[#493fff] text-white rounded-full p-1.5">
                          en cours de validation
                        </span>
                      </td>
                      <td className="flex items-center w-full">
                        <Link
                          href="/"
                          className="text-black hover:text-[493fff] mx-2"
                        >
                          <FileEdit />
                        </Link>
                        <Link
                          href="/"
                          className="text-black hover:text-[493fff] ml-2"
                        >
                          <Trash2 />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="c-team__container__right">
          <div className="card">
            <h5>Votre équipe</h5>

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
    </section>
  )
}

export default Page
