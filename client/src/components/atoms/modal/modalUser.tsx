'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react'
import { FunctionComponent } from 'react'
import Button from '@/components/atoms/button/button'

interface ModalUserProps {
  isOpenTeam: boolean
  onCloseTeam: () => void
}

const ModalUser: FunctionComponent<ModalUserProps> = ({
  isOpenTeam,
  onCloseTeam,
}) => (
  <Modal size="lg" isOpen={isOpenTeam} onClose={onCloseTeam}>
    <ModalContent>
      {(onCloseTeam) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Nom de votre Equipe
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="text" label="nom de l'equipe" placeholder="Medico" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              label="Enregistrer"
              primary
              size="large"
              className="w-full"
            />
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
)

export default ModalUser
