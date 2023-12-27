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

interface ModalAddUserProps {
  isOpenAdd: boolean
  onCloseAdd: () => void
}

const modalAddUser: FunctionComponent<ModalAddUserProps> = ({
  isOpenAdd,
  onCloseAdd,
}) => (
  <Modal size="lg" isOpen={isOpenAdd} onClose={onCloseAdd}>
    <ModalContent>
      {(onCloseAdd) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Ajouter un membre dans votre equipe
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                type="email"
                label="Email"
                placeholder="exemple@exemple.com"
              />
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

export default modalAddUser
