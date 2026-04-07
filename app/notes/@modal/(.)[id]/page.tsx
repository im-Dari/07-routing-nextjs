'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

export default function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const { id } = use(params);

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <NotePreview noteId={id} />
    </Modal>
  );
}